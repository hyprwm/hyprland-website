<script lang="ts">
	import { animateIn } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
</script>

<section
	class="w-full relative"
	use:animateIn={{ fade: 0, slide: 24, duration: 1200, threshold: 0.1 }}
>
	<div class="text-center font-extrabold mb-3 text-slate-300">Memorials of the ricing legends</div>
	<h1 class="text-8xl font-bold text-center">Hall of Fame</h1>

	<div
		class="w-full flex relative flex-col gap-16 lg:gap-24 items-center pt-16 overflow-hidden px-16"
	>
		<div class="rice" use:animateIn={{ fade: 0, slide: 24, duration: 1200, threshold: 0.4 }}>
			<img
				src="/imgs/env_4 novelknock-10.png"
				alt="Rice desktop"
				class="w-full nice-hover rounded-xl overflow-hidden shadow-2xl hover:scale-[1.01]"
			/>
			<img
				src="/imgs/env_4 novelknock-10.png"
				alt="Rice desktop"
				aria-hidden="true"
				class="rice-bg"
			/>
		</div>
		<div class="rice" use:animateIn={{ slide: 48, duration: 1400, threshold: 0.4 }}>
			<img
				src="/imgs/ricingcomp1/amadeus.png"
				alt="Rice desktop"
				class="w-full rounded-t-xl overflow-hidden nice-hover hover:scale-[1.005] shadow-2xl object-cover object-top h-[200px] sm:h-[250px] lg:h-[500px] ] bottom-rice"
			/>
			<img
				src="/imgs/ricingcomp1/amadeus.png"
				alt="Rice desktop"
				aria-hidden="true"
				class="rice-bg clop"
			/>
		</div>

		<a class="absolute bottom-16 left-1/2 z-20 -translate-x-1/2" href="/hall-of-fame">
			<Button size="lg" type="fancyOutline">Go to Hall of Fame</Button>
		</a>
	</div>

	<div class="glow" />
</section>

<style lang="postcss">
	.rice {
		@apply relative w-full max-w-[1100px];
	}
	.nice-hover {
		transition: transform 540ms cubic-bezier(0.1, -0.81, 0.31, 2);
	}
	.rice-bg {
		@apply w-[calc(100%-24px)] pointer-events-none transition-[filter] duration-500   absolute left-3 brightness-150 rounded-3xl -z-10 saturate-[5] h-full blur-2xl -bottom-10 opacity-50;

		.rice:hover & {
			@apply brightness-200;
		}
	}

	.bottom-rice {
		mask-image: linear-gradient(black, transparent);
	}

	.glow {
		@apply h-[200px] lg:h-[400px];
		width: 100%;
		/* min-width: 8800px; */
		position: absolute;
		opacity: 0.8;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: radial-gradient(
			ellipse at bottom,
			theme(colors.cyan.500),
			theme(colors.blue.700 / 50%) 50%,
			theme(colors.blue.950 / 0%) 80%
		);
	}
</style>
