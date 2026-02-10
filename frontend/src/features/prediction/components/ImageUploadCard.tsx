import { useState } from "react";

interface Props {
  onSubmit: (cropId: string, image: File) => void;
  loading: boolean;
}

const ImageUploadCard = ({ onSubmit, loading }: Props) => {
  const [cropId, setCropId] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!cropId || !image) {
      setError("Please select crop and image");
      return;
    }
    setError("");
    onSubmit(cropId, image);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">
        Upload Crop Image
      </h2>

      <select
        className="border p-2 w-full mb-3"
        value={cropId}
        onChange={(e) => setCropId(e.target.value)}
      >
        <option value="">Select Crop</option>
        <option value="SOYBEAN_CROP_ID">Soybean</option>
        <option value="WHEAT_CROP_ID">Wheat</option>
        <option value="PADDY_CROP_ID">Paddy</option>
        <option value="COTTON_CROP_ID">Cotton</option>
      </select>

      <input
        type="file"
        accept="image/*"
        className="mb-3"
        onChange={(e) =>
          setImage(e.target.files ? e.target.files[0] : null)
        }
      />

      {error && (
        <p className="text-red-600 text-sm mb-2">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-700 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Uploading..." : "Submit"}
      </button>
    </div>
  );
};

export default ImageUploadCard;
