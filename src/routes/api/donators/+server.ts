import { json } from '@sveltejs/kit'
import donators from '../../../content/donators.json'

export type Donator = {
	name: string
	link?: string
	image?: string
}
export type DonatorsRanked = Readonly<{
	top: readonly Donator[]
	month: readonly Donator[]
	platinum: readonly Donator[]
	gold: readonly Donator[]
	silver: readonly Donator[]
	bronze: readonly Donator[]
}>

export async function GET() {
	return json(
		donators
		// await Promise.all(
		// 	donators.map(async (donator: Donator) => ({
		// 		...donator,
		// 		image: donator.image ?? `/api/identicon/${encodeURI(donator.name)}`
		// 	}))
		// )
	)
}

export const prerender = true
