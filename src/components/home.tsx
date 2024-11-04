import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section className={`flex flex-col items-center justify-center w-full h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <motion.h1
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
            >
                Welcome to Round Zero
            </motion.h1>

            <motion.p
                className="text-base md:text-lg lg:text-xl mb-6 max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Round Zero is your one-stop solution for all your job application needs. Be it resume creation, ATS scoring, preparation, or cover letter generation, we've got you covered.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.75 }}
            >
                <Button size="lg" variant="default" className="font-semibold">
                    Get Started
                </Button>
            </motion.div>
        </section>
    );
};

export default Hero;
