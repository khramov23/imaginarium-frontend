/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			primary: '#ff3838',
			black: colors.black,
			white: colors.white,
			light: {
				20: 'rgba(255, 255, 255, 0.2)',
				40: 'rgba(255, 255, 255, 0.4)',
				60: 'rgba(255, 255, 255, 0.6)',
				80: 'rgba(255, 255, 255, 0.8)',
				90: 'rgba(255, 255, 255, 0.9)',
				95: 'rgba(255, 255, 255, 0.95)',
			},
			dark: {
				20: 'rgba(0, 0, 0, 0.2)',
				40: 'rgba(0, 0, 0, 0.4)',
				60: 'rgba(0, 0, 0, 0.6)',
				80: 'rgba(0, 0, 0, 0.8)',
				90: 'rgba(0, 0, 0, 0.9)',
				95: 'rgba(0, 0, 0, 0.95)',
			},
			transparent: colors.transparent,
			red: {
				main: 'rgba(255, 0, 0)',
				thin: 'rgba(255, 56, 56, 0.3)',
				light: '#ff4d4d',
				dark: '#E3000E',
			},
			gray: {
				300: '#d9dae8',
				500: '#999aa5',
				600: '#66676e',
				700: '#39393f',
				800: '#101010',
				900: '#0b0b0b',
			},
			cyan: 'rgba(38, 208, 187,1)',
			yellow: 'rgba(226, 226, 68, 1)',
			pink: 'rgba(217, 80, 217, 1)',
			green: 'rgba(38, 174, 38, 1)',
			blue: 'rgba(41, 41, 208, 1)',
		},
		extend: {},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.username': {
					color: 'white',
				},
			})
		}),
	],
}
