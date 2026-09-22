import {motion} from "framer-motion";

import {styles} from "../styles";
import {github, website} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({
                          index,
                          title,
                          description,
                          tags,
                          image,
                          project_link,
                          source_code_link,
                          status,
                          demoNote,
                      }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:-translate-y-1 transition-transform'
        >
            {image && (
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt={`${title} preview`}
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    {project_link && (
                        <div className='absolute inset-0 flex justify-end m-3'>
                            <div
                                onClick={() => window.open(project_link, "_blank")}
                                className='bg-gradient-to-r from-rose-100 to-teal-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={website}
                                    alt='live demo'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    )}

                    {source_code_link && (
                        <div className='absolute inset-x-12 inset-y-0 flex justify-end m-3'>
                            <div
                                onClick={() => window.open(source_code_link, "_blank")}
                                className='bg-gradient-to-r from-gray-700 via-gray-900 to-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                {status && (
                    <p className='mt-2 text-[13px] text-[#915EFF] italic'>{status}</p>
                )}
                {demoNote && !project_link && (
                    <p className='mt-2 text-[13px] text-[#915EFF] italic'>{demoNote}</p>
                )}
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p key={`${title}-${tag}`} className='text-[14px] text-secondary'>
                        #{tag}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${project.name}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
