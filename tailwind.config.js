const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { black: '#0b0d0e', primary: '#58E1FF', secondary: '#00A2F8' },
			fontFamily: {
				...fontFamily,
				sans: ['Work Sans Variable', ...fontFamily['sans']],
				mono: ['IBM Plex Mono', ...fontFamily['mono']],
				london: ['"London Between"', ...fontFamily['sans']]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			margin: { navbar: '3.5rem' }
		}
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
	safelist: [
		'animate-bounce',
		'outline-amber-500',
		// In here because of the footer
		'text-teal-500',
		'text-teal-600',
		'text-cyan-500',
		'text-cyan-600',
		'text-green-500',
		'text-green-600',
		'text-emerald-500',
		'text-emerald-600',
		'text-lime-500',
		'text-lime-600'
	]
}
