import { inview } from 'svelte-inview'
import { pick } from 'remeda'
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

	const effects = Object.entries(pick(options, ['fade', 'zoom', 'slide']))

	const style = effects
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
		effects.forEach(([effect]) => {
			if (effect === 'slide') node.style.translate = '0 0'
			else if (effect === 'fade') node.style.opacity = '1'
			else if (effect === 'zoom') node.style.scale = '1 1'
		})
	}

	return { destroy: observer.destroy }
}

// export function animateIn(styles) {
// 	const inview = inview()
// 	// return ({ details: { invView, scrollDirection: vertical, node } }) => {}
// }
