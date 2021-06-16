import { NextApiRequest, NextApiResponse } from "next";

import {
	services,
	languages,
	devTools,
	designTools,
	devopsTools,
	softSkills,
	projects,
} from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
	// By default get request

	res
		.status(200)
		.json({ services, languages, devTools, designTools, devopsTools, softSkills, projects });
};
