<script lang="ts">
	import { getContext } from 'svelte'
	import type { Card3dContext } from './Types'

	export let translateX: number = 0
	export let translateY: number = 0
	export let translateZ: number = 0
	export let rotateX: number = 0
	export let rotateY: number = 0
	export let rotateZ: number = 0

	const context: Card3dContext = getContext('3dCard')
	if (!context) {
		throw new Error('No context found for CardItem provided')
	}
</script>

<div
	class={`w-fit transition  duration-200 ease-linear [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${$$restProps.class}`}
	style:transform={$context.hasMouseEntered
		? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
		: `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`}
>
	<slot>Forgot to add something here</slot>
</div>
