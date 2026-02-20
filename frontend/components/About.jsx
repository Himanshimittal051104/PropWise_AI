export default function About() {
  return (
    <section className="py-24 px-6">


      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold ">
            About PropWise AI
          </h2>
          <p className="mt-4 text-gray-600 text-md">
            A full-stack machine learning application for predicting Bengaluru property prices.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <div className="space-y-6 leading-relaxed">
            <p>
              PropWise AI uses a trained regression model on Bengaluru housing data
              to estimate residential property prices based on location,
              total square feet, BHK, and bathrooms.
            </p>

            <p>
              The project demonstrates end-to-end ML deployment — from model training
              to backend API integration and frontend visualization.
            </p>

            <p>
              It showcases how machine learning models can be integrated into modern
              web applications using scalable, production-style architecture.
            </p>
          </div>

          {/* Right Column (Tech Stack Card) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tech Stack
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Frontend: Next.js + Tailwind CSS</li>
              <li>• Backend: FastAPI (Python)</li>
              <li>• Machine Learning: scikit-learn, pandas, numpy</li>
              <li>• Deployment: Backend - Render</li>
            </ul>

            <div className="mt-6 text-sm text-gray-500">
              Designed as a production-style ML SaaS project.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}