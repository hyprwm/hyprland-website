<script>
	const circlesAmount = 10
	/** In millisseconds */
	const animationDuration = 8000

	const circles = Array.from({ length: circlesAmount }, () => 1)

	/**
	 *
	 * @param node {HTMLElement}
	 * @param param1
	 */
	function animateElement(node, { delay, index, amount }) {
		const delayFrames = Array.from({ length: index }).map(() => ({
			scale: 0
		}))
		node.animate([{ scale: CSS.number(0) }, { scale: CSS.number(3), opacity: 0 }], {
			iterations: Infinity,
			duration: animationDuration,
			delay: animationDuration / (amount - index + 1) + animationDuration / (amount - index + 1),
			easing: 'cubic-bezier(1, 0.1 , 0.9, 1)',
			fill: 'backwards'
		})
	}
</script>

<div class="wrapper">
	{#each circles as _, index}
		<div
			class="circle"
			style:--percent={((index + 1) / circles.length) * 100 + '%'}
			style:--index={index}
			style:--amount={circles.length}
		/>
	{/each}
	<!-- use:animateElement={{  index, amount: circles.length }} -->
</div>

<style lang="postcss">
	.wrapper {
		position: absolute;
		top: 40px;
		right: 40px;
		width: 400px;
		aspect-ratio: 1;
		filter: drop-shadow(0 0 44px blue);
		/* background: red; */
	}

	.circle {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		opacity: 0.05;
		background: radial-gradient(
			closest-side,
			transparent,
			color-mix(in hsl, theme(colors.blue.500), theme(colors.pink.500) var(--percent)),
			transparent 90%
		);
		transition: all 2200ms;

		.wrapper:hover & {
			opacity: 1;
			transition: all 1200ms ease-in;
		}

		animation: loop infinite backwards;
	}

	@keyframes loop {
		from {
			scale: 0;
		}
		to {
			scale: 1;
		}
	}
</style>
