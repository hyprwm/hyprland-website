<script>
	import clsx from 'clsx'
	import { getContext, onMount } from 'svelte'
	import { cardsContext } from '$lib/components/CardsContainer.svelte'
	import { spring } from 'svelte/motion'
	import { getIsMobile } from '$lib/Helper.mjs'
	/** @type {'cyan' | 'purple'}*/
	export let color = 'cyan'
	/** @type {number | number}*/
	export let gradientOpacity = undefined

	const { mouseCoordinates$, isHoverCards, enableBorders = true } = getContext(cardsContext)

	/** @type HTMLDivElement */
	let container
	let isMobile = false

	const damping = 0.2

	const fillX = spring(0, { damping, stiffness: 0.021, precision: 0.3 })
	const fillY = spring(0, { damping, stiffness: 0.021, precision: 0.3 })
	const borderX = spring(0, { damping, stiffness: 0.03, precision: 0.3 })
	const borderY = spring(0, { damping, stiffness: 0.03, precision: 0.3 })

	const bounceBack = 2
	const soft = 0.8

	let isMouseOver = false
	/** Has the mouse entered and not left*/
	let hasMouseEntered = false

	$: {
		if (container && $mouseCoordinates$?.x !== undefined) {
			updateGradient()
		}
	}

	onMount(() => {
		isMobile = getIsMobile()
	})

	function updateGradient() {
		if (isMobile) return

		const { x: rectX, y: rectY, width, height } = container.getBoundingClientRect()

		const normX = $mouseCoordinates$.x - rectX
		const normY = $mouseCoordinates$.y - rectY

		if (enableBorders) {
			$borderX = normX
			$borderY = normY
		}

		if (!isMouseOver) {
			hasMouseEntered = false

			return
		}

		// Instantly update the blob positon without easing when the mouse has just entered
		/*		if (hasMouseEntered === false) {
			fillX.set(normX, { hard: true })
			fillY.set(normY, { hard: true })
			hasMouseEntered = true
			return
		}
		*/

		if ($mouseCoordinates$.x < rectX) fillX.set(rectX + bounceBack, { soft })
		else if ($mouseCoordinates$.x > rectX + width) fillX.set(rectX + width - bounceBack, { soft })
		else fillX.set(normX)

		if ($mouseCoordinates$.y < rectY) fillY.set(rectY + bounceBack, { soft: 1 })
		if ($mouseCoordinates$.y > rectY + height) fillX.set(rectY - height - bounceBack, { soft })
		else fillY.set(normY)
	}
</script>

<div
	class={clsx('card group ', $$restProps.class)}
	style:--x={$fillX}
	style:--y={$fillY}
	style:--borderX={enableBorders && $borderX}
	style:--borderY={enableBorders && $borderY}
	class:isHoverCards={$isHoverCards}
	bind:this={container}
	on:mouseenter={() => (isMouseOver = true)}
	on:mouseleave={() => {
		isMouseOver = false
		updateGradient()
	}}
	class:purpleGradient={color === 'purple'}
	role="contentinfo"
	on:mouseenter
	on:mouseleave
>
	<div class="z-10 h-full w-full">
		<slot>Nothing in the slot here</slot>
	</div>
	<div class="gradient max-sm:hidden" style:opacity={gradientOpacity} />
	<div class="gradient_black max-sm:hidden" />
	{#if enableBorders}
		<div class="border-gradient max-sm:hidden" />
	{/if}
</div>

<style lang="postcss">
	.card {
		@apply relative flex items-end justify-end rounded-3xl transition-colors  duration-300;
		z-index: 2;
		contain: paint style layout;

		background: radial-gradient(
			100% 100% at 100% 0%,
			theme(colors.blue.950),
			theme(colors.neutral.950)
		);

		/* The card border   */
		@media screen(md) {
			background: theme(colors.slate.800);

			&:hover {
				background: theme(colors.blue.900);
			}
		}
	}

	.gradient_black {
		@apply absolute inset-[2px];
		z-index: 2;
		border-radius: inherit;
		contain: strict;
		background: black;
	}

	/* This gradient is visible on the borders when hovering */
	.border-gradient {
		position: absolute;
		z-index: 1;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		opacity: 0%;
		transform-origin: top left;
		transition: opacity 240ms ease-in-out;
		left: 0%;
		top: 0%;
		pointer-events: none;
		contain: strict;
		background: radial-gradient(
			620px circle at calc(var(--borderX) * 1px) calc(var(--borderY) * 1px),
			color-mix(in srgb, var(--color1, theme(colors.cyan.500)), transparent 50%),
			transparent
		);

		.isHoverCards & {
			opacity: 100%;
		}
	}

	.gradient {
		@apply pointer-events-none absolute  inset-0 h-full w-full;
		width: calc(100% - 2px);
		border-radius: inherit;
		height: calc(100% - 2px);
		border-radius: inherit;
		margin: 0px;
		z-index: 20;
		mix-blend-mode: hard-light;
		contain: strict;

		/* Gradient blob */
		&::before {
			position: absolute;
			z-index: 20;
			border-radius: inherit;
			min-width: 200%;
			min-height: 200%;
			aspect-ratio: 1 / 1;
			translate: -25% 0%;
			transform-origin: top left;
			left: 50%;
			opacity: 50%;
			transition: all 120ms ease-in-out;
			content: '';
			pointer-events: none;
			opacity: 0%;
			contain: strict;

			background: url('/imgs/grain.webp'),
				radial-gradient(
					ellipse at calc(var(--x) * 1px) calc(var(--y) * 1px),
					var(--color1, theme(colors.cyan.500 / 100%)),
					var(--color2, theme(colors.blue.700 / 40%)) 25%,
					var(--color3, theme(colors.blue.900 / 15%)) 50%
				);

			.group:hover & {
				opacity: 100%;
				transition: all 820ms;
			}
		}
	}

	.purpleGradient {
		--color1: theme(colors.purple.400 / 90%);
		--color2: theme(colors.indigo.800 / 90%);
		--color3: theme(colors.indigo.800 / 20%);
	}
</style>
