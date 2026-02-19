import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 flex ">
          <Hero />
        </div>
      </div>
      <Features />
      <About/>
    </>
  );
}