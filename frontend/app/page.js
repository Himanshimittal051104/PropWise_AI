"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const locationRef = useRef();
  const bhkRef = useRef();
  const sqftRef = useRef();
  const bathRef = useRef();

  const [form, setForm] = useState({
    location: "",
    bhk: "",
    total_sqft: "",
    bath: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => locationRef.current.focus(), []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setResult(null);
  };

  const isDisabled =
    !form.location ||
    !form.bhk ||
    !form.total_sqft ||
    !form.bath;

  const predict = async () => {
    if (isDisabled) return;

    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: form.location,
        bhk: form.bhk,
        total_sqft: form.total_sqft,
        bath: form.bath,
      }),
    });

    const data = await res.json();
    setResult(data.predicted_price_lakhs);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-5xl mb-2">Bangalore House AI</h1>
      <p className="text-lg opacity-80 mb-8">Predict house price instantly</p>

      <div className="bg-white text-black w-[350px] mb-8 rounded-xl p-6 space-y-4">

        <div className="flex items-center gap-3">
          <label className="text-gray-500">Location</label>
          <input
            ref={locationRef}
            className="flex-1 input bg-pink-50"
            name="location"
            value={form.location}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && bhkRef.current.focus()}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-gray-500">BHK</label>
          <input
            ref={bhkRef}
            type="number"
            className="input bg-pink-50 flex-1"
            name="bhk"
            value={form.bhk}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && sqftRef.current.focus()}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-gray-500">Sqft</label>
          <input
            ref={sqftRef}
            type="number"
            className="input bg-pink-50 flex-1"
            name="total_sqft"
            value={form.total_sqft}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && bathRef.current.focus()}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-gray-500">Bath</label>
          <input
            ref={bathRef}
            type="number"
            className="input bg-pink-50 flex-1"
            name="bath"
            value={form.bath}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && predict()}
          />
        </div>

        <button
          onClick={predict}
          disabled={isDisabled}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
        >
          {loading ? "Predicting..." : "Predict Price"}
        </button>

        {result !== null && (
          <div className="text-center mt-4">
            <p className="text-gray-500">Estimated House Price</p>
            <h2 className="text-2xl font-bold text-indigo-600">
              ₹ {result} Lakhs
            </h2>
          </div>
        )}

      </div>

      <p className="opacity-70 text-sm">Powered by XGBoost ML</p>
    </div>
  );
}