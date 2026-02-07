import tensorflow as tf
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras import layers, models
import json
import os

# --------------------
# CONFIG
# --------------------
IMG_SIZE = 224
BATCH_SIZE = 32
EPOCHS = 3
DATASET_DIR = "training/dataset/TOMATO"
MODEL_DIR = "models"

os.makedirs(MODEL_DIR, exist_ok=True)

# --------------------
# DATA GENERATORS
# --------------------
datagen = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.2,
    rotation_range=20,
    zoom_range=0.2,
    horizontal_flip=True
)

train_gen = datagen.flow_from_directory(
    DATASET_DIR,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    subset="training",
    class_mode="categorical"
)

val_gen = datagen.flow_from_directory(
    DATASET_DIR,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    subset="validation",
    class_mode="categorical"
)

# --------------------
# MODEL
# --------------------
base_model = EfficientNetB0(
    weights="imagenet",
    include_top=False,
    input_shape=(IMG_SIZE, IMG_SIZE, 3)
)

base_model.trainable = False  # transfer learning

model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(train_gen.num_classes, activation="softmax")
])

model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

model.summary()

# --------------------
# TRAIN
# --------------------
model.fit(
    train_gen,
    validation_data=val_gen,
    epochs=EPOCHS
)

# --------------------
# SAVE MODEL + LABELS
# --------------------
model.save(f"{MODEL_DIR}/tomato_disease_model.h5")

with open(f"{MODEL_DIR}/tomato_labels.json", "w") as f:
    json.dump(train_gen.class_indices, f)

print("✅ Tomato CNN model trained and saved")
