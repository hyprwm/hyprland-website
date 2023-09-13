<script>
	import { getIsMobile } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
	import Logo from '$lib/images/logos/hyprland-color.svg'
	import { onMount } from 'svelte'
	// import Firefly from './Firefly.svelte'
	import { inview } from 'svelte-inview'
	import HeroBackground from './HeroBackground.svelte'

	export let backgroundData

	let isVisible = true
	let isMobile = false

	onMount(() => {
		isMobile = getIsMobile()
	})
</script>

<section
	class="relative flex h-max min-h-[100svh] w-full flex-col items-center justify-center overflow-x-hidden"
	use:inview
	on:inview_change={({ detail: { inView } }) => {
		isVisible = inView
	}}
>
	<!-- Hero text and logo -->
	<div
		class="pointer-events-none z-10 flex h-screen min-h-max flex-col items-center justify-center px-5"
	>
		<div class="mb-8 flex flex-col items-center gap-6 text-center sm:-mt-20">
			<img
				src={Logo}
				alt="Hyprland Logo"
				class="ani-in mb-6 h-40 w-48 object-contain fill-mode-backwards sm:h-48 sm:w-56"
				loading="eager"
				decoding="async"
			/>
			<div class="ani-in relative fill-mode-backwards [animation-delay:384ms]">
				<h1 class="hyprgradient title">Hyprland</h1>
			</div>
		</div>
		<h2
			class="ani-in pointer-events-auto mb-10 max-w-[30ch] text-center text-lg font-medium leading-9 text-blue-200/80 fill-mode-backwards [animation-delay:944ms] sm:text-2xl"
		>
			Dynamic tiling Wayland compositor with the looks
		</h2>

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

	<!-- Fireflies -->
	<!-- {#if isVisible}
		<div
			class="max-w-screen pointer-events-none absolute inset-0 -z-10 overflow-hidden animate-in fade-in-0 fill-mode-backwards [animation-delay:900ms] [animation-duration:4500ms]"
		>
			<div class="absolute bottom-0 z-10 h-52 w-full bg-gradient-to-t from-black" />

			{#each { length: 40 } as _}
				<Firefly />
			{/each}
		</div>
	{/if} -->
</section>

<style lang="postcss">
	.title {
		background-clip: text;
		padding: 0.5rem;
		pointer-events: auto;
		@apply font-london text-6xl font-bold tracking-wider text-transparent md:text-7xl md:tracking-widest;
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
