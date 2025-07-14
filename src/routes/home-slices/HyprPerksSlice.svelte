<script lang="ts">
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Video from '$lib/components/Video.svelte'
	import { accountsLink } from '$lib/constants'
</script>

<section class="relative w-full">
	<div class="mb-10 md:mb-32">
		<div class="h-[2px] w-full bg-gradient-to-l from-transparent via-white/20 to-transparent" />
	</div>
	<div class="top-gradient"></div>

	<div class="relative mx-auto mb-12 max-w-5xl px-8 md:mb-20">
		<Title>
			<TitleHeading slot="title" class="">Hyprperks</TitleHeading>
			<TitleSubtile>
				<a href={accountsLink} class="text-primary hover:underline" target="_blank"
					>Get premium configurations</a
				> and support the development. We also have a free forum now. Supporters get priority support
				:)
			</TitleSubtile>
		</Title>

		<Video
			muted
			sources={['/videos/end_4_rice_intro.mp4']}
			poster={'/videos/end_4_thumbnail.webp'}
			videoClass="!rounded-2xl overflow-hidden"
			autoplay={undefined}
		/>
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
