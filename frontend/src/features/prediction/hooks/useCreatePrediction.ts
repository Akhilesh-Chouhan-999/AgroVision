import { useState } from "react";
import { createPrediction } from "../../../services/prediction.service";

export const useCreatePrediction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitPrediction = async (
    cropId: string,
    image: File
  ) => {
    try {
      setLoading(true);
      setError(null);

      const result = await createPrediction(cropId, image);
      return result.data._id;
    } catch (err: any) {
      setError(err.message || "Upload failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitPrediction,
    loading,
    error,
  };
};
