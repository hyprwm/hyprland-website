<script>
	import clsx from 'clsx'
	import PlayIcon from '~icons/mingcute/play-circle-line'
	import { inview } from 'svelte-inview'
	import IconFullscreen from '~icons/mingcute/fullscreen-fill'
	import IconPause from '~icons/mingcute/pause-circle-line'
	import { onMount } from 'svelte'

	/** @type {string[]} */
	export let sources
	/** @type {string} */
	export let poster
	export let loop = true
	export let muted = true
	/** @type {true | undefined}*/
	export let autoplay = undefined
	export let hidden = false
	/** @type {string}*/
	export let videoClass = ''
	/** @type {string}*/
	export let playButtonClass = ''
	/** @type {HTMLVideoElement}*/
	export let videoElement

	let isPaused = true

	function togglePlay() {
		videoElement.paused ? videoElement.play() : videoElement.pause()
		isPaused = videoElement.paused
	}

	function makeFullscreen() {
		videoElement.requestFullscreen()
	}

	// Firefox does not seem to fire the play event when the video is autoplayed. So lets check manually if autoplaying worked
	onMount(() => {
		const timeout = setTimeout(() => {
			isPaused = videoElement.paused
		}, 5)
		return () => clearTimeout(timeout)
	})
</script>

<div
	class="wrapper group {$$props.class}"
	role="banner"
	use:inview={poster}
	on:inview_enter
	on:inview_leave
	{hidden}
>
	<video
		bind:this={videoElement}
		{muted}
		disablepictureinpicture="true"
		disableremoteplayback="true"
		class="rounded-xl {videoClass}"
		{loop}
		preload="auto"
		{poster}
		on:click={togglePlay}
		on:dblclick={makeFullscreen}
		on:play
		on:pause
		on:pause={() => (isPaused = true)}
		{autoplay}
		on:play={() => (isPaused = false)}
	>
		{#each sources as src}
			<source {src} />
		{/each}
	</video>

	<div
		class="absolute bottom-2 left-2 flex gap-4 opacity-80 hover:opacity-100 group-hover:opacity-90"
	>
		{#if !isPaused}
			<button on:click={() => videoElement.pause()} class="z-10">
				<IconPause
					class="h-6 w-6 rounded     drop-shadow transition-all duration-75 hover:scale-105 "
				/>
			</button>
		{:else}
			<button on:click={() => videoElement.pause()} class="z-10">
				<PlayIcon
					class="h-6 w-6 rounded     drop-shadow transition-all duration-75 hover:scale-105 "
				/>
			</button>
		{/if}
		<button on:click={makeFullscreen} class="z-10">
			<IconFullscreen
				class="h-6 w-6 rounded  drop-shadow transition-all duration-75 hover:scale-105 "
			/>
		</button>
	</div>

	<div
		class={clsx(
			'z-20 opacity-0 transition-opacity  ',
			isPaused ? 'opacity-100' : 'pointer-events-none'
		)}
	>
		{#if isPaused}
			<div
				class="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100 {playButtonClass}"
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
		width: 100%;
		height: 100%;
	}
</style>
