import {dealberg, github, linkedin, mediabreeze, ostello, streamit} from "../assets";

export const navLinks = [
    {id: "about", title: "About"},
    {id: "experience", title: "Experience"},
    {id: "projects", title: "Projects"},
    {id: "skills", title: "Skills"},
    {id: "education", title: "Education"},
    {id: "volunteer", title: "Volunteer"},
    {id: "publications", title: "Publications"},
    {id: "contact", title: "Contact"},
];

export const hero = {
    greeting: "Hi, I'm Roshan",
    subheadline: "Software Engineer (2 YOE) building AI/LLM applications — MsIT @ RMIT",
    primaryCta: {label: "View Work", href: "#projects"},
    secondaryCta: {label: "Get in Touch", href: "#contact"},
};

export const about = {
    paragraphs: [
        "I'm a software engineer with 2 years of experience building full-stack and backend systems — most recently leading a migration that cut load times and dropped user churn by 25%, and shipping features that grew a user base past 200%.",
        "Right now I'm finishing a Master's in IT at RMIT, and using my final-year project to go deeper into AI: I'm building an AI agents system for financial analysis (FastAPI + React), working through how multiple agents can actually coordinate on decision support rather than just chaining prompts.",
        "Looking for Software Engineer and AI Engineer roles in Melbourne — always happy to connect.",
    ],
};

export const experiences = [
    {
        title: "SDE-1",
        company_name: "DealBerg Technologies",
        icon: dealberg,
        iconBg: "#f0f0f0",
        date: "Aug 2023 - Jul 2025",
        points: [
            "Led the migration of the customer portal from Flutter to GatsbyJS, cutting page load times and improving SEO, which reduced user drop-off by 25% (tracked via PostHog).",
            "Architected and launched the company's first vendor portal, automating PO management and shipment creation, which eliminated manual data entry and cut human error by 70%.",
            "Built and deployed a cross-platform Flutter admin app (iOS & Android), adopted by 80% of operations staff, streamlining field workflows.",
            "Designed an admin analytics dashboard with margin analysis and downloadable revenue reports, giving real-time visibility into unprofitable accounts and team performance.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Ostello",
        icon: ostello,
        iconBg: "#f0f0f0",
        date: "Jul 2022 - Jul 2023",
        points: [
            "Built new product features that grew the user base by over 200% while maintaining 100% uptime, and reduced cost per lead by 7% through closer alignment between Sales and Product.",
            "Built an initial RAG-based chatbot (OpenAI API + LangChain) for the Ostello mobile app, enabling natural-language course/institute search; reduced counselling team support tickets by 25% among the ~10% of students who used it.",
        ],
    },
];

// Toggle to true once Financial-Advisor has a real repo/demo link to show.
const SHOW_FINANCIAL_ADVISOR = false;

const financialAdvisor = {
    enabled: SHOW_FINANCIAL_ADVISOR,
    name: "Financial-Advisor",
    title: "Financial-Advisor — AI Agents for Financial Analysis",
    description:
        "AI agents system for financial analysis, built with FastAPI, React, and the Anthropic SDK directly (no LangChain/LangGraph) — multiple agents coordinating on decision support, deployed on Azure AI Foundry.",
    tags: ["FastAPI", "React", "Anthropic SDK", "Azure AI Foundry"],
    source_code_link: null,
    project_link: null,
    status: "In progress — not yet published (expected ~Nov 2026)",
};

const zenith = {
    enabled: true,
    name: "Zenith",
    title: "Zenith — Private Fitness Tracker for Serious Athletes (Beta)",
    description:
        "Subscription fitness app (React, Supabase) combining workout and nutrition logging with a private weekly accountability mechanic for small groups. Currently in invite-only beta. Includes opt-in AI features (Groq) for progressive overload suggestions and auto-generated workout summaries, scoped to exercise data only with deterministic fallbacks.",
    tags: ["React", "Supabase", "Groq"],
    source_code_link: null, // closed-source, paid product
    project_link: null, // fill in with landing page URL once public
    demoNote: "Demo access available on request",
};

const streamItProject = {
    enabled: true,
    name: "StreamIt",
    title: "StreamIt — Peer-to-Peer File Streaming App",
    description:
        "Real-time peer-to-peer file transfer app built with React, Socket.io, and Express. Users create a room, invite peers, and stream files directly between browsers without size limits or server-side storage. The underlying approach was published in IEEE Xplore (\"Peer-to-Peer File Streaming Using Web Sockets Protocol,\" May 2023).",
    tags: ["React", "Socket.io", "Express"],
    image: streamit,
    source_code_link: "https://github.com/RoshanJose7/streamit-app",
    project_link: "https://drive.google.com/file/d/16Uq2_A7GSlhI03B5DC8SGWen2aYWKj9k/view",
};

const mediaBreeze = {
    enabled: true,
    name: "MediaBreeze",
    title: "MediaBreeze — Serverless Media Transcoder",
    description:
        "Serverless media transcoding function (AWS Lambda + Docker) that converts uploaded media to WebM/WebP for cross-browser compatibility. Invoked via API Gateway. Code only — no persistent hosting, runs on-demand via Lambda.",
    tags: ["AWS Lambda", "Docker"],
    image: mediabreeze,
    source_code_link: "https://github.com/RoshanJose7/MediaBreeze",
    project_link: null, // serverless function, not a hosted app, by design
};

// Financial-Advisor stays hidden (enabled: false) until a real link is added — see toggle above.
export const projects = [financialAdvisor, zenith, streamItProject, mediaBreeze].filter(
    (project) => project.enabled
);

export const skills = [
    {category: "Languages", items: ["Python", "TypeScript", "JavaScript"]},
    {category: "Backend", items: ["FastAPI", "NestJS"]},
    {category: "Frontend", items: ["React", "Flutter"]},
    {category: "AI / Cloud", items: ["Azure AI Foundry", "Anthropic API", "Groq"]},
    {category: "Other", items: ["SQL", "Docker", "Git"]},
];

export const education = [
    {
        school: "RMIT University",
        degree: "Master's, Information Technology",
        date: "Jul 2025 - Nov 2027",
        detail: "Relevant coursework: Database Concepts, Data Structures, Advanced Algorithms, Artificial Intelligence.",
    },
    {
        school: "MVJ College of Engineering",
        degree: "Bachelor of Engineering, Computer Science",
        date: "2019 - 2023",
        detail: "8.66/10 CGPA.",
    },
];

export const volunteer = [
    {
        title: "Technical Lead (Founding Team)",
        organization: "GDSC MVJCE",
        date: "Oct 2021 - Jul 2022",
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
    linkedin: {label: "linkedin.com/in/sroshanjose", href: "https://www.linkedin.com/in/sroshanjose/", icon: linkedin},
    github: {label: "github.com/RoshanJose7", href: "https://github.com/RoshanJose7/", icon: github},
};
