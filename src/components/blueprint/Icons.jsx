// Reusable inline SVG icons for the Structural/Blueprint design system.
// Path data is copied from the approved design reference
// (design-refs/desktop/Structural.dc.html) to preserve exact proportions.

export const CrosshairMark = ({size = 30, className = ""}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 30 30" className={className}>
        <circle cx="15" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="15" y1="0" x2="15" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="0" y1="15" x2="30" y2="15" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const CornerMark = ({size = 28, className = ""}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 28 28" className={className}>
        <circle cx="14" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="0" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

export const ArrowRight = ({size = 16, stroke = "#FAFAFA"}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16">
        <path d="M2 8 H13 M9 4 L13 8 L9 12" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
);

export const TrendDown = ({className = ""}) => (
    <svg aria-hidden="true" width="22" height="30" viewBox="0 0 22 30" className={className}>
        <path d="M11 2 V26 M3 18 L11 26 L19 18" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
);

export const TrendUp = ({className = ""}) => (
    <svg aria-hidden="true" width="22" height="30" viewBox="0 0 22 30" className={className}>
        <path d="M11 28 V4 M3 12 L11 4 L19 12" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
);

export const CheckBox = ({className = ""}) => (
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" className={className}>
        <rect x="2" y="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M7 13 L11 17 L19 8" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
);

// Repo/demo availability marks used on project cards.
export const AvailabilityIcon = ({state}) => {
    if (state === "available") {
        return (
            <svg aria-label="Available" role="img" width="12" height="12" viewBox="0 0 12 12">
                <rect x="1" y="1" width="10" height="10" fill="#101010" stroke="#101010" strokeWidth="1.5" />
            </svg>
        );
    }
    if (state === "partial") {
        return (
            <svg aria-label="Partially available" role="img" width="12" height="12" viewBox="0 0 12 12">
                <rect x="1" y="1" width="10" height="10" fill="none" stroke="#101010" strokeWidth="1.5" />
                <path d="M1 11 L11 1 L11 11 z" fill="#101010" />
            </svg>
        );
    }
    return (
        <svg aria-label="Not available" role="img" width="12" height="12" viewBox="0 0 12 12">
            <rect x="1" y="1" width="10" height="10" fill="none" stroke="#101010" strokeWidth="1.5" />
            <path d="M1 1 L11 11 M11 1 L1 11" stroke="#101010" strokeWidth="1.5" />
        </svg>
    );
};

export const IeeeStamp = ({size = 78, className = ""}) => (
    <svg
        role="img"
        aria-label="Published in IEEE Xplore, May 2023"
        width={size}
        height={size}
        viewBox="0 0 78 78"
        className={className}
    >
        <circle cx="39" cy="39" r="36" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="39" cy="39" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="39" y="36" fontSize="14" fontWeight="900" textAnchor="middle" fill="currentColor">IEEE</text>
        <text x="39" y="47" fontSize="7.5" fontWeight="700" letterSpacing="1" textAnchor="middle" fill="currentColor">XPLORE</text>
        <text x="39" y="57" fontSize="7.5" fontWeight="700" letterSpacing="0.5" textAnchor="middle" fill="currentColor">MAY 2023</text>
    </svg>
);

export const MailIcon = ({size = 26}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className="flex-shrink-0">
        <rect x="2" y="5" width="20" height="14" fill="none" stroke="#101010" strokeWidth="2" />
        <path d="M2 5 L12 13 L22 5" fill="none" stroke="#101010" strokeWidth="2" />
    </svg>
);

export const LinkedInIcon = ({size = 26}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className="flex-shrink-0">
        <rect x="2" y="3" width="20" height="18" fill="none" stroke="#101010" strokeWidth="2" />
        <circle cx="9" cy="10" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
        <path d="M5 18 C5 14.5 13 14.5 13 18 M15 9 H19 M15 13 H19" fill="none" stroke="#101010" strokeWidth="2" />
    </svg>
);

export const GitHubIcon = ({size = 26}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className="flex-shrink-0">
        <path d="M8 6 L2 12 L8 18 M16 6 L22 12 L16 18 M14 4 L10 20" fill="none" stroke="#101010" strokeWidth="2" />
    </svg>
);

export const HamburgerIcon = ({size = 20}) => (
    <svg aria-hidden="true" width={size} height={Math.round((size * 16) / 20)} viewBox="0 0 20 16">
        <path d="M0 2 H20 M0 8 H20 M0 14 H12" fill="none" stroke="#101010" strokeWidth="2.5" />
    </svg>
);

export const CloseIcon = ({size = 18}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 20 20">
        <path d="M2 2 L18 18 M18 2 L2 18" fill="none" stroke="#101010" strokeWidth="2.5" />
    </svg>
);

// Skills section category icons, keyed by src/constants icon name.
const skillIconPaths = {
    languages: (
        <path d="M8 6 L2 12 L8 18 M16 6 L22 12 L16 18" fill="none" stroke="#101010" strokeWidth="2" />
    ),
    backend: (
        <>
            <rect x="3" y="3" width="18" height="7" fill="none" stroke="#101010" strokeWidth="2" />
            <rect x="3" y="14" width="18" height="7" fill="none" stroke="#101010" strokeWidth="2" />
            <rect x="6" y="5.5" width="2" height="2" fill="#101010" />
            <rect x="6" y="16.5" width="2" height="2" fill="#101010" />
        </>
    ),
    frontend: (
        <>
            <rect x="2" y="4" width="20" height="16" fill="none" stroke="#101010" strokeWidth="2" />
            <line x1="2" y1="9" x2="22" y2="9" stroke="#101010" strokeWidth="2" />
            <rect x="4.5" y="5.5" width="2" height="2" fill="#101010" />
            <rect x="8" y="5.5" width="2" height="2" fill="#101010" />
        </>
    ),
    ai: (
        <>
            <circle cx="5" cy="12" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <circle cx="19" cy="5" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <circle cx="19" cy="19" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <path d="M7.3 11 L16.7 6 M7.3 13 L16.7 18 M19 7.5 V16.5" fill="none" stroke="#101010" strokeWidth="2" />
        </>
    ),
    other: (
        <>
            <circle cx="6" cy="5" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <circle cx="6" cy="19" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <circle cx="18" cy="8" r="2.5" fill="none" stroke="#101010" strokeWidth="2" />
            <path d="M6 7.5 V16.5 M18 10.5 C18 14 6 13 6 16.5" fill="none" stroke="#101010" strokeWidth="2" />
        </>
    ),
};

export const SkillIcon = ({icon, size = 30}) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24">
        {skillIconPaths[icon] ?? null}
    </svg>
);
