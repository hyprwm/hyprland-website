<script>
	import Button from '$lib/components/Button.svelte'
	import Logo from '$lib/images/logo.png'
	import Firefly from './Firefly.svelte'
	import { inview } from 'svelte-inview'

	let isVisible = true
	let hadBeenInvisble = false
</script>

<section
	class="w-full relative flex flex-col items-center justify-center min-h-screen h-max"
	use:inview
	on:inview_change={({ detail: { inView } }) => {
		isVisible = inView
		hadBeenInvisble = hadBeenInvisble && inView
	}}
>
	<!-- Hero text and logo -->
	<div class="flex h-screen min-h-max justify-center flex-col items-center z-10">
		<div class="text-center items-center flex flex-col gap-6 mb-8">
			<img src={Logo} alt="Hyprland Logo" class="w-32 mb-4 ani-in fill-mode-backwards" />
			<div class="relative ani-in fill-mode-backwards [animation-delay:584ms]">
				<h1 class="text-7xl p-2 font-bold bg-clip-text text-transparent hyprgradient">Hyprland</h1>
				<div
					aria-hidden="true"
					class="text-7xl top-0 pointer-events-none p-2 font-bold title-shadow absolute -z-10"
				>
					Hyprland
				</div>
			</div>
		</div>
		<h2
			class="ani-in text-center mb-14 [animation-delay:944ms] fill-mode-backwards font-medium text-xl text-blue-200/60"
		>
			Dynamic tiling Wayland compositor<br />with the looks.
		</h2>

		<div
			class="flex gap-6 items-center animate-in fade-in-0 slide-in-from-bottom-4 [animation-delay:1390ms] duration-500 fill-mode-backwards"
		>
			<a href="https://wiki.hyprland.org/Getting-Started/Installation/">
				<Button size="lg">Install</Button>
			</a>
			<Button type="fancyOutline" size="lg">Github</Button>
		</div>
	</div>

	<!-- Fireflies -->
	{#if isVisible}
		<div
			class="absolute animate-in fade-in-0 duration-75 pointer-events-none max-w-screen inset-0 overflow-hidden z-0"
		>
			<div class="bg-gradient-to-t from-black z-10 w-full h-52 absolute bottom-0" />

			{#await new Promise( (resolve) => setTimeout(() => resolve(), hadBeenInvisble ? 0 : 1440) ) then _}
				{#each { length: 40 } as _}
					<Firefly />
				{/each}
			{/await}
		</div>
	{/if}

	<!-- Gradient background -->
	<div
		class="absolute -z-50 max-w-screen w-screen min-h-screen h-full right-0 top-0 overflow-hidden"
	>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				class="bg-gradient-radial via-emerald-300/0 to-emerald-200/0 from-sky-400/20 bg"
				style="--seed: 20;"
			/>
		</div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				class="bg-gradient-radial to-cyan-400/0 from-blue-500/10 bg"
				style="--offset: -3s; --seed: 4; --duration:102s"
			/>
		</div>
	</div>
	<!--  Gradient background //-->
</section>

<style lang="postcss">
	.bg {
		width: calc(120vw + 500px);
		height: calc(120vh + 500px);

		animation: move var(--duration, 50s) ease-in-out var(--offset, 0ms) infinite alternate both;
	}

	.title-shadow {
		text-shadow: 8px 9px 32px theme(colors.secondary / 10%),
			-8px -9px 32px theme(colors.primary / 20%), 1px 0px 3px theme(colors.purple.500 / 50%),
			0px 9px 16px theme(colors.black / 50%);
		animate: title_effect 1s ease infinite alternate;
	}

	@keyframes title_effect {
		0% {
			transform: translateX(-99px);
			opacity: 0;
		}
		50% {
			transform: translateX(0px);
		}
		100% {
			transform: translateX(9px);
		}
	}

	@keyframes move {
		0% {
			transform: translate3d(
				calc(10vw * sin(var(--seed, 1))),
				calc(20vh * sin(var(--seed, 1))),
				0px
			);
		}
		30% {
			transform: translate3d(
				calc(-20vw * sin(var(--seed, 1))),
				calc(12vh * sin(var(--seed, 1))),
				0px
			);
		}
		70% {
			transform: translate3d(
				calc(-230px * sin(var(--seed, 1))),
				calc(-160px * sin(var(--seed, 1))),
				0px
			);
			opacity: sin(var(--seed, 1));
		}
		to {
			transform: translate3d(
				calc(50px * sin(var(--seed, 1))),
				calc(200px * sin(var(--seed, 1))),
				0px
			);
		}
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
		@apply animate-in ease-in-out slide-in-from-bottom-4 fade-in-0   [animation-duration:800ms];
	}
</style>
