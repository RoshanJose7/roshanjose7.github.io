import {about} from "../constants";
import {AgentCoordinationFigure, AgentCoordinationFigureVertical} from "./blueprint/Diagrams";
import {SheetEyebrow, WatermarkNumber} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const About = () => (
    <Sheet id="about" fullHeight className="flex flex-col lg:flex-row">
        <div className="lg:w-[220px] lg:flex-shrink-0 lg:border-r-[3px] lg:border-ink lg:pr-10 mb-6 lg:mb-0">
            <SheetEyebrow sheet={about.sheet} name="Profile" />
            <WatermarkNumber value={about.sheet} />
        </div>

        <div className="lg:pl-[60px] flex-1 min-w-0">
            <div className="max-w-[780px] flex flex-col gap-6">
                {about.paragraphs.map((paragraph, index) => (
                    <p
                        key={`about-paragraph-${index}`}
                        className={`m-0 text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.6] ${
                            index === 0 ? "font-medium" : "font-normal"
                        }`}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <figure className="mt-9 lg:mt-11 border-[3px] border-ink">
                <div className="upper flex justify-between px-4 py-2.5 border-b-[3px] border-ink bg-panel text-[10px] lg:text-[11px] font-bold">
                    <span>Fig. 01 — Final-year project</span>
                    <span className="hidden sm:inline">Schematic · not to scale</span>
                </div>
                <div className="fine p-3.5 sm:p-3">
                    <div className="hidden sm:block">
                        <AgentCoordinationFigure />
                    </div>
                    <div className="sm:hidden">
                        <AgentCoordinationFigureVertical />
                    </div>
                </div>
            </figure>
        </div>
    </Sheet>
);

export default About;
