import { useParams } from "react-router-dom";
import { usePredictionPolling } from "../features/prediction/hooks/usePredictionPolling";
import PredictionStatus from "../features/prediction/components/PredictionStatus";
import DiseaseResultCard from "../features/prediction/components/DiseaseResultCard";
import AdvisoryPanel from "../features/prediction/components/AdvisoryPanel";
import Loader from "../ui/Loader";
import ErrorState from "../ui/ErrorState";

const PredictionResultPage = () => {
  const { id } = useParams();
  const { data, status, error } =
    usePredictionPolling(id!);

  if (error) return <ErrorState message={error} />;
  if (!data) return <Loader text="Processing image..." />;

  return (
    <div className="max-w-xl mx-auto">
      <PredictionStatus status={status} />

      {status === "PROCESSING" && (
        <Loader text="Analyzing crop disease..." />
      )}

      {status === "FAILED" && (
        <ErrorState message="Prediction failed. Try again." />
      )}

      {status === "COMPLETED" && (
        <>
          <DiseaseResultCard
            disease={data.disease?.name || "Unknown"}
            confidence={data.confidence}
            severity={data.severity}
          />

          <AdvisoryPanel advisory={data.advisory} />
        </>
      )}
    </div>
  );
};

export default PredictionResultPage;
