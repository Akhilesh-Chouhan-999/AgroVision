import tensorflow as tf

def configure_gpu():
    gpus = tf.config.list_physical_devices("GPU")

    if not gpus:
        print("⚠️ No GPU found. Training will use CPU.")
        return

    try:
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)

        print(f"✅ GPU enabled: {len(gpus)} GPU(s) available")

    except RuntimeError as e:
        print("❌ GPU configuration failed:", e)

