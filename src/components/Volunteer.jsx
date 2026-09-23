import {motion} from "framer-motion";

import {volunteer} from "../constants";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";
import {fadeUp, revealViewport, staggerContainer} from "../utils/motion";

const VolunteerRow = ({entry, index}) => (
    <motion.div variants={fadeUp()} className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-5 ${
        index === volunteer.length - 1 ? "" : "border-b border-ink"
    }`}>
        <div className="text-[15px] sm:text-[16px] font-black text-accent flex-shrink-0 sm:w-8">
            {String(index + 1).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-[18px] sm:text-[20px] font-black">{entry.title}</div>
                <div className="upper text-[11px] sm:text-[12px] font-bold">{entry.date}</div>
            </div>
            <div className="text-[15px] sm:text-[16px] font-semibold mt-1">{entry.organization}</div>
            <div className="text-[14px] leading-[1.5] mt-2">{entry.description}</div>
        </div>
    </motion.div>
);

const Volunteer = () => (
    <Sheet id="volunteer">
        <SheetEyebrow sheet="07" name="Volunteer" withRule meta={`0${volunteer.length} role`} />

        <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="border-[3px] border-ink bg-panel px-5 sm:px-[26px]"
        >
            {volunteer.map((entry, index) => (
                <VolunteerRow key={entry.title} entry={entry} index={index} />
            ))}
        </motion.div>
    </Sheet>
);

export default Volunteer;
