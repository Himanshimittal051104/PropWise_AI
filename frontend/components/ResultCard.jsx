export default function ResultCard({ price }) {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">

      <p className="text-sm text-gray-500 mb-2">
        Estimated Property Price
      </p>

      <h2 className="text-4xl font-bold text-gray-900">
        ₹ {price.toFixed(2)} Lakhs
      </h2>

      <p className="mt-3 text-gray-600">
        Based on Bengaluru market trends and historical data.
      </p>

    </div>
  );
}