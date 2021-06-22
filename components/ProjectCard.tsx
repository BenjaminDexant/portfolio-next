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
	project: {
		name,
		image_path,
		image_path2,
		repository_url,
		deployed_url,
		description,
		descriptionFr,
		tech_used,
		category,
		id,
	},
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
					className="sticky z-10 w-full p-2 text-black lg:absolute lg:top-4 lg:left-4 lg:grid lg:w-11/12 lg:max-h-96 md:p-4 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-4 lg:gap-y-10 dark:text-white bg-lightPalette-greenLight dark:bg-darkPalette-black"
				>
					<motion.div variants={fadeInUp} className="lg:col-start-1 lg:row-span-1">
						<Image
							src={image_path}
							alt={name}
							className="p-1"
							onClick={() => setShowDetails(null)}
							width={250}
							height={120}
							layout="responsive"
						/>
					</motion.div>
					<motion.div
						variants={fadeInUp}
						className="flex justify-center mt-4 space-x-3 xl:mt-8 lg:mt-1 lg:col-start-2 xl:col-start-1 lg:row-span-1 xl:row-start-3"
					>
						<a
							href={repository_url}
							className="flex items-center lg:max-h-12 px-2 py-0.5 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
						>
							<AiFillGithub /> <span>GitHub</span>
						</a>
						<a
							href={deployed_url}
							className="flex items-center lg:max-h-12 px-2 py-0.5 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
						>
							<AiFillProject /> <span>Project</span>
						</a>
					</motion.div>
					<motion.div variants={fadeInUp} className="lg:col-span-2 xl:col-start-2 lg:row-start-1">
						<h2 className="my-2 text-xl font-medium md:text-2x1 xl:text-3xl">{name}</h2>
						<p className="my-2 text-sm font-light md:text-base xl:text-xl">{isEnglish ? description : descriptionFr}</p>
						<div className="flex flex-wrap my-2 space-x-2 text-sm tracking-wider">
							{tech_used.map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 my-0.5 rounded-full bg-lightPalette-white dark:bg-darkPalette-gray"
								>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
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
