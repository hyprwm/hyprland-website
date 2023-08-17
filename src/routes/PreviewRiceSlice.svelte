<script>
	import { inview } from 'svelte-inview'
	import previewRice from '$lib/videos/end_4_rice_intro.mp4'
	import previewRiceThumbnail from '$lib/videos/end_4_thumbnail.png'
	import AudioIcon from '~icons/mingcute/volume-line'
	import MuteIcon from '~icons/mingcute/volume-mute-line'
	import clsx from 'clsx'

	/** @type HTMLVideoElement */
	let videoElement

	let isVisible = false
	let isShowingControls = false
	let isMuted = true

	function toggleMute() {
		isMuted = !isMuted
	}
	function togglePlay() {
		videoElement.paused ? videoElement.play() : videoElement.pause()
	}
</script>

<section
	class="max-w-7xl px-1 -mb-4 lg:px-8 w-full relative animate-in [animation-delay:1700ms] fade-in-0 fill-mode-backwards [animation-duration:2000ms] slide-in-from-bottom-10 z-20 {$$restProps.class}"
>
	<div
		class={clsx(
			'rounded-xl group  overflow-hidden border-sky-400 border-2  transition-all [transition-duration:1460ms] mx-3',
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
		/>
		<div
			class={clsx(
				'opacity-0 transition-opacity z-20  ',
				isShowingControls ? 'opacity-100' : 'pointer-events-none'
			)}
		>
			<button
				class="absolute p-2 h-10 bg-black/5 rounded-full w-10 bottom-4 right-8 opacity-70 hover:opacity-100"
				on:click|stopPropagation={toggleMute}
			>
				{#if isMuted}
					<MuteIcon class="h-full w-full" />
				{:else}
					<AudioIcon class="h-full w-full" />
				{/if}
			</button>
		</div>
	</div>
	<div class="preview-rice-bg" aria="hidden" />
</section>

<style lang="postcss">
	.preview-rice-bg {
		@apply absolute inset-0  -top-20 -z-10 w-screen opacity-50;
		/* background-color: red; */
		background-image: radial-gradient(min(150vw, 1400px) 50%, theme(colors.sky.500), transparent);
	}
</style>
