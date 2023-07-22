import { inview } from 'svelte-inview'

// const mappingAnimate = {
// 	slide: 'translate',
// 	zoom: 'scale',
// 	duration: 'transition',
// 	fade: 'opacity'
// }

/**
 * Fade: The initial opacity from 0 to 1.
 *
 * Zoom: The scale from 0 to 1.
 *
 * Slide: Slide in in pixels.
 *
 * @param {{fade?: number, zoom?: number, slide?: number, duration?: number, threshold?: number}} options
 * @param { HTMLElement } node
 * @returns
 */
export function animateIn(node, options) {
	const observer = inview(node, { unobserveOnEnter: true, threshold: options.threshold ?? 0.4 })

	options.duration ??= 840

	const style = Object.entries(options)
		.map(([effect, value], _, all) => {
			if (effect === 'slide') return `translate: 0px ${value}px`

			if (effect === 'fade') return `opacity: ${value}`

			if (effect === 'zoom') return `scale: ${value} ${value}`

			if (effect === 'duration') {
				return `transition: all ${value}ms`
			}
		})
		.join(';')

	node.style = style

	node.addEventListener('inview_enter', callback)

	function callback() {
		console.log('Callbacked!!')
		node.style.opacity = '1'
		node.style.scale = '1 1'
		node.style.translate = '0 0'
	}

	return { destroy: observer.destroy }
}

// export function animateIn(styles) {
// 	const inview = inview()
// 	// return ({ details: { invView, scrollDirection: vertical, node } }) => {}
// }
