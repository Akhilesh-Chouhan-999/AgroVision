import cv2
import numpy as np

IMG_SIZE = 224

def preprocess_image(image_path: str):
    img = cv2.imread(image_path)

    if img is None:
        raise ValueError("Invalid image file")

    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img.astype("float32") / 255.0
    img = np.expand_dims(img, axis=0)

    return img
