import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { IconType } from "react-icons";
import { FiChevronsRight, FiHome } from "react-icons/fi";
import { IoHammerOutline } from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";
import { motion } from "framer-motion";
import { images } from "../constants";
import { useTheme } from "@/components/ui/theme-provider";
import { TbFileCv } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Tooltip = ({ title }: { title: string }) => (
    <motion.div
        className="absolute left-full top-1/4 transform -translate-y-1/3 z-10 w-max rounded bg-gray-700 text-white text-xs p-1 ml-1.5 opacity-0 transition-opacity duration-200"
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 5 }}
    >
        {title}
    </motion.div>
);

const Option = ({
    Icon,
    title,
    selected,
    setSelected,
    open,
    href,
}: {
    Icon: IconType;
    title: string;
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    open: boolean;
    href: string;
}) => {
    const { theme } = useTheme();
    const selectedBg = theme === "dark" ? "bg-indigo-700 text-indigo-200" : "bg-indigo-200 text-indigo-700";
    const defaultText = theme === "dark" ? "text-gray-400 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200";
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.button
            layout
            onClick={() => {
                setSelected(title);
                navigate(href);
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? selectedBg : defaultText}`}
        >
            <motion.div layout className="grid h-full w-10 place-content-center text-lg">
                <Icon />
                {!open && showTooltip && (
                    <Tooltip title={title} />
                )}
            </motion.div>

            {open && (
                <motion.span
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}
                    className={theme === "dark" ? "text-gray-200" : "text-gray-900"}
                >
                    {title}
                </motion.span>
            )}
        </motion.button>
    );
};

const TitleSection = ({ open }: { open: boolean }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className={`mb-3 border-b pb-3 ${theme === "dark" ? "border-slate-700" : "border-slate-300"}`}>
            <div className={`flex cursor-pointer items-center justify-between rounded-md transition-colors`}>
                <div className="flex items-center gap-2" onClick={() => navigate("/")}>
                    <Logo />
                    {open && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.125 }}
                        >
                            <span className={theme === "dark" ? "ml-4 block text-lg font-semibold text-gray-200" : "ml-4 block text-lg font-semibold text-gray-900"}>
                                Round Zero
                            </span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Logo = () => {
    return (
        <motion.div layout className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600">
            <img src={images.squareLogo} alt="Logo" className="rounded-lg" />
        </motion.div>
    );
};

const ToggleClose = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const { theme } = useTheme();
    const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200";

    return (
        <motion.button
            layout
            onClick={() => setOpen((pv) => !pv)}
            className={`absolute bottom-0 left-0 right-0 border-t transition-colors ${hoverBg} ${theme === "dark" ? "border-slate-700" : "border-slate-300"}`}
        >
            <div className="flex items-center p-2">
                <motion.div layout className="grid size-10 place-content-center text-lg">
                    <FiChevronsRight className={`transition-transform ${theme === "dark" ? "text-gray-400" : "text-gray-600"} ${open && "rotate-180"}`} />
                </motion.div>
                {open && (
                    <motion.span
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.125 }}
                        className={theme === "dark" ? "text-xs font-medium text-gray-200" : "text-xs font-medium text-gray-900"}
                    >
                        Hide
                    </motion.span>
                )}
            </div>
        </motion.button>
    );
};

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState("Home");
    const { theme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <motion.nav
            layout
            className={`sticky top-0 h-screen shrink-0 border-r p-2 transition-colors ${theme === "dark" ? "bg-gray-900 border-slate-700" : "bg-white border-slate-300"}`}
            style={{
                width: open ? "225px" : "fit-content",
            }}
        >
            <TitleSection open={open} />
            <div className="space-y-1">
                <Option Icon={FiHome} title="Home" selected={selected} setSelected={setSelected} open={open} href="/" />
                <Option Icon={GrScorecard} title="Score Resume" selected={selected} setSelected={setSelected} open={open} href="/resume-scorer" />
                <Option Icon={IoHammerOutline} title="Build Resume" selected={selected} setSelected={setSelected} open={open} href="/resume-builder" />
                <Option Icon={TbFileCv} title="Build CV" selected={selected} setSelected={setSelected} open={open} href="/cover-letter-builder" />
                <Option Icon={AiOutlineTeam} title="Prepare Interview" selected={selected} setSelected={setSelected} open={open} href="/prepare-interview" />
            </div>
            <ToggleClose open={open} setOpen={setOpen} />
        </motion.nav>
    );
}
