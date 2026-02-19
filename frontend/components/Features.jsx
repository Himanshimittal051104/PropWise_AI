export default function Features() {
  const features = [
    {
      title: "AI Price Prediction",
      desc: "Predict property prices using machine learning trained on Bengaluru housing data.",
    },
    {
      title: "Location-Based Insights",
      desc: "Understand area-wise trends and locality impact on property valuation.",
    },
    {
      title: "Analytics Dashboard",
      desc: "Visualize predictions and market patterns through clean interactive charts.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why PropWise AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}