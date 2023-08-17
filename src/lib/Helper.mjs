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
 * @param {{fade?: number, zoom?: number, slide?: number, duration?: number, delay?: number, threshold?: number}} options
 * @param { HTMLElement } node
 * @returns
 */
export function animateIn(node, options) {
	const observer = inview(node, { unobserveOnEnter: true, threshold: options.threshold ?? 0.4 })

	options.duration ??= 840

	const effects = Object.entries(pick(options, ['fade', 'zoom', 'slide', 'duration']))

	const style = effects
		.map(([effect, value]) => {
			if (effect === 'slide') return `translate: 0px ${value}px`

			if (effect === 'fade') return `opacity: ${value}`

			if (effect === 'zoom') return `scale: ${value} ${value}`

			if (effect === 'duration') {
				return `transition: all ${value}ms`
			}
		})
		.join(';')

	node.style = style

	let timeoutId

	node.addEventListener('inview_enter', callback)

	function callback() {
		timeoutId = setTimeout(
			effects.forEach(([effect]) => {
				if (effect === 'slide') node.style.removeProperty('translate')
				else if (effect === 'fade') node.style.removeProperty('opacity')
				else if (effect === 'zoom') node.style.removeProperty('scale')
			}),
			options.delay ?? 0
		)
	}

	return {
		destroy: () => {
			observer.destroy()
			clearTimeout(timeoutId)
		}
	}
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} given
 * @returns
 */
export function lerp(start, end, given) {
	return (1 - given) * start + given * end
}
