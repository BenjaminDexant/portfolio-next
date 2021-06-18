module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: "class",
	theme: {
		fontFamily: {
			nunito: ["Nunito Sans"],
			permanentMarker: ["Permanent Marker", "cursive"],
			baloo: ["Baloo 2", "cursive"],
		},
		boxShadow: {
			"custom-light": "0 0 10px #313131",
			"custom-dark": "5px 5px 10px #0a0c0e -5px -5px 10px #14161c",
		},
		extend: {
			colors: {
				lightPalette: {
					white: "#F5F5F5",
					green: "#5e8b7e",
					greenLight: "#a7c4bc",
					blue: "#2f5d62",
				},
				darkPalette: {
					white: "#eeeeee",
					black: "#222831",
					gray: "#595959",
					orange: "#b55400",
				},
			},
		},
	},
	variants: {
		extend: { boxShadow: ["dark"] },
	},
	plugins: [],
};
