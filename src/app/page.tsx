import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/2">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
