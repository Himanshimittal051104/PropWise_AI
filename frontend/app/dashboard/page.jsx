"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalPredictions: 0,
    avgPrice: 0,
    lastLocation: "—",
  });

  useEffect(() => {
    // Temporary frontend analytics (localStorage based)

    const history = JSON.parse(localStorage.getItem("predictions") || "[]");

    if (history.length > 0) {
      const total = history.length;

      const avg =
        history.reduce((sum, p) => sum + Number(p.price), 0) / total;

      const last = history[history.length - 1];

      setStats({
        totalPredictions: total,
        avgPrice: avg,
        lastLocation: last.location,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Analytics overview of property price predictions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Total Predictions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Total Predictions</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {stats.totalPredictions}
            </h2>
          </div>

          {/* Average Price */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Average Price</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              ₹ {(stats.avgPrice / 100).toFixed(2)} Cr
            </h2>
          </div>

          {/* Last Location */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Last Predicted Location</p>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              {stats.lastLocation}
            </h2>
          </div>

        </div>

        {/* Placeholder Analytics Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Analytics (Coming Soon)
          </h3>

          <p>
            Future updates will include price trends, location comparisons,
            and historical prediction charts.
          </p>
        </div>

      </div>
    </div>
  );
}