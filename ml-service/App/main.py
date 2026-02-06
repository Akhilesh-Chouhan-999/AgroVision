from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.utils import validate_request
from app.predictor import predict_disease

app = FastAPI(title='AgroVision ML Service')

@app.post('/predict')
async def predict(request: Request):
    try:
        data = await request.json()
    except Exception:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": "Invalid JSON body"}
        )

    is_valid, error = validate_request(data)
    if not is_valid:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": error}
        )

    result = predict_disease(
        image_path=data["image_path"],
        crop=data["crop"]
    )

    return {
        "success": True,
        "prediction": {
            "label": result["label"],
            "confidence": result["confidence"]
        },
        "severity": result["severity"]
    }
