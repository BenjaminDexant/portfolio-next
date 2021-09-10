import { RiComputerFill } from "react-icons/ri";
import { IoLogoJavascript, IoIosArrowForward } from "react-icons/io";
import { DiReact } from "react-icons/di";
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
import { IProject, IService, ISkill, ISSkill } from "./types";

export const services: IService[] = [
	{
		title: "Front End Developer",
		titleFr: "Développeur Front End",
		about: "Build nice and scalable Single Page Application using <b>React.js</> & <b>Next.js</>",
		aboutFr:
			"Création de belles et évolutives Single Page Application à l'aide de <b>React.js</> & <b>Next.js</>",
		Icon: RiComputerFill,
	},
	{
		title: "Back End Developer",
		titleFr: "Développeur Back End",
		about: "Handle <b>Node.js</b> language and <b>API</b> calls using <b>Express</b>",
		aboutFr: "Utilisation de <b>Node.js</b> et d'appels <b>API</b> avec <b>Express</b>",
		Icon: FaServer,
	},
	{
		title: "Database",
		titleFr: "Base de données",
		about: "Database developpement and management like <b>MongoDB Atlas</b> or <b>MySQL</b>",
		aboutFr:
			"Création et gestion de bases données Relationelles comme <b>MySQL</b> ou non relationelles comme <b>MongoDB</b>",
		Icon: FaDatabase,
	},
	{
		title: "WebSocket",
		titleFr: "WebSocket",
		about: "Set up a <b>WebSocket</b> connexion between user's browser and a server",
		aboutFr:
			"Création d'une connexion <b>WebSocket</b> entre le navigateur d'un utilisateur et d'un serveur",
		Icon: FaExchangeAlt,
	},
	{
		title: "DevOps tools",
		titleFr: "Pratiques DevOps",
		about: "Very interested into ! /* Skill in progress */",
		aboutFr: "Très intéressé par le sujet /* Compétences en cours d'acquisition */",
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
		level: "70%",
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
	{
		title: "Jest",
		level: "30%",
		Icon: SiJest,
	},
	{
		title: "Webpack",
		level: "50%",
		Icon: SiWebpack,
	},
	{
		title: "Netlify, Heroku",
		level: "70%",
		Icon: AiOutlineCloudServer,
	},
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
		level: "50%",
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
		title: "CI / CD",
		level: "30%",
		Icon: GrIntegration,
	},
];

export const softSkills: ISSkill[] = [
	{
		title: "Autonomous",
		titleFr: "Autonome",
		level: "100%",
		Icon: IoIosArrowForward,
	},
	{
		title: "Teamwork",
		titleFr: "Travail d'équipe",
		level: "100%",
		Icon: IoIosArrowForward,
	},
	{
		title: "Curious",
		titleFr: "Curieux",
		level: "100%",
		Icon: IoIosArrowForward,
	},
	{
		title: "Management",
		titleFr: "Management",
		level: "100%",
		Icon: IoIosArrowForward,
	},
	{
		title: "Quality approach",
		titleFr: "Démarche qualité",
		level: "100%",
		Icon: IoIosArrowForward,
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: "My Portfolio",
		description:
			"Basic portfolio site to show my skills and resume. App made with Next.js Typescript, and Tailwind.css.",
		descriptionFr:
			"Basique portfolio pour mettre en avant mes compétences et mon CV. Application créée à l'aide Next.js, Typescript et Tailwind.css",
		image_path: "/images/portfolio.png",
		image_path2: "",
		deployed_url: "https://benjamin-portfolio.netlify.app/",
		repository_url: "https://github.com/BenjaminDexant/portfolio-next",
		category: ["next", "ts", "netlify"],
		tech_used: ["Next.js", "Typescript", "Tailwind.css", "Netlify"],
	},
	{
		id: 2,
		name: "Jason Crew",
		description:
			"App created and deployed as a test to be part of the Wild Code School Internship class.",
		descriptionFr:
			"Application web créée et mise en ligne afin d'être accepté au sein de la Wild Code School pour une annéee d'alternance (BAC +3/4)",
		image_path: "/images/jasoncrew.png",
		image_path2: "",
		deployed_url: "https://silly-torvalds-e383c7.netlify.app/",
		repository_url: "https://github.com/BenjaminDexant/jasoncrew-front-react",
		category: ["react", "mongo", "express", "heroku", "netlify"],
		tech_used: ["React.js", "Express", "Node.js", "Netlify", "Heroku"],
	},
	{
		id: 3,
		name: "WebPPIT",
		description:
			"App created during my intership with the French Civil Aviation Authority using React.js, Websocket and Vanilla Javascript. Migration from a desktop application to a JS web application of an Air Traffic Control simulation program. Graphical interface to assist and/or supervise operators during an Air Traffic Control simulation. Code & app under lisense.",
		descriptionFr:
			"Application web créée à l'occasion de mon stage de 6 mois au sein de la Direction Générale de l'Aviation Civil au pôle de la Direction Technique et de l'Innovation. Migration d'une application de simulation de contrôle aérien vers une utilisation sur navigateur web Javascript. Interface graphique destinée à assister et/ou superviser un opérateur pendant une simulation de contrôle aérien. Code et application sous licences.",
		image_path: "/images/webppit.png",
		image_path2: "",
		deployed_url: "",
		repository_url: "",
		category: ["react", "node"],
		tech_used: ["React.js", "Vanilla JS", "Node.js", "Websocket", "Regexp", "IVY bus"],
	},
	{
		id: 4,
		name: "Court Circuit",
		description:
			"Association of producers and consumers promoting short circuits and local products. First full stack web app made during my training lessons with the Wild Code School.",
		descriptionFr:
			"Association de producteurs et de consommateurs ayant le but de favoriser les circuits courts et les produits locaux. Première application full stack créée pendant mon apprentissage à la Wild Code School.",
		image_path: "/images/courtcircuit.png",
		image_path2: "",
		deployed_url: "http://51.178.54.132/",
		repository_url: "https://github.com/BenjaminDexant/tlse0320-p3-CourtCircuit-front",
		category: ["react", "node", "express"],
		tech_used: ["React.js", "Node.js", "Express", "MaterialUI", "OVH"],
	},
	{
		id: 5,
		name: "Marvel Wiki",
		description:
			"Marvel wiki using the official Marvel API (https://developer.marvel.com/) made with React. The REST API is wrapped with GraphQL. It makes easier using the API since the official API is so HUGE!",
		descriptionFr:
			"Un wiki à propos de l'univers Marvel créé avec React à l'aide de l'API officielle (https://developer.marvel.com/). Au vu de la taille et de la quantité de données fournies j'ai wrappé l'API REST avec GraphQL. Ceci rend l'accès aux données souhaitées bien plus lisible.",
		image_path: "/images/wikiMarvel.png",
		image_path2: "",
		deployed_url: "https://marvelwiki-react.netlify.app/",
		repository_url: "https://github.com/BenjaminDexant/wikimarvel-react",
		category: ["react", "node", "graphql", "netlify", "jest", "rtl", "heroku"],
		tech_used: ["React.js", "Node.js", "GraphQL", "Netlify", "Heroku"],
	},
];
