import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ModeToggle } from "./components/ui/mode-toggle";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/home";
import ResumeScorer from "./components/resume-scorer";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/resume-scorer" element={<ResumeScorer />} />
            <Route path="/resume-builder" element={<HeroSection />} />
            <Route path="/cover-letter-builder" element={<HeroSection />} />
            <Route path="/prepare-interview" element={<HeroSection />} />
          </Routes>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <ModeToggle />
        </div>
      </div>
    </Router>
  );
}
