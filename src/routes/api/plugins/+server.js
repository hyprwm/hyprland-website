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
		.sort(
			(a, b) =>
				(b.featured ?? 0) - (a.featured ?? 0) ||
				(b.weight ?? 0) - (a.weight ?? 0) ||
				((b.logo && 1) ?? 0) - ((a.logo && 1) ?? 0) ||
				((b.banner && 1) ?? 0) - ((a.banner && 1) ?? 0)
		)

	return plugins
}

export async function GET() {
	const news = await getPlugins()
	return json(news)
}
