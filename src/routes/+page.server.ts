import baseColors from 'tailwindcss/colors'
import type { CommunityProfile } from '$lib/Types'
import type { DonatorsRanked } from './api/donators/+server.js'

export const load = async ({ fetch }) => ({
	backgroundData: getHeroBackgroundTiles(),

	news: await fetch('/api/news')
		.then((response) => response.json())
		.then((news) => news.slice(0, 3)),

	donators: (await fetch('/api/donators').then((resposne) => resposne.json())) as DonatorsRanked,

	communityProfiles: (await fetch('/api/community').then((response) =>
		response.json()
	)) as readonly CommunityProfile[]
})

function getHeroBackgroundTiles() {
	const workspacesPerRow = 4
	const workspaceHeight = 240
	const gapLength = 32
	const colors = [baseColors.blue[500], baseColors.cyan[400], baseColors.sky[500]]
	const images = [
		'/imgs/chan/joy.svg',
		'/imgs/chan/surprise.svg',
		'/imgs/chan/tongueout.svg',
		'/imgs/waylnad.webp'
	]

	const leftColumns = Array.from({ length: 3 }, () => generateRow(workspacesPerRow))

	const rightColumns = Array.from({ length: 3 }, () => generateRow(workspacesPerRow))

	/** Used to transform the rows by their own lenght*/
	const height = workspacesPerRow * (workspaceHeight + gapLength)

	return {
		leftColumns,
		rightColumns,
		height,
		workspacesPerRow,
		workspaceHeight,
		gapLength
	}

	function generateRow(amount: number) {
		return Array.from({ length: amount }).map(generateWorkspace)
	}

	function generateWorkspace() {
		return [
			generateTiles(),
			Math.random() > 0.4 ? generateTiles() : undefined,
			Math.random() > 0.7 ? generateTiles() : undefined
		].filter(Boolean)
	}

	function generateTiles() {
		const result = Math.random() > 0.5 ? [generateTile()] : [generateTile(), generateTile()]

		return result
	}

	function generateTile() {
		return { color: getRandomColor(), image: Math.random() > 0.7 ? getRandomImage() : undefined }
	}

	/** @returns {string} */
	function getRandomColor() {
		return colors.at(Math.floor(Math.random() * colors.length))
	}

	/** @returns {string} */
	function getRandomImage() {
		return images.at(Math.floor(Math.random() * images.length))
	}
}
