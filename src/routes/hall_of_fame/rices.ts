import colors from 'tailwindcss/colors'

type Contest = {
	name: string
	number: number
	date: string
	color: string
	rices: Rice[]
}

type Rice = {
	name: string
	creator: string
	pretitel: string
	dotfilesLink: string
	creatorProfilePicture: string
	thumbnail: string
	/**
	 * The video link.
	 * Has to be loadable by the html video element,
	 * so a Youtube link wont work.
	 */
	video?: string
}

export const contests: Contest[] = [
	{
		name: 'Fantasy',
		number: 4,
		date: 'May 2025',
		color: colors.green[500],
		rices: [
			{
				name: '𝕯𝖎𝖘𝖓𝖆𝖞 𝖙𝖞𝖕𝖊 𝖘𝖍𝖎',
				creator: 'VDawg',
				pretitel: '#2',
				dotfilesLink: 'https://github.com/vdawg-git/fantasy-rice',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/28539403?s=24&v=4',
				thumbnail: '/ricing_competitions/4/vdawg.webp',
				video: '/ricing_competitions/4/vdawg.mp4'
			}
		]
	},
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
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/44374434?s=24&v=4',
				thumbnail: '/ricing_competitions/3/flafy.webp'
			},
			{
				name: 'Globes',
				creator: 'Aylur',
				pretitel: '#2',
				dotfilesLink: 'https://github.com/Aylur/dotfiles/tree/ags-pre-ts',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/104676705?s=24&v=4',
				thumbnail: '/ricing_competitions/3/aylur.webp'
			},
			{
				name: 'Golden Era',
				creator: 'VDawg',
				pretitel: '#3',
				dotfilesLink: 'https://github.com/vdawg-git/space_dots',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/28539403?s=24&v=4',
				thumbnail: '/ricing_competitions/3/vdawg.webp',
				video: '/ricing_competitions/3/golden-era.mp4'
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
				name: 'Hybrid Summer',
				creator: 'end_4',
				pretitel: '#1',
				dotfilesLink: 'https://github.com/end-4/dots-hyprland/tree/archive/hybrid-summer',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/97237370?s=24&v=4',
				thumbnail: '/ricing_competitions/2/end_4.webp'
			},
			{
				name: 'Unnamed',
				creator: 'Flafy',
				pretitel: '#2',
				dotfilesLink: 'https://github.com/FlafyDev/flutter_background_bar',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/44374434?s=24&v=4',
				thumbnail: '/ricing_competitions/2/flafy.webp'
			},
			{
				name: 'Day and Night',
				creator: 'Mathisbuilder',
				pretitel: '#3',
				dotfilesLink: 'https://github.com/MathisP75/summer-day-and-night',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/98901170?s=24&v=4',
				thumbnail: '/ricing_competitions/2/day-night.webp'
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
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/25975326?s=24&v=4',
				thumbnail: '/ricing_competitions/1/flafy.webp'
			},
			{
				name: 'Aurora',
				creator: 'flick0',
				pretitel: '#2 (ex aequo)',
				dotfilesLink: 'https://github.com/flick0/dotfiles/tree/aurora',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/77581181?s=24&v=4',
				thumbnail: '/ricing_competitions/1/flicko.webp'
			},
			{
				name: 'Hyprland Winter',
				creator: 'amadeus',
				pretitel: '#2 (ex aequo)',
				dotfilesLink: 'https://github.com/AmadeusWM/hyprland-winter',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/63149896?s=24&v=4',
				thumbnail: '/ricing_competitions/1/amadeus.webp'
			},
			{
				name: 'Unnamed',
				creator: 'Lyasm',
				pretitel: '#3 (ex aequo)',
				dotfilesLink: '#',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/111616244?s=24&v=4',
				thumbnail: '/ricing_competitions/1/lyasm.webp'
			},
			{
				name: 'Unnamed',
				creator: 'lauroro',
				pretitel: '#3 (ex aequo)',
				dotfilesLink: 'https://github.com/lauroro/hyprland-dotfiles',
				creatorProfilePicture: 'https://avatars.githubusercontent.com/u/88981092?s=24&v=4',
				thumbnail: '/ricing_competitions/1/lauroro.webp'
			}
		]
	}
]
