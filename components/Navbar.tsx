import { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useLanguageContext } from "../context/language";

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span onClick={() => setActiveItem(name)} className="hover:text-black">
					{name}
				</span>
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>("");
	const { pathname } = useRouter();
	const languageContext = useLanguageContext();
	let isEnglish = languageContext.contextLang;

	useEffect(() => {
		if (pathname === "/") setActiveItem(isEnglish ? "About Me" : "A propos de moi");
		if (pathname === "/resume") setActiveItem(isEnglish ? "My Resume" : "Mon CV");
		if (pathname === "/projects") setActiveItem(isEnglish ? "My Projects" : "Mes Projets");
	}, []);
	return (
		<div className="flex justify-between px-5 py-5 my-3">
			<span className="text-lg font-bold border-b-4 border-white dark:border-black lg:text-2xl">
				{activeItem}
			</span>
			<div className="flex space-x-5 text-lg text-white">
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name={isEnglish ? "About Me" : "A propos de moi"}
					route={"/"}
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name={isEnglish ? "My Resume" : "Mon CV"}
					route={"/resume"}
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name={isEnglish ? "My Projects" : "Mes Projets"}
					route={"/projects"}
				/>
			</div>
		</div>
	);
};

export default Navbar;
