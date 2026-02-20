export default function About() {
  return (
    <section className="py-24 px-6 border-t border-gray-200" id="about">


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
          <div className="space-y-5 text-gray-200 leading-relaxed">

            <p>
              PropWise AI uses a trained regression model on Bengaluru housing data
              to estimate residential property prices based on location, square
              feet, BHK, and bathrooms.
            </p>

            <p>
              The project demonstrates end-to-end ML deployment — from model
              training and feature engineering to backend API integration and
              frontend visualization.
            </p>

            <p>
              It showcases how machine learning models can be integrated into
              modern web applications using scalable, production-style
              architecture.
            </p>

            <p>
              Built with a modular backend and responsive frontend, PropWise AI
              focuses on clean UX, reliable predictions, and real-world
              deployment practices.
            </p>

          </div>
          {/* Right Column (Tech Stack Card) */}

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Tech Stack
            </h3>

            <ul className="space-y-4 text-gray-600">

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-600" />
                <span><strong>Frontend:</strong> Next.js + Tailwind CSS</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-600" />
                <span><strong>Backend:</strong> FastAPI (Python)</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-600" />
                <span><strong>Machine Learning:</strong> scikit-learn, pandas, numpy</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-600" />

                <span>
                  <strong>Deployment:</strong>{" "}
                  <span className="text-gray-500">
                    Frontend on Vercel • Backend on Render
                  </span>
                </span>
              </li>

            </ul>

            <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
              Designed as a production-style ML SaaS project.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}