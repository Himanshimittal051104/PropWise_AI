# PropWise AI — Frontend

This folder contains the **frontend UI for PropWise AI**, a web app that predicts house prices in Bengaluru based on user input. The UI is built using **Next.js** and **Tailwind CSS** and connects to a backend API that returns price estimates.

---

## 🚀 What This Frontend Does

Users can enter:

- **Location**
- **BHK (Bedrooms)**
- **Total Sqft**
- **Bathrooms**

and submit to receive a **predicted house price** (in Lakhs) from the backend.

---

## 🛠 Built With

- **Next.js** — React framework for UI
- **Tailwind CSS** — Utility-first styling
- **Fetch / Axios** — API calls to backend

---

## 📁 Folder Structure
frontend/
├── app/ # Next.js pages & routes
├── components/ # UI Components
├── public/ # Static assets (images/icons)
├── styles/ # Tailwind + global CSS
├── package.json # Frontend dependencies & scripts
└── README.md # This file

---

## ▶ How to run locally

### Clone the repo and move inside folder:
```bash
git clone https://github.com/Himanshimittal051104/PropWise_AI.git
cd PropWise_AI
```
### Start Frontend

Go to frontend folder:
```bash
cd PropWise_AI/frontend
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

## 🧩 Connect to Backend

Before submitting inputs, make sure your backend FastAPI server is running (typically at http://localhost:8000).

If your backend is on another URL, create a .env.local file:
```env
NEXT_PUBLIC_API_URL=http://your-backend-url
```
The frontend will use this to send prediction requests.

---

## 📥 Sample API Request

Frontend sends a POST request like:

```json
{
  "location": "Whitefield",
  "bhk": 2,
  "bathroom": 2,
  "total_sqft": 1200
}
```

---

## 📤 Sample API Response

Backend response format should be:

```json
{
  "predicted_price_lakhs": 78.4
}
```

---

## 📌 Key Features

- Real-time prediction API calls
- Form validation for user inputs
- Loading indicator during API request
- Responsive layout

---

## 📸 Screenshots

![Home Page](frontend/public/screenshots/home.png)
![Predict Page](frontend/public/screenshots/predict.png)
![Dashboard](frontend/public/screenshots/dashboard_preview.png)

---
## 🔮 Future Improvements

- Charts for price trends
- Multi-city support
- Authentication
- Improved UI animations
- Error messaging
- Database integration

---

## 👩‍💻 Author

Himanshi Mittal

---
