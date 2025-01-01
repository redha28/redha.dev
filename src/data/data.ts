import htmlIcon from "../images/skills/technical-skill/html.webp";
import cssIcon from "../images/skills/technical-skill/css.webp";
import tailwindsIcon from "../images/skills/technical-skill/tailwinds.webp";
import javascriptIcon from "../images/skills/technical-skill/JavaScript.webp";
import nodeJSIcon from "../images/skills/technical-skill/node-js.webp";
import reactIcon from "../images/skills/technical-skill/react.webp";
import nextIcon from "../images/skills/technical-skill/next-js.webp";
import expressIcon from "../images/skills/technical-skill/express-js.webp";
import nestJsIcon from "../images/skills/technical-skill/nest-js.webp";
import postManIcon from "../images/skills/technical-skill/postman.webp";
import postgreSQLIcon from "../images/skills/technical-skill/postgreSQL.webp";
import golangIcon from "../images/skills/technical-skill/golang.webp";
import ginIcon from "../images/skills/technical-skill/gin-golang.webp";
import dockerIcon from "../images/skills/technical-skill/docker.webp";
import comsIcon from "../images/skills/soft-skill/communication.png";
import pmIcon from "../images/skills/soft-skill/management.png";
import problemIcon from "../images/skills/soft-skill/problem.png";
import teamWorkIcon from "../images/skills/soft-skill/teamwork.png";
import figmaIcon from "../images/skills/desain-skill/figma.webp";
import typeScriptIcon from "../images/skills/technical-skill/typescript.webp";
import reduxIcon from "../images/skills/technical-skill/redux.webp";
import vercelIcon from "../images/skills/technical-skill/vercel.webp";
import supaBaseIcon from "../images/skills/technical-skill/supabase.webp";

interface Experience {
  title: string;
  company?: string;
  major?: string;
  desc: string;
}

interface ImageIcon {
  title: string;
  url: string;
  bg?: string;
}

interface Projects {
  title: string;
  desc: string;
  url: string;
  techStack: {
    title: string;
    url: string;
  }[];
}

const githubUrl: string = "https://github.com/redha28";

export const experience: Experience[] = [
  {
    title: "Staff IT",
    company: "PT. Leader IT Service Solutions",
    desc: "Installed UMPC (Ultra Mobile Personal Computer) devices in 200 mining vehicle units, managed a team of 5 members to ensure proper operation, performed necessary repairs when issues arose, and monitored as well as reported remaining material quantities, achieving 99% performance accuracy.",
  },
  {
    title: "Software Engineer Intern",
    company: "PT Carano Integrasi Teknologi",
    desc: `During my internship, I acquired hands-on experience in learning about Mikrotik Basic, specifically routing and VLAN, as well as building a local network infrastructure. Additionally, I also learned about fiber optic installation.`,
  },
];

export const education: Experience[] = [
  {
    title: "Fazztrack",
    major: "Fullstack Web Golang",
    desc: "Currently studying full-stack web development with a focus on technologies such as ReactJS, NodeJS, TypeScript, and ExpressJS for the JavaScript side, and Golang and Gin for back-end development. In addition, I am exploring containerization with Docker to improve deployment and scalability.",
  },
];

export const technicalSkill: ImageIcon[] = [
  {
    title: "Html",
    url: htmlIcon,
  },
  {
    title: "Css",
    url: cssIcon,
  },
  {
    title: "TailWinds",
    url: tailwindsIcon,
  },
  {
    title: "JavaScript",
    url: javascriptIcon,
  },
  {
    title: "TypeScript",
    url: typeScriptIcon,
  },
  {
    title: "Node JS",
    url: nodeJSIcon,
    bg: "bg-black",
  },
  {
    title: "React Js",
    url: reactIcon,
  },
  {
    title: "Next Js",
    url: nextIcon,
    bg: "bg-white",
  },
  {
    title: "Redux",
    url: reduxIcon,
  },
  {
    title: "Express Js",
    url: expressIcon,
  },
  {
    title: "Nest Js",
    url: nestJsIcon,
  },
  {
    title: "PostMan",
    url: postManIcon,
  },
  {
    title: "PostgreSQL",
    url: postgreSQLIcon,
  },
  {
    title: "Golang",
    url: golangIcon,
  },
  {
    title: "Gin",
    url: ginIcon,
  },
  {
    title: "Docker",
    url: dockerIcon,
  },
  {
    title: "Vercel",
    url: vercelIcon,
  },
  {
    title: "SupaBase",
    url: supaBaseIcon,
  },
];

export const softSkill: ImageIcon[] = [
  {
    title: "Communications",
    url: comsIcon,
  },
  {
    title: "TeamWork",
    url: teamWorkIcon,
  },
  {
    title: "Problem Solving",
    url: problemIcon,
  },
  {
    title: "Project Management",
    url: pmIcon,
  },
];

export const desainSkill: ImageIcon[] = [
  {
    title: "Figma",
    url: figmaIcon,
  },
];

export const project: Projects[] = [
  {
    title: "Coffee Shop",
    desc: "This application is a web-based platform that facilitates the booking process with account creation features for users and an admin panel to manage booking data and activities. Built using TypeScript, React, and Tailwind CSS, this application offers a responsive, modern, and easy-to-use interface.",
    url: `${githubUrl}/coffeein_fe`,
    techStack: technicalSkill.filter((skill) =>
      ["TypeScript", "React Js", "TailWinds", "Redux", "Vercel"].includes(
        skill.title
      )
    ),
  },
  {
    title: "Coffee Shop BackEnd",
    desc: "The backend application for a coffee shop is a system specifically designed to manage the operations and business activities behind the scenes of a coffee shop. This application serves as the backbone of the entire business system, facilitating various important functions needed to run a coffee shop efficiently and successfully.",
    url: `${githubUrl}/coffeein_be`,
    techStack: technicalSkill.filter((skill) =>
      [
        "TypeScript",
        "Express Js",
        "Nest Js",
        "PostMan",
        "PostgreSQL",
        "SupaBase",
        "Vercel",
      ].includes(skill.title)
    ),
  },
  {
    title: "Coffee Shop Mobile",
    desc: "This application is a mobile platform that facilitates the booking process with account creation features for users and an admin panel to manage booking data and activities. Built using TypeScript, React Native, and Tailwind CSS, this application offers a responsive, modern, and easy-to-use interface.",
    url: `${githubUrl}/coffeein_be`,
    techStack: technicalSkill.filter((skill) =>
      ["JavaScript", "React", "Tailwinds", "Redux"].includes(skill.title)
    ),
  },
];
