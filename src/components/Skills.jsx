import {skills} from "../constants";
import {SkillIcon} from "./blueprint/Icons";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const totalTools = skills.reduce((count, group) => count + group.items.length, 0);

const SkillGroup = ({group, isLast}) => (
    <div
        className={`border-ink p-5 relative border-b-[3px] lg:border-b-[3px] ${
            isLast ? "" : "border-r-[3px]"
        } lg:p-5`}
    >
        <div className="upper absolute top-2.5 right-3 text-[10px] font-bold text-accent">
            {group.code}
        </div>
        <SkillIcon icon={group.icon} />
        <div className="upper text-[12px] font-bold border-b border-ink pb-2.5 mb-3 mt-3.5">
            {group.category}
        </div>
        <div className="text-[14.5px] leading-[1.8] font-medium">{group.items.join(" / ")}</div>
    </div>
);

const Skills = () => (
    <Sheet id="skills">
        <SheetEyebrow sheet="05" name="Skills" withRule meta={`0${skills.length} groups · ${totalTools} tools`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t-[3px] border-l-[3px] border-ink bg-panel">
            {skills.map((group, index) => (
                <SkillGroup key={group.category} group={group} isLast={index === skills.length - 1} />
            ))}
        </div>
    </Sheet>
);

export default Skills;
