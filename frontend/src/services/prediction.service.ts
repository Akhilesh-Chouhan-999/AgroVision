import api from "./api";

export const createPrediction = async (
  cropId: string,
  image: File
) => {
  const formData = new FormData();
  formData.append("cropId", cropId);
  formData.append("image", image);

  const response = await api.post("/predictions", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};


export const getPredictionById = async (id: string) => {
  const response = await api.get(`/predictions/${id}`);
  return response.data;
};
