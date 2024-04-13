/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"header": "rgb(var(--color-bg-header))",
				"box-bg": "rgb(var(--box-bg))",
				"box-bg-inverse": "rgb(var(--color-box-inverse)",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				"heading-1": "rgb(var(--heading-1))",
				"heading-1-inverse": "rgb(var(--heading-1-inverse))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
				secondary: "rgb(var(--secondary))",
			},
		},
		fontFamily: {
			'sans': ['Raleway', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [],
}