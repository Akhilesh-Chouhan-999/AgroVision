import os
import numpy as np
import tensorflow as tf

from app.image_utils import preprocess_image
from app.severity import estimate_severity

# -------------------------
# Load model safely
# -------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.abspath(
    os.path.join(BASE_DIR, "..", "models", "tomato_disease_model.h5")
)

LABELS_PATH = os.path.abspath(
    os.path.join(BASE_DIR, "..", "models", "tomato_labels.json")
)

model = tf.keras.models.load_model(MODEL_PATH)

# Load labels
import json
with open(LABELS_PATH, "r") as f:
    CLASS_NAMES = json.load(f)

# -------------------------
# Main inference function
# -------------------------
def run_inference(image_path: str) -> dict:
    """
    Runs CNN prediction + severity estimation
    """

    # 1️⃣ Preprocess image for CNN
    image = preprocess_image(image_path)
    image = np.expand_dims(image, axis=0)

    # 2️⃣ CNN prediction
    predictions = model.predict(image)
    class_index = int(np.argmax(predictions))
    confidence = float(np.max(predictions))

    disease_name = CLASS_NAMES[class_index]

    # 3️⃣ Severity estimation (OpenCV logic)
    severity = estimate_severity(image_path)

    # 4️⃣ Final response
    return {
        "disease": disease_name,
        "confidence": round(confidence, 3),
        "severity": severity
    }
