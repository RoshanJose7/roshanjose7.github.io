// Shared structural primitives for the Structural/Blueprint design system —
// the "NN / Name" eyebrow, the left ruler rail, oversized watermark numerals,
// and the metric progress-bar styles. Kept together so every section reuses
// the same borders/spacing instead of re-deriving them.

/**
 * "NN / Section Name" eyebrow label in accent color, with an optional
 * right-aligned meta string (sheet counter, live/WIP tally, etc.).
 */
export const SheetEyebrow = ({sheet, name, meta, withRule = false}) => (
    <div
        className={`flex items-center gap-5 ${
            withRule ? "mb-9" : "mb-7 justify-between"
        }`}
    >
        <div className="upper text-accent text-[12px] md:text-[14px] font-bold whitespace-nowrap">
            {sheet} / {name}
        </div>
        {withRule && <div aria-hidden="true" className="flex-grow h-px bg-ink" />}
        {meta && (
            <div className="upper text-[10px] md:text-[12px] font-bold whitespace-nowrap">
                {meta}
            </div>
        )}
    </div>
);

/**
 * Oversized stroke-only watermark numeral used beside a section's opening
 * copy (About/Experience style — desktop only, sits in the left rail).
 */
export const WatermarkNumber = ({value}) => (
    <div
        aria-hidden="true"
        className="hidden lg:block text-[140px] font-black leading-none mt-6 text-transparent"
        style={{WebkitTextStroke: "2px #101010"}}
    >
        {value}
    </div>
);

/** Decorative left ruler rail with minor/major tick marks — desktop only. */
export const RulerRail = () => (
    <div
        aria-hidden="true"
        className="hidden lg:block absolute left-0 top-[92px] bottom-16 w-[28px] border-r border-ink bg-panel"
    >
        <div className="ticks-minor absolute right-0 top-0 bottom-0 w-2" />
        <div className="ticks-major absolute right-0 top-0 bottom-0 w-[18px]" />
    </div>
);

/** Four corner crosshair-style registration marks framing a full-bleed section. */
export const RegistrationCorners = ({Icon}) => (
    <>
        <Icon className="absolute top-5 left-11 hidden sm:block" />
        <Icon className="absolute top-5 right-5" />
        <Icon className="absolute bottom-5 left-11 hidden sm:block" />
        <Icon className="absolute bottom-5 right-5" />
    </>
);

/** Key/value spec-sheet table (used in the Hero "Profile" card). */
export const SpecTable = ({rows, title}) => (
    <div className="border-[3px] border-ink bg-panel w-full sm:w-[440px] flex-shrink-0">
        <div className="hatch h-[28px] sm:h-[30px] border-b-[3px] border-ink flex items-center px-2.5">
            <span className="upper bg-panel px-2 py-0.5 text-[10px] sm:text-[11px] font-bold border border-ink">
                {title}
            </span>
        </div>
        <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[110px_1fr] text-[14px]">
            {rows.map((row, index) => (
                <RowCells key={row.label} row={row} isLast={index === rows.length - 1} />
            ))}
        </div>
    </div>
);

const RowCells = ({row, isLast}) => (
    <>
        <div
            className={`upper px-2.5 sm:px-3 py-2.5 border-r border-ink text-[10px] sm:text-[11px] font-bold ${
                isLast ? "" : "border-b border-ink"
            }`}
        >
            {row.label}
        </div>
        <div className={`px-2.5 sm:px-3 py-2.5 font-semibold ${isLast ? "" : "border-b border-ink"}`}>
            {row.value ?? row.render}
        </div>
    </>
);

/** Solid-fill-plus-hatch progress bar used in the impact-metrics strip. */
export const HatchProgressBar = ({fill}) => (
    <div aria-hidden="true" className="flex h-2.5 sm:h-3.5 my-3 sm:my-[18px] border border-ink">
        <div className="bg-ink" style={{width: `${fill}%`}} />
        <div className="hatch-light" style={{width: `${100 - fill}%`}} />
    </div>
);

/** Solid accent-fill progress bar (adoption-style metric). */
export const AccentProgressBar = ({fill}) => (
    <div aria-hidden="true" className="flex h-2.5 sm:h-3.5 my-3 sm:my-[18px] border border-ink">
        <div className="bg-accent" style={{width: `${fill}%`}} />
        <div className="bg-panel" style={{width: `${100 - fill}%`}} />
    </div>
);

/** Three-segment growth bar (ink + two accent blocks) for the growth metric. */
export const SegmentedBar = () => (
    <div aria-hidden="true" className="flex gap-[3px] h-2.5 sm:h-3.5 my-3 sm:my-[18px]">
        <div className="flex-1 bg-ink" />
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-accent" />
    </div>
);
