import {motion} from "framer-motion";

import {styles} from "../styles";
import {about} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About.</h2>
            </motion.div>

            <div className='mt-4 flex flex-col gap-4 max-w-3xl'>
                {about.paragraphs.map((paragraph, index) => (
                    <motion.p
                        key={`about-paragraph-${index}`}
                        variants={fadeIn("", "", 0.1 * (index + 1), 1)}
                        className='text-secondary text-[17px] leading-[30px]'
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
