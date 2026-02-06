import Prediction from "../models/prediction.model.js";

export const getPredictionStatus = async (req, res, next) => {

  try {

    const { id } = req.params;

    const prediction = await Prediction
                                        .findById(id)
                                        .populate("crop", "name")
                                        .populate("disease", "name");

    if (!prediction) {

      return res
                .status(404)
                .json({
                 success: false,
                 message: "Prediction not found",
                });
    }

    
    const response = {

      id: prediction._id,
      status: prediction.status,
      crop: prediction.crop?.name || null,
      confidence: prediction.confidence,
      severity: prediction.severity,
      disease: prediction.disease?.name || null,
      errorMessage: prediction.errorMessage,
      createdAt: prediction.createdAt,
      updatedAt: prediction.updatedAt,

    };

    res.status(200).json({
      success: true,
      data: response,
    });

  } 
  
  catch (error) {
    next(error);
  }
};
