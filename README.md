# 🌾 KisanRakshak Pro

A **production-grade AI-powered agriculture platform** for crop disease detection, severity estimation, and farmer advisory using **React, Node.js, Express, Python ML services, Redis, and MongoDB**.

---

## 🚀 Features

### 👨‍🌾 Farmer-Centric Capabilities

- 🌱 Crop disease detection using leaf images  
- 📸 Image upload with asynchronous processing  
- 🧠 AI-based disease classification (CNN)  
- 🚦 Disease severity estimation (**Low / Medium / High**)  

#### 📋 Actionable Advisory
- 🏡 Home remedies  
- 🌿 Organic methods  
- 🧪 Chemical control (last resort)  

- 🔄 Real-time prediction status updates  

---

## ⚙️ Backend & System Features

- ⏳ Asynchronous prediction pipeline using **BullMQ + Redis**
- 🧱 Modular **Node.js + Express** backend
- 🔐 Secure file upload handling
- 🛡️ Graceful fallback if ML service is unavailable
- 🧩 Centralized error handling
- 📄 Resume-grade, production-style architecture

---

## 🤖 Machine Learning

- 🧠 CNN-based image classification (**EfficientNet / ResNet**)
- 🖼️ OpenCV-based severity estimation
- ⚡ Python ML microservice using **FastAPI**
- 🔌 Decoupled ML inference service
- 🔁 Model training pipeline included

---

## 🖥️ Frontend

- ⚛️ **React + TypeScript (Vite)**
- 🧩 Feature-based modular architecture
- 🔄 Live polling for prediction status
- 📊 Severity visualization & advisory panels
- 📱 Mobile-first, farmer-friendly UI

---

## 🧩 Prediction Flow

1. Farmer uploads a crop leaf image  
2. Backend creates a prediction entry  
3. Job is queued using **BullMQ**  
4. ML service performs:
   - Disease classification  
   - Severity estimation  
5. Backend enriches result with advisory rules  
6. Frontend polls and displays the final result  

---

## 📋 Prerequisites

- Node.js (**v18 or higher recommended**)  
- MongoDB (local or MongoDB Atlas)  
- Redis (for BullMQ)  
- Python **3.10+**  
- `pip` / `virtualenv`  
- `npm` or `yarn`  

---
