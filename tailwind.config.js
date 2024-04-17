/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					dark: "#131313",
					light: "#121212BF",
				},
			},
		},
	},
	plugins: [],
};
