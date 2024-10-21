import { ModeToggle } from "./components/ui/mode-toggle";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/home";
import ResumeScorer from "./components/resume-scorer";

export default function App() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="w-full">
          <HeroSection />
          <ResumeScorer />
          <HeroSection />
          <HeroSection />
          <HeroSection />
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <ModeToggle />
        </div>
      </div>

    </>
  );
}
