const siteURL = 'https://hyprland.org'
const siteTitle = 'Hyprland'
const siteDescription = 'Tiling window manager with the looks'

export const prerender = true

export const GET = async ({ fetch }) => {
	const allNews = await fetch('api/news')
		.then((response) => response.json())
		.then((news) => news.sort((a, b) => new Date(b.date) - new Date(a.date)))

	const body = renderXml(allNews)
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	}

	return new Response(body, options)
}

function renderXml(posts) {
	return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
    <atom:link href="${siteURL}/rss" rel="self" type="application/rss+xml" />
    <title>${siteTitle} News</title>
    <link>${siteURL}/news</link>
    <description>${siteDescription}</description>
    ${posts
			.map(
				(post) => `<item>
    <guid isPermaLink="true">${siteURL}/news/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteURL}/news/${post.slug}</link>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
			)
			.join(' ')}
    </channel>
    </rss>
    `
}
