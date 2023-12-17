// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import baseColors from 'tailwindcss/colors'

export const load = async ({ fetch }) => ({
	backgroundData: getHeroBackgroundTiles(),
	news: await fetch('/api/news')
		.then((response) => response.json())
		.then((news) => news.slice(0, 3))
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

	function generateRow(amount) {
		return Array.from({ length: amount }).map(generateWorkspace)
		// If the background should be animated
		// return [...base, ...base]
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
