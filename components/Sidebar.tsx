import { AiFillGithub, AiFillLinkedin, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "next-themes";

import Image from "next/image";

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<div>
			<Image
				src="/images/me.png"
				alt="User avatar"
				className="mx-auto rounded-full"
				width={128}
				height={120}
				layout="intrinsic"
			/>
			<h3 className="my-4 text-2xl font-bold tracking-wider font-baloo">
				Benjamin{" "}
				<span className="text-lightPalette-greenLight dark:text-darkPalette-orange">DEXANT</span>
			</h3>
			<p className="px-2 py-1 my-3 text-black rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white">
				Javascript Developer Web & Mobile
			</p>
			<a
				href="/assets/BenjaminDexantResume.pdf"
				className="flex items-center justify-center px-2 py-1 my-3 text-black rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white"
				download="BenjaminDexantResume.pdf"
			>
				<AiOutlineDownload className="w-6 h-6" />
				Download Resume
			</a>
			{/* social icons */}
			<div className="flex justify-around mx-auto my-4 text-lightPalette-blue dark:text-darkPalette-orange md:w-full">
				<a href="https://github.com/BenjaminDexant" aria-label="github">
					<AiFillGithub className="w-10 h-10 cursor-pointer" />
				</a>
				<a href="https://www.linkedin.com/in/benjamin-dexant/" aria-label="linkedin">
					<AiFillLinkedin className="w-10 h-10 cursor-pointer" />
				</a>
			</div>
			{/* adress */}
			<div
				className="py-4 my-5 font-semibold text-black bg-lightPalette-greenLight dark:bg-darkPalette-white"
				style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
			>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Toulouse, France</span>
				</div>
				<p className="my-2 text-sm">benjamin.dexant@gmail.com</p>
				<p className="my-2 text-sm">+33 6 76 21 34 21</p>
			</div>
			{/* email button */}
			<div className="flex flex-col items-center">
				<button
					className="flex items-center justify-start w-10/12 px-5 py-2 my-2 text-black rounded-full md:w-6/12 lg:w-full bg-lightPalette-greenLight dark:bg-darkPalette-white focus:outline-none"
					onClick={() => window.open("mailto:benjamin.dexant@gmail.com")}
				>
					<AiOutlineMail className="w-1/4" />
					<span className="w-3/4">Email me</span>
				</button>
				{/* toggle theme */}
				<button
					onClick={changeTheme}
					className="flex items-center justify-around w-10/12 px-5 py-2 my-2 text-sm text-center text-black rounded-full md:w-6/12 lg:w-full bg-lightPalette-greenLight dark:bg-darkPalette-white focus:outline-none"
				>
					{theme === "light" ? "Switch to Dark Mode " : "Switch to Light Mode "}
					<div
						className="flex w-1/6 text-white rounded-full lg:w-1/5 bg-lightPalette-white dark:bg-darkPalette-gray"
						style={
							theme === "dark" ? { justifyContent: "flex-end" } : { justifyContent: "flex-start" }
						}
					>
						{theme === "light" ? (
							<FiMoon className="w-8 h-8 p-1 rounded-full bg-lightPalette-blue" />
						) : (
							<FiSun className="w-8 h-8 p-1 rounded-full bg-darkPalette-orange" />
						)}
					</div>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
