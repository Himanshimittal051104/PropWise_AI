import Link from "next/link";

export default function Hero() {
    return (
        <section className=" max-w-7xl mx-auto px-6 grid grid-cols-2 items-center gap-16 ">
            {/* Left */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Bengaluru Property Price Prediction using AI
                </h1>

                <p className="mt-6 text-white">
                    AI-powered property price prediction built on Bengaluru housing data.
                    Get accurate estimates, location-based insights, and smart analytics to
                    make confident real estate decisions.
                </p>

                <div className="mt-8 flex gap-4 ">
                    <Link
                        href="/predict"
                        className="bg-black text-white px-6 py-3 rounded-lg"
                    >
                        Get Started
                    </Link>

                    <Link
                        href="/#about"
                        className="border px-6 py-3 rounded-lg"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Right */}
            <div className="h-[300px] rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                <img src="/screenshots/dashboard_preview.png" alt="Dashboard Preview"
                    className="rounded-2xl shadow-2xl "></img>
            </div>
        </section>
    );
}