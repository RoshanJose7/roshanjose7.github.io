import {motion} from "framer-motion";

import {styles} from "../styles";
import {education} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const EducationCard = ({index, school, degree, date, detail}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className='bg-tertiary rounded-2xl p-6'
    >
        <div className='flex flex-wrap justify-between items-start gap-2'>
            <h3 className='text-white font-bold text-[20px]'>{school}</h3>
            <span className='text-secondary text-[14px]'>{date}</span>
        </div>
        <p className='text-[#915EFF] font-medium text-[16px] mt-1'>{degree}</p>
        <p className='text-secondary text-[14px] mt-3'>{detail}</p>
    </motion.div>
);

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Academic background</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <div className='mt-14 flex flex-col gap-6'>
                {education.map((entry, index) => (
                    <EducationCard key={entry.school} index={index} {...entry} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
