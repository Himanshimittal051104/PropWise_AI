import os
import joblib

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

model_path = os.path.join(BASE_DIR, "model", "house_model.pkl")
columns_path = os.path.join(BASE_DIR, "model", "columns.pkl")

model = joblib.load(model_path)
columns = joblib.load(columns_path)