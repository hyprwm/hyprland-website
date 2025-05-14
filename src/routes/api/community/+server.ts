import { json } from '@sveltejs/kit'
import amongUsGreenImage from '$lib/images/amongus/green.webp'
import profiles from '../../../content/profiles.json'
import type { CommunityProfile } from '$lib/Types'

export type Donator = {
	name: string
	link?: string
	image?: string
}

const extraProfiles: CommunityProfile[] = [
	{
		image: amongUsGreenImage,
		coordinates: [873, 224],
		size: 79,
		class: 'outline-green-500'
	},
	{
		image: '/imgs/profile_pictures/chan_1.webp',
		coordinates: [91, 799],
		size: 55,
		class: 'outline-sky-500'
	},
	{
		image: '/imgs/profile_pictures/chan_cat.webp',
		coordinates: [-10, 844],
		size: 32,
		class: 'outline-blue-800'
	},
	{
		image: '/imgs/profile_pictures/chan_cat_2.webp',
		coordinates: [1000, 744],
		size: 32,
		class: 'outline-cyan-500'
	},
	{
		image: '/imgs/profile_pictures/_anon.webp',
		coordinates: [-85, 566],
		size: 40,
		class: 'outline-sky-500'
	}
]

const validSizes = [16, 20, 24, 32, 40, 48, 64, 80, 96, 100, 128, 160, 240, 320, 640]

export async function GET() {
	const allProfiles = [...profiles.filter(({ image }) => !!image), ...extraProfiles]
		.map(({ image, size, ...profile }) => ({
			...profile,
			size,
			image: image + '?size=' + validSizes.find((_, index) => size <= validSizes[index])
		}))
		.sort(({ size: a }, { size: b }) => b - a)

	return json(allProfiles)
}

export const prerender = true
