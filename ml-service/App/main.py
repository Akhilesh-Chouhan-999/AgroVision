from fastapi import FastAPI, UploadFile, File
import shutil
import os
import uuid

from app.inference import run_inference

app = FastAPI()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/health")
def health():
    return {"status": "ML service running"}

@app.post("/predict")
def predict(file: UploadFile = File(...)):
    try:
        filename = f"{uuid.uuid4()}.jpg"
        file_path = os.path.join(UPLOAD_DIR, filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        result = run_inference(file_path)

        return {
            "success": True,
            "result": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
