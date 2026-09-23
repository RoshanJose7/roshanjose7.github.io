import {motion} from "framer-motion";

import {writing} from "../constants";
import {ArticleMark} from "./blueprint/Icons";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";
import {fadeUp, revealViewport, staggerContainer} from "../utils/motion";

const WritingRow = ({entry, index}) => (
    <motion.a
        variants={fadeUp()}
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{x: 4}}
        transition={{duration: 0.15}}
        className={`flex flex-col sm:flex-row sm:items-center gap-4 py-5 text-ink ${
            index === writing.length - 1 ? "" : "border-b border-ink"
        }`}
    >
        <ArticleMark size={48} className="text-accent flex-shrink-0" />
        <div className="flex-1 min-w-0">
            <div className="text-[16px] sm:text-[18px] font-black leading-[1.3]">{entry.title}</div>
            <div className="upper text-[11px] sm:text-[12px] font-bold mt-1.5">
                {entry.venue} · {entry.date}
            </div>
            {entry.note && <div className="text-[13px] mt-1.5">{entry.note}</div>}
        </div>
        <span className="upper text-[13px] font-bold flex-shrink-0">[ Read ]</span>
    </motion.a>
);

const Writing = () => (
    <Sheet id="writing">
        <SheetEyebrow sheet="09" name="Writing" withRule meta={`0${writing.length} post${writing.length === 1 ? "" : "s"}`} />

        <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="border-[3px] border-ink bg-panel px-5 sm:px-[26px]"
        >
            {writing.map((entry, index) => (
                <WritingRow key={entry.title} entry={entry} index={index} />
            ))}
        </motion.div>
    </Sheet>
);

export default Writing;
