<script>
	import { onMount } from 'svelte'
	import { createNoise2D } from 'simplex-noise'
	import { match } from 'ts-pattern'
	import clsx from 'clsx'

	// Idea: Boid behavior

	const maxSize = 12
	const size = Math.max(Math.random() * maxSize, 6)
	/** How much the fireflies can vanish into the edges of the screen. Include their invisible padding for mouse detection. */
	const edgeClip = maxSize * 8
	const noiseY = createNoise2D()
	const noiseX = createNoise2D()

	let classes = clsx(Math.random() > 0.5 ? 'bg-primary/70' : 'bg-sky-500/70')

	let x = 0
	let y = 0

	onMount(() => {
		x = window.innerWidth / 2 - maxSize * 6
		y = window.innerHeight / 2 + 100
		let animationId
		let i = 0

		animate()

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
				.otherwise(() => noiseX(i, 1) * 5)
			y += match(y)
				.when(
					(y) => y > window.innerHeight + edgeClip,
					() => -10
				)
				.when(
					(y) => y < -edgeClip,
					() => 10
				)
				.otherwise(() => noiseY(i, 1) * 5)

			i += 0.005

			animationId = requestAnimationFrame(animate)
		}

		return () => cancelAnimationFrame(animationId)
	})
</script>

<div
	class="absolute p-24 top-0 left-0 firefly pointer-events-auto opacity-50 hover:opacity-100 transition-opacity"
	style="--x:{x}px; --y:{y}px;--size:{size}px; --fadeDelay: {Math.random() * 6 - 3}s"
>
	<div class="firefly-inner {classes}" />
</div>

<style lang="postcss">
	.firefly {
		/* transform: translate3d(50px, calc(var(--x) * 200px), 0px); */
		transform: translate3d(var(--x, 5), var(--y, 2), 0px);
		contain: strict;
	}

	.firefly-inner {
		background-color: theme(colors.sky.400 / 70%);
		min-height: var(--size);
		min-width: var(--size);
		border-radius: 50%;
		contain: layout;
		box-shadow: 0px 0px 25px theme(colors.emerald.400), 0px 0px 12px theme(colors.sky.400);
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
