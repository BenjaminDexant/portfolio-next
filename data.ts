import { RiComputerFill } from "react-icons/ri";
import { IoLogoJavascript, IoIosArrowForward } from "react-icons/io";
import { DiReact } from "react-icons/Di";
import { FaServer, FaDatabase, FaExchangeAlt, FaNodeJs, FaTools } from "react-icons/fa";
import {
	SiNextDotJs,
	SiTypescript,
	SiKubernetes,
	SiJest,
	SiDocker,
	SiWebpack,
} from "react-icons/si";
import { GoPrimitiveDot } from "react-icons/go";
import { GrIntegration } from "react-icons/gr";
import { AiOutlineCloudServer } from "react-icons/ai";
import { IProject, IService, ISkill } from "./types";

export const services: IService[] = [
	{
		title: "Front End Developer",
		about: "Build nice and scalable Single Page Application using <b>React.js</> & <b>Next.js</>",
		Icon: RiComputerFill,
	},
	{
		title: "Back End Developer",
		about: "Handle <b>Node.js</b> language and <b>API</b> calls using <b>Express</b>",
		Icon: FaServer,
	},
	{
		title: "Database",
		about: "Database developpement and management like <b>MongoDB Atlas</b> or <b>MySQL</b>",
		Icon: FaDatabase,
	},
	{
		title: "WebSocket",
		about: "Set up a <b>WebSocket</b> connexion between user's browser and a server",
		Icon: FaExchangeAlt,
	},
	{
		title: "DevOps tools",
		about: "Very interested into ! /* Skill in progress */",
		Icon: FaTools,
	},
];

export const languages: ISkill[] = [
	{
		title: "Javascript",
		level: "70%",
		Icon: IoLogoJavascript,
	},
	{
		title: "Typescript",
		level: "50%",
		Icon: SiTypescript,
	},
];

export const devTools: ISkill[] = [
	{
		title: "React.js",
		level: "80%",
		Icon: DiReact,
	},
	{
		title: "Next.js",
		level: "50%",
		Icon: SiNextDotJs,
	},
	{
		title: "Node.js",
		level: "70%",
		Icon: FaNodeJs,
	},
	/* 	{
		title: "Jest",
		level: "10%",
		Icon: SiJest,
	},
	{
		title: "Webpack custom config",
		level: "50%",
		Icon: SiWebpack,
	},
	{
		title: "Deployment & cloud providers (Netlify, Heroku, AWS, ..)",
		level: "30%",
		Icon: AiOutlineCloudServer,
	},
 */
];

export const designTools: ISkill[] = [
	{
		title: "Bootstrap / Reactstrap",
		level: "70%",
		Icon: GoPrimitiveDot,
	},
	{
		title: "MaterialUI",
		level: "70%",
		Icon: GoPrimitiveDot,
	},
	{
		title: "Tailwind",
		level: "30%",
		Icon: GoPrimitiveDot,
	},
	{
		title: "Framer",
		level: "30%",
		Icon: GoPrimitiveDot,
	},
	/* 	{
		title: "Wireframe / Maquettage",
		level: "30%",
		Icon: GoPrimitiveDot,
	},
 */
];

export const devopsTools: ISkill[] = [
	{
		title: "Kubernetes",
		level: "30%",
		Icon: SiKubernetes,
	},
	{
		title: "Docker",
		level: "20%",
		Icon: SiDocker,
	},
	{
		title: "GitHub action",
		level: "30%",
		Icon: GrIntegration,
	},
];

export const softSkills: ISkill[] = [
	{
		title: "Autonomous",
		level: "80%",
		Icon: IoIosArrowForward,
	},
	{
		title: "Management",
		level: "80%",
		Icon: IoIosArrowForward,
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: "My Portfolio",
		description: "App made with Next.js Typescript and Tailwind.css.",
		image_path: "/images/portfolio.png",
		deployed_url: "",
		repository_url: "https://github.com/BenjaminDexant/portfolio-next",
		category: ["react", "next", "ts"],
		tech_used: ["React.js", "Next.js", "Typescript", "Tailwind.css"],
	},
	{
		id: 2,
		name: "Jason Crew",
		description:
			"App created and deployed as a test to be part of the Wild Code School Internship class.",
		image_path: "/images/jasoncrew.png",
		deployed_url: "https://silly-torvalds-e383c7.netlify.app/",
		repository_url: "https://github.com/BenjaminDexant/jasoncrew-front-react",
		category: ["react", "mongo", "express", "heroku", "netlify"],
		tech_used: ["React.js", "Express", "Node.js", "Netlify", "Heroku"],
	},
	/* {
		id: 3,
		name: "WebPPIT",
		description:
			"App created during my intership with the French Civil Aviation Authority using React.js, Websocket and Vanilla Javascript.",
		image_path: "",
		deployed_url: "",
		repository_url: "",
		category: ["react"],
		tech_used: ["React.js", "Vanilla JS", "Node.js", "Websocket", "Regexp", "IVY bus"],
	}, */
];