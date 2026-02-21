import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema({
  userId: String,
  location: String,
  bhk: Number,
  bathroom: Number,
  sqft: Number,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);