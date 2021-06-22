import { IconType } from "react-icons";

export interface IService {
	title: string;
	titleFr: string;
	about: string;
	aboutFr: string
	Icon: IconType;
}

export interface ISkill {
	title: string;
	level: string;
	Icon: IconType;
}

export interface ISSkill {
	title: string;
	titleFr: string;
	level: string;
	Icon: IconType;
}

export interface IProject {
	id: number;
	name: string;
	description: string;
	descriptionFr: string;
	image_path: string;
	image_path2: string;
	deployed_url: string;
	repository_url: string;
	category: Categorie[];
	tech_used: string[];
}

export type Categorie =
	| "react"
	| "mongo"
	| "node"
	| "express"
	| "next"
	| "ts"
	| "netlify"
	| "heroku"
	| "jest";

export interface IDetails {
	connected: boolean;
	type: string;
}
