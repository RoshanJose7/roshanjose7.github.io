import {education} from "../constants";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const EducationRow = ({entry, index}) => (
    <div className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-5 ${
        index === education.length - 1 ? "" : "border-b border-ink"
    }`}>
        <div className="text-[15px] sm:text-[16px] font-black text-accent flex-shrink-0 sm:w-8">
            {String(index + 1).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-[18px] sm:text-[20px] font-black">{entry.school}</div>
                <div className="upper text-[11px] sm:text-[12px] font-bold">{entry.date}</div>
            </div>
            <div className="text-[15px] sm:text-[16px] font-semibold mt-1">{entry.degree}</div>
            <div className="text-[14px] leading-[1.5] mt-2">{entry.detail}</div>
        </div>
    </div>
);

const Education = () => (
    <Sheet id="education">
        <SheetEyebrow sheet="06" name="Education" withRule meta={`0${education.length} credentials`} />

        <div className="border-[3px] border-ink bg-panel px-5 sm:px-[26px]">
            {education.map((entry, index) => (
                <EducationRow key={entry.school} entry={entry} index={index} />
            ))}
        </div>
    </Sheet>
);

export default Education;
