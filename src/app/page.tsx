import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="Main-container max-w-[1440px] min-h-screen bg-[#F6F7F9] mx-auto flex flex-col justify-center items-center">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
