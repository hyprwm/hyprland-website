<script lang="ts">
	import { animateIn } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
	import FameRicePreview from './FameRicePreview.svelte'
</script>

<section
	class="w-full relative"
	use:animateIn={{ fade: 0, slide: 24, duration: 1200, threshold: 0.1 }}
>
	<div class="absolute inset-0">
		<div class="text-center font-extrabold mb-3 text-slate-300">
			Memorials of the ricing legends
		</div>
		<h1 class="text-8xl font-bold text-center">Hall of Fame</h1>
	</div>

	<div
		class="w-full flex relative flex-col gap-16 lg:gap-24 items-center justify-end pt-16 overflow-hidden px-16 [perspective:100px]"
	>
		<a class="absolute bottom-24 left-1/2 z-20 -translate-x-1/2" href="/hall-of-fame">
			<Button size="lg" type="fancyOutline">Go to Hall of Fame</Button>
		</a>

		<FameRicePreview
			createdBy={{ name: 'flicko', url: 'http://flicko.com' }}
			image="/imgs/ricingcomp1/flicko.png"
			containerClass="[translate:0px_0px_-100px] -mb-[30%] hover:[translate:0px_0px_-70px] hover:mb-[-15%] transition-all duration-500"
			imageClass="[mask-image:linear-gradient(black_50%,transparent_95%)] "
		/>
		<FameRicePreview
			createdBy={{ name: 'flicko', url: 'http://flicko.com' }}
			image="/imgs/env_4 novelknock-10.png"
			containerClass="[translate:0px_0px_-40px] -mb-[30%]"
			imageClass="[mask-image:linear-gradient(black,transparent_95%)]"
		/>
		<FameRicePreview
			createdBy={{ name: 'flicko', url: 'http://flicko.com' }}
			image="/imgs/ricingcomp1/amadeus.png"
			imageClass="rounded-none [mask-image:linear-gradient(black,transparent)] rounded-t-xl  h-[200px] sm:h-[250px] lg:h-[500px]"
		/>
	</div>

	<div class="glow" />
</section>

<style lang="postcss">
	.glow {
		@apply h-[200px] lg:h-[400px];
		width: 100%;
		/* min-width: 8800px; */
		position: absolute;
		opacity: 0.5;
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
