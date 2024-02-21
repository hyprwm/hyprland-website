import { json } from '@sveltejs/kit'

/** Get the plugins of the `content/plugins/` directory */
async function getPlugins() {
	const plugins = Object.entries(import.meta.glob('/src/content/plugins/*.md', { eager: true }))
		.flatMap(([path, { metadata }]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '')

			// Filter out the `readme.md`
			if (slug === 'readme') return []

			if (!slug || !path) {
				console.error(`Invalid file ${path} ${JSON.stringify({ ...metadata, slug })}`)
				return []
			}

			return { slug, ...metadata }
		})
		.sort((a, b) => {
			if (b.featured || a.featured) {
				return b.featured ?? 0 - a.featured ?? 0
			}

			return b.weight ?? 0.1 - a.weight ?? 0
		})

	return plugins
}

export async function GET() {
	const news = await getPlugins()
	return json(news)
}
