from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from app.schemas import HouseInput
from app.model import model, columns

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Bangalore House Price Prediction API running"}

@app.post("/predict")
def predict(data: HouseInput):

    input_data = {
        "total_sqft": data.sqft,
        "bathroom": data.bathroom,
        "bhk": data.bhk
    }

    df = pd.DataFrame([input_data])

    # one-hot location
    location_col = "location_" + data.location.strip()

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