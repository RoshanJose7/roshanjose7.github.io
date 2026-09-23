import {publications} from "../constants";
import {IeeeStamp} from "./blueprint/Icons";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const PublicationRow = ({entry, index}) => (
    <div className={`flex flex-col sm:flex-row sm:items-center gap-4 py-5 ${
        index === publications.length - 1 ? "" : "border-b border-ink"
    }`}>
        <IeeeStamp size={56} className="text-accent flex-shrink-0" />
        <div className="flex-1 min-w-0">
            <div className="text-[16px] sm:text-[18px] font-black leading-[1.3]">{entry.title}</div>
            <div className="upper text-[11px] sm:text-[12px] font-bold mt-1.5">
                {entry.venue} · {entry.date}
            </div>
            {entry.note && <div className="text-[13px] mt-1.5">{entry.note}</div>}
        </div>
        {entry.link && (
            <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="upper text-[13px] font-bold flex-shrink-0"
            >
                [ Source ]
            </a>
        )}
    </div>
);

const Publications = () => (
    <Sheet id="publications">
        <SheetEyebrow sheet="08" name="Publications" withRule meta={`0${publications.length} paper`} />

        <div className="border-[3px] border-ink bg-panel px-5 sm:px-[26px]">
            {publications.map((entry, index) => (
                <PublicationRow key={entry.title} entry={entry} index={index} />
            ))}
        </div>
    </Sheet>
);

export default Publications;
