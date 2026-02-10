import { useNavigate } from "react-router-dom";
import ImageUploadCard from "../features/prediction/components/ImageUploadCard";
import { useCreatePrediction } from "../features/prediction/hooks/useCreatePrediction";
import ErrorState from "../ui/ErrorState";

const UploadPage = () => {
  const navigate = useNavigate();
  const { submitPrediction, loading, error } =
    useCreatePrediction();

  const handleUpload = async (
    cropId: string,
    image: File
  ) => {
    const predictionId = await submitPrediction(cropId, image);
    navigate(`/predictions/${predictionId}`);
  };

  return (
    <div className="max-w-md mx-auto">
      {error && <ErrorState message={error} />}

      <ImageUploadCard
        onSubmit={handleUpload}
        loading={loading}
      />
    </div>
  );
};

export default UploadPage;
