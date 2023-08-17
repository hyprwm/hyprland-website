<script>
	import { onMount } from 'svelte'
	import { createNoise2D } from 'simplex-noise'
	import { match } from 'ts-pattern'
	import clsx from 'clsx'
	import { getIsMobile } from '$lib/Helper.mjs'

	// Idea: Boid behavior

	const maxSize = 18
	const size = Math.max(Math.random() * maxSize, 6)
	/** How much the fireflies can vanish into the edges of the screen. Include their invisible padding for mouse detection. */
	const edgeClip = maxSize * 8
	const noiseY = createNoise2D()
	const noiseX = createNoise2D()
	const SPEED = Math.random() * 5 + 2

	let classes = clsx(Math.random() > 0.5 ? 'bg-primary/70' : 'bg-blue-500/70')

	let x = 0
	let y = 0

	// TODO add mouse following behaviour - flock behaviour
	// A couple following the mouse throughout the website

	onMount(() => {
		x = window.innerWidth / (Math.random() * 4) - maxSize * 6
		y = window.innerHeight / (Math.random() * 4) + 100

		// The animation is way too heavy for mobile
		if (getIsMobile()) return

		let animationId
		let i = 0

		animate()

		return () => cancelAnimationFrame(animationId)

		async function animate() {
			x += match(x)
				.when(
					(x_) => x_ > window.innerWidth + edgeClip,
					() => -10
				)
				.when(
					(x) => x < -edgeClip,
					() => 10
				)
				.otherwise(() => noiseX(i, 1) * SPEED)
			y += match(y)
				.when(
					(y) => y > window.innerHeight + edgeClip,
					() => -10
				)
				.when(
					(y) => y < -edgeClip,
					() => 10
				)
				.otherwise(() => noiseY(i, 1) * SPEED)

			i += 0.005

			animationId = requestAnimationFrame(animate)
		}
	})
</script>

<div
	class="absolute hidden max-sm:[contain:strict] md:block p-24 top-0 left-0 firefly pointer-events-auto opacity-50 hover:opacity-100 transition-opacity z-0"
	style:--x={x + 'px'}
	style:--y={y + 'px'}
	style="--size:{size}px; --fadeDelay: {Math.random() * 6 - 3}s"
>
	<div class={clsx('firefly-inner', classes)} />
</div>

<style lang="postcss">
	.firefly {
		/* transform: translate3d(50px, calc(var(--x) * 200px), 0px); */
		transform: translate3d(var(--x, 5), var(--y, 2), 0px);
		contain: strict;
	}

	.firefly-inner {
		min-height: var(--size);
		min-width: var(--size);
		border-radius: 50%;
		contain: layout size style;
		box-shadow:
			0px 0px 25px theme(colors.emerald.400),
			0px 0px 12px theme(colors.sky.400);
		animation: fade 3s ease-in-out infinite alternate;
		animation-delay: var(--fadeDelay);
	}

	@keyframes fade {
		0%,
		40%,
		66% {
			opacity: 0%;
		}
		99%,
		20% {
			opacity: 100%;
		}
	}
</style>
