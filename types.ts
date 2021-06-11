import { IconType } from "react-icons";

export interface IService {
	title: string;
	about: string;
	Icon: IconType;
}

export interface ISkill {
	title: string;
	level: string;
	Icon: IconType;
}

export interface IProject {
	id: number;
	name: string;
	description: string;
	image_path: string;
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
