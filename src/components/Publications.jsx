import {motion} from "framer-motion";

import {styles} from "../styles";
import {publications} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const PublicationCard = ({index, title, venue, date, note, link}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className='bg-tertiary rounded-2xl p-6'
    >
        <h3 className='text-white font-bold text-[20px]'>{title}</h3>
        <p className='text-[#915EFF] font-medium text-[16px] mt-1'>
            {venue} · {date}
        </p>
        {note && <p className='text-secondary text-[14px] mt-3'>{note}</p>}
        {link && (
            <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='text-secondary text-[14px] mt-3 inline-block underline hover:text-white'
            >
                View source
            </a>
        )}
    </motion.div>
);

const Publications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Research</p>
                <h2 className={styles.sectionHeadText}>Publications.</h2>
            </motion.div>

            <div className='mt-14 flex flex-col gap-6'>
                {publications.map((entry, index) => (
                    <PublicationCard key={entry.title} index={index} {...entry} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Publications, "publications");
