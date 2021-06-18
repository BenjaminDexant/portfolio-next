import { designTools, devopsTools, devTools, languages, softSkills } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { componentFadeOut, fadeInUp } from "../animation";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

const Resume = () => {
	// TODO : add button to hide / show resume details
	const [details1, setDetails1] = useState<boolean>(false);
	const [details2, setDetails2] = useState<boolean>(false);
	const [details3, setDetails3] = useState<boolean>(false);
	return (
		<motion.div
			variants={componentFadeOut}
			initial="initial"
			animate="animate"
			exit="exit"
			className="p-4"
		>
			{/* xp & education */}
			<div className="flex flex-col">
				{/* xp */}
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-2 text-2xl font-bold">Experience</h5>
					<div>
						<div className="flex">
							<h6 className="flex items-center my-2 text-xl font-bold font">
								<BsDot className="text-lightPalette-blue dark:text-darkPalette-orange" /> Developper
								with way too much ideas coming at the same time - april 2020 to now
							</h6>
							<button
								className="px-4 ml-4 text-black rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white focus:outline-none"
								onClick={() => {
									setDetails1(!details1);
									setDetails2(false);
									setDetails3(false);
								}}
							>
								{details1 ? "Close détails" : "Click for détails"}
							</button>
						</div>
						<div style={{ display: details1 ? "inline" : "none" }}>
							<p className="my-2 ">Doing side projects for fun and to continue learning</p>
							<ul className="pl-6 my-2 list-disc">
								<li>Create a Website using React.js & Three.js</li>
								<li>Create a Portfolio Website using Next.js, Typescript & Tailwind & Framer</li>
								<li>
									Create a React app deployed with Netlify, server deployed with Heroku and a
									database hosted with MongoDB Atlas
								</li>
							</ul>
						</div>
					</div>
					<div>
						<div className="flex">
							<h6 className="flex items-center my-2 text-xl font-bold font">
								<BsDot className="text-lightPalette-blue dark:text-darkPalette-orange" /> Front End
								Developper (Internship) - sept 2020 to march 2021
							</h6>
							<button
								className="px-4 py-0 ml-4 text-black rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white focus:outline-none"
								onClick={() => {
									setDetails2(!details2);
									setDetails1(false);
									setDetails3(false);
								}}
							>
								{details2 ? "Close détails" : "Click for détails"}
							</button>
						</div>
						<div style={{ display: details2 ? "inline" : "none" }}>
							<p className="my-2 ">
								Migration from a desktop application to a JS web application of an Air Traffic
								Control simulation program. Graphical interface to assist and/or supervise operators
								during an Air Traffic Control simulation :
							</p>
							<ul className="pl-6 my-2 list-disc">
								<li>Create the Node server and the Websocket connection,</li>
								<li>Create the React application,</li>
								<li>React, Node, Websocket, Vanilla JS and CSS</li>
							</ul>
						</div>
						<p className="italic font-semibold">French Civil Aviation Authority - Toulouse, FR</p>
					</div>
					<div>
						<div className="flex">
							<h6 className="flex items-center my-2 text-xl font-bold font">
								<BsDot className="text-lightPalette-blue dark:text-darkPalette-orange" /> Front &
								Back end Developper - march 2020 to sept 2020
							</h6>
							<button
								className="px-4 py-1 ml-4 text-black rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white focus:outline-none"
								onClick={() => {
									setDetails3(!details3);
									setDetails1(false);
									setDetails2(false);
								}}
							>
								{details3 ? "Close détails" : "Click for détails"}
							</button>
						</div>

						<div style={{ display: details3 ? "inline" : "none" }}>
							<p className="my-2">
								Projects completed during my training with some others students with Wild Code
								School
							</p>
							<ul className="pl-6 list-disc">
								<li>
									<ul>
										<p className="my-2 font-semibold">Project : Court Circuit</p>
										<li>
											Association of producers and consumers promoting short circuits and local
											products
										</li>
										<li>
											Create a responsive web application Front and Back end with management of an
											SQL database for management of different users, products, stocks and orders
										</li>
										<li>React, Node, Express, MySQL</li>
									</ul>
								</li>
								<li>
									<ul>
										<p className="my-2 font-semibold">Project : Game Hoarder</p>
										<li>Create a game library using data from a free API</li>
										<li>React</li>
									</ul>
								</li>
								<li>
									<ul>
										<p className="my-2 font-semibold">Hackathon : Doctolib</p>
										<li>Create a web application about medical tourism</li>
										<li>72h production</li>
										<li>React, Node, Express, MySQL</li>
									</ul>
								</li>
								<li>
									<ul>
										<p className="my-2 font-semibold">Hackathon : Travel Couch</p>
										<li>Create a blog using data from a free API</li>
										<li>48h production</li>
										<li>React</li>
									</ul>
								</li>
							</ul>
						</div>
						<p className="italic font-semibold">Wild Code School - Toulouse, FR</p>
					</div>
				</motion.div>
				{/* Education */}
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-2 text-2xl font-bold">Education</h5>
					<div>
						<h6 className="flex items-center my-2 text-xl font-bold font">
							<BsDot className="text-lightPalette-blue dark:text-darkPalette-orange" /> Developer
							web & mobile - 2020
						</h6>
						<p className="font-semibold">Wild Code Schooll - Toulouse, FR</p>
					</div>
					<div>
						<h6 className="flex items-center my-2 text-xl font-bold font">
							<BsDot className="text-lightPalette-blue dark:text-darkPalette-orange" /> Civil
							Ingineering - Project Manager - 2011
						</h6>
						<p className="font-semibold">CFPCT - Toulouse, FR</p>
					</div>
				</motion.div>
			</div>
			{/* skills & tools */}
			<div className="grid lg:grid-cols-2 2xl:grid-cols-3">
				<div>
					<h5 className="my-2 text-2xl font-bold">Languages</h5>
					<div className="my2">
						{languages.map((language) => (
							<Bar data={language} key={language.title} />
						))}
					</div>
				</div>
				<div>
					<h5 className="my-2 text-2xl font-bold">Frameworks & Libraries</h5>
					<div className="m-2">
						{devTools.map((tool) => (
							<Bar data={tool} key={tool.title} />
						))}
					</div>
				</div>
				<div>
					<h5 className="my-2 text-2xl font-bold">Design Tools</h5>
					<div className="m-2">
						{designTools.map((tool) => (
							<Bar data={tool} key={tool.title} />
						))}
					</div>
				</div>
				<div>
					<h5 className="my-2 text-2xl font-bold">DevOps Tools</h5>
					<div className="m-2">
						{devopsTools.map((tool) => (
							<Bar data={tool} key={tool.title} />
						))}
					</div>
				</div>
				<div>
					<h5 className="my-2 text-2xl font-bold">Soft Skills</h5>
					<div className="my2">
						{softSkills.map((skill) => (
							<Bar data={skill} key={skill.title} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;
