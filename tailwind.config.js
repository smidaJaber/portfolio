/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				palma: {
					100: "#b3c5b4",
					200: "#809b5c",
					300: "#57713a",
					400: "#3c5246",
				},
				palmagray: "#a2b1a2",
			},
			backgroundImage: {
				bodyBackground: "url('../public/name.svg')",
				paintbrushBackground: "url('../public/paint-brush.jpg')",
			},
			animation: {
				blob: "blob 5s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(100px, 0px) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
