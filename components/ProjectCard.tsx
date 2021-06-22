import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { IProject } from "../types";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";
import { useLanguageContext } from "../context/language";

const ProjectCard: FunctionComponent<{
	project: IProject;
	showDetails: null | number;
	setShowDetails: (id: null | number) => void;
}> = ({
	project: { name, image_path, repository_url, deployed_url, description, descriptionFr, tech_used, category, id },
	showDetails,
	setShowDetails,
}) => {
	const languageContext = useLanguageContext();
	let isEnglish = languageContext.contextLang;

	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				className="cursor-pointer"
				onClick={() => setShowDetails(id)}
				width={300}
				height={150}
				layout="responsive"
			/>
			<p className="my-2 text-center">{name}</p>
			{showDetails === id && (
				<motion.div
					variants={stagger}
					initial="initial"
					animate="animate"
					className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black md:p-8 md:grid-cols-2 gap-x-12 dark:text-white bg-lightPalette-greenLight dark:bg-darkPalette-black"
				>
					<div className="grid col-span-1">
						<motion.div variants={fadeInUp}>
							<Image
								src={image_path}
								alt={name}
								className="py-3"
								onClick={() => setShowDetails(null)}
								width={300}
								height={150}
								layout="responsive"
							/>{" "}
						</motion.div>
						<motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
							<a
								href={repository_url}
								className="flex items-center px-4 py-2 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
							>
								<AiFillGithub /> <span>GitHub</span>
							</a>
							<a
								href={deployed_url}
								className="flex items-center px-4 py-2 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
							>
								<AiFillProject /> <span>Project</span>
							</a>
						</motion.div>
					</div>
					<div className="grid col-span-1">
						<motion.div variants={fadeInUp} className="mt-7">
							<h2 className="mb-3 text-xl font-medium md:text-2x1">{name}</h2>
							<p className="mb-3 font-medium">{isEnglish ? description : descriptionFr}</p>
							<div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
								{tech_used.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 my-1 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
					<button
						onClick={() => setShowDetails(null)}
						className="absolute text-white bg-black rounded-full dark:text-black top-3 right-3 dark:bg-darkPalette-white focus:outline-none"
					>
						<IoMdClose size={30} />
					</button>
				</motion.div>
			)}
		</div>
	);
};

export default ProjectCard;
