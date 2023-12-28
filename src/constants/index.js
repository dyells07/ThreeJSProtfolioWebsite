import { meta, shopify, logo, CodeForChange,LogoInsoft } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    Sql,
    dotnet,
    jquery,
    python,
    django,
    scikit,
    bootstrap
} from "../assets/icons";

export const skills = [
    {
        imageUrl: dotnet,
        name: "Dotnet",
        type: "Backend",
    },
    {
        imageUrl: Sql,
        name: "Sql",
        type: "Backend",
    },
    {
        imageUrl: jquery,
        name: "JQuery",
        type: "Frontend",
    },
    {
        imageUrl: scikit,
        name: "Scikit Learn",
        type: "Machine Learning",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },


    
];

export const experiences = [
    {
        title: "Technical Lead ",
        company_name: "Code For Change",
        icon: CodeForChange,
        iconBg: "#f3bf21",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Software Developer",
        company_name: "Insoft Research and Development",
        icon: LogoInsoft ,
        iconBg: "#ffffff",
        date: "Jul 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dyells07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bipin-khanal-495617184/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];