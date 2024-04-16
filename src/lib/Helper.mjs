import {
	Subject,
	interval,
	map,
	of,
	scan,
	startWith,
	switchMap,
	merge,
	timeInterval,
	filter,
	take,
	takeUntil,
	takeWhile,
	pipe as rxpipe
} from 'rxjs'

import { inview } from 'svelte-inview'
import { pick } from 'remeda'

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
export function animateIn(node, options = {}) {
	// Do nothing on mobile
	if (getIsMobile()) return { destroy: () => undefined }

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
			() =>
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

/**
 * Taken from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser/11381730#11381730
 */
export function getIsMobile() {
	let check = false
	;(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true
	})(navigator.userAgent || navigator.vendor || window.opera)
	return check
}

/** Get the `generated_<filename>` for the provided path  **/
export function getGeneratedPath(path, extension = 'webp') {
	const directory = path.substring(0, path.lastIndexOf('/'))
	const filename = getFileNameWithoutExtension(path)
	return `${directory}/generated_${filename}.${extension}`
}

/** Get a random item from an array */
export function getRandom(array) {
	return array.at(Math.floor(Math.random() * array.length))
}

export function formatDate(date, dateStyle = 'medium', locales = 'en') {
	const dateToFormat = new Date(date)

	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })

	return dateFormatter.format(dateToFormat)
}

/**
 *
 * @param {string} text
 * @param {number} maxLenght
 * @returns
 */
export function trimText(text, maxLenght) {
	if (text.length < maxLenght - 1) return text

	const lastSpace = text.slice(0, maxLenght).lastIndexOf(' ')

	return text.slice(0, lastSpace ?? maxLenght) + '…'
}

/** Get the filename of a filepath without its extension */
export function getFileNameWithoutExtension(filePath) {
	return filePath.split('/').at(-1).replace(/\..*$/, '')
}

/**
 * A custom operator which maps inputs to their amount (level),
 * and completes once a target level has been reached.
 *
 * On inactivity the level decreases (fallof).
 *
 * Used here to do fancy stuff with clicks
 */
export function createThresholdStream({ clicksTarget = 69, clicksEachMs = 400, fallof = 20 }) {
	const FALLOF = -clicksTarget / fallof

	return rxpipe(
		timeInterval(),
		filter(({ interval }) => interval < clicksEachMs),
		map(() => 1),
		switchMap((value) =>
			merge(
				of(value),

				/** If no new value comes in, start decreasing the progress */
				interval(clicksEachMs + 100).pipe(
					take(clicksTarget), // Prevent this interval from running forever
					map(() => FALLOF)
				)
			)
		),
		scan((level, value) => Math.min(clicksTarget, Math.max(level + value, 0))),
		startWith(0)
	)
}

/**
 * Tell the browser to preload an image
 *
 * @param {string} src
 */
export function preloadImage(src) {
	return new Promise((resolve, reject) => {
		const image = new Image()
		image.onload = resolve
		image.onerror = reject
		image.src = src
	})
}
