import { getNews } from '$lib/posts'
import { json } from '@sveltejs/kit'

export async function GET() {
	const news = await getNews()
	return json(news)
}
