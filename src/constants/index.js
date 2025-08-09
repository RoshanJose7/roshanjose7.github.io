import {
  aws,
  azure,
  backend,
  bbkbangalore,
  creator,
  dealberg,
  django,
  docker,
  flutter,
  focusontrack,
  gatsby,
  gdsc,
  madempty,
  mediabreeze,
  memorysnap,
  mobile,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  ostello,
  overflowedge,
  postgresql,
  pypasslock,
  python,
  qleanbot,
  qrgenius,
  remindme,
  streamit,
  typescript,
  web,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "SDE - 1",
        icon: creator,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: web,
    },
];

const technologies = [
    {
        name: "Gatsby",
        icon: gatsby,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Nest JS",
        icon: nestjs,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Azure",
        icon: azure,
    },
];

const experiences = [
    {
        title: "SDE - 1",
        company_name: "DealBerg Technologies Pvt Ltd",
        icon: dealberg,
        iconBg: "#f0f0f0",
        date: "Aug 2023 - Jul 2025",
        points: [
            "Led the migration of customer portal from Flutter to GatsbyJS, cutting page load times, significantly improved SEO and reducing user drop off rate by 25% (monitored via PostHog).",
            "Developed a high-impact interactive Unibic festive hampers landing page using React Framer Motion plugin and custom GSAP animations, boosting user engagement by 15% and driving a 30% increase in campaign traffic.",
            "Architected and launched the first vendor portal, automating PO management, shipment creation, eliminating manual data entry which reduced human made errors by 70%.",
            "Built and deployed a cross-platform Flutter admin mobile app (iOS & Android), adopted by 80% of the operations staff and streamlining field workflows and task efficiency.",
            "Designed an admin analytics dashboard with margin analysis and downloadable revenue reports, providing real-time insights to identify unprofitable accounts and optimize team performance.",
            "Launched a dedicated landing page for Quenox Nextgen Packaging, establishing a strong digital presence and driving awareness for the new subsidiary.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Ostello AI",
        icon: ostello,
        iconBg: "#f0f0f0",
        date: "Jul 2022 - Jul 2023",
        points: [
            "Spearheaded the creation and implementation of new features that boosted user growth by over 200% while maintaining 100% uptime, and drove a 7% reduction in cost per lead by aligning Sales, Marketing, and SEO around a unified KPI framework and end‑to‑end client experience.",
            "Managed technical budgets and resources for a startup, optimizing spend and increasing development velocity by 15% through the rollout of CI/CD pipelines with GitHub Actions.",
            "Enhanced website performance and user experience by optimizing the front‑end and integrating third‑party tools, and elevated team capabilities by mentoring interns and new hires on best practices, coding standards, and development methodologies.",
        ],
    },
    {
        title: "Backend Developer Intern",
        company_name: "Ostello AI",
        icon: ostello,
        iconBg: "#f0f0f0",
        date: "Jan 2022 - Jul 2022",
        points: [
            "Collaborated with senior developers and technical team members to design and maintain backend components using JavaScript, actively contributing to code reviews, documentation, and software development best practices.",
            "Received recognition and appreciation from the manager for high-quality work and dedication to improving technical skills and knowledge.",
        ],
    },
    {
        title: "Tech Lead",
        company_name: "GDSC MVJCE",
        icon: gdsc,
        iconBg: "#f0f0f0",
        date: "Oct 2021 - Jul 2022",
        points: [
            "Led the Technical Team at Google Developer Student Club at MVJCE for the year 2022-23.",
            "Facilitated the Android Development with Kotlin Campaign with 3 hand-on projects.",
            "Led the Flutter Festival with over 100 happy participants.",
            "Web Development Speaker at the Google Developers Web Campaign."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Mad Empty",
        icon: madempty,
        iconBg: "#4a3856",
        date: "May 2021 - Sept 2021",
        points: [
            "Primarily worked with developing 3D Animated Landing pages for clients using Open Source tools like ThreeJS and Blender.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Remind ME",
        description:
            "Discover RemindMe: Your Study Companion! This mobile app keeps college students organized, never missing coursework or assignments. Simplify your academic life and stay ahead effortlessly. Get Remind Me now! 📚📅",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "provider",
                color: "green-text-gradient",
            },
            {
                name: "StudyCompanion",
                color: "pink-text-gradient",
            },
        ],
        image: remindme,
        source_code_link: "https://github.com/RoshanJose7/remind_me",
        project_link: "https://drive.google.com/file/d/1xbUPdrDMnndBV06KD69WYtA90wz9iQND/view",
    },
    {
        name: "StreamIt",
        description:
            "Introducing StreamIt: a Peer-to-Peer File streaming App! Say goodbye to file size limitations and tedious uploads. Create a room, invite your peers, upload any file, and let StreamIt handle the rest. Effortless, seamless, and hassle-free file sharing for everyone! 🚀📁",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: streamit,
        project_link: "https://drive.google.com/file/d/16Uq2_A7GSlhI03B5DC8SGWen2aYWKj9k/view",
        source_code_link: "https://github.com/RoshanJose7/streamit-app",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/FocusOnTrack",
        name: "FocusOnTrack - Online Class Attender",
        tags: [
            {
                name: "webscraper",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        image: focusontrack,
        project_link: "Unable to host Python Script!",
        description:
            "Presenting FocusOnTrack: Your Productivity Partner! This web scraper reads your Microsoft Teams Calendar, auto-joining and leaving classes. Focus on important tasks as FocusOnTrack manages class attendance. Maximize productivity with FocusOnTrack! 🤖🎓 #FocusOnTrack #ProductivityPartner #WebScraper",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/QRGenius/",
        project_link: "https://qrcode-generator-red.vercel.app/",
        image: qrgenius,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "qr-code",
                color: "green-text-gradient",
            },
        ],
        name: "QRGenius - QR Code Generator",
        description:
            "Introducing QRGenius: a free, open-source QR Code Generator Web App built with React & TypeScript! Create QR Codes with ease from a range of modifiable options. Tailor it to your needs for ad campaigns or websites. Generate and download your QR Code as an image hassle-free. Unlock the power of QRGenius today! 🌐📲 #QRCodeGenerator #FreeAndOpenSource",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/BBK-Bangalore/tree/master",
        name: "BBK Bangalore - Animated Landing Page",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image: bbkbangalore,
        project_link: "https://bbk-bangalore.vercel.app/",
        description:
            "Experience the dynamic spirit of \"Bangalore Budokan\" Karate Club through our captivating animated landing page. Crafted with React and powered by Framer Motion, this interactive masterpiece brings the essence of martial arts to life.",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/MediaBreeze/",
        name: "MediaBreeze - Media Transcoder",
        tags: [
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "lambda",
                color: "orange-text-gradient",
            },
        ],
        image: mediabreeze,
        project_link: "Cannot redirect to Lambda Function!",
        description:
            "Introducing MediaBreeze: Your Serverless Media Transcoder! Convert any media to webm or webp formats for easy browser compatibility. Efficient, powerful, and perfect for AWS Lambda. Embrace seamless media conversion with MediaTranscode! 🎥🔀 #MediaBreeze #MediaTranscoder #AWSLambda #BrowserFriendly",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/chat_bot/",
        name: "QleanBot - Deep Learning Chatbot",
        image: qleanbot,
        tags: [
            {
                name: "deep-learning",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "tensorflow",
                color: "orange-text-gradient",
            },
        ],
        project_link: "https://drive.google.com/file/d/1i7KH7m2jwYWNqirCBHiVLUmo8VXNQxqc/view?usp=sharing",
        description:
            "Meet our Deep Learning Chatbot: QleanBot! This intelligent bot excels at cleaning user questions using advanced processes like stemming. Trained from the intents JSON file, it's a breeze to add new data and train it for answering similar questions. Experience the power of seamless, accurate responses with our smart QleanBot! 🤖💬 #DeepLearning",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/PyPassLock/",
        name: "PyPassLock - Password Manager",
        image: pypasslock,
        tags: [
            {
                name: "cli",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "encryption",
                color: "pink-text-gradient",
            },
        ],
        project_link: "https://drive.google.com/file/d/1EoFqZdOsRWI7pztVpxtYKAZOAHF-sMiH/view?usp=sharing",
        description:
            "Introducing PyPassLock: Your Secure Python Password Manager! Safeguarded by a master password, it utilizes the cryptography library for robust encryption. Manage your passwords with peace of mind using PyPassLock! 🔒🐍 #PasswordManager #SecureEncryption #PyPassLock",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/MemorySnap/",
        name: "MemorySnap - Daily Moment Tracker",
        image: memorysnap,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "ionic",
                color: "green-text-gradient",
            },
            {
                name: "capacitor",
                color: "pink-text-gradient",
            }
        ],
        project_link: "https://memory-snap.vercel.app/",
        description:
            "Meet MemorySnap: Capture daily moments with ease! This Ionic React app lets you relive memories by storing photos in your gallery. Cherish joy, love, and laughter daily! 📸🎉",
    },
    {
        source_code_link: "https://github.com/RoshanJose7/OverflowEdge/",
        name: "OverflowEdge - StackOverflow Web Scraper",
        image: overflowedge,
        tags: [
            {
                name: "webscraper",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        project_link: "https://drive.google.com/file/d/1h-Pivht5-Fw2J_bcekxOBNMoRSAgx_vh/view?usp=sharing",
        description:
            "Introducing OverflowEdge: Your Dev's Edge! This TypeScript NodeJS web scraping script fetches the latest StackOverflow questions and exports them to CSV. Stay updated and seize the opportunity to be the first to answer. Empower your development journey with OverflowEdge! 🚀📈 #OverflowEdge #WebScraping #StayUpdated #DevEdge",
    },
    // {
    //   source_code_link: "https://github.com/RoshanJose7/MemeItUp/",
    //   name: "MemeItUp - Meme Generator",
    //   tags: [
    //     {
    //       name: "kotlin",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "native",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: null,
    //   project_link: "Mobile App not uploaded to Play Store!",
    //   description:
    //       "Presenting MemeItUp: Your Kotlin Meme Generator App! Capture a picture, add hilarious text, and create your own memes on the fly. Unleash your creativity and share the laughter with MemeItUp! 📸🖌️ #MemeGenerator #KotlinApp #CreativityUnleashed",
    // },
    // {
    //   source_code_link: "https://github.com/RoshanJose7/VoiceCommander/",
    //   name: "VoiceCommander - Virtual Assistant",
    //   image: null,
    //   tags: [
    //     {
    //       name: "assistant",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "automation",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   project_link: "Unable to host Python Script!",
    //   description:
    //       "Meet VoiceCommander: Your Python Text-Based Virtual Assistant! Inspired by Iron Man, it opens applications and plays music/videos from YouTube with simple voice commands using Speech to Text. Experience the futuristic AI of JarvisAI today! 🤖🎵🎬 #VirtualAssistant #PythonAI #JarvisAI",
    // },
    // {
    //   source_code_link: "https://github.com/RoshanJose7/PriceWatchdog/",
    //   name: "PriceWatchdog - Price Tracker",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "cron jobs",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: null,
    //   project_link: "No free server to host API server!",
    //   description:
    //       "Introducing PriceWatchdog: Your MERN Stack Price Tracker! Set price drop limits and product links, and let the server monitor prices. Receive email notifications when prices drop. Never miss a deal with PriceTrackr! 💰📈 #PriceTracker #MERNStack #DealNotifier",
    // },
    // {
    //   source_code_link: "https://github.com/RoshanJose7/TagTrackr/",
    //   name: "TagTrackr - RFID Scanner",
    //   image: null,
    //   tags: [
    //     {
    //       name: "flutter",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "iot",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "firebase",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   project_link: "Mobile App not uploaded to Play Store!",
    //   description:
    //       "Introducing TagTrackr: The Ultimate RFID Mobile App! Easily scan RFID tags using your device's NFC Reader or connect to an RFID Reader via USB. Effortlessly manage inventory with this powerful app. Streamline your processes with TagTrackr today! 📱🔍 #TagTrackr #RFIDMobileApp #InventoryManagement #Efficiency",
    // },
    // {
    //   source_code_link: "https://github.com/RoshanJose7/TaskMaster/",
    //   name: "TaskMaster - Project Management System",
    //   image: null,
    //   tags: [
    //     {
    //       name: "django",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "rest api",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   project_link: "No free server to host API server!",
    //   description:
    //       "Introducing TaskMaster: Your Complete Project Management Companion! Effortlessly track projects, todos, and deadlines in one place. Stay ahead with timely reminders and streamline your workflow. Conquer tasks with TaskMaster! 🚀📅 #TaskMaster #ProjectManagement #DeadlineTracker",
    // },
];

export {services, technologies, experiences, projects};
