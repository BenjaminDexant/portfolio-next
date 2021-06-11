import { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
	useEffect(() => {
		if (pathname === "/") setActiveItem("About Me");
		if (pathname === "/resume") setActiveItem("My Resume");
		if (pathname === "/projects") setActiveItem("My Projects");
	}, []);
	return (
		<div className="flex justify-between px-5 py-5 my-3">
			<span className="text-lg font-bold border-b-4 border-white dark:border-black lg:text-2xl">{activeItem}</span>
			<div className="flex space-x-5 text-lg text-white">
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name={"About Me"}
					route={"/"}
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="My Resume"
					route={"/resume"}
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="My Projects"
					route={"/projects"}
				/>{" "}
			</div>
		</div>
	);
};

export default Navbar;
