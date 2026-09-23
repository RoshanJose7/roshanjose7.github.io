import {projects, projectsInProgress} from "../constants";
import {AvailabilityIcon, IeeeStamp} from "./blueprint/Icons";
import {projectFigures} from "./blueprint/Diagrams";
import {SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const ProjectCard = ({project, figureNumber}) => {
    const Figure = projectFigures[project.figure];
    return (
        <article className="border-b-[3px] border-r-[3px] border-ink flex flex-col bg-panel">
            <div className="fine h-[150px] box-border p-3 border-b-[3px] border-ink relative">
                <div className="upper absolute top-2 left-2.5 text-[10px] font-bold">
                    Fig. {figureNumber}
                </div>
                {Figure && <Figure />}
            </div>

            <div className="p-6 sm:p-[26px] flex flex-col flex-grow relative">
                {project.ieeeStamp && (
                    <IeeeStamp
                        size={66}
                        className="absolute right-4 sm:right-[18px] -top-[34px] sm:-top-10 rotate-[-10deg] text-accent"
                    />
                )}

                <div className="text-[20px] sm:text-[22px] font-black mb-2.5">
                    {project.name.toUpperCase()}
                    {project.badge && (
                        <span className="upper text-[10px] sm:text-[11px] font-bold border-2 border-ink px-1.5 py-0.5 align-middle ml-1.5">
                            {project.badge}
                        </span>
                    )}
                </div>
                <p className="m-0 text-[14px] leading-[1.5] flex-grow">{project.description}</p>

                <div className="upper flex border-2 border-ink mt-5 text-[10px] sm:text-[11px] font-bold">
                    <div className="flex-1 flex items-center justify-between px-2.5 sm:px-2.5 py-[7px] border-r-2 border-ink">
                        {project.repo.label}
                        <AvailabilityIcon state={project.repo.state} />
                    </div>
                    <div className="flex-1 flex items-center justify-between px-2.5 py-[7px]">
                        {project.demo.label}
                        <AvailabilityIcon state={project.demo.state} />
                    </div>
                </div>

                <div className="flex gap-4 mt-4 flex-wrap">
                    {project.linkLabel && project.project_link && (
                        <a href={project.project_link} target="_blank" rel="noopener noreferrer" className="upper text-[13px] font-bold">
                            {project.linkLabel}
                        </a>
                    )}
                    {project.source_code_link && (
                        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="upper text-[13px] font-bold">
                            [ Repo ]
                        </a>
                    )}
                    {project.project_link && !project.linkLabel && (
                        <a href={project.project_link} target="_blank" rel="noopener noreferrer" className="upper text-[13px] font-bold">
                            [ Demo ]
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

const Projects = () => (
    <Sheet id="projects">
        <SheetEyebrow sheet="04" name="Projects" withRule meta={`0${projects.length} live · 0${projectsInProgress.length} in progress`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-[3px] border-l-[3px] border-ink">
            {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} figureNumber={`04.${index + 1}`} />
            ))}
        </div>

        {projectsInProgress.length > 0 && (
            <div className="mt-8">
                <div className="upper text-[11px] sm:text-[12px] font-bold mb-3.5">
                    System state — not part of live grid
                </div>
                {projectsInProgress.map((project) => (
                    <div
                        key={project.name}
                        className="hatch border-[3px] border-ink px-5 sm:px-[26px] py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                        <div className="bg-panel px-3.5 py-2 border border-ink flex items-center gap-3 w-fit">
                            <svg aria-hidden="true" width="16" height="18" viewBox="0 0 16 18">
                                <rect x="1.5" y="8" width="13" height="9" fill="none" stroke="#101010" strokeWidth="2" />
                                <path d="M4.5 8 V5 a3.5 3.5 0 0 1 7 0 V8" fill="none" stroke="#101010" strokeWidth="2" />
                            </svg>
                            <span className="text-[16px] sm:text-[17px] font-black">
                                {project.name.toUpperCase()}
                            </span>
                        </div>
                        <span className="upper text-[11px] sm:text-[12px] font-bold bg-flag text-white px-3 py-1.5 w-fit">
                            {project.status}
                        </span>
                    </div>
                ))}
            </div>
        )}
    </Sheet>
);

export default Projects;
