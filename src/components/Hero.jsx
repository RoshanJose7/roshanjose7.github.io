import {motion} from "framer-motion";

import {styles} from "../styles";
import {hero} from "../constants";
import {fadeIn} from "../utils/motion";

const Hero = () => {
    return (
        <section className='relative w-full min-h-screen mx-auto flex items-center pt-[100px]'>
            <div
                className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'/>
                </div>

                <motion.div variants={fadeIn("down", "tween", 0.1, 1)} initial='hidden' animate='show'>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Roshan</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-xl`}>
                        Software Engineer (2 YOE) building AI/LLM applications — MsIT @ RMIT
                    </p>

                    <div className='mt-8 flex flex-wrap gap-4'>
                        <a
                            href={hero.primaryCta.href}
                            className='violet-gradient px-8 py-3 rounded-xl text-white font-bold shadow-card hover:opacity-90 transition-opacity'
                        >
                            {hero.primaryCta.label}
                        </a>
                        <a
                            href={hero.secondaryCta.href}
                            className='border border-secondary px-8 py-3 rounded-xl text-white font-bold hover:border-white transition-colors'
                        >
                            {hero.secondaryCta.label}
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div
                        className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
