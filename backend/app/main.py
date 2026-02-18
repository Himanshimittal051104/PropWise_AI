from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np

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

class HouseInput(BaseModel):
    location: str
    bhk: int
    bathroom: int
    total_sqft: float

@app.get("/")
def home():
    return {"message": "Bangalore House Price Prediction API running"}

@app.post("/predict")
def predict(data: HouseInput):

    sqft = data.total_sqft
    bhk = data.bhk
    bathroom = data.bathroom
    location = data.location.strip()

    input_data = {
        "total_sqft": sqft,
        "bathroom": bathroom,
        "bhk": bhk
    }

    df = pd.DataFrame([input_data])

    # one-hot location
    location_col = "location_" + location

    if location_col in columns:
        df[location_col] = 1
    else:
       df["location_other"] = 1
    
    # fill missing columns with 0
    for col in columns:
        if col not in df.columns:
            df[col] = 0

    df = df[columns]

    prediction = np.expm1(model.predict(df)[0]) 
    # minimum safeguard (10 lakhs)
    final_prediction = max(10, prediction)

    return {"predicted_price_lakhs": float(final_prediction)}