"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("predictions") || "[]");
    setHistory(stored.reverse()); // latest first
  }, []);

  const validHistory = history.filter(
    item => !isNaN(parseFloat(item.price))
  );

  const total = validHistory.length;

  const avgPrice =
    total > 0
      ? validHistory.reduce((sum, p) => sum + Number(p.price), 0) / total
      : 0;


  const lastLocation = total > 0 ? validHistory[0].location : "—";

  const formatPrice = (price) =>
    price >= 100
      ? `₹ ${(price / 100).toFixed(2)} Cr`
      : `₹ ${price.toFixed(2)} Lakhs`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Overview of your property price predictions.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Total Predictions</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">{total}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Average Price</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {avgPrice ? formatPrice(avgPrice) : "—"}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <p className="text-sm text-gray-500">Last Location</p>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              {lastLocation
                ?.split(" ")
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </h2>
          </div>

        </div>

        {/* Recent Predictions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Predictions
          </h3>

          {history.length === 0 ? (
            <p className="text-gray-500">No predictions yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3">Location</th>
                    <th className="pb-3">Predicted Price</th>
                  </tr>
                </thead>

                <tbody>
                  {validHistory.slice(0, 6).map((item, idx) => (
                    <tr key={idx} className="border-b last:border-none">
                      <td className="py-3 text-gray-700">
                        {item.location
                          .split(" ")
                          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")}
                      </td>

                      <td className="py-3 font-medium text-gray-900">
                        {formatPrice(Number(item.price))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

        {/* Future Analytics */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Advanced Analytics (Coming Soon)
          </h3>

          <p>
            Future updates will include price trends, location comparisons,
            and interactive charts for deeper market insights.
          </p>
        </div>

      </div>
    </div>
  );
}