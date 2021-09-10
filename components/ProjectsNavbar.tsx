import { FunctionComponent } from "react";
import { Categorie } from "../types";

const NavItem: FunctionComponent<{
	value: Categorie | "all";
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className =
		"capitalize cursor-pointer hover:text-lightPalette-blue dark:hover:text-darkPalette-black";
	if (active === value) className += " text-white dark:text-darkPalette-orange";

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	);
};

const ProjectsNavbar: FunctionComponent<{ handlerFilterCategory: Function; active: string }> = (
	props
) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
			<NavItem value="all" {...props} />
			<NavItem value="react" {...props} />
			<NavItem value="next" {...props} />
			<NavItem value="node" {...props} />
			<NavItem value="graphql" {...props} />
			<NavItem value="mongo" {...props} />
			<NavItem value="ts" {...props} />
			<NavItem value="netlify" {...props} />
			<NavItem value="heroku" {...props} />
			<NavItem value="jest" {...props} />
			<NavItem value="rtl" {...props} />
		</div>
	);
};

export default ProjectsNavbar;
