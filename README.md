# PropWise AI 🏠

PropWise AI is a full-stack machine learning web application that predicts house prices in Bangalore using XGBoost.

**This project combines Machine Learning, FastAPI backend, and a Next.js frontend into a real-world end-to-end system.**

---

## ✨ What this project does

You enter:

- Location
- BHK
- Total Sqft
- Bathrooms

and it instantly predicts the **estimated house price (in Lakhs)** using an ML model served via FastAPI.

---

## 🚀 Features

- XGBoost-based house price prediction
- Feature engineering + outlier removal
- Location encoding
- FastAPI backend REST API
- Pydantic-based backend validation
- Next.js + Tailwind frontend
- End-to-end ML pipeline (Notebook → Model → API → UI)
- Real-time prediction
- Controlled React inputs
- Loading state during inference

---

## 📊 Model Performance

- XGBoost Regressor  
- RMSE ≈ **45 Lakhs**(after feature engineering, log-transform & outlier removal)

---

## 🧠 ML Pipeline

- Raw Bangalore housing dataset
- Data cleaning + null handling
- Feature engineering
- Outlier removal
- Log transformation on target
- One-hot encoding
- XGBoost training
- Model serialization (Joblib)
- FastAPI inference
- React frontend consumption

---

## 🛠 Tech Stack

### Machine Learning
- Python
- Pandas / NumPy
- Scikit-learn
- XGBoost

### Backend
- FastAPI
- Joblib

### Frontend
- Next.js (React)
- Tailwind CSS

### Tools
- Git & GitHub

---


## ▶ How to run (Frontend)

Clone the repo and move inside folder:
```bash
git clone https://github.com/Himanshimittal051104/PropWise_AI.git
cd PropWise_AI
```

Install packages:
```bash
npm install
```

Start frontend:
```bash
npm run dev
```

Open in browser:
```text
http://localhost:3000
```

---

## ▶ How to run (Backend)

Go to backend folder:
```bash
cd backend
```

Create virtual environment (optional but recommended):
```bash
python -m venv venv
```


Activate it:
**Windows**
```bash
venv\Scripts\activate
```
**Mac/Linux**
```bash
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Start backend server:
```bash
uvicorn app.main:app --reload
```

Backend will run at:
```text
http://127.0.0.1:8000
```

---

## 🌐 Backend Deployment

FastAPI backend is deployed on Render with GitHub auto-deploy.

- Live REST API
- Input validation using Pydantic
- Unknown locations mapped to `other`
- Log-transformed target with inverse inference
- Minimum price safeguard

---

## 📥 Sample API Request
```json
{
  "location": "Whitefield",
  "bhk": 2,
  "total_sqft": 1200,
  "bathroom": 2
}
```

---

## 📤 Sample API Response
```json
{
  "predicted_price_lakhs": 78.4
}
```

---

## 📌 Why I built this

This project helped me understand:

- How frontend communicates with backend
- How ML models are used in real applications
- Form validation and UX handling
- API integration
- Real-world React logic

---

## 🔮 Future Improvements

- Deploy frontend 
- Location dropdown
- Add charts for predictions
- Better UI animations
- Add error messages
- Multi-city support

---

## 👩‍💻 Author

Himanshi Mittal

---








