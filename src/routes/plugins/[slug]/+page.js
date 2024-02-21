import { error } from '@sveltejs/kit'

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../content/plugins/${params.slug}/index.md`)
		const other = await fetch('/api/plugins')
			.then((response) => response.json())
			.then((news) => news.filter((entry) => entry.slug !== params.slug).slice(0, 4))

		return {
			content: post.default,
			meta: post.metadata,
			other
		}
	} catch (error) {
		console.error(error)
		throw error(404, `Could not find ${params.slug}`)
	}
}
