import { ModeToggle } from "./components/ui/mode-toggle";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div>
          <div>
            HELLO I AM ANURAG
          </div>
          <div className="fixed bottom-4 right-4 z-50">
            <ModeToggle />
          </div>
        </div>
      </div>

    </>
  );
}
