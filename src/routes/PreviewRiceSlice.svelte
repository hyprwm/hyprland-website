<script>
	import { inview } from 'svelte-inview'
	import previewRice from '$lib/videos/end_4_rice_intro.mp4'
	import previewRiceThumbnail from '$lib/videos/end_4_thumbnail.png'

	/** @type HTMLVideoElement */
	let videoElement
</script>

<section
	class="max-w-7xl relative animate-in [animation-delay:1700ms] fade-in-0 fill-mode-backwards [animation-duration:2000ms] slide-in-from-bottom-10 z-20 {$$restProps.class}"
>
	<div
		class="rounded-xl opacity-20 overflow-hidden border-sky-400 border-2 scale-90 transition-all [transition-duration:1460ms]"
		use:inview={{ unobserveOnEnter: true, threshold: 0.8 }}
		on:inview_enter={({ detail: { node } }) => {
			node.classList.remove('opacity-20')
			node.classList.remove('scale-90')
			videoElement.play()
		}}
	>
		<video
			bind:this={videoElement}
			src={previewRice}
			disablepictureinpicture="true"
			disableremoteplayback="true"
			loop
			muted
			preload="auto"
			poster={previewRiceThumbnail}
		/>
	</div>
	<div class="preview-rice-bg" aria="hidden" />
</section>

<style lang="postcss">
	.preview-rice-bg {
		@apply w-screen max-w-7xl h-full absolute -z-10 -top-20 left-1/2 -translate-x-1/2 opacity-50;
		/* background-color: red; */
		background-image: radial-gradient(closest-side, theme(colors.sky.500), transparent);
	}
</style>
