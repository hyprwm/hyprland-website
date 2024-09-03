import { json } from '@sveltejs/kit'
import path from 'path'
import { parse } from 'smol-toml'
import { readFile } from 'node:fs/promises'
import pluginsToml from '../../../content/plugins.toml?raw'

async function getPlugins() {
	const plugins = parse(pluginsToml).plugins.sort(
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
