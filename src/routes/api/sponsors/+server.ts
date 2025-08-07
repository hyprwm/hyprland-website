import { json } from '@sveltejs/kit'
import sponsors from '../../../content/sponsors.json'

export type Sponsor = {
	name: string
	link?: string
	image?: string
	slogan?: string
}

export type SponsorsRanked = Readonly<{
	/** The month for the top donators in `monthTop` */
	month: string
	monthTop: readonly Sponsor[]
	diamond: readonly Sponsor[]
	platinum: readonly Sponsor[]
	gold: readonly Sponsor[]
	silver: readonly Sponsor[]
	bronze: readonly Sponsor[]
}>

export async function GET() {
	return json(sponsors)
}

export const prerender = true
