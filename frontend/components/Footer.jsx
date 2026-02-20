import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 ">
      <div className="max-w-6xl mx-auto px-6 pt-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold ">PropWise AI</h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              AI-powered Bengaluru property price prediction platform built using
              modern full-stack and machine learning technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-10">
            <h4 className="text-sm font-semibold  mb-3">Quick Links</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/predict" className="hover:text-blue-600 transition">
                  Predict
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-blue-600 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-sm font-semibold  mb-3">Built With</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>Next.js + Tailwind CSS</li>
              <li>FastAPI</li>
              <li>Scikit-learn</li>
              <li>Render Deployment</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 py-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PropWise AI — Built by Himanshi Mittal
        </div>

      </div>
    </footer>
  );
}