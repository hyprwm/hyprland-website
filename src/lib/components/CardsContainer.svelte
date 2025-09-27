<script module>
	export const cardsContext = Symbol('mouseContext')
</script>

<script>
	import { getIsMobile } from '$lib/Helper.ts'
	import { BehaviorSubject, Subject, throttle, throttleTime } from 'rxjs'

	import { onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [enableBorders]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let { enableBorders = true, children, ...rest } = $props();

	const fps = 1000 / 60

	/** @type {HTMLElement}*/
	let containerElement = $state()
	let isMobile = $state(false)

	const context = setContext(cardsContext, {
		mouseCoordinates$: new BehaviorSubject({ x: 0, y: 0 }).pipe(throttleTime(fps)),
		isHoverCards: writable(false),
		enableBorders
	})

	function onMouseEnter() {
		containerElement.addEventListener('mousemove', trackMouse)
		context.isHoverCards.set(true)
	}
	function onMouseLeave() {
		containerElement.removeEventListener('mousemove', trackMouse)
		context.isHoverCards.set(false)
	}
	function trackMouse({ clientX, clientY }) {
		context.mouseCoordinates$.next({ x: clientX, y: clientY })
	}

	onMount(() => {
		isMobile = getIsMobile()

		return () => containerElement.removeEventListener('mousemove', trackMouse)
	})
</script>

<div
	class={rest.class}
	bind:this={containerElement}
	role="contentinfo"
	onmouseenter={!isMobile && onMouseEnter}
	onmouseleave={!isMobile && onMouseLeave}
>
	{@render children?.()}
</div>
