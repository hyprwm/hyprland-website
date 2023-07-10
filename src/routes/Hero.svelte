<script>
	/** eslint-disable no-unused-vars */
	import Button from '$lib/components/Button.svelte'
	import Logo from '$lib/images/logo.png'
	import Firefly from './Firefly.svelte'
	import previewRice from '$lib/videos/prasanthrangan_rice.mp4'
	import { inview } from 'svelte-inview'

	let isVisible = true
	/** @type HTMLVideoElement */
	let videoElement
</script>

<section
	class="w-full relative flex flex-col items-center justify-center min-h-screen h-max"
	use:inview
	on:inview={({ detail: { inView } }) => {
		isVisible = inView
	}}
>
	<!-- Hero text and logo -->
	<div class="flex h-screen min-h-max justify-center flex-col items-center z-10">
		<div class="ani-in fill-mode-backwards text-center items-center flex flex-col gap-6 mb-8">
			<img src={Logo} alt="Hyprland Logo" class="w-32 mb-4 logo" />
			<div class="relative">
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
			class="ani-in text-center mb-14 [animation-delay:344ms] fill-mode-backwards font-medium text-xl text-blue-200/60"
		>
			Dynamic tiling Wayland compositor<br />with the looks.
		</h2>

		<div
			class="flex gap-6 items-center animate-in fade-in-0 slide-in-from-bottom-1 [animation-delay:990ms] duration-500 fill-mode-backwards"
		>
			<a href="https://wiki.hyprland.org/Getting-Started/Installation/">
				<Button size="lg">Install</Button>
			</a>
			<Button type="fancyOutline" size="lg">Github</Button>
		</div>
	</div>

	<!-- Preview rice -->
	<div
		class="max-w-7xl relative mx-6 -mt-12 animate-in [animation-delay:1400ms] fade-in-0 fill-mode-backwards [animation-duration:1700ms] zoom-in-75"
	>
		<div
			class="rounded-xl opacity-20 overflow-hidden border-purple-400 border-2 scale-90 transition-all duration-1000"
			use:inview={{ unobserveOnEnter: true, threshold: 0.8 }}
			on:inview_enter={({ detail: { node } }) => {
				node.classList.remove('opacity-20')
				node.classList.remove('scale-90')
				videoElement.play()
			}}
		>
			<!--TODO Play and scale up on enter -->
			<video
				bind:this={videoElement}
				src={previewRice}
				disablepictureinpicture="true"
				disableremoteplayback="true"
				loop
				muted
				preload="auto"
			/>
		</div>
		<div class="preview-rice-bg" aria="hidden" />
	</div>

	<!-- Fireflies -->
	{#if isVisible}
		<div
			class="absolute animate-in fade-in-0 duration-75 pointer-events-none max-w-screen inset-0 overflow-hidden z-0"
		>
			<!--!FIXME jaggy when hitting bottom edge -->

			{#await new Promise((resolve) => setTimeout(() => resolve(), 940)) then _}
				{#each { length: 40 } as _}
					<Firefly />
				{/each}
			{/await}
		</div>
	{/if}

	<!-- Gradient background -->
	<div
		class="absolute -z-50 animate-in fade-in-75 duration-150 max-w-screen w-screen min-h-screen h-full right-0 top-0 overflow-hidden"
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

	.logo {
		animation: logo 6s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
	}
	.title-shadow {
		text-shadow: 8px 9px 32px theme(colors.secondary / 30%),
			-8px -9px 32px theme(colors.primary / 50%), 1px 0px 3px theme(colors.purple.500 / 50%),
			0px 9px 16px theme(colors.black / 50%);
		animate: title_effect 1s ease infinite alternate;
	}

	.preview-rice-bg {
		@apply w-full h-full absolute -z-10 -top-20 inset-x-0;
		/* background-color: red; */
		background-image: radial-gradient(closest-side, theme(colors.purple.500), transparent);
	}

	@keyframes logo {
		from {
			opacity: 80%;
		}
		to {
			opacity: 100%;
			transform: scale(1.03) translateY(12px);
		}
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
		@apply animate-in slide-in-from-bottom-4 fade-in-0  zoom-in-95 duration-700;
	}
</style>
