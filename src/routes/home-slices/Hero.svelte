<script>
	import { getIsMobile } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
	import { onMount } from 'svelte'
	import { inview } from 'svelte-inview'
	import HeroBackground from './HeroBackground.svelte'
	import HyprlandLogo from '$lib/images/logos/HyprlandLogo.svelte'

	export let backgroundData

	let isVisible = true
	let isMobile = false

	onMount(() => {
		isMobile = getIsMobile()
	})
</script>

<section
	class="relative flex h-[100svh] min-h-[52rem] w-full flex-col items-center justify-center overflow-x-hidden"
	use:inview
	on:inview_change={({ detail: { inView } }) => {
		isVisible = inView
	}}
>
	<!-- Hero text and logo -->
	<div
		class="pointer-events-none z-10 flex h-full min-h-max flex-col items-center justify-center px-5"
	>
		<div
			class="ani-in -mt-10 mb-8 flex flex-col items-center gap-6 text-center fill-mode-backwards sm:-mt-20"
		>
			<HyprlandLogo class=" mb-6 h-40 w-48   sm:h-48 sm:w-56" />
		</div>
		<h1
			class="ani-in title pointer-events-auto mb-4 max-w-[20ch] text-center !leading-[1.25] fill-mode-backwards [animation-delay:384ms]"
		>
			Tiling compositor <br /><span class="hyprgradient title-gradient">with the looks</span>
		</h1>
		<p
			class="ani-in mb-8 text-center text-xl font-medium text-slate-300 fill-mode-backwards [animation-delay:794ms] sm:max-w-lg sm:px-0 md:max-w-lg"
		>
			Hyprland provides the latest Wayland features, dynamic tiling, all the eyecandy, powerful
			plugins and much more.
		</p>

		<div
			class="pointer-events-auto flex items-center gap-7 duration-500 animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-backwards [animation-delay:1390ms]"
		>
			<a href="https://wiki.hyprland.org/Getting-Started/Installation/">
				<Button size="lg">Install</Button>
			</a>
			<a href="https://wiki.hyprland.org/">
				<Button type="fancyOutline" size="lg">Wiki</Button>
			</a>
		</div>
	</div>

	<div class="absolute inset-0">
		<HeroBackground {backgroundData} />
	</div>
</section>

<style lang="postcss">
	.title {
		padding: 0.5rem;
		pointer-events: auto;
		color: transparent;
		background: linear-gradient(
			to bottom right,
			theme(colors.white) 40%,
			theme(colors.cyan.500 / 0%)
		);
		background-clip: text;
		@apply text-4xl font-bold sm:text-5xl md:text-7xl;
	}

	.title-gradient {
		background-clip: text;
		@apply text-transparent;
	}

	@keyframes slidein {
		from {
			transform: translateX(0%);
		}

		to {
			transform: translateX(100%);
		}
	}

	.ani-in {
		@apply ease-out animate-in fade-in-0 slide-in-from-bottom-6;
		animation-duration: 1000ms;
	}
</style>
