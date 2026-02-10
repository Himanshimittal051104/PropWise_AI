"use client";
import { useState,useRef ,useEffect} from "react";

export default function Home() {
  const cityRef = useRef();
  const areaRef = useRef();
  const bhkRef = useRef();
  const sizeRef = useRef();
  const bathRef = useRef();
  const [form, setForm] = useState({
    City: "",
    Area_Locality: "",
    BHK: "",
    Size: "",
    Bathroom: "",
  });
  useEffect(() => cityRef.current.focus(), []);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setResult(null);
  }
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const isDisabled =
  !form.City ||
  !form.Area_Locality ||
  !form.BHK ||
  !form.Size ||
  !form.Bathroom;
  const predict = async () => {
    if(isDisabled) return;
    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        City: form.City,
        Area_Locality: form.Area_Locality,
        BHK: form.BHK,
        Size: form.Size,
        Bathroom: form.Bathroom,
      }),
    });
    const data = await res.json();
    setResult(data.predicted_rent);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center  text-white">
      <h1 className="font-bold text-5xl mb-2">RentWise AI</h1>
      <p className="text-lg opacity-80 mb-8">Predict your home rent in seconds</p>
      <div className="bg-white text-black w-[350px] mb-8 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <label className=" text-gray-500">City</label>
          <input  ref={cityRef} className="flex-1  input bg-pink-50" name="City" value={form.City} onChange={handleChange} onKeyDown={(e) => e.key === "Enter" && areaRef.current.focus()}/>
        </div>
        <div className="flex items-center gap-1">
          <label className=" text-gray-500">Area / Locality</label>
          <input  ref={areaRef} className="input bg-pink-50 flex-1" name="Area_Locality" value={form.Area_Locality} onChange={handleChange} onKeyDown={(e) => e.key === "Enter" && bhkRef.current.focus()}/>
        </div>
        <div className="flex items-center gap-3">
          <label className=" text-gray-500">BHK</label>
          <input  ref={bhkRef} type="number" min="0" className="input bg-pink-50 flex-1" name="BHK" value={form.BHK} onChange={handleChange} onKeyDown={(e) => e.key === "Enter" && sizeRef.current.focus()}/>
        </div>
        <div className="flex items-center gap-3">
          <label className=" text-gray-500">Size (sqft)</label>
          <input  ref={sizeRef} type="number"  min="0"  className="input bg-pink-50 flex-1" name="Size" value={form.Size} onChange={handleChange} onKeyDown={(e) => e.key === "Enter" && bathRef.current.focus()}/>
        </div>
        <div className="flex items-center gap-3">
          <label className=" text-gray-500">Bathrooms</label>
          <input  ref={bathRef} type="number"  min="0"  className="input bg-pink-50 flex-1" name="Bathroom" value={form.Bathroom} onChange={handleChange} onKeyDown={(e) => e.key === "Enter" && predict()}/>
        </div>
        <button
          onClick={predict} disabled={isDisabled}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
        >
          {loading ? "Predicting..." : "Predict Rent"}
        </button>
        {result !== null && (
          <div className="text-center mt-4">
            <p className="text-gray-500">Estimated Monthly Rent</p>
            <h2 className="text-2xl font-bold text-indigo-600">₹ {result}</h2>
          </div>
        )}
      </div>
      <p className="opacity-70 text-sm">Powered by Machine Learning</p>
    </div>
  );
}