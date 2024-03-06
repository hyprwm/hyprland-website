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

for (const filePath of filePaths) {
	const extension = filePath.pathname.split('.').at(-1)
	const generatedFileName = generatedPrefix + getFileNameWithoutExtension(filePath.href) + '.webp'
	const outPath = new URL('.', filePath).pathname + generatedFileName

	const currentBrightness = Number(
		exec(`convert "${filePath.pathname}" -colorspace Gray -format "%[mean]" info: `)
	)

	// Boost the brightness if the image is very dark
	const brightnessIncrease = Math.max(1 - (currentBrightness / brightnessThreshold) * 50, 0)

	// Nessecary to do it like that for Zx
	const svgCommands = extension === 'svg' ? '-background none -resize 2500x2500' : ''

	exec(
		`magick convert ${svgCommands} -brightness-contrast ${brightnessIncrease}x40  -modulate 100,1000,100 ${filePath.pathname} ${outPath}`
	)

	// Modify colors with LUT
	// spawnSync(`magick  "${outPath}" "./scripts/hald-clut.color.io.png" -hald-clut "${outPath}"`)
	// Also make them smaller to reduce file size
	exec(
		`magick convert -modulate 100,250,100   -scale 10% -gaussian-blur 0x20  -resize 500% -quality 50   "${outPath}" "${outPath}" `
	)

	console.log(`Blurred ${filePath.pathname}`)
}

function exec(command) {
	const { stdout, error } = spawnSync(command, { shell: true })
	if (error) throw error

	return stdout
}

// // parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

// // cd "$parent_path"

// find "../static/imgs/ricing_competitions/" -type f \
//    \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.jpeg" -o -iname "*.webp" \) -not -name "generated_*" -print0 |
// while IFS= read -r -d '' filepath; do
//     echo "$filepath" gets blurred

//     directory=$(dirname "$filepath")
//     filename=$(basename "$filepath")
//     generated_filename="${directory}/generated_${filename}"
//     brightness=$( convert $filepath -colorspace Gray -format "%[mean]" info: )
//     max_brightness="65535" # The possible maximum brightness possible from the previous command
//     brightness_threshold=$( python -c "print( $max_brightness * 0.5 )"  )

//     # Boost the brightness if the image is very dark
//     brightness_boost=$( python -c "print( max( (1 - ($brightness / $brightness_threshold)) * 50 , 0) )" )

//     # Modify colors with LUT
//     magick convert -brightness-contrast ${brightness_boost}x40 -modulate 100,1000,100    "$filepath" "$generated_filename"
//     magick  "$generated_filename" "./hald-clut.color.io.png" -hald-clut "$generated_filename"
//     # Also make them smaller to reduce file size
//     magick convert -modulate 100,250,100   -scale 10% -gaussian-blur 0x20  -resize 500% -quality 50   "$generated_filename" "$generated_filename"

//     # magick convert  -scale 10%   -brightness-contrast ${brightness_boost}x25 -modulate 100,500,100  -gaussian-blur 0x20  -resize 1000%   "$filepath" "$generated_filename"
// done
