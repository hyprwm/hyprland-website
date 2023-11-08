<script>
	import { BehaviorSubject, Subject, map, startWith, throttle, throttleTime } from 'rxjs'
	import { onDestroy } from 'svelte'
	import { spring } from 'svelte/motion'

	/** @type {HTMLDivElement}*/
	let wrapperElement = undefined
	let isMouseOver = false

	const gradientSize = 240

	const fps = 1000 / 60 // 60 frames per second
	/** @type {import('rxjs').Subject<[number,number]>}*/
	const mouse$ = new Subject()
	const gradientPosition$ = mouse$.pipe(
		throttleTime(fps),
		map(([clientX, clientY]) => {
			const { x, y } = wrapperElement.getBoundingClientRect()
			return [clientX - x - gradientSize * 0.5, clientY - y - gradientSize * 0.5]
		}),
		startWith([0, 0])
	)
	const gradientWiggle = spring([0, 0])
	const subscription = gradientPosition$.subscribe((data) => gradientWiggle.set(data))

	onDestroy(() => {
		subscription.unsubscribe()
	})
</script>

<div
	class={$$props.class + '  wrapper'}
	on:mouseleave={() => (isMouseOver = false)}
	on:mousemove={({ clientX, clientY }) => {
		isMouseOver = true
		mouse$.next([clientX, clientY])
	}}
	aria-hidden
	bind:this={wrapperElement}
>
	<div
		class="gradient"
		style:--x={$gradientWiggle.at(0) + 'px'}
		style:--y={$gradientWiggle.at(1) + 'px'}
		style:--size={gradientSize + 'px'}
		class:hidden={!isMouseOver}
	></div>

	<svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
		<pattern
			id="background-pattern-id"
			x="0"
			y="0"
			width="32"
			height="32"
			patternUnits="userSpaceOnUse"
		>
			<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="currentColor" />
		</pattern>

		<rect
			x="0"
			y="0"
			width="100%"
			height="100%"
			filter="url(#spotlight)"
			fill="url(#background-pattern-id)"
		>
		</rect>
	</svg>
</div>

<style lang="postcss">
	.wrapper {
		/* mask-image: radial-gradient(closest-side, black 50%, transparent); */
		/* contain: strict; */
		user-select: none;
	}
	svg {
		background: theme(colors.black);
		/* background: theme(colors.black); */
		/* background-blend-mode: difference; */
	}

	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: color-dodge;
		height: var(--size);
		width: var(--size);
		background: radial-gradient(closest-side, theme(colors.cyan.700), transparent);
		opacity: 100%;
		translate: var(--x) var(--y);
		z-index: 20;
	}
</style>
