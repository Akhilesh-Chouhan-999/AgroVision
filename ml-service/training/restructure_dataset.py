import os
import shutil
import stat
import time

DATASET_DIR = "dataset"

def force_remove(func, path, _):
    os.chmod(path, stat.S_IWRITE)
    func(path)

for folder in os.listdir(DATASET_DIR):
    folder_path = os.path.join(DATASET_DIR, folder)

    if not os.path.isdir(folder_path):
        continue

    if "_" not in folder:
        continue

    parts = folder.split("_", 1)
    if len(parts) != 2:
        continue

    crop = parts[0].upper()
    disease = parts[1].upper()

    crop_dir = os.path.join(DATASET_DIR, crop)
    disease_dir = os.path.join(crop_dir, disease)

    os.makedirs(disease_dir, exist_ok=True)

    for img in os.listdir(folder_path):
        src = os.path.join(folder_path, img)
        dst = os.path.join(disease_dir, img)

        if os.path.isfile(src):
            shutil.move(src, dst)

    time.sleep(0.1)  # give Windows time to release file locks

    shutil.rmtree(folder_path, onerror=force_remove)
    print(f"✅ Cleaned: {folder}")

print("\n🎯 Dataset restructuring completed safely")
