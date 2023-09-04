<script>
	import { getIsMobile } from '$lib/Helper.mjs'
	import Button from '$lib/components/Button.svelte'
	import Logo from '$lib/images/logos/hyprland-color.svg'
	import { onMount } from 'svelte'
	// import Firefly from './Firefly.svelte'
	import { inview } from 'svelte-inview'
	import HeroBackground from './HeroBackground.svelte'

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
	<div class="x z-10 flex h-screen min-h-max flex-col items-center justify-center">
		<div class="-mt-20 mb-8 flex flex-col items-center gap-6 text-center">
			<img src={Logo} alt="Hyprland Logo" class="ani-in mb-6 h-48 fill-mode-backwards" />
			<div class="ani-in relative fill-mode-backwards [animation-delay:384ms]">
				<h1
					class="hyprgradient bg-clip-text p-2 font-london text-6xl font-bold tracking-wider text-transparent md:text-7xl md:tracking-widest"
				>
					Hyprland
				</h1>
			</div>
		</div>
		<h2
			class="ani-in mb-10 text-center text-2xl font-medium leading-9 text-blue-200/80 fill-mode-backwards [animation-delay:944ms]"
		>
			Dynamic tiling Wayland compositor<br />with the looks
		</h2>

		<div
			class="flex items-center gap-6 duration-500 animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-backwards [animation-delay:1390ms]"
		>
			<a href="https://wiki.hyprland.org/Getting-Started/Installation/">
				<Button size="lg">Install</Button>
			</a>
			<a href="https://wiki.hyprland.org/Getting-Started/">
				<Button type="fancyOutline" size="lg">Wiki</Button>
			</a>
		</div>
	</div>

	<div class="absolute inset-0">
		<HeroBackground />
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

	<!-- Gradient background -->
	<div
		class="max-w-screen absolute right-0 top-0 -z-50 h-full min-h-screen w-screen overflow-hidden"
	>
		<div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
			<div
				class="bg bg-gradient-radial from-sky-400/20 via-emerald-300/0 to-emerald-200/0"
				style="--seed: 20;"
			/>
		</div>
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				class="bg bg-gradient-radial from-blue-500/10 to-cyan-400/0"
				style="--offset: -3s; --seed: 4; --duration:102s"
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	.bg {
		width: calc(120vw + 500px);
		height: calc(120vh + 500px);
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
