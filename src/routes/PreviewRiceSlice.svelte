<script>
	import { inview } from 'svelte-inview'
	import Video from '$lib/components/Video.svelte'
	import { onMount } from 'svelte'

	/** @type HTMLVideoElement */
	let videoElement

	let isVisible = false
	let isManuallyPaused = false

	onMount(() => {
		// The inview_leave event fires at the start and Chromium reports the video as paused, even with autoplay on.
		// This fixes it. Catch in case autoplay is blocked
		videoElement.play().catch(() => {})
	})
</script>

<section class={$$restProps.class} class:isVisible>
	<div
		class="wrapper"
		role="banner"
		use:inview={{ threshold: 0.5 }}
		on:inview_enter={() => {
			isVisible = true
			if (!isManuallyPaused) {
				videoElement.play().catch(() => {})
			}
		}}
		on:inview_leave={() => {
			isVisible = false
			isManuallyPaused = videoElement.paused
			videoElement.pause()
		}}
	>
		<div class="video">
			<Video
				autoplay
				muted
				sources={['/videos/end_4_rice_intro.mp4']}
				bind:videoElement
				poster={'/videos/end_4_thumbnail.webp'}
				videoClass="!rounded-2xl overflow-hidden"
				on:play={() => (isManuallyPaused = false)}
			/>
		</div>

		<a
			class="absolute -bottom-7 left-0 block max-w-max px-3 pt-2 text-sm font-medium text-slate-100/70 hover:underline"
			href="https://github.com/end-4/">Setup by @end_4</a
		>
	</div>

	<div class="preview-rice-bg" aria="hidden" />
</section>

<style lang="postcss">
	section {
		@apply relative z-10 -mb-4 w-full max-w-[1400px] px-1 animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-backwards [animation-delay:1700ms] [animation-duration:2000ms] md:-mt-8 lg:px-8;

		contain: layout style content;
	}
	.wrapper {
		@apply mx-3  rounded-xl;
		transition: all cubic-bezier(0.9, -1, 0.065, 1.8) 1060ms;
		position: relative;
		box-shadow: 0px 0px 44px theme(colors.primary / 80%);
		border: solid 2px theme(colors.sky.400);
		scale: 0.9;
		background: theme(colors.cyan.300 / 70%);
		aspect-ratio: 16/9;

		& .video {
			transition-property: opacity;
			transition-duration: inherit;
			transition-timing-function: inherit;
			opacity: 0.3;
			height: 100%;
			width: 100%;
			@apply overflow-hidden rounded-xl;
		}

		.isVisible & {
			scale: 1;
			background: transparent;
			box-shadow: 0px 0px 24px theme(colors.primary / 50%);

			& .video {
				opacity: 1;
			}
		}
	}

	.preview-rice-bg {
		position: absolute;
		z-index: -10;
		pointer-events: none;
		opacity: 0.4;
		min-width: 2800px;
		overflow-x: hidden;
		top: -160px;
		left: 50%;
		translate: -50% 0px;
		width: 1100px;
		height: 200%;

		background-image: url('/imgs/grain.webp'),
			radial-gradient(closest-side, theme(colors.sky.500), theme(colors.indigo.500 / 0%));

		mask-image: radial-gradient(
			closest-side,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1) 90%,
			transparent
		);
	}
</style>
