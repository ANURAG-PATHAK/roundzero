import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { images } from "../constants";
import { useTheme } from '@/components/ui/theme-provider';
import { Input } from "@/components/ui/input"

const ResumeScorer = () => {
    const { theme } = useTheme();

    return (
        <section className={`flex flex-col items-center justify-center w-full min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl px-4">
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={theme === 'dark' ? images.resumeScoresChartDark : images.resumeScoresChartLight}
                        alt="ATS Resume Score"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left p-4 m-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Get ATS Score
                    </h2>
                    <p className="text-base lg:text-lg mb-6">
                        A game-changing feature that puts the power in your hands. Upload your PDF resume, and watch our AI algorithms provide insights and recommendations to optimize your resume and catch the attention of hiring algorithms.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <Input id="resume" type="file" className='rounded-lg flex items-center justify-center font-semibold' />
                        <Button size="lg" variant="default" className="rounded-lg font-semibold">
                            Upload Resume
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeScorer;
