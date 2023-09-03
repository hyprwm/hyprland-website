<script>
	import { inview } from 'svelte-inview'

	/** @type {string} */
	export let name
	/** @type {number} */
	export let number
	/** @type {string} */
	export let date

	/** Used to show the background gradient. Show if user scrolls, but do not disable when the user scrolls past from the top.  */
	let enabled = false

	function setEnabled({ detail }) {
		console.log({ detail })
		const { inView, scrollDirection } = detail
		const isScrollingUp = scrollDirection.vertical === 'up'

		if (!inView && !isScrollingUp) {
			enabled = false
			return
		}
		if (inView) {
			enabled = true
		}
	}
</script>

<section class="relative flex flex-col py-24">
	<div class="relative py-56">
		<div
			class="flex flex-col items-center p-6 mix-blend-color-dodge"
			use:inview={{ threshold: 0.25 }}
			on:inview_change={setEnabled}
		>
			<div class="text-2xl font-bold text-neutral-300/80">Contest #{number}</div>
			<h2 class="text-center text-9xl font-bold text-neutral-200/80">{name}</h2>
			<h2 class="mt-2 text-center text-xl font-bold text-slate-200/80">{date}</h2>
		</div>

		<div class="mask" class:enabled>
			<div class="background" aria-hidden="true"></div>
		</div>
	</div>

	<div class="flex flex-col gap-40">
		<slot />
	</div>
</section>

<style lang="postcss">
	.mask {
		overflow: hidden;
		top: 0px;
		left: 50%;
		width: 400%;
		translate: -50% 0px;
		transform-origin: center;
		height: 250%;
		position: absolute;
		pointer-events: none;
		z-index: -10;
		transform-origin: top;
	}
	.background {
		/* scale: 0.8 0.8; */
		--c1: color-mix(in hsl shorter hue, var(--color), hsl(0, 100%, 0%) 10%);
		--c2: color-mix(in hsl shorter hue, var(--color), hsl(0, 100%, 0%) 15%);
		--c3: color-mix(in hsl shorter hue, var(--color), hsl(0, 100%, 0%) 20%);
		--c4: color-mix(in hsl shorter hue, var(--color), hsl(0, 100%, 0%) 30%);

		position: absolute;
		top: 500px;
		left: 50%;
		translate: -50% -50%;
		width: 100%;
		height: 1000px;
		z-index: -10;
		background: radial-gradient(140px 100px at 50% 45%, var(--color), transparent),
			radial-gradient(145px 110px at 50% 45%, var(--c1) 80%, transparent),
			radial-gradient(210px 140px, var(--c2, theme(colors.blue.600)), transparent),
			radial-gradient(300px 200px, var(--c2, theme(colors.sky.600)), transparent),
			radial-gradient(600px 220px, var(--c3, theme(colors.blue.700)), transparent),
			radial-gradient(1100px 420px, var(--c4, theme(colors.blue.800 / 60%)), transparent);

		mask-image: radial-gradient(100% 100% at 50% 50%, black 20%, transparent 50%);

		opacity: 0.1;
		scale: 0.95 1;
		transition: all 1200ms ease-in-out 120ms;

		.enabled & {
			opacity: 1;
			scale: 1;
		}
	}
</style>
