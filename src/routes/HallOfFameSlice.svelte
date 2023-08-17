<script lang="ts">
	import { animateIn } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
	import Title from '$lib/components/Title.svelte'
	import FameRicePreview from './FameRicePreview.svelte'
</script>

<section
	class="w-full relative flex flex-col items-center"
	use:animateIn={{ fade: 0, slide: 24, duration: 3000, threshold: 0.1 }}
>
	<div class="px-4 -mb-40 z-20">
		<Title>
			<span slot="pre"> Memorials of the ricing legends </span>
			<span slot="title">Hall of Fame</span>
		</Title>
	</div>

	<div
		class="w-full -mt-24 max-w-[1100px] flex relative flex-col gap-16 lg:gap-24 items-center justify-end overflow-hidden md:px-16 [perspective:100px]"
		use:animateIn={{ slide: 24, fade: 0.5, duration: 800 }}
	>
		<a class="absolute bottom-24 left-1/2 z-20 -translate-x-1/2" href="/#">
			<Button size="lg" type="fancyOutline">Go to Hall of Fame</Button>
		</a>

		<div
			class="bg-blue-500 w-full [translate:0px_0px_-100px] aspect-square rounded-[50%] absolute top-0 inset-x-0 -z-30 blur-[200px]"
		/>

		<FameRicePreview
			image="/imgs/ricingcomp1/lauroro.jpg"
			containerClass="[translate:0px_0px_-100px] -mb-[30%] hover:[translate:0px_0px_-98px] transition-all duration-500"
			imageClass="[mask-image:linear-gradient(black,black_45%,transparent_65%)] opacity-50 hover:opacity-60"
		/>
		<FameRicePreview
			image="/imgs/ricingcomp1/amadeus.png"
			containerClass="[translate:0px_0px_-40px] hover:[translate:0px_0px_-38px]  -mb-[30%] duration-500 transition-all group"
			imageClass="[mask-image:linear-gradient(black,black_50%,transparent_75%)] opacity-80 group-hover:opacity-100 transition-all duration-500"
		/>
		<FameRicePreview
			image="/imgs/ricingcomp1/flicko.png"
			imageClass="!rounded-none !rounded-t-xl [mask-image:linear-gradient(black,black_50%,transparent)] rounded-t-xl   h-[200px] sm:h-[250px] lg:h-[500px]"
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
		opacity: 0.3;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: radial-gradient(
			ellipse at bottom,
			theme(colors.pink.400),
			theme(colors.indigo.700 / 50%) 50%,
			theme(colors.indigo.950 / 0%) 80%
		);
	}
</style>
