import {motion} from "framer-motion";

import {hero, SHEET_TOTAL} from "../constants";
import {ArrowRight, CornerMark} from "./blueprint/Icons";
import {RegistrationCorners, SpecTable} from "./blueprint/Primitives";
import {fadeUp, staggerContainer} from "../utils/motion";

const Hero = () => (
    <section
        id="hero"
        className="relative px-6 py-9 lg:pt-[72px] lg:pb-[88px] lg:px-[100px] box-border border-b-[3px] border-ink lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:min-h-0"
    >
        <RegistrationCorners Icon={CornerMark} />

        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
        >
        <div className="flex justify-between items-center mb-6 lg:mb-7">
            <div className="upper text-accent text-[12px] lg:text-[14px] font-bold">
                {hero.sheet} / Hero
            </div>
            <div className="upper text-[10px] lg:text-[12px] font-bold">
                Sheet {hero.sheet} of {SHEET_TOTAL}
                <span className="hidden sm:inline"> &nbsp;·&nbsp; Scale 1:1</span>
            </div>
        </div>

        <motion.div variants={fadeUp()} className="inline-flex flex-col">
            <h1 className="m-0 text-[52px] sm:text-[68px] lg:text-[104px] leading-[0.95] lg:leading-[0.98] font-black tracking-[-0.01em]">
                HI, I'M<br className="sm:hidden" /> {hero.name}
            </h1>
            <div aria-hidden="true" className="flex items-center mt-4 lg:mt-[18px] h-4">
                <div className="w-0.5 h-4 bg-ink" />
                <div className="flex-grow h-px bg-ink" />
                <div className="upper text-[10px] lg:text-[11px] font-bold px-3 text-accent whitespace-nowrap">
                    {hero.tag}
                </div>
                <div className="flex-grow h-px bg-ink" />
                <div className="w-0.5 h-4 bg-ink" />
            </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mt-8 lg:mt-11">
            <motion.div variants={fadeUp(0.1)} className="max-w-[600px]">
                <p className="m-0 mb-6 lg:mb-8 text-[17px] sm:text-[19px] lg:text-[22px] leading-[1.5] font-medium">
                    {hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row">
                    <motion.a
                        href={hero.primaryCta.href}
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.98}}
                        transition={{duration: 0.15}}
                        className="upper inline-flex items-center justify-between sm:justify-start gap-3 px-7 py-[18px] bg-ink text-canvas text-[14px] font-bold border-[3px] border-ink"
                    >
                        {hero.primaryCta.label}
                        <ArrowRight />
                    </motion.a>
                    <motion.a
                        href={hero.secondaryCta.href}
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.98}}
                        transition={{duration: 0.15}}
                        className="upper inline-flex items-center px-7 py-[18px] bg-panel text-ink text-[14px] font-bold border-[3px] border-ink sm:border-l-0 border-t-0 sm:border-t-[3px]"
                    >
                        {hero.secondaryCta.label}
                    </motion.a>
                </div>
            </motion.div>

            <motion.div variants={fadeUp(0.15)}>
                <SpecTable title="Profile · Rev. 2026" rows={[
                    ...hero.profile.map((row) => ({label: row.label, value: row.value})),
                    {
                        label: "Status",
                        render: (
                            <span className="flex items-center gap-2 font-semibold">
                                <span className="w-[9px] h-[9px] bg-accent inline-block flex-shrink-0" />
                                {hero.status}
                            </span>
                        ),
                    },
                ]} />
            </motion.div>
        </div>
        </motion.div>
    </section>
);

export default Hero;
