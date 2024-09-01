import { json } from '@sveltejs/kit'
import path from 'path'
import { parse } from 'smol-toml'
import { readFile } from 'node:fs/promises'

/** Get the plugins of the `content/plugins/` directory */
async function getPlugins() {
	const plugins = await readFile(
		path.join(import.meta.dirname, '../../../content/plugins.toml'),
		'utf-8'
	)
		.then(parse)
		.then(({ plugins }) =>
			plugins.sort(
				(a, b) =>
					(b.featured ?? 0) - (a.featured ?? 0) ||
					(b.weight ?? 0) - (a.weight ?? 0) ||
					((b.logo && 1) ?? 0) - ((a.logo && 1) ?? 0) ||
					((b.banner && 1) ?? 0) - ((a.banner && 1) ?? 0)
			)
		)

	return plugins
}

export async function GET() {
	const news = await getPlugins()
	return json(news)
}
