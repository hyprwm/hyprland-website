<script>
	import PatternBackground from '$lib/PatternBackground.svelte'
	import IconPlugin from '~icons/mingcute/plugin-2-line'
	import IconIpc from '~icons/mingcute/hexagon-line'
	import IconLinkOut from '~icons/mingcute/external-link-line'
	import IconSlideLeft from '~icons/mingcute/align-arrow-left-line'
	import clsx from 'clsx'
	import Video from '$lib/components/Video.svelte'
	import { animateIn } from '$lib/Helper.mjs'
	import { Subject, debounceTime, map, tap, throttle, throttleTime } from 'rxjs'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	/** @type {HTMLVideoElement[]}*/
	const videos = []
	let activeIndex = 0
	let isHoveringVideo = false
	const isVideoCroppedInput$ = new Subject()
	/** @type {import('rxjs').Subject<boolean>}*/
	const isVideoCropped$ = isVideoCroppedInput$.pipe(
		debounceTime(100),
		map(
			() =>
				window.innerWidth > 1024 && // LG breakpoint
				window.innerWidth < 2200 // Video is fully visible
		)
	)

	const items = [
		{
			icon: IconPlugin,
			title: 'Plugins.',
			description:
				'Customize everything with official and community extensions. Write your own easily with C++',
			poster: '/videos/outfoxxed_thumb.webp',
			src: '/videos/outfoxxed',
			subtext: `
			Setup by <a href="https://github.com/outfoxxed/" target="_blank">outfoxxed</a> using <a href="https://github.com/outfoxxed/hy3" target="_blank">hy3</a> and <a href="https://github.com/VortexCoyote/hyprfocus" target="_blank">hyprfocus</a>`
		},
		{
			icon: IconIpc,
			title: 'Bindings and IPC.',
			description: 'Control your desktop with your favourite languages or simply via IPC.',
			poster: '/videos/aylur_thumb.png',
			src: '/videos/aylur',
			subtext: `Setup by <a href="https://github.com/Aylur/dotfiles" target="_blank">Aylur</a>, creator of
				<a href="https://github.com/Aylur/ags" target="_blank">Ags</a> using Ags to control Hyprland
				via IPC.`
		}
	]

	function setActiveItem(index) {
		activeIndex = index
	}

	function onPlay(currentIndex) {
		videos.filter((_, index) => index !== currentIndex).forEach((video) => video.play())
	}
	function onPause(activeIndex, currentIndex) {
		// Prevent infinite loop when active video gets paused and other videos also get paused as a result
		if (currentIndex !== activeIndex) return

		videos.filter((_, index) => index !== currentIndex).forEach((video) => video.pause())
	}
	function toggleVideoSlide() {
		isHoveringVideo ? slideVideoOut() : slideVideoIn()
	}
	function slideVideoIn() {
		isHoveringVideo = true
	}
	function slideVideoOut() {
		if (!isHoveringVideo) return
		isHoveringVideo = false
	}
	onMount(() => {
		isVideoCroppedInput$.next(0)
	})
</script>

<svelte:window on:resize={() => isVideoCroppedInput$.next(0)} />

<section class="relative z-0 flex min-h-max w-full flex-col items-center py-20">
	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-8 transition-all lg:grid-cols-2 lg:gap-12"
		use:animateIn={{ fade: 0.7, slide: 24 }}
	>
		<div
			class={clsx(
				'z-10 flex flex-col gap-10 px-5 transition-transform delay-75 duration-300 sm:px-6',
				isHoveringVideo && '-translate-x-36'
			)}
		>
			<div class="txt-shadow_ mt-8 flex flex-col gap-6">
				<h2 class=" text-6xl font-bold">Unlock full power</h2>
				<p class="text-lg font-bold text-slate-300">
					Get the latest features Linux offers. Have full control over your workflow by customizing
					and extending it how you want.
				</p>
			</div>

			<div class="flex h-full flex-col gap-4">
				{#each items as { icon, title, description }, index}
					{@const isActive = index === activeIndex}
					<button
						class={clsx(
							'flex gap-3 rounded-xl px-4 py-4  outline-0  outline-cyan-400/50 transition-all  sm:-ml-4',
							isActive && 'bg-blue-300/5 shadow-md outline outline-1 backdrop-blur-sm    '
						)}
						on:mouseenter={() => setActiveItem(index)}
					>
						<svelte:component this={icon} class="h-8 w-8 shrink-0 text-primary" />
						<p
							class={clsx(
								'txt-shadow_ text-left text-lg font-medium transition-colors ',
								isActive ? 'text-slate-300' : 'text-slate-400'
							)}
						>
							<span class="font-bold text-white">{title}</span>
							{description}
						</p>
					</button>
				{/each}
			</div>

			<div class="-mt-5 hidden gap-1 lg:mt-12 lg:flex lg:flex-col">
				<a
					class="txt-shadow_ flex w-max max-w-max shrink-0 items-center gap-3 rounded font-bold text-slate-400 hover:underline"
					href="https://github.com/hyprland-community/awesome-hyprland"
					target="_blank"
				>
					<div>
						Check out <span class="text-cyan-500">Awesome Hyprland</span>
						for more
					</div>
					<IconLinkOut />
				</a>
				<p class="font-medium text-slate-400">
					A list of plugins, bindings and more by the community
				</p>
			</div>
		</div>

		<!-- Prevent the video from making the container big on small phones. 300px seem to work well for the text -->
		<div
			class={clsx(
				'relative z-10 w-full min-w-0 transition-transform sm:h-[25rem] sm:px-4 md:h-[30rem] lg:h-[37rem] lg:px-0',
				isHoveringVideo && '-translate-x-56'
			)}
		>
			{#if $isVideoCropped$}
				<button
					on:click={toggleVideoSlide}
					class:rotate-180={isHoveringVideo}
					class="group absolute -left-6 top-1/2 z-50 rounded-full bg-blue-400/5 p-2 outline outline-white/10 backdrop-blur-sm transition-transform"
					out:fade
				>
					<IconSlideLeft
						class="h-6 w-6 opacity-70 transition-all group-hover:-translate-x-0.5 group-hover:opacity-100"
					/>
				</button>
			{/if}

			<div class="h-full w-full" role="complementary">
				{#each items as { src, poster }, index}
					<Video
						sources={[src + '.mp4']}
						{poster}
						autoplay
						muted
						bind:videoElement={videos[index]}
						class="z-10 aspect-video origin-left object-cover    object-left shadow-xl  shadow-cyan-700/50    outline-2 outline-cyan-500 duration-500 sm:h-[inherit] sm:rounded-lg sm:outline"
						playButtonClass=" lg:left-32 xl:left-1/2"
						hidden={index !== activeIndex}
						on:pause={() => onPause(activeIndex, index)}
						on:play={() => onPlay(index)}
						videoClass="h-[inherit] aspect-video"
					/>
				{/each}
			</div>
			<div
				class="px-2 text-sm font-medium text-slate-300 sm:px-0 sm:pt-5 md:text-base [&>a:hover]:text-cyan-300 [&>a:hover]:underline [&>a]:font-bold"
			>
				{@html items[activeIndex].subtext}
			</div>
		</div>
	</div>

	<PatternBackground class="absolute inset-0  h-[110%]  w-full text-slate-800 opacity-40" />
</section>

<style lang="postcss">
	.txt-shadow_ {
		text-shadow:
			0px 0px 12px theme(colors.black / 90%),
			0px 0px 24px theme(colors.black / 50%);
	}

	.slideToLeft {
		margin-left: -15rem;
	}
</style>
