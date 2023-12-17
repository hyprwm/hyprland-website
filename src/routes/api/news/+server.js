import { json } from '@sveltejs/kit'

async function getNews() {
	const posts = Object.entries(import.meta.glob('/src/content/news/*.md', { eager: true }))
		.flatMap(([path, { metadata }]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '')
			const rawDate = metadata.date
			const date = new Date(typeof rawDate === 'number' ? rawDate * 1000 : rawDate).getTime()

			if (!slug || !path || Number.isNaN(date)) {
				console.error(`Invalid file ${path} ${JSON.stringify({ ...metadata, date, slug })}`)
				return []
			}

			return { slug, ...metadata, date }
		})
		.sort(({ date: a }, { date: b }) => new Date(b).getTime() - new Date(a).getTime())

	return posts
}

export async function GET() {
	const news = await getNews()
	return json(news)
}
