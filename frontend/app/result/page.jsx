"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";
 function ResultPage() {
    const searchParams = useSearchParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        const priceParam = searchParams.get("price");
        const bhk = searchParams.get("bhk");
        const rawLocation = searchParams.get("location");
        const total_sqft = searchParams.get("total_sqft");

        if (!priceParam) return;

        const price = parseFloat(priceParam);

        const location = rawLocation
            ?.toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        setData({ price, bhk, location, total_sqft });
    }, [searchParams]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="  text-xl">Loading result...</p>
            </div>
        );
    }

    const { price, bhk, location, total_sqft } = data;

    const formattedPrice =
        price >= 100
            ? `₹ ${(price / 100).toFixed(2)} Cr`
            : `₹ ${price.toFixed(2)} Lakhs`;

    const lowerRange =
        price >= 100
            ? `₹ ${((price * 0.95) / 100).toFixed(2)} Cr`
            : `₹ ${(price * 0.95).toFixed(2)} Lakhs`;

    const upperRange =
        price >= 100
            ? `₹ ${((price * 1.05) / 100).toFixed(2)} Cr`
            : `₹ ${(price * 1.05).toFixed(2)} Lakhs`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">
                    Property Price Analysis
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    AI-powered valuation based on Bengaluru housing trends.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
                <p className="text-sm text-gray-500 mb-2">
                    Estimated Price
                </p>

                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    {formattedPrice}
                </h2>

                <p className="text-gray-600 mb-6">
                    For a {bhk} BHK property in {location} ({total_sqft} sqft)
                </p>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-sm text-gray-500">
                        Expected Price Range
                    </p>
                    <p className="text-xl font-semibold text-gray-800 mt-2">
                        {lowerRange} – {upperRange}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default function ResultPageWrapper() {
  return (
    <Suspense fallback={null}>
      <ResultPage />
    </Suspense>
  );
}