export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">

            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        About PropWise AI
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        An AI-powered platform for predicting Bengaluru real estate prices.
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 space-y-8">

                    {/* Project Overview */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            Project Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            PropWise AI is a full-stack machine learning application that predicts
                            residential property prices in Bengaluru based on location, total square
                            feet, number of bedrooms (BHK), and bathrooms. The goal of this project is
                            to demonstrate how machine learning models can be deployed and integrated
                            into real-world web applications.
                        </p>
                    </section>

                    {/* How It Works */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            How It Works
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>User enters property details on the Predict page.</li>
                            <li>Frontend sends data to a FastAPI backend.</li>
                            <li>The backend processes inputs using a trained ML model.</li>
                            <li>Predicted price is returned and shown with analytics on the Result page.</li>
                        </ul>
                    </section>

                    {/* ML Model */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            Machine Learning Model
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            The model is trained on Bengaluru housing data using regression techniques.
                            Location is handled via one-hot encoding, while numerical features include
                            total square feet, BHK, and bathrooms. The backend also applies inverse
                            transformations to return predictions in Lakhs.
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            Tech Stack
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                            <li>Frontend: Next.js + Tailwind CSS</li>
                            <li>Backend: FastAPI (Python)</li>
                            <li>Machine Learning: scikit-learn, pandas, numpy</li>
                            <li>Deployment: Render (backend)</li>
                        </ul>
                    </section>

                    {/* Architecture */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            System Architecture
                        </h2>
                        <pre className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 overflow-x-auto">{
 `                            Next.js Frontend
                                ↓
                            FastAPI Backend (Render)
                                ↓
                            ML Model (.pkl)
                                ↓
                            Prediction
                                ↓
                            Result + Analytics UI`}
                        </pre>
                    </section>

                    {/* Footer Note */}
                    <section>
                        <p className="text-gray-500 text-sm">
                            This project was built as a learning-focused full-stack ML application to
                            showcase frontend engineering, backend APIs, and machine learning deployment
                            in a single product.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}