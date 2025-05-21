import { json } from '@sveltejs/kit'
import donators from '../../../content/donators.json'

export type Donator = {
	name: string
	link?: string
	image?: string
}
export type DonatorsRanked = Readonly<{
	/** The month for the top donators in `monthTop` */
	month: String
	monthTop: readonly Donator[]
	platinum: readonly Donator[]
	gold: readonly Donator[]
	silver: readonly Donator[]
	bronze: readonly Donator[]
}>

export async function GET() {
	return json(donators)
}

export const prerender = true
