import Prediction from "../models/prediction.model.js";
import Crop from "../models/crop.model.js";
import Disease from "../models/disease.model.js";
import AppError from "../errors/app.error.js";

import { callMLService } from "../integrations/ml.client.js";
import { getAdvisoryForDisease } from "./advisory.service.js";


export const runPredictionPipeline = async ({
  predictionId,
  imagePath,
  cropId,
}) => {

  const crop = await Crop.findById(cropId);
  if (!crop) {
    throw new AppError("Invalid crop", 400);
  }

  const finalResult = {
    disease: null,
    confidence: 0,
    severity: "LOW",
    advisory: null,
    message: null,
  };

  const mlResult = await callMLService({
    imagePath,
    crop: crop.name,
  });

  if (!mlResult || !mlResult.success) {
    finalResult.message =
      "ML service unavailable. Please try again later.";

    await Prediction.findByIdAndUpdate(predictionId, finalResult);
    return finalResult;
  }

  const { label, confidence } = mlResult.prediction;
  const severity = mlResult.severity;

  finalResult.confidence = confidence;
  finalResult.severity = severity;

  if (confidence < 0.6) {
    finalResult.message =
      "Image quality insufficient. Please upload a clearer image.";

    await Prediction.findByIdAndUpdate(predictionId, finalResult);
    return finalResult;
  }

  const disease = await Disease.findOne({
    name: label,
    crop: cropId,
  });

  if (!disease) {
    finalResult.disease = label;
    finalResult.message =
      "Disease detected but not yet available in advisory database.";

    await Prediction.findByIdAndUpdate(predictionId, finalResult);
    return finalResult;
  }

  finalResult.disease = disease._id;

  const advisory = await getAdvisoryForDisease({
    diseaseId: disease._id,
    severity,
  });

  finalResult.advisory = advisory;

  await Prediction.findByIdAndUpdate(predictionId, finalResult);

  return {
    disease: disease.name,
    confidence,
    severity,
    advisory,
  };
};

export const createPredictionService = async ({
  userId,
  cropId,
  imagePath,
}) => {
  return await Prediction.create({
    user: userId,
    crop: cropId,
    imagePath,
    status: "PENDING",
  });
};
