import { useEffect, useState } from "react";
import { getPredictionById } from "../../../services/prediction.service";

export const usePredictionPolling = (predictionId: string) => {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState("PENDING");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchPrediction = async () => {
      try {
        const result = await getPredictionById(predictionId);
        const prediction = result.data;

        setData(prediction);
        setStatus(prediction.status);

        if (
          prediction.status === "COMPLETED" ||
          prediction.status === "FAILED"
        ) {
          clearInterval(interval);
        }
      } catch (err: any) {
        setError(err.message);
        clearInterval(interval);
      }
    };

    fetchPrediction();
    interval = setInterval(fetchPrediction, 3000);

    return () => clearInterval(interval);
  }, [predictionId]);

  return { data, status, error };
};
