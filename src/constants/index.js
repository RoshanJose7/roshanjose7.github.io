// Sheet numbers drive the "NN / Section" eyebrow label and the footer's
// "Sheet NN of TOTAL" counter throughout the Structural/Blueprint design.
export const SHEET_TOTAL = 9;

export const navLinks = [
    {id: "about", title: "About", sheet: "02"},
    {id: "experience", title: "Experience", sheet: "03"},
    {id: "projects", title: "Projects", sheet: "04"},
    {id: "skills", title: "Skills", sheet: "05"},
    {id: "education", title: "Education", sheet: "06"},
    {id: "volunteer", title: "Volunteer", sheet: "07"},
    {id: "publications", title: "Publications", sheet: "08"},
    {id: "contact", title: "Contact", sheet: "09"},
];

export const hero = {
    sheet: "01",
    name: "ROSHAN.",
    tag: "2 yrs · full-stack + backend",
    subheadline: "Software Engineer (2 YOE) building AI/LLM applications — MsIT @ RMIT.",
    primaryCta: {label: "View Work", href: "#projects"},
    secondaryCta: {label: "Get in Touch", href: "#contact"},
    status: "Open to SWE / AI roles",
    profile: [
        {label: "Name", value: "Roshan Jose"},
        {label: "Role", value: "Software Engineer"},
        {label: "Focus", value: "AI / LLM applications"},
        {label: "Base", value: "Melbourne, AU"},
        {label: "Study", value: "MsIT, RMIT — to Nov 2027"},
    ],
};

// Impact metrics strip (between Hero and About) — figures drawn from the
// Experience bullets below; not a separately numbered sheet.
export const metrics = [
    {
        value: "−25%",
        trend: "down",
        barFill: 75,
        barStyle: "hatch",
        label: "User drop-off",
        detail: "Portal migration · DealBerg",
    },
    {
        value: "−70%",
        trend: "down",
        barFill: 30,
        barStyle: "hatch",
        label: "Human error",
        detail: "Vendor portal · DealBerg",
    },
    {
        value: "80%",
        trend: "check",
        barFill: 80,
        barStyle: "accent",
        label: "Ops staff adoption",
        detail: "Flutter admin app · DealBerg",
    },
    {
        value: "200%+",
        trend: "up",
        barStyle: "segmented",
        label: "User base growth",
        detail: "New product features · Ostello",
    },
];

export const about = {
    sheet: "02",
    paragraphs: [
        "I'm a software engineer with 2 years of experience building full-stack and backend systems — most recently leading a migration that cut load times and dropped user churn by 25%, and shipping features that grew a user base past 200%.",
        "Right now I'm finishing a Master's in IT at RMIT, and using my final-year project to go deeper into AI: I'm building an AI agents system for financial analysis (FastAPI + React), working through how multiple agents can actually coordinate on decision support rather than just chaining prompts.",
        "Looking for Software Engineer and AI Engineer roles in Melbourne — always happy to connect.",
    ],
};

export const experiences = [
    {
        code: "DB",
        title: "SDE-1",
        company_name: "DealBerg Technologies",
        date: "Aug 2023 — Jul 2025",
        points: [
            "Led the migration of the customer portal from Flutter to GatsbyJS, cutting page load times and improving SEO, which reduced user drop-off by 25% (tracked via PostHog).",
            "Architected and launched the company's first vendor portal, automating PO management and shipment creation, which eliminated manual data entry and cut human error by 70%.",
            "Built and deployed a cross-platform Flutter admin app (iOS & Android), adopted by 80% of operations staff, streamlining field workflows.",
            "Designed an admin analytics dashboard with margin analysis and downloadable revenue reports, giving real-time visibility into unprofitable accounts and team performance.",
        ],
    },
    {
        code: "OS",
        title: "Full Stack Developer",
        company_name: "Ostello",
        date: "Jul 2022 — Jul 2023",
        points: [
            "Built new product features that grew the user base by over 200% while maintaining 100% uptime, and reduced cost per lead by 7% through closer alignment between Sales and Product.",
            "Built an initial RAG-based chatbot (OpenAI API + LangChain) for the Ostello mobile app, enabling natural-language course/institute search; reduced counselling team support tickets by 25% among the ~10% of students who used it.",
        ],
    },
];

// Horizontal (desktop) / vertical (mobile) timeline strip above the
// Experience list — years span 2022-2027, positions are % along that span.
export const timelineYears = [2022, 2023, 2024, 2025, 2026, 2027];
export const timelineSegments = [
    {label: "Ostello", start: 8.33, width: 16.67, style: "ink"},
    {label: "DealBerg", start: 26.39, width: 31.94, style: "accent"},
    {label: "RMIT · MsIT", start: 58.33, width: 38.89, style: "hatch"},
];
export const timelineNowMarker = 77.78; // % position of "Now"

// Toggle to true once Financial-Advisor has a real repo/demo link to show.
const SHOW_FINANCIAL_ADVISOR = false;

const financialAdvisor = {
    enabled: SHOW_FINANCIAL_ADVISOR,
    name: "Financial-Advisor",
    status: "In progress — not yet published",
};

const zenith = {
    enabled: true,
    name: "Zenith",
    badge: "Beta",
    figure: "zenith",
    description:
        "Private, subscription fitness tracker for serious athletes. Workout + nutrition logging with a weekly accountability mechanic and opt-in AI suggestions.",
    repo: {state: "unavailable", label: "Repo · Private"},
    demo: {state: "partial", label: "Demo · On request"},
    project_link: "https://zenn1th.tech/",
    linkLabel: "[ View Live ]",
};

const streamItProject = {
    enabled: true,
    name: "StreamIt",
    figure: "streamit",
    ieeeStamp: true,
    description:
        "Real-time P2P file transfer built with React, Socket.io and Express — browsers stream directly to each other, no size limits, no server-side storage.",
    repo: {state: "available", label: "Repo"},
    demo: {state: "available", label: "Demo"},
    source_code_link: "https://github.com/RoshanJose7/streamit-app",
    project_link: "https://drive.google.com/file/d/16Uq2_A7GSlhI03B5DC8SGWen2aYWKj9k/view",
};

const mediaBreeze = {
    enabled: true,
    name: "MediaBreeze",
    figure: "mediabreeze",
    description:
        "Serverless media transcoder on AWS Lambda + Docker, converting uploads to WebM/WebP via API Gateway. Runs on demand — code only, by design.",
    repo: {state: "available", label: "Repo"},
    demo: {state: "unavailable", label: "Demo · N/A"},
    source_code_link: "https://github.com/RoshanJose7/MediaBreeze",
};

// Financial-Advisor stays hidden (enabled: false) until a real link is added — see toggle above.
export const projects = [zenith, streamItProject, mediaBreeze].filter((project) => project.enabled);
export const projectsInProgress = [financialAdvisor].filter((project) => !project.enabled);

export const skills = [
    {code: "A1", icon: "languages", category: "Languages", items: ["Python", "TypeScript", "JavaScript"]},
    {code: "B1", icon: "backend", category: "Backend", items: ["FastAPI", "NestJS"]},
    {code: "C1", icon: "frontend", category: "Frontend", items: ["React", "Flutter"]},
    {code: "D1", icon: "ai", category: "AI / Cloud", items: ["Azure AI Foundry", "Anthropic API", "Groq"]},
    {code: "E1", icon: "other", category: "Other", items: ["SQL", "Docker", "Git"]},
];

export const education = [
    {
        school: "RMIT University",
        degree: "Master's, Information Technology",
        date: "Jul 2025 — Nov 2027",
        detail: "Relevant coursework: Database Concepts, Data Structures, Advanced Algorithms, Artificial Intelligence.",
    },
    {
        school: "MVJ College of Engineering",
        degree: "Bachelor of Engineering, Computer Science",
        date: "2019 — 2023",
        detail: "8.66/10 CGPA.",
    },
];

export const volunteer = [
    {
        title: "Technical Lead (Founding Team)",
        organization: "GDSC MVJCE",
        date: "Oct 2021 — Jul 2022",
        description:
            "Founding member of GDSC at MVJ College of Engineering; led technical programming as Technical Head, running an Android/Kotlin development series, a Flutter festival, and speaking at a Google Developers web event.",
    },
];

export const publications = [
    {
        title: "Peer-to-Peer File Streaming Using Web Sockets Protocol",
        venue: "IEEE Xplore",
        date: "May 2023",
        note: "See StreamIt project.",
        link: "https://github.com/RoshanJose7/streamit-app",
    },
];

export const contact = {
    email: "sroshanjose7@gmail.com",
    linkedin: {label: "linkedin.com/in/sroshanjose", href: "https://www.linkedin.com/in/sroshanjose/"},
    github: {label: "github.com/RoshanJose7", href: "https://github.com/RoshanJose7/"},
};
