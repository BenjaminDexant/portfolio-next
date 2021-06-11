import { FunctionComponent } from "react";
import { ISkill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({ data: { Icon, title, level } }) => {
	const barWidth = `${level}`;
	const variants = {
		initial: { width: 0 },
		animate: {
			width: barWidth,
			transition: {
				duration: 0.4,
				type: "spring",
				damping: 10,
				stiffness: 100,
			},
		},
	};
	return (
		<div className="my-2 text-white rounded-full bg-lightPalette-greenLight dark:bg-darkPalette-white">
			<motion.div
				className="flex items-center px-4 py-1 rounded-full bg-lightPalette-blue dark:bg-darkPalette-orange"
				style={{ width: barWidth }}
				variants={variants}
				initial="initial"
				animate="animate"
			>
				<Icon className="mr-3" />
				{title}
			</motion.div>
		</div>
	);
};

export default Bar;
