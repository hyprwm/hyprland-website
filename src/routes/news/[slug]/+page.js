import { error } from '@sveltejs/kit'


export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../content/news/${params.slug}.md`)
		const other = await fetch('/api/news')
			.then((response) => response.json())
			.then((news) => news.filter((entry) => entry.slug !== params.slug).slice(0, 4))

		return {
			content: post.default,
			meta: post.metadata,
			other
		}
	} catch (error) {
		console.error(error)
		error(404, `Could not find ${params.slug}`)
	}
}
