"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function PredictPage() {
    const [formData, setFormData] = useState({
        location: "",
        total_sqft: "",
        bhk: "",
        bathroom: "",
    });
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    location: formData.location,
                    total_sqft: parseFloat(formData.total_sqft),
                    bhk: parseInt(formData.bhk),
                    bathroom: parseInt(formData.bathroom),
                }),
            });

            const data = await response.json();
            router.push(
                `/result?price=${data.predicted_price_lakhs}&bhk=${formData.bhk}&location=${formData.location}&sqft=${formData.total_sqft}`
            );
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">
                    Estimate Bengaluru Property Price
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Enter property details below to get an AI-powered price prediction
                    trained on Bengaluru housing data.
                </p>
            </div>

            {/* Form Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Whitefield, Indiranagar"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 bg-white focus:bg-white"
                        />
                    </div>

                    {/* Total Sqft */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Square Feet
                        </label>
                        <input
                            name="total_sqft"
                            value={formData.total_sqft}
                            onChange={handleChange}
                            required
                            type="number"
                            min="300"
                            step="0.01"
                            placeholder="1200.5"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 bg-white focus:bg-white "
                        />
                    </div>

                    {/* BHK */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            BHK
                        </label>
                        <input
                            name="bhk"
                            value={formData.bhk}
                            onChange={handleChange}
                            required
                            type="number"
                            min="1"
                            step="1"
                            placeholder="3"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 bg-white focus:bg-white "
                        />
                    </div>

                    {/* Bathrooms */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Bathrooms
                        </label>
                        <input
                            name="bathroom"
                            value={formData.bathroom}
                            onChange={handleChange}
                            required
                            type="number"
                            min="1"
                            step="1"
                            placeholder="2"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 bg-white focus:bg-white "
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full font-medium py-3 rounded-lg transition ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                    >
                        {loading ? "Predicting..." : "Predict Price"}
                    </button>

                </form>
            </div>

            

        </div>
    );
}