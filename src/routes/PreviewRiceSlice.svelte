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
	let isShowingControls = false
	let isMuted = true
	let isPaused = false

	$: console.log({ isVisible })

	function toggleMute() {
		isMuted = !isMuted
	}
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

<section
	class="max-w-[1400px] px-1 relative -mb-4 lg:px-8 w-full animate-in [animation-delay:1700ms] fade-in-0 fill-mode-backwards [animation-duration:2000ms] slide-in-from-bottom-10 {$$restProps.class}"
>
	<div
		class={clsx(
			'rounded-xl group  relative overflow-hidden border-sky-400 border-2  transition-all [transition-duration:1460ms] mx-3 shadow-2xl shadow-cyan-400/40',
			!isVisible && 'opacity-20 scale-90'
		)}
		role="banner"
		use:inview={{ threshold: 0.8 }}
		on:inview_enter={() => {
			isVisible = true
			videoElement.play()
		}}
		on:inview_leave={() => {
			isVisible = false
			videoElement.pause()
		}}
		on:inview_leave={() => (isVisible = false)}
		on:mouseenter={() => (isShowingControls = true)}
		on:mouseleave={() => (isShowingControls = false)}
	>
		<video
			bind:this={videoElement}
			src={previewRice}
			disablepictureinpicture="true"
			disableremoteplayback="true"
			loop
			muted={isMuted}
			preload="auto"
			poster={previewRiceThumbnail}
			on:click={togglePlay}
			on:dblclick={makeFullscreen}
		/>
		<div
			class={clsx(
				'opacity-0 transition-opacity z-20  ',
				isShowingControls ? 'opacity-100' : 'pointer-events-none'
			)}
		>
			<button
				class="absolute p-2 h-10 bg-black/5 rounded-full w-10 bottom-4 right-4 opacity-70 hover:opacity-100"
				on:click|stopPropagation={toggleMute}
			>
				{#if isMuted}
					<MuteIcon class="h-full w-full" />
				{:else}
					<AudioIcon class="h-full w-full" />
				{/if}
			</button>
			{#if isPaused}
				<div
					class="absolute h-14 rounded-full -translate-x-1/2 -translate-y-1/2 w-14 top-1/2 left-1/2 opacity-80 hover:opacity-100 pointer-events-none"
				>
					<PauseIcon class="h-full w-full" />
				</div>
			{/if}
		</div>
	</div>
	<div class="preview-rice-bg overflow-x-hidden" aria="hidden" />
</section>

<style lang="postcss">
	.preview-rice-bg {
		@apply absolute inset-0  -top-40 -z-10  w-full opacity-50;
		/* background-color: red; */
		background-image: radial-gradient(closest-side, theme(colors.sky.500), transparent);
	}
</style>
