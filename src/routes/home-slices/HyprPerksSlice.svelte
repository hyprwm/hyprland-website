<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import configDefaultImage from '$lib/images/features/config_default.webp'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Video from '$lib/components/Video.svelte'
	import smoothDefaultImage from '$lib/images/features/smooth_default.webp'
	import tileDefaultImage from '$lib/images/features/tiling_default.webp'

	import { accountsLink, forumLink } from '$lib/constants'
</script>

<section class="relative w-full">
	<div class="mb-10 md:mb-32">
		<div class="h-[2px] w-full bg-gradient-to-l from-transparent via-white/20 to-transparent" />
	</div>
	<div class="top-gradient"></div>

	<div class="relative mx-auto mb-12 max-w-5xl px-8 md:mb-20">
		<Title>
			<TitleHeading slot="title" class="">Hyprperks</TitleHeading>
			<TitleSubtile class="max-w-[55ch]">
				<a href={accountsLink} class=" text-primary hover:underline" target="_blank"
					>Get first-party configurations</a
				>
				and support the development
			</TitleSubtile>
		</Title>

		<CardsContainer
			class="group grid w-full flex-wrap gap-6 text-lg font-medium text-white/70 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4"
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

					<div class="_wrapper absolute inset-0 select-none" aria-hidden="true">
						<div class="feature-image">
							<img
								src={smoothDefaultImage}
								class="feature-image_inner"
								alt=""
								aria-hidden="true"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</Card>
			<Card class="min-h-[20rem]" color="purple">
				<div class="flex h-full flex-col justify-end p-8 sm:p-12">
					<div class="z-20 mix-blend-color-dodge">
						<h2 class="mb-6 text-5xl font-bold text-slate-400">Easy</h2>
						<p class="max-w-[60ch]">Designed to stay out of your way, and let you do your thing.</p>
					</div>

					<img
						src={configDefaultImage}
						class="absolute inset-x-0 top-0 size-full object-contain"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</Card>
			<Card class="min-h-[20rem]" color="purple">
				<div class="flex h-full flex-col justify-end p-8 sm:p-12">
					<div class="z-20 mix-blend-color-dodge">
						<h2 class="mb-6 text-5xl font-bold text-slate-300">Beautiful</h2>
						<p class="max-w-[60ch]">
							Customizable, with automatic theming for everything. Crafted with love from the
							Hyprland team
						</p>
					</div>

					<img
						src={tileDefaultImage}
						class="absolute -top-20 object-contain"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</Card>
		</CardsContainer>
	</div>
</section>

<style lang="postcss">
	.top-gradient {
		background-image: linear-gradient(to bottom, theme(colors.cyan.500 / 30%), transparent);
		height: 90%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		mask-image: linear-gradient(to left, transparent, black, transparent);
		contain: strict;
	}
</style>
