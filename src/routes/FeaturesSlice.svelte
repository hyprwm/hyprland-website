<script context="module">
	export const mouseContext = Symbol('mouseContext')
</script>

<script>
	import FeatureCard from './FeatureCard.svelte'
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import PluginsIcon from '~icons/gg/arrange-back'
	import ShortcutsIcon from '~icons/gg/push-chevron-right-o'
	import BleedingEdgeIcon from '~icons/gg/controller'
	import Title from '$lib/components/Title.svelte'
	import Hypractive from './Hypractive.svelte'
	import { getIsMobile } from '$lib/Helper.mjs'

	let isMobile = false

	const context = setContext(mouseContext, {
		x: writable(0),
		y: writable(0),
		isHoverCards: writable(false)
	})

	/** @type HTMLDivElement */
	let featuresContainer

	onMount(() => {
		isMobile = getIsMobile()
	})

	function onMouseEnter() {
		featuresContainer.addEventListener('mousemove', trackMouse)
		context.isHoverCards.set(true)
	}
	function onMouseLeave() {
		featuresContainer.removeEventListener('mousemove', trackMouse)
		context.isHoverCards.set(false)
	}
	function trackMouse({ clientX, clientY }) {
		context.x.set(clientX)
		context.y.set(clientY)
	}
</script>

<section class="px-3 md:px-8 flex flex-col items-center">
	<Title>
		<span slot="pre">TLDR</span>
		<span slot="title">Features</span>
	</Title>

	<div
		class="grid lg:grid-cols-2 lg:grid-rows-2 w-full gap-6 text-lg text-white/70 font-medium flex-wrap group"
		role="contentinfo"
		on:mouseenter={!isMobile && onMouseEnter}
		on:mouseleave={!isMobile && onMouseLeave}
		bind:this={featuresContainer}
	>
		<FeatureCard title="Smooth" class="row-span-2">
			<p class="max-w-[60ch]">
				Transition from windows and workspaces smoothly, with great animations. High performance.
				Instant input.
			</p></FeatureCard
		>
		<FeatureCard title="Easy to configure" color="purple">
			<p class="max-w-[60ch]">
				Live reloading config. Easy plain-text format. Sensible defaults. Great documentation.
			</p>

			<div class="absolute _wrapper inset-0 select-none" aria-hidden>
				<div
					class="absolute text-[440px] -bottom-10 text-slate-500 _configure -right-40 md:right-0 font-mono"
				>
					{'<>'}
				</div>
			</div>
		</FeatureCard>
		<FeatureCard class="" title="Dynamic tiling">
			<p class="max-w-[60ch]">
				Automatic tiling which just works. Supports multiple fine-tuneable layouts.
			</p>
			<div class="absolute _wrapper inset-0 select-none" aria-hidden>
				<div
					class="absolute text-[280px] text-slate-500 font-extrabold gap-y-4 [line-height:1] -z-10 bottom-[20px] tiling right-0 md:right-8 font-mono tiles"
				>
					<div class="tile" style={''}>[ ]</div>
				</div>
			</div>
		</FeatureCard>
	</div>

	<div class="mt-14 z-10 flex-wrap justify-center flex sm:flex-row flex-col gap-8">
		<a
			href="https://github.com/hyprland-community/awesome-hyprland#plugins"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<PluginsIcon class="h-8 w-8" />
			Plugin system
		</a>
		<Hypractive />
		<a
			href="https://wiki.hyprland.org/Configuring/Binds/#global-keybinds"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<ShortcutsIcon class="h-8 w-8" />
			Global shortcuts for apps
		</a>
		<div class="icon-feature">
			<BleedingEdgeIcon class="h-8 w-8" />Bleeding edge tech
		</div>
	</div>
</section>

<style lang="postcss">
	.icon-feature {
		@apply flex items-center justify-center gap-3 font-bold text-slate-400;
	}

	._configure {
		@apply bg-gradient-to-tl from-pink-500  to-blue-500 bg-clip-text text-blue-700;
		line-height: 1;
		z-index: -1;
		transition: all 850ms ease-in-out;
		color: rgb(255, 121, 170);
		opacity: 0.4;
		color: transparent;
		text-shadow:
			10px -10px 40px theme(colors.pink.700 / 20),
			5px 5px 20px cyan,
			-10px 10px 40px theme(colors.blue.700 / 20);
		filter: saturate(2) drop-shadow(8px 8px 20px theme(colors.pink.700))
			drop-shadow(-8px -8px 20px theme(colors.blue.700));

		._wrapper:hover & {
			color: transparent;
			opacity: 0.6;
			filter: saturate(2) drop-shadow(8px 8px 12px theme(colors.pink.700))
				drop-shadow(-8px -8px 12px theme(colors.blue.700));
			text-shadow:
				15px -15px 40px theme(colors.pink.700 / 80),
				8px 8px 20px cyan,
				-15px 15px 40px theme(colors.blue.700 / 40);
		}
	}

	.tile {
		/* Animate a pulse animation for the glow effect */
		/* Use different colors for the different windows */
		background: radial-gradient(ellipse, var(--color1, cyan) 50%, var(--color2, magenta));
		background-clip: text;
		color: transparent;
		letter-spacing: -55px;
		text-shadow:
			-5px 5px 8px color-mix(in srgb, var(--color1, magenta), transparent 90%),
			5px -5px 8px color-mix(in srgb, color-mix(in srgb, var(--color1, rgb(0, 187, 255)), black 20%), transparent
						10%),
			0px 0px 15px var(--color2, magenta);

		filter: saturate(1) drop-shadow(8px 8px 24px var(--color2, blue))
			drop-shadow(
				-8px -8px 24px color-mix(in srgb, var(--color1, rgb(0, 187, 255)), rgba(0, 0, 0, 0.056) 80%)
			);
		opacity: 0.4;
		transition: all 850ms ease-in-out;

		._wrapper:hover & {
			opacity: 0.7;
			text-shadow:
				-15px 15px 0px color-mix(in srgb, var(--color1, cyan), transparent 60%),
				15px -15px 8px color-mix(in srgb, color-mix(in srgb, var(--colo1r, magenta), rgb(0, 0, 111)
								50%), transparent 30%),
				0px 0px 15px var(--color2, magenta);

			filter: saturate(2) drop-shadow(8px 8px 24px var(--color2, blue))
				drop-shadow(
					-8px -8px 24px color-mix(in srgb, var(--color1, magenta), rgba(0, 0, 0, 0.056) 20%)
				);
		}
	}

	.tiles {
		filter: drop-shadow(0px 0px 5px rgb(0, 191, 255));
	}
</style>
