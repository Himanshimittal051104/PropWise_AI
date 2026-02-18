from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model + columns
model = joblib.load("model/house_model.pkl")
columns = joblib.load("model/columns.pkl")

@app.get("/")
def home():
    return {"message": "Bangalore House Price Prediction API running"}

@app.post("/predict")
def predict(data: dict):

    # numeric inputs (must match training)
    sqft = float(data["total_sqft"])
    bhk = int(data["bhk"])
    bath = int(data["bath"])
    location = data["location"]

    # price_per_sqft feature (important!)
    price_per_sqft = 5000   # default fallback (average BLR)

    input_data = {
        "total_sqft": sqft,
        "bath": bath,
        "bhk": bhk,
        "price_per_sqft": price_per_sqft
    }

    df = pd.DataFrame([input_data])

    # one-hot location
    location_col = "location_" + location

    if location_col in columns:
        df[location_col] = 1

    # fill missing columns with 0
    for col in columns:
        if col not in df.columns:
            df[col] = 0

    df = df[columns]

    prediction = model.predict(df)[0]

    # minimum safeguard (10 lakhs)
    final_prediction = max(10, prediction)

    return {"predicted_price_lakhs": float(final_prediction)}