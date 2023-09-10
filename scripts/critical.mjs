import { generate } from 'critical'

generate({
	inline: true,
	base: 'build/',
	src: 'index.html',
	target: 'index-critical.html',
	width: 1300,
	height: 900
})
// generate({
// 	inline: true,
// 	base: 'build/',
// 	src: 'index.html',
// 	target: 'index.c.html',

// 	dimensions: [
// 		{
// 			width: 1200,
// 			height: 900
// 		},
// 		{
// 			width: 480,
// 			height: 900
// 		}
// 	]
// })
