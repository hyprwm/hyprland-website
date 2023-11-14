<script>
	import PatternBackground from '$lib/PatternBackground.svelte'
	import IconPlugin from '~icons/mingcute/plugin-2-line'
	import IconIpc from '~icons/mingcute/hexagon-line'
	import IconLinkOut from '~icons/mingcute/external-link-line'
	import clsx from 'clsx'
	import Video from '$lib/components/Video.svelte'

	/** @type {HTMLVideoElement[]}*/
	const videos = []
	let activeIndex = 0
	let isHoveringVideo = false

	const items = [
		{
			icon: IconPlugin,
			title: 'Plugins.',
			description:
				'Customize everything with official and community extensions. Write your own easily with C++',
			poster: '/videos/hypr_plugins_thumb.webp',
			src: '/videos/outfoxxed.mp4'
		},
		{
			icon: IconIpc,
			title: 'Bindings and IPC.',
			description: 'Control your desktop with your favourite languages or simply via IPC.',
			poster: '/videos/aylur_thumb.png',
			src: '/videos/aylur.mp4'
		}
	]

	function setActiveItem(index) {
		activeIndex = index
	}

	function playVideos() {
		videos.forEach((video) => video.play())
	}
	function pauseVideos() {
		videos.forEach((video) => video.pause())
	}
	function slideVideoIn() {
		if (window.innerWidth < 1024) return // LG breakpoint
		if (window.innerWidth > 2215) return // Video is fully visible

		isHoveringVideo = true
	}
	function slideVideoOut() {
		if (!isHoveringVideo) return
		isHoveringVideo = false
	}
</script>

<section class="relative z-0 flex min-h-max w-full flex-col items-center py-20">
	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 transition-all lg:grid-cols-2 lg:gap-24"
	>
		<div
			class={clsx(
				'z-10 flex flex-col gap-10 px-6 transition-transform delay-75 duration-300',
				isHoveringVideo && '-translate-x-28'
			)}
		>
			<div class="txt-shadow_ mt-8 flex flex-col gap-6">
				<h2 class=" text-6xl font-bold">Unlock full power</h2>
				<p class="text-lg font-bold text-slate-300">
					Get the latest features Linux offers. Have full controll over your workflow by customizing
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
						Checkout <span class="text-cyan-500">Awesome Hyprland</span>
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
				'z-10 h-[20rem] min-w-0 transition-transform sm:h-[25rem] md:h-[30rem] lg:h-[37rem]',
				isHoveringVideo && '-translate-x-56'
			)}
		>
			{#each items as { src, poster }, index}
				<Video
					{src}
					{poster}
					autoplay
					bind:videoElement={videos[index]}
					class="z-10 aspect-video h-[inherit] origin-left    rounded-lg object-cover  object-left    shadow-xl shadow-cyan-700/50 outline outline-2 outline-cyan-500 duration-500"
					hidden={index !== activeIndex}
					on:pause={pauseVideos}
					on:play={playVideos}
					videoClass="h-[inherit] aspect-video"
					on:mouseenter={slideVideoIn}
					on:mouseleave={slideVideoOut}
				/>
			{/each}
			<div
				class="pt-5 text-sm font-medium text-slate-300 md:text-base [&>a:hover]:text-cyan-300 [&>a:hover]:underline [&>a]:font-bold"
			>
				{#if activeIndex === 0}
					Setup with <a href="https://github.com/outfoxxed/hy3" target="_blank"> hy3</a>, by
					<a href="https://github.com/outfoxxed/" target="_blank">Outfoxxed</a>, creator of hy3: i3
					tiling for Hyprland. Other used plugins:
					<a href="https://github.com/hyprwm/hyprland-plugins" target="_blank">Hyprtrails</a>,
					<a href="https://github.com/hyprwm/hyprland-plugins" target="_blank">Hyprborders</a>
				{:else if activeIndex === 1}
					Setup by <a href="https://github.com/Aylur/dotfiles" target="_blank">Aylur</a>, creator of
					<a href="https://github.com/Aylur/ags" target="_blank">Ags</a> using Ags to control Hyprland
					via IPC.
				{/if}
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
