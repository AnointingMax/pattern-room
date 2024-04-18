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
			backgroundImage: {
				"design-pattern": "url('/src/assets/design-pattern.png')",
				consultation: "url('/src/assets/consultation.png')",
				testimonials: "url('/src/assets/testimonials.png')",
				guide1: "url('/src/assets/guide-1.png')",
				guide2: "url('/src/assets/guide-2.png')",
				guide3: "url('/src/assets/guide-3.png')",
				guide4: "url('/src/assets/guide-4.png')",
			},
			screens: {
				extraSM: "475px",
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
};
