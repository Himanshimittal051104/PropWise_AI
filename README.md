# RentWise AI 🏠

RentWise AI is a full-stack machine learning project that predicts monthly house rent based on basic property details like city, area, BHK, size, and bathrooms.

I built this project to practice combining frontend, backend, and machine learning into one real-world application.

---

## ✨ What this project does

You enter:

- City
- Area / Locality  
- BHK  
- Size (sqft)  
- Bathrooms  

and it instantly shows an estimated monthly rent using a machine learning model running on the backend.

---

## 🚀 Features

- ML-based rent prediction  
- Clean Next.js + Tailwind frontend  
- Enter key moves to next input  
- Only positive numbers allowed  
- Result disappears while typing new values  
- Button disabled if fields are empty  
- Loading state while predicting  
- REST API connection to backend  

---

## 🛠 Tech Used

Frontend  
- React / Next.js  
- Tailwind CSS  

Backend  
- Python  
- Machine Learning  
- REST API  

Tools  
- Git & GitHub  

---

## ▶ How to run (Frontend)

Clone the repo and move inside folder:
```bash
git clone https://github.com/Himanshimittal051104/RentWise-AI.git
cd RentWise-AI
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
python app.py
```

Backend will run at:
```text
http://127.0.0.1:8000
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

- Deploy frontend & backend
- Add charts for predictions
- Better UI animations
- Add error messages

---

## 👩‍💻 Author

Himanshi Mittal

---

