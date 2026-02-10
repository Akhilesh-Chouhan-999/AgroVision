import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import UploadPage from "../pages/UploadPage";
import PredictionResultPage from "../pages/PredictionResultPage";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: <UploadPage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/predictions/:id",
        element: <PredictionResultPage />,
      },
    ],
  },
]);
