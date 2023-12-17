export async function load({ fetch }) {
	const response = await fetch('/api/news')
	const posts = await response.json()
	return { posts }
}
