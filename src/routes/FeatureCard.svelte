<script>
	import clsx from 'clsx'
	import { getContext } from 'svelte'
	import { mouseContext } from './FeaturesSlice.svelte'
	import { spring } from 'svelte/motion'
	export let title
	export let color = 'cyan'

	const { x: mouseX, y: mouseY, isHoverCards } = getContext(mouseContext)

	/** @type HTMLDivElement */
	let container
	const fillX = spring(999, { damping: 0.9, stiffness: 0.021, precision: 0.3 })
	const fillY = spring(999, { damping: 0.9, stiffness: 0.021, precision: 0.3 })
	const borderX = spring(999, { damping: 0.9, stiffness: 0.03, precision: 0.3 })
	const borderY = spring(999, { damping: 0.9, stiffness: 0.03, precision: 0.3 })

	const bounceBack = 2
	const soft = 0.8

	let isMouseOver = false

	$: {
		if (container && $mouseX !== undefined) {
			updateGradient()
		}
	}

	function updateGradient() {
		const { x: rectX, y: rectY, width, height } = container.getBoundingClientRect()

		const normX = $mouseX - rectX
		const normY = $mouseY - rectY

		$borderX = normX
		$borderY = normY

		if (!isMouseOver) {
			/* Put it in the corners again. As it is scaled by half, 
			coordinates should be multiplied by two. But it looks better when they peek in more */
			fillX.set(width * 1.5, { soft: 4 })
			fillY.set(height * 1.5, { soft: 4 })
			return
		}

		if ($mouseX < rectX) fillX.set(rectX + bounceBack, { soft })
		else if ($mouseX > rectX + width) fillX.set(rectX + width - bounceBack, { soft })
		else fillX.set(normX)

		if ($mouseY < rectY) fillY.set(rectY + bounceBack, { soft: 1 })
		if ($mouseY > rectY + height) fillX.set(rectY - height - bounceBack, { soft })
		else fillY.set(normY)
	}
</script>

<div
	class={clsx('card min-h-[20rem] ', $$restProps.class)}
	style:--x={$fillX}
	style:--y={$fillY}
	style:--borderX={$borderX}
	style:--borderY={$borderY}
	class:isHoverCards={$isHoverCards}
	bind:this={container}
	on:mouseenter={() => (isMouseOver = true)}
	on:mouseleave={() => {
		isMouseOver = false
		updateGradient()
	}}
	class:purpleGradient={color === 'purple'}
	role="contentinfo"
>
	<div class="p-12 z-10 w-full h-full">
		<h1 class="text-5xl font-bold mb-6 text-white">{title}</h1>

		<slot>Nothing in the slot here</slot>
	</div>
	<div class="gradient" />
	<div class="gradient_black" />
	<div class="border-gradient" />
</div>

<style lang="postcss">
	.card {
		@apply rounded-3xl relative w-full h-full bg-slate-900 hover:bg-blue-900 duration-300 transition-colors  flex items-center justify-center;
		z-index: 2;
		contain: paint style layout;
	}

	.gradient_black {
		@apply absolute inset-[1px];
		z-index: 2;
		border-radius: inherit;
		contain: strict;
		background: black
			radial-gradient(
				circle at bottom right,
				theme(colors.neutral.900 / 80%),
				theme(colors.neutral.500 / 10%),
				black
			);
	}

	.border-gradient {
		position: absolute;
		z-index: 1;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		opacity: 0%;
		transform-origin: top left;
		transition: opacity 140ms ease-in-out;
		left: 0%;
		top: 0%;
		content: '';
		pointer-events: none;
		contain: strict;
		background: radial-gradient(
			320px circle at calc(var(--borderX) * 1px) calc(var(--borderY) * 1px),
			color-mix(in srgb, var(--color1, theme(colors.cyan.500)), transparent 70%),
			color-mix(in srgb, var(--color2, theme(colors.blue.500)), transparent 90%)
		);

		.isHoverCards & {
			opacity: 100%;
		}
	}

	.gradient {
		@apply absolute inset-0  pointer-events-none w-full h-full;
		width: calc(100% - 2px);
		border-radius: inherit;
		height: calc(100% - 2px);
		border-radius: inherit;
		margin: 1px;
		z-index: 20;
		mix-blend-mode: hard-light;
		contain: strict;

		/* Gradient */
		&::before {
			position: absolute;
			z-index: 20;
			border-radius: inherit;
			min-width: 200%;
			min-height: 200%;
			aspect-ratio: 1 / 1;
			scale: 0.5 0.5;
			translate: -25% 0%;
			transform-origin: top left;
			left: 50%;
			transition: all 820ms;
			content: '';
			pointer-events: none;
			background: radial-gradient(
				ellipse at calc(var(--x) * 1px) calc(var(--y) * 1px),
				var(--color1, theme(colors.cyan.500 / 100%)),
				var(--color2, theme(colors.blue.700 / 40%)) 25%,
				var(--color3, theme(colors.blue.900 / 15%)) 50%
			);

			.card:hover & {
				scale: 1 1;
			}
		}
	}

	.purpleGradient {
		--color1: theme(colors.purple.400 / 90%);
		--color2: theme(colors.indigo.800 / 90%);
		--color3: theme(colors.indigo.800 / 20%);
	}
</style>
