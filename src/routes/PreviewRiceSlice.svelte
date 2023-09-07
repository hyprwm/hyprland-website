<script>
	import { inview } from 'svelte-inview'
	import previewRice from '$lib/videos/end_4_rice_intro.mp4'
	import previewRiceThumbnail from '$lib/videos/end_4_thumbnail.png'
	import AudioIcon from '~icons/mingcute/volume-line'
	import MuteIcon from '~icons/mingcute/volume-mute-line'
	import PauseIcon from '~icons/mingcute/pause-circle-line'
	import clsx from 'clsx'
	import { onMount } from 'svelte'
	import { getIsMobile } from '$lib/Helper.mjs'

	/** @type HTMLVideoElement */
	let videoElement

	let isVisible = false
	let isMuted = true
	let isPaused = false

	// Video has no sound anymore
	// function toggleMute() {
	// 	isMuted = !isMuted
	// }
	function togglePlay() {
		videoElement.paused ? videoElement.play() : videoElement.pause()
		isPaused = videoElement.paused
	}

	function makeFullscreen() {
		videoElement.requestFullscreen()
	}

	onMount(() => {
		const isMobile = getIsMobile()

		if (isMobile) {
			//
		}
	})
</script>

<section class={$$restProps.class} class:isVisible>
	<div
		class="rice-video"
		role="banner"
		use:inview={{ threshold: 0.5 }}
		on:inview_enter={() => {
			isVisible = true
			videoElement.play()
		}}
		on:inview_leave={() => {
			isVisible = false
			videoElement.pause()
		}}
		on:inview_leave={() => (isVisible = false)}
	>
		<video
			bind:this={videoElement}
			src={previewRice}
			disablepictureinpicture="true"
			disableremoteplayback="true"
			class="rounded-xl"
			loop
			muted={isMuted}
			preload="auto"
			poster={previewRiceThumbnail}
			on:click={togglePlay}
			on:dblclick={makeFullscreen}
		/>
		<div
			class={clsx(
				'z-20 opacity-0 transition-opacity  ',
				isPaused ? 'opacity-100' : 'pointer-events-none'
			)}
		>
			<!-- Currently there is no audio. Component might get refractored into a stand-alone player, so lets leave that here -->
			<!-- <button
				class="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/5 p-2 opacity-70 hover:opacity-100"
				on:click|stopPropagation={toggleMute}
			>
				{#if isMuted}
					<MuteIcon class="h-full w-full" />
				{:else}
					<AudioIcon class="h-full w-full" />
				{/if}
			</button> -->
			{#if isPaused}
				<div
					class="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
				>
					<PauseIcon class="h-full w-full" />
				</div>
			{/if}
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
		@apply relative z-10 -mb-4 -mt-8 w-full max-w-[1400px] px-1 animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-backwards [animation-delay:1700ms] [animation-duration:2000ms] lg:px-8;

		contain: layout style content;
	}
	.rice-video {
		@apply mx-3  rounded-xl      transition-all;
		transition-duration: 1460ms;
		position: relative;
		box-shadow: 0px 0px 44px theme(colors.primary / 80%);
		border: solid 2px theme(colors.sky.400);
		scale: 0.9;
		background: theme(colors.cyan.300 / 70%);

		& video {
			@apply transition-opacity;
			transition-duration: 1460ms;
			opacity: 0.3;
		}

		.isVisible & {
			scale: 1;
			background: transparent;
			box-shadow: 0px 0px 24px theme(colors.primary / 50%);

			& video {
				opacity: 1;
			}
		}
	}

	.preview-rice-bg {
		position: absolute;
		z-index: -10;
		opacity: 0.4;
		min-width: 2800px;
		overflow-x: hidden;
		top: -160px;
		left: 50%;
		translate: -50% 0px;
		width: 1100px;
		height: 200%;

		background-image: radial-gradient(
			closest-side,
			theme(colors.sky.500),
			theme(colors.indigo.500 / 0%)
		);
	}
</style>
