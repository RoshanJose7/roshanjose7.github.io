import {motion} from "framer-motion";

import {styles} from "../styles";
import {skills} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const SkillGroup = ({index, category, items}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className='bg-tertiary rounded-2xl p-6 min-w-[220px] flex-1'
    >
        <h3 className='text-white font-bold text-[18px] mb-4'>{category}</h3>
        <div className='flex flex-wrap gap-2'>
            {items.map((item) => (
                <span
                    key={item}
                    className='text-[14px] text-secondary bg-black-100 px-3 py-1 rounded-full'
                >
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I work with</p>
                <h2 className={styles.sectionHeadText}>Skills.</h2>
            </motion.div>

            <div className='mt-14 flex flex-wrap gap-6'>
                {skills.map((group, index) => (
                    <SkillGroup key={group.category} index={index} {...group} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
