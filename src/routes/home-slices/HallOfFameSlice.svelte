<script lang="ts">
	import { animateIn } from '$lib/Helper.ts'
	import Button from '$lib/components/Button.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import FameRicePreview from './FameRicePreview.svelte'
</script>

<section class="" use:animateIn={{ fade: 0, slide: 24, duration: 3000, threshold: 0.1 }}>
	<div class="z-20 -mb-40 px-4">
		<Title>
			<TitlePre>Memorials of the ricing legends</TitlePre>
			<TitleHeading slot="title" class="">Hall of Fame</TitleHeading>
		</Title>
	</div>

	<div class="atmosphere" />

	<div
		class="relative -mt-8 flex w-full max-w-[1100px] flex-col items-center justify-end gap-16 overflow-hidden [perspective:100px] md:px-16 lg:gap-24"
		use:animateIn={{ slide: 24, fade: 0.5, duration: 800 }}
	>
		<a class="absolute bottom-24 left-1/2 z-20 -translate-x-1/2" href="/hall_of_fame">
			<Button size="lg" type="fancyOutline">Go to Hall of Fame</Button>
		</a>

		<FameRicePreview
			image="/ricing_competitions/1/lauroro.webp"
			containerClass="[translate:0px_50px_-100px] -mb-[30%] hover:[translate:0px_0px_-98px] transition-all duration-500"
			imageClass="[mask-image:linear-gradient(black,black_45%,transparent_65%)] opacity-50 hover:opacity-60"
		/>
		<FameRicePreview
			image="/ricing_competitions/1/amadeus.webp"
			containerClass="[translate:0px_50px_-40px] hover:[translate:0px_0px_-38px]  -mb-[30%] duration-500 transition-all group"
			imageClass="md:[mask-image:linear-gradient(black,black_50%,transparent_75%)] [mask-image:linear-gradient(black,black_10%,transparent_75%)] opacity-80 group-hover:opacity-100 transition-all duration-500"
		/>
		<FameRicePreview
			image="/ricing_competitions/1/flicko.webp"
			imageClass="!rounded-none !rounded-t-xl [mask-image:linear-gradient(black,black_50%,transparent)] rounded-t-xl -mb-4 sm:-mb-8 md:-mb-24  "
		/>
	</div>

	<div class="glow" />
</section>

<style lang="postcss">
	section {
		@apply relative flex w-full flex-col items-center;
		contain: layout style content size;
	}
	/* The blue gradient in the background */
	.atmosphere {
		position: absolute;
		z-index: -30;
		bottom: 0;
		left: 50%;
		translate: -50% 0px;
		height: 100vh;
		width: 200vw;
		max-width: 2400px;
		max-height: 1000px;
		background: url('/imgs/grain.webp'),
			radial-gradient(closest-side, theme(colors.blue.500 / 30%), transparent),
			radial-gradient(15% 20%, theme(colors.cyan.500 / 70%), transparent);
		mask-image: radial-gradient(closest-side, white, rgba(0, 0, 0, 0.8) 80%, transparent);
	}

	.glow {
		@apply h-[400px] lg:h-[400px];
		width: 100%;
		/* min-width: 8800px; */
		position: absolute;
		opacity: 0.3;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: url('/imgs/grain.webp'),
			radial-gradient(
				ellipse at bottom,
				theme(colors.pink.400),
				theme(colors.indigo.700 / 50%) 50%,
				theme(colors.indigo.950 / 0%) 80%
			);
		mask-image: radial-gradient(ellipse at bottom, white, rgba(0, 0, 0, 1) 90%, transparent);
	}
</style>
