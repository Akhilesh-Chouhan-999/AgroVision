import cv2
import numpy as np

def estimate_severity(image_path: str) -> str:
    """
    Estimate disease severity based on infected leaf area.
    Returns: LOW | MEDIUM | HIGH
    """

    # 1️⃣ Load image
    image = cv2.imread(image_path)
    if image is None:
        raise ValueError("Invalid image path")

    # 2️⃣ Resize for consistency
    image = cv2.resize(image, (256, 256))

    # 3️⃣ Convert to HSV (best for color-based detection)
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # 4️⃣ Define unhealthy color ranges (yellow, brown, dark spots)
    yellow_lower = np.array([15, 40, 40])
    yellow_upper = np.array([35, 255, 255])

    brown_lower = np.array([5, 50, 20])
    brown_upper = np.array([20, 255, 200])

    dark_lower = np.array([0, 0, 0])
    dark_upper = np.array([180, 255, 50])

    # 5️⃣ Create masks
    yellow_mask = cv2.inRange(hsv, yellow_lower, yellow_upper)
    brown_mask = cv2.inRange(hsv, brown_lower, brown_upper)
    dark_mask = cv2.inRange(hsv, dark_lower, dark_upper)

    infected_mask = yellow_mask | brown_mask | dark_mask

    # 6️⃣ Calculate infected area ratio
    infected_pixels = cv2.countNonZero(infected_mask)
    total_pixels = infected_mask.shape[0] * infected_mask.shape[1]

    infected_ratio = infected_pixels / total_pixels

    # 7️⃣ Severity rules (EXPLAINABLE)
    if infected_ratio < 0.10:
        return "LOW"
    elif infected_ratio < 0.30:
        return "MEDIUM"
    else:
        return "HIGH"
