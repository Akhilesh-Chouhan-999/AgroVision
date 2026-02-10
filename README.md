🌾 KisanRakshak Pro

A production-grade AI-powered agriculture platform for crop disease detection, severity estimation, and farmer advisory using React, Node.js, Express, Python ML services, Redis, and MongoDB.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Features

👨‍🌾 Farmer-Centric Capabilities
🌱 Crop disease detection using leaf images
📸 Image upload with async processing
🧠 AI-based disease classification (CNN)
🚦 Disease severity estimation (Low / Medium / High)
📋 Actionable advisory:
        Home remedies
        Organic methods
        Chemical control (last resort)
🔄 Real-time prediction status updates
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚙️ Backend & System Features

Asynchronous prediction pipeline using BullMQ + Redis
Modular Node.js + Express backend
Secure file upload handling
Graceful fallback if ML service is unavailable
Centralized error handling
Resume-grade, production-style architecture
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


🤖 Machine Learning
CNN-based image classification (EfficientNet / ResNet)
OpenCV-based severity estimation
Python ML microservice using FastAPI
Decoupled ML inference service
Model training pipeline included
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


🖥️ Frontend
React + TypeScript (Vite)
Feature-based modular architecture
Live polling for prediction status
Severity visualization & advisory panels
Mobile-first, farmer-friendly UI
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


🧩 Prediction Flow
Farmer uploads crop leaf image
Backend creates a prediction entry
Job is queued using BullMQ
ML service performs:
                     1. Disease classification
                     2. Severity estimation
Backend enriches result with advisory rules
Frontend polls and displays final result
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


📋 Prerequisites
Node.js (v18 or higher recommended)
MongoDB (local or MongoDB Atlas)
Redis for BullMQ)
Python 3.10+
pip / virtualenv
npm or yarn
