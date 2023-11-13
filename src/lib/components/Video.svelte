<script>
	import clsx from 'clsx'
	import PlayIcon from '~icons/mingcute/play-circle-line'
	import { inview } from 'svelte-inview'

	/** @type {string} */
	export let src
	/** @type {string} */
	export let poster
	export let loop = true
	export let muted = true
	export let autoplay = false
	export let hidden = false
	/** @type {string}*/
	export let videoClass = ''
	let videoElement
	let isPaused = !autoplay

	function togglePlay() {
		videoElement.paused ? videoElement.play() : videoElement.pause()
		isPaused = videoElement.paused
	}

	function makeFullscreen() {
		videoElement.requestFullscreen()
	}
</script>

<div
	class="wrapper {$$props.class}"
	role="banner"
	use:inview={poster}
	on:inview_enter
	on:inview_leave
	{hidden}
>
	<video
		bind:this={videoElement}
		{src}
		{muted}
		disablepictureinpicture="true"
		disableremoteplayback="true"
		class="rounded-xl {videoClass}"
		{loop}
		preload="auto"
		{poster}
		on:click={togglePlay}
		on:dblclick={makeFullscreen}
		{autoplay}
	/>
	<div
		class={clsx(
			'z-20 opacity-0 transition-opacity  ',
			isPaused ? 'opacity-100' : 'pointer-events-none'
		)}
	>
		{#if isPaused}
			<div
				class="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
			>
				<PlayIcon class="h-full w-full" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.wrapper {
		position: relative;
		background: theme(colors.black);
	}

	video {
		display: block;
	}
</style>
