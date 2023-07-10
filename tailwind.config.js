const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { black: '#0D0E0F', primary: '#58E1FF', secondary: '#00A2F8' },
			fontFamily: {
				...fontFamily,
				// sans: ['"Space Grotesk"', ...fontFamily['sans']]
				sans: ['"Space Grotesk"']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
