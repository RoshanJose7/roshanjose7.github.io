import {experiences, timelineNowMarker, timelineSegments, timelineYears} from "../constants";
import {SheetEyebrow, WatermarkNumber} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const segmentStyle = {
    ink: "bg-ink text-white",
    accent: "bg-accent text-white",
};

// Horizontal (desktop, spans full width) / vertical (mobile, stacked
// left-rail) rendering of the career timeline. Desktop reproduces the
// mockup's absolute-percent bar; mobile uses a simpler stacked column.
const DesktopTimeline = () => (
    <div
        role="img"
        aria-label="Timeline: Ostello July 2022 to July 2023, DealBerg August 2023 to July 2025, RMIT Master's July 2025 to November 2027, currently in progress."
        className="hidden lg:block mb-12"
    >
        <div className="relative h-[22px]">
            <div
                className="upper absolute -translate-x-1/2 text-[10px] font-bold text-accent"
                style={{left: `${timelineNowMarker}%`}}
            >
                Now
            </div>
        </div>
        <div className="relative h-[34px] border-2 border-ink bg-panel">
            {timelineSegments.map((segment) =>
                segment.style === "hatch" ? (
                    <div
                        key={segment.label}
                        className="hatch-light upper absolute top-0 bottom-0 flex items-center pl-2 box-border border-l-2 border-ink text-[10px] font-bold"
                        style={{left: `${segment.start}%`, width: `${segment.width}%`}}
                    >
                        <span className="bg-panel px-1.5 py-px">{segment.label}</span>
                    </div>
                ) : (
                    <div
                        key={segment.label}
                        className={`upper absolute top-0 bottom-0 flex items-center pl-2 box-border text-[10px] font-bold ${segmentStyle[segment.style]}`}
                        style={{left: `${segment.start}%`, width: `${segment.width}%`}}
                    >
                        {segment.label}
                    </div>
                )
            )}
            <div
                className="absolute -top-2 -bottom-2 w-0.5 bg-accent"
                style={{left: `${timelineNowMarker}%`}}
            />
        </div>
        <div aria-hidden="true" className="relative h-[26px]">
            {timelineYears.map((year, index) => {
                const left = (index / (timelineYears.length - 1)) * 100;
                return (
                    <div
                        key={year}
                        className="absolute top-0 text-[11px] font-bold"
                        style={{
                            left: `${left}%`,
                            transform: index === 0 ? "none" : index === timelineYears.length - 1 ? "translateX(-100%)" : "translateX(-50%)",
                        }}
                    >
                        {year}
                    </div>
                );
            })}
        </div>
    </div>
);

const MobileTimeline = () => (
    <div
        role="img"
        aria-label="Timeline: Ostello July 2022 to July 2023, DealBerg August 2023 to July 2025, RMIT Master's July 2025 to November 2027, currently in progress."
        className="lg:hidden mb-10 border-[3px] border-ink bg-panel p-4 flex flex-col gap-3"
    >
        {timelineSegments.map((segment) => (
            <div key={segment.label} className="flex items-center gap-3">
                <span
                    className={`upper text-[10px] font-bold px-2 py-1 flex-shrink-0 ${
                        segment.style === "hatch"
                            ? "hatch-light border border-ink"
                            : segmentStyle[segment.style]
                    }`}
                >
                    {segment.label}
                </span>
            </div>
        ))}
        <div className="upper text-[10px] font-bold text-accent">Now — RMIT MsIT in progress, to Nov 2027</div>
    </div>
);

const RoleBlock = ({experience}) => (
    <div className="max-w-[800px] mb-12 last:mb-0">
        <div className="flex items-center gap-5 mb-5 pb-5 border-b-[3px] border-ink">
            <div className="upper w-14 h-14 bg-ink text-canvas flex items-center justify-center text-[14px] sm:text-[15px] font-black flex-shrink-0">
                {experience.code}
            </div>
            <div>
                <div className="upper text-[18px] sm:text-[22px] font-black">
                    {experience.title} — {experience.company_name}
                </div>
                <div className="upper text-[12px] sm:text-[13px] mt-1 font-semibold">{experience.date}</div>
            </div>
        </div>
        <div className="flex flex-col">
            {experience.points.map((point, index) => (
                <div
                    key={point}
                    className={`flex gap-5 sm:gap-6 py-3.5 sm:py-4 ${
                        index === experience.points.length - 1 ? "" : "border-b border-ink"
                    }`}
                >
                    <div className="text-[15px] sm:text-[16px] font-black text-accent flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[15px] sm:text-[16.5px] leading-[1.55]">{point}</div>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => (
    <Sheet id="experience" fullHeight className="flex flex-col lg:flex-row">
        <div className="lg:w-[220px] lg:flex-shrink-0 lg:border-r-[3px] lg:border-ink lg:pr-10 mb-6 lg:mb-0">
            <SheetEyebrow sheet="03" name="Experience" />
            <WatermarkNumber value="03" />
        </div>

        <div className="lg:pl-[60px] flex-1 min-w-0">
            <DesktopTimeline />
            <MobileTimeline />
            {experiences.map((experience) => (
                <RoleBlock key={experience.company_name} experience={experience} />
            ))}
        </div>
    </Sheet>
);

export default Experience;
