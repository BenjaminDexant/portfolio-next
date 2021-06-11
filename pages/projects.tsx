import { motion } from "framer-motion";
import { useState } from "react";
import { componentFadeOut, fadeInUp, stagger } from "../animation";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects } from "../data";
import { Categorie } from "../types";

const Projects = () => {
	const [displayProjects, setDisplayProjects] = useState(projects);
	const [active, setActive] = useState("all");

	const [showDetails, setShowDetails] = useState<number | null>(null);


	const handlerFilterCategory = (category: Categorie | "all") => {
		if (category === "all") {
			setDisplayProjects(projects);
			setActive(category);
			return;
		}
		const newArray = projects.filter((project) => project.category.includes(category));
		setDisplayProjects(newArray);
		setActive(category);
	};

	return (
		<motion.div
			variants={componentFadeOut}
			initial="initial"
			animate="animate"
			exit="exit"
			className="px-5 py-2 overflow-y-scroll"
			style={{ height: "65vh" }}
		>
			<ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
			<motion.div
				variants={stagger}
				initial="initial"
				animate="animate"
				className="relative grid grid-cols-12 gap-4 my-3"
			>
				{displayProjects.map((project) => (
					<motion.div
						variants={fadeInUp}
						className="col-span-12 py-2 sm:col-span-6 lg:col-span-4 bg-lightPalette-greenLight dark:bg-darkPalette-black"
						key={project.name}
					>
						<ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
