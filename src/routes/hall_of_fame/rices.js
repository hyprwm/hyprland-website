import colors from 'tailwindcss/colors'

/** @type {{name: string, number: number, date: string, color: string, rices: {name: string, creator: string, pretitel: string, dotfilesLink: string, creatorProfilePicture: string, thumbnail: string}[]}[]} */
export const contests = [
	{
		name: 'Space',
		number: 3,
		date: 'November 2023',
		color: colors.indigo[500],
		rices: [
			{
				name: 'Celestial',
				creator: 'Flafy',
				pretitel: '#1',
				dotfilesLink: 'https://github.com/flafydev/nixos-config/',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/44374434?s=96&v=4',
				thumbnail: '/imgs/ricing_competitions/3/flafy.webp'
			},
			{
				name: 'Globes',
				creator: 'Aylur',
				pretitel: '#2',
				dotfilesLink: 'https://github.com/Aylur/dotfiles/tree/ags-pre-ts',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/104676705?v=4',
				thumbnail: '/imgs/ricing_competitions/3/aylur.webp'
			},
			{
				name: 'Golden Era',
				creator: 'VDawg',
				pretitel: '#3',
				dotfilesLink: 'https://github.com/Visual-Dawg/space_dots',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/28539403?s=96&v=4',
				thumbnail: '/imgs/ricing_competitions/3/vdawg.webp'
			}
		]
	},

	{
		name: 'Summer',
		number: 2,
		date: 'May 2023',
		color: 'orange',
		rices: [
			{
				name: 'Summer Gruv',
				creator: 'end_4',
				pretitel: '#1',
				dotfilesLink: 'https://github.com/end-4/dots-hyprland/tree/summer-gruv',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/97237370?s=24&v=4',
				thumbnail: '/imgs/ricing_competitions/2/end_4.webp'
			},
			{
				name: 'Unnamed',
				creator: 'Flafy',
				pretitel: '#2',
				dotfilesLink: 'https://github.com/FlafyDev/flutter_background_bar',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/44374434?s=96&v=4',
				thumbnail: '/imgs/ricing_competitions/2/flafy.webp'
			},
			{
				name: 'Day and Night',
				creator: 'Mathisbuilder',
				pretitel: '#3',
				dotfilesLink: 'https://github.com/MathisP75/summer-day-and-night',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/98901170?v=4',
				thumbnail: '/imgs/ricing_competitions/2/day-night.webp'
			}
		]
	},

	{
		name: 'Winter',
		number: 1,
		date: 'December 2022',
		color: colors.cyan[500],
		rices: [
			{
				name: 'Unnamed',
				creator: 'Flafy',
				pretitel: '#1',
				dotfilesLink: 'https://github.com/FlafyDev/flutter_workspaces_2',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/25975326?v=4',
				thumbnail: '/imgs/ricing_competitions/1/flafy.webp'
			},
			{
				name: 'Aurora',
				creator: 'flick0',
				pretitel: '#2 (ex aequo)',
				dotfilesLink: 'https://github.com/flick0/dotfiles/tree/aurora',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/77581181?s=48&v=4',
				thumbnail: '/imgs/ricing_competitions/1/flicko.webp'
			},
			{
				name: 'Hyprland Winter',
				creator: 'amadeus',
				pretitel: '#2 (ex aequo)',
				dotfilesLink: 'https://github.com/AmadeusWM/hyprland-winter',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/63149896?s=48&v=4',
				thumbnail: '/imgs/ricing_competitions/1/amadeus.webp'
			},
			{
				name: 'Unnamed',
				creator: 'Lyasm',
				pretitel: '#3 (ex aequo)',
				dotfilesLink: '#',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/111616244?s=48&v=4',
				thumbnail: '/imgs/ricing_competitions/1/lyasm.webp'
			},
			{
				name: 'Unnamed',
				creator: 'lauroro',
				pretitel: '#3 (ex aequo)',
				dotfilesLink: 'https://github.com/lauroro/hyprland-dotfiles',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/88981092?s=48&v=4',
				thumbnail: '/imgs/ricing_competitions/1/lauroro.webp',
				class: 'pb-16'
			}
		]
	}
]
