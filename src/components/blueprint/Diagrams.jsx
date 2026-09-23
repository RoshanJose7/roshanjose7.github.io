// Inline schematic SVG diagrams used as figures in the Structural/Blueprint
// design. Geometry copied from the approved design reference
// (design-refs/desktop/Structural.dc.html), colored via `accent` prop so the
// design-system accent token stays a single source of truth.

export const AgentCoordinationFigure = ({accent = "#1B4DFF"}) => (
    <svg
        role="img"
        aria-label="Diagram contrasting chained prompts, a straight line of three steps, with coordinated agents: React to FastAPI, fanning out to three agents joined by a shared coordination layer that feeds decision support."
        viewBox="0 0 880 240"
        style={{display: "block", width: "100%", height: "auto", color: accent}}
        className="font-archivo"
    >
        <defs>
            <marker id="f1ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#101010" />
            </marker>
            <marker id="f1acc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
            </marker>
        </defs>
        <g opacity="0.45">
            <text x="20" y="30" fontSize="11" fontWeight="700" letterSpacing="1" fill="#101010">A — CHAINED PROMPTS</text>
            <rect x="20" y="103" width="56" height="34" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <rect x="110" y="103" width="56" height="34" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <rect x="200" y="103" width="56" height="34" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <text x="48" y="125" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P1</text>
            <text x="138" y="125" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P2</text>
            <text x="228" y="125" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P3</text>
            <line x1="76" y1="120" x2="108" y2="120" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
            <line x1="166" y1="120" x2="198" y2="120" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
            <text x="20" y="205" fontSize="10" fontWeight="700" letterSpacing="1" fill="#101010">SEQUENTIAL</text>
        </g>
        <line x1="280" y1="16" x2="280" y2="224" stroke="#101010" strokeWidth="1.5" strokeDasharray="2 4" />
        <text x="304" y="30" fontSize="11" fontWeight="700" letterSpacing="1" fill="#101010">B — COORDINATED AGENTS</text>
        <rect x="304" y="106" width="76" height="40" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
        <text x="342" y="131" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">REACT</text>
        <line x1="380" y1="126" x2="418" y2="126" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
        <rect x="420" y="106" width="90" height="40" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
        <text x="465" y="131" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">FASTAPI</text>
        <path d="M510 126 H540 M540 64 V188" fill="none" stroke="#101010" strokeWidth="2" />
        <line x1="540" y1="64" x2="568" y2="64" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
        <line x1="540" y1="126" x2="568" y2="126" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
        <line x1="540" y1="188" x2="568" y2="188" stroke="#101010" strokeWidth="2" markerEnd="url(#f1ink)" />
        <rect x="570" y="46" width="96" height="36" fill="#101010" />
        <rect x="570" y="108" width="96" height="36" fill="#101010" />
        <rect x="570" y="170" width="96" height="36" fill="#101010" />
        <text x="618" y="68" fontSize="11" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 01</text>
        <text x="618" y="130" fontSize="11" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 02</text>
        <text x="618" y="192" fontSize="11" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 03</text>
        <path d="M666 64 H702 M666 126 H702 M666 188 H702 M702 64 V188" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" />
        <circle cx="702" cy="64" r="4" fill="currentColor" />
        <circle cx="702" cy="126" r="4" fill="currentColor" />
        <circle cx="702" cy="188" r="4" fill="currentColor" />
        <text x="676" y="36" fontSize="10" fontWeight="700" letterSpacing="1" fill="currentColor">COORDINATION</text>
        <line x1="702" y1="126" x2="742" y2="126" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#f1acc)" />
        <rect x="744" y="100" width="124" height="52" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" />
        <text x="806" y="122" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">DECISION</text>
        <text x="806" y="139" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">SUPPORT</text>
    </svg>
);

// Vertical (mobile) layout of the same Fig. 01 diagram — mobile artboard
// stacks A over B instead of side-by-side.
export const AgentCoordinationFigureVertical = ({accent = "#1B4DFF"}) => (
    <svg
        role="img"
        aria-label="Diagram contrasting chained prompts, a straight line of three steps, with coordinated agents: React to FastAPI, fanning out to three agents joined by a shared coordination layer that feeds decision support."
        viewBox="0 0 320 430"
        style={{display: "block", width: "100%", height: "auto", color: accent}}
        className="font-archivo"
    >
        <defs>
            <marker id="mf1ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#101010" />
            </marker>
            <marker id="mf1acc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
            </marker>
        </defs>
        <g opacity="0.45">
            <text x="4" y="16" fontSize="11" fontWeight="700" letterSpacing="1" fill="#101010">A — CHAINED PROMPTS</text>
            <rect x="4" y="32" width="56" height="30" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <rect x="92" y="32" width="56" height="30" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <rect x="180" y="32" width="56" height="30" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
            <text x="32" y="52" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P1</text>
            <text x="120" y="52" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P2</text>
            <text x="208" y="52" fontSize="12" fontWeight="700" textAnchor="middle" fill="#101010">P3</text>
            <line x1="60" y1="47" x2="90" y2="47" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
            <line x1="148" y1="47" x2="178" y2="47" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
            <text x="248" y="51" fontSize="9" fontWeight="700" letterSpacing="1" fill="#101010">SEQUENTIAL</text>
        </g>
        <line x1="0" y1="84" x2="320" y2="84" stroke="#101010" strokeWidth="1.5" strokeDasharray="2 4" />
        <text x="4" y="110" fontSize="11" fontWeight="700" letterSpacing="1" fill="#101010">B — COORDINATED AGENTS</text>
        <rect x="110" y="124" width="100" height="34" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
        <text x="160" y="146" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">REACT</text>
        <line x1="160" y1="158" x2="160" y2="178" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
        <rect x="110" y="180" width="100" height="34" fill="#FFFFFF" stroke="#101010" strokeWidth="2" />
        <text x="160" y="202" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">FASTAPI</text>
        <path d="M160 214 V230 M60 230 H260" fill="none" stroke="#101010" strokeWidth="2" />
        <line x1="60" y1="230" x2="60" y2="254" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
        <line x1="160" y1="230" x2="160" y2="254" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
        <line x1="260" y1="230" x2="260" y2="254" stroke="#101010" strokeWidth="2" markerEnd="url(#mf1ink)" />
        <rect x="15" y="256" width="90" height="34" fill="#101010" />
        <rect x="115" y="256" width="90" height="34" fill="#101010" />
        <rect x="215" y="256" width="90" height="34" fill="#101010" />
        <text x="60" y="278" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 01</text>
        <text x="160" y="278" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 02</text>
        <text x="260" y="278" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">AGENT 03</text>
        <path d="M60 290 V316 M160 290 V316 M260 290 V316 M60 316 H260" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" />
        <circle cx="60" cy="316" r="4" fill="currentColor" />
        <circle cx="160" cy="316" r="4" fill="currentColor" />
        <circle cx="260" cy="316" r="4" fill="currentColor" />
        <text x="170" y="346" fontSize="10" fontWeight="700" letterSpacing="1" fill="currentColor">COORDINATION</text>
        <line x1="160" y1="316" x2="160" y2="368" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#mf1acc)" />
        <rect x="80" y="370" width="160" height="44" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" />
        <text x="160" y="397" fontSize="11" fontWeight="700" textAnchor="middle" fill="#101010">DECISION SUPPORT</text>
    </svg>
);

export const ZenithFigure = ({accent = "#1B4DFF"}) => (
    <svg
        role="img"
        aria-label="Six bars rising week over week with a dashed trend line, illustrating progressive overload."
        viewBox="0 0 300 110"
        preserveAspectRatio="xMidYMid meet"
        style={{display: "block", width: "100%", height: "100%", color: accent}}
        className="font-archivo"
    >
        <defs>
            <marker id="zacc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
            </marker>
        </defs>
        <line x1="24" y1="96" x2="284" y2="96" stroke="#101010" strokeWidth="2" />
        <rect x="40" y="74" width="22" height="22" fill="#101010" />
        <rect x="80" y="66" width="22" height="30" fill="#101010" />
        <rect x="120" y="58" width="22" height="38" fill="#101010" />
        <rect x="160" y="48" width="22" height="48" fill="#101010" />
        <rect x="200" y="38" width="22" height="58" fill="#101010" />
        <rect x="240" y="24" width="22" height="72" fill="currentColor" />
        <polyline points="51,66 91,58 131,50 171,40 211,30 256,14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#zacc)" />
        <text x="51" y="108" fontSize="9" fontWeight="700" textAnchor="middle" fill="#101010">WK 1</text>
        <text x="251" y="108" fontSize="9" fontWeight="700" textAnchor="middle" fill="#101010">WK 6</text>
    </svg>
);

export const StreamItFigure = ({accent = "#1B4DFF"}) => (
    <svg
        role="img"
        aria-label="Two browser peers streaming packets directly to each other, with the server crossed out."
        viewBox="0 0 300 110"
        preserveAspectRatio="xMidYMid meet"
        style={{display: "block", width: "100%", height: "100%", color: accent}}
        className="font-archivo"
    >
        <defs>
            <marker id="sacc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
            </marker>
        </defs>
        <rect x="118" y="6" width="64" height="28" fill="none" stroke="#101010" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="150" y="24" fontSize="9" fontWeight="700" textAnchor="middle" fill="#101010" opacity="0.6">SERVER</text>
        <path d="M118 6 L182 34 M182 6 L118 34" stroke="#101010" strokeWidth="1.5" />
        <rect x="16" y="52" width="64" height="36" fill="#101010" />
        <text x="48" y="74" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">PEER A</text>
        <rect x="220" y="52" width="64" height="36" fill="#101010" />
        <text x="252" y="74" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">PEER B</text>
        <line x1="82" y1="70" x2="218" y2="70" stroke="currentColor" strokeWidth="2" markerStart="url(#sacc)" markerEnd="url(#sacc)" />
        <rect x="106" y="66" width="8" height="8" fill="currentColor" />
        <rect x="126" y="66" width="8" height="8" fill="currentColor" />
        <rect x="146" y="66" width="8" height="8" fill="currentColor" />
        <rect x="166" y="66" width="8" height="8" fill="currentColor" />
        <rect x="186" y="66" width="8" height="8" fill="currentColor" />
        <text x="150" y="104" fontSize="9" fontWeight="700" textAnchor="middle" fill="#101010">DIRECT · NO STORAGE</text>
    </svg>
);

export const MediaBreezeFigure = ({accent = "#1B4DFF"}) => (
    <svg
        role="img"
        aria-label="Upload passes through API Gateway to a Lambda function, which outputs WebM and WebP."
        viewBox="0 0 300 110"
        preserveAspectRatio="xMidYMid meet"
        style={{display: "block", width: "100%", height: "100%", color: accent}}
        className="font-archivo"
    >
        <defs>
            <marker id="mink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#101010" />
            </marker>
        </defs>
        <rect x="12" y="38" width="66" height="34" fill="#101010" />
        <text x="45" y="59" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF">UPLOAD</text>
        <text x="102" y="47" fontSize="8" fontWeight="700" textAnchor="middle" fill="#101010">API GW</text>
        <line x1="78" y1="55" x2="124" y2="55" stroke="#101010" strokeWidth="2" markerEnd="url(#mink)" />
        <circle cx="150" cy="55" r="24" fill="#FFFFFF" stroke="#101010" strokeWidth="2.5" />
        <text x="150" y="63" fontSize="22" fontWeight="700" textAnchor="middle" fill="#101010">λ</text>
        <text x="150" y="98" fontSize="9" fontWeight="700" textAnchor="middle" fill="#101010">LAMBDA + DOCKER</text>
        <path d="M174 55 H196 M196 31 V79" fill="none" stroke="#101010" strokeWidth="2" />
        <line x1="196" y1="31" x2="214" y2="31" stroke="#101010" strokeWidth="2" markerEnd="url(#mink)" />
        <line x1="196" y1="79" x2="214" y2="79" stroke="#101010" strokeWidth="2" markerEnd="url(#mink)" />
        <rect x="216" y="18" width="72" height="26" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
        <text x="252" y="35" fontSize="10" fontWeight="700" textAnchor="middle" fill="#101010">WEBM</text>
        <rect x="216" y="66" width="72" height="26" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
        <text x="252" y="83" fontSize="10" fontWeight="700" textAnchor="middle" fill="#101010">WEBP</text>
    </svg>
);

export const projectFigures = {
    zenith: ZenithFigure,
    streamit: StreamItFigure,
    mediabreeze: MediaBreezeFigure,
};
