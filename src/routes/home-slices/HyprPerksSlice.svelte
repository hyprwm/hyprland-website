<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import configDefaultImage from '$lib/images/features/config_default.webp'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Video from '$lib/components/Video.svelte'
	import firstClassDefaultImage from '$lib/images/features/first-class_default.webp'
	import firstClassHoverImage from '$lib/images/features/first-class_hover.webp'
	import easyImage from '$lib/images/features/easy.webp'
	import beautifulImage from '$lib/images/features/beautiful-perky.webp'

	import { hyprperksLink } from '$lib/constants'
	import Button from '$lib/components/Button.svelte'
</script>

<section class="relative w-full">
	<div class="mb-16 md:mb-32">
		<div class="h-[2px] w-full bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"></div>
	</div>
	<div class="top-gradient"></div>

	<div class="relative mx-auto mb-12 max-w-5xl px-8 md:mb-20">
		<Title class="mb-10">
			{#snippet title()}
						<TitleHeading  class="">Hyprperks</TitleHeading>
					{/snippet}
			<TitleSubtile class="max-w-[55ch]">
				<a href={hyprperksLink} class=" text-primary hover:underline" target="_blank"
					>Subscribe for first-party configurations, priority support</a
				>
				and to support the development. Fully optional, but crafted with love
			</TitleSubtile>
		</Title>

		<CardsContainer
			class="group flex w-full flex-col  gap-8 text-lg font-medium text-white/70 md:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4"
		>
			<Card class="col-span-2 row-span-2 aspect-video min-h-[20rem]" color="cyan">
				<div class="grid h-full">
					<div class="col-start-1 col-end-2 row-start-1 row-end-2 m-0.5" aria-hidden="true">
						<Video
							muted
							sources={['https://dl.hypr.land/videos/hyprde2.mp4']}
							poster={'/videos/hyprde.webp'}
							class="rounded-3xl "
							autoplay
						/>
					</div>
				</div>
			</Card>

			<Card class="row-span-2 min-h-[20rem]" color="purple">
				<div class="flex h-full flex-col justify-end p-8 sm:p-12">
					<h2 class="mb-6 text-2xl font-bold text-white lg:text-5xl">First-class support</h2>
					<p class="max-w-[60ch] text-balance">
						Always working, actively developed, one-click-update
					</p>

					<div
						class="_wrapper group/fc absolute bottom-0 right-0 top-0 size-1/2 select-none md:inset-0 md:size-full"
						aria-hidden="true"
					>
						<img
							src={firstClassDefaultImage}
							class="absolute inset-0 transition-opacity duration-1000 group-hover/fc:opacity-0"
							alt=""
							aria-hidden="true"
							loading="lazy"
						/>
						<img
							src={firstClassHoverImage}
							class="absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover/fc:opacity-100"
							alt=""
							aria-hidden="true"
							loading="lazy"
						/>
					</div>
				</div>
			</Card>

			<Card class="min-h-[20rem]" color="purple">
				<div class="flex h-full flex-col justify-end p-8 sm:p-12">
					<div class="z-20 mix-blend-color-dodge">
						<h2 class="mb-6 text-5xl font-bold text-slate-300">Easy</h2>
						<p class="max-w-[60ch]">Designed to stay out of your way, and let you do your thing.</p>
					</div>

					<img
						src={easyImage}
						class="absolute inset-x-0 top-0 size-full w-full object-cover bg-blend-screen"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</Card>

			<Card class="min-h-[20rem]" color="purple">
				<div class="flex h-full flex-col justify-end">
					<div class="z-20 p-8 mix-blend-color-dodge sm:p-12">
						<h2 class="mb-6 text-5xl font-bold text-slate-300">Beautiful</h2>
						<p class="max-w-[60ch]">
							Customizable, with automatic theming for everything. Crafted with love from the
							Hyprland team
						</p>
					</div>

					<img
						src={beautifulImage}
						class="absolute size-full object-cover"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</Card>

			<div
				class=" col-span-full mt-8 flex size-full w-full items-center justify-center self-center"
			>
				<Button type="fancyOutline" href={hyprperksLink} size="xl">Subscribe now</Button>
			</div>
		</CardsContainer>
	</div>
</section>

<style lang="postcss">
	.top-gradient {
		background-image: linear-gradient(
			to bottom,
			theme(colors.blue.500 / 30%),
			transparent,
			theme(colors.cyan.500 / 25%)
		);
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		mask-image: linear-gradient(to left, transparent, black, transparent);
		contain: strict;
	}
</style>
