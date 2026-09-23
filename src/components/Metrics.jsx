import {motion} from "framer-motion";

import {metrics} from "../constants";
import {CheckBox, TrendDown, TrendUp} from "./blueprint/Icons";
import {AccentProgressBar, HatchProgressBar, SegmentedBar} from "./blueprint/Primitives";
import {fadeUp, staggerContainer} from "../utils/motion";

const trendIcon = {
    down: <TrendDown className="text-accent" />,
    up: <TrendUp className="text-accent" />,
    check: <CheckBox className="text-accent" />,
};

const MetricCard = ({metric, index, total}) => {
    const isRightEdge = index % 2 === 1; // 2-col mobile grid
    const isLastRow = index >= total - 2;
    return (
        <motion.div
            variants={fadeUp()}
            whileHover={{backgroundColor: "rgba(27, 77, 255, 0.05)"}}
            className={`p-5 lg:p-6 border-ink ${isRightEdge ? "" : "border-r-[3px]"} ${
                isLastRow ? "" : "border-b-[3px]"
            } lg:border-b-0 ${index === total - 1 ? "lg:border-r-0" : "lg:border-r-[3px]"}`}
        >
            <div className="flex items-center gap-2.5">
                <div className="text-[36px] sm:text-[48px] lg:text-[60px] font-black leading-none">
                    {metric.value}
                </div>
                {trendIcon[metric.trend]}
            </div>

            {metric.barStyle === "hatch" && <HatchProgressBar fill={metric.barFill} />}
            {metric.barStyle === "accent" && <AccentProgressBar fill={metric.barFill} />}
            {metric.barStyle === "segmented" && <SegmentedBar />}

            <div className="upper text-[11px] lg:text-[12px] font-bold">{metric.label}</div>
            <div className="text-[12px] lg:text-[13px] mt-1">{metric.detail}</div>
        </motion.div>
    );
};

const Metrics = () => (
    <section aria-label="Impact metrics" className="px-6 py-9 lg:py-14 lg:px-[100px] box-border border-b-[3px] border-ink lg:flex-shrink-0">
        <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 lg:grid-cols-4 border-[3px] border-ink bg-panel"
        >
            {metrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} total={metrics.length} />
            ))}
        </motion.div>
    </section>
);

export default Metrics;
