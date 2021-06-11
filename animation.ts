export const fadeInUp = {
	initial: {
		opacity: 0,
		y: 60,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

export const stagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const componentFadeOut = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.2,
			ease: "easeInOut",
		},
	},
};
