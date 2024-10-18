import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button variant="link" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
                <CiLight className="h-[1.2rem] w-[1.2rem] transition-all opacity-100 text-white" />
            ) : (
                <CiDark className="h-[1.2rem] w-[1.2rem] transition-all opacity-100 text-black" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
