#!/usr/bin/env node

import { globby } from 'globby'
import { spawnSync } from 'node:child_process'
import { getFileNameWithoutExtension } from '../src/lib/Helper.mjs'

// This script should be run from the root of the application
const root = new URL('..', import.meta.url)

const imageDirectories = ['static/imgs/ricing_competitions', 'static/plugins-data/logos']
const generatedPrefix = 'generated_'
// This value seems to work well
const maxBrightness = 65535

const brightnessThreshold = maxBrightness * 0.5

/** All files which have no `generated_` version */
const filePaths = await globby(imageDirectories, {
	cwd: root,
	expandDirectories: {
		extensions: ['svg', 'webp', 'jpg', 'png', 'gif', 'bmp', 'jpeg']
	},
	gitignore: false
}).then((filePaths) => {
	const fileNames = filePaths.map(getFileNameWithoutExtension)

	return filePaths
		.filter(
			(file) =>
				!getFileNameWithoutExtension(file).startsWith(generatedPrefix) &&
				!fileNames.includes(generatedPrefix + getFileNameWithoutExtension(file))
		)
		.map((filePath) => new URL(filePath, root))
})

for (const filePathUrl of filePaths) {
	const extension = filePathUrl.pathname.split('.').at(-1)
	const generatedFileName =
		generatedPrefix + getFileNameWithoutExtension(filePathUrl.href) + '.webp'
	const outPath = decodeURIComponent(new URL('.', filePathUrl).pathname + generatedFileName)
	const filePath = decodeURIComponent(filePathUrl.pathname)

	const currentBrightness = Number(
		exec(`convert "${filePath}" -colorspace Gray -format "%[mean]" info: `)
	)

	// Boost the brightness if the image is very dark
	const brightnessIncrease = Math.max(1 - (currentBrightness / brightnessThreshold) * 50, 0)

	// Nessecary to do it like that for Zx
	const svgCommands = extension === 'svg' ? '-background none -resize 2500x2500' : ''

	exec(
		`magick convert ${svgCommands} -brightness-contrast ${brightnessIncrease}x40  -modulate 100,1000,100 "${filePath}" "${outPath}"`
	)

	// Modify colors with LUT
	// spawnSync(`magick  "${outPath}" "./scripts/hald-clut.color.io.png" -hald-clut "${outPath}"`)
	// Also make them smaller to reduce file size
	exec(
		`magick convert -modulate 100,250,100   -scale 10% -gaussian-blur 0x20  -resize 500% -quality 50   "${outPath}" "${outPath}" `
	)

	console.log(`Blurred ${filePath}\nOutpath: ${outPath}\n`)
}

function exec(command) {
	// the try-catch is kinda stupid, but otherwise Node will not give any meaningful info
	try {
		const { stdout, error, stderr } = spawnSync(command, {
			shell: true,
			stdio: ['inherit', 'inherit', 'pipe']
		})

		if (stderr.toString().trim()) throw stderr.toString().trim()
		if (error) throw error

		return stdout
	} catch (error) {
		throw new Error(error)
	}
}
