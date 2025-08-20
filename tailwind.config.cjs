const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/**/*.{html,js,svelte,ts}', './src/content/profiles.json'],
	theme: {
		extend: {
			colors: { black: '#090b0c', primary: '#58E1FF', secondary: '#00A2F8' },
			fontFamily: {
				...fontFamily,
				sans: ['Inter Variable', ...fontFamily['sans']],
				mono: ['IBM Plex Mono', ...fontFamily['mono']]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			margin: { navbar: '3.5rem' },

			screens: {
				'3xl': '2560px',
				'nav': '1124px'
			},

			typography: {
				DEFAULT: {
					css: {
						code: {
							padding: '0.2em 0.4em',
							'background-color': colors.slate[800],
							'border-radius': '6px',
							'font-weight': 'inherit'
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						}
					}
				}
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries')
	],
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
