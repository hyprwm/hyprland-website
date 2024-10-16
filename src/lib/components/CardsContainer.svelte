<script context="module">
	export const cardsContext = Symbol('mouseContext')
</script>

<script>
	import { getIsMobile } from '$lib/Helper.ts'
	import { BehaviorSubject, Subject, throttle, throttleTime } from 'rxjs'

	import { onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let enableBorders = true

	const fps = 1000 / 60

	/** @type {HTMLElement}*/
	let containerElement
	let isMobile = false

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
	class={$$restProps.class}
	bind:this={containerElement}
	role="contentinfo"
	on:mouseenter={!isMobile && onMouseEnter}
	on:mouseleave={!isMobile && onMouseLeave}
>
	<slot />
</div>
