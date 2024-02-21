export async function load({ fetch }) {
	const response = await fetch('/api/plugins')
	const plugins = await response.json()
	return { plugins }
}
