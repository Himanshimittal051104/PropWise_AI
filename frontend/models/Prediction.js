import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema({
  userId: {type:String,required:true},
  location: String,
  bhk: Number,
  bathroom: Number,
  total_sqft: Number,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);