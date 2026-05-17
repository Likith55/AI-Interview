import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
    </main>
  );
}