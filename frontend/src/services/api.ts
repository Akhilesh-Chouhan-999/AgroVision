import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 20000,
});

// Global response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      "Something went wrong. Please try again.";

    return Promise.reject(new Error(message));
  }
);

export default api;
