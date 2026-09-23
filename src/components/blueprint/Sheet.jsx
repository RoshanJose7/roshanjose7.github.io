import {motion} from "framer-motion";

import {fadeUp, revealViewport} from "../../utils/motion";

// Sheet — the per-section wrapper for the Structural/Blueprint design.
// Replaces the old SectionWrapper HOC: every section is a numbered "sheet"
// with a bottom rule, responsive padding, and an anchor id for the nav.
//
// Two sections can share one viewport-height "fold" (see App.jsx groupings):
// `fullHeight` is for a sheet that fills a fold on its own — it owns the
// min-height + centering flex directly. `grow` is for a sheet sharing a
// fold with a fixed-height sibling (Contact + Footer) — it expands via
// flex-1 to fill whatever the sibling doesn't need, centering its own
// content, while the *fold's* min-height/flex wrapper lives in App.jsx.
// Either way the outer <section> owns the centering flex so each section's
// own internal layout (passed via `className`, e.g. About's two-column
// row) stays on an inner wrapper and never fights the centering direction.
//
// The inner wrapper fades + slides up once as it scrolls into view — this
// alone gives every sheet a scroll-reveal without each component opting in.
const Sheet = ({id, className = "", noBorder = false, fullHeight = false, grow = false, children}) => (
    <section
        id={id}
        className={`relative px-6 py-11 lg:px-[100px] lg:py-[88px] box-border ${
            noBorder ? "" : "border-b-[3px] border-ink"
        } ${fullHeight ? "lg:min-h-screen lg:flex lg:flex-col lg:justify-center" : ""} ${
            grow ? "lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:min-h-0" : ""
        }`}
    >
        <motion.div
            className={className}
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
        >
            {children}
        </motion.div>
    </section>
);

export default Sheet;
