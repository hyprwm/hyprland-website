<script context="module">
	export const cardsContext = Symbol('mouseContext')
</script>

<script>
	import { getIsMobile } from '$lib/Helper.mjs'

	import { onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	/** @type {HTMLElement}*/
	let containerElement
	let isMobile = false

	const context = setContext(cardsContext, {
		x: writable(0),
		y: writable(0),
		isHoverCards: writable(false)
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
		context.x.set(clientX)
		context.y.set(clientY)
	}

	onMount(() => {
		isMobile = getIsMobile()
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
