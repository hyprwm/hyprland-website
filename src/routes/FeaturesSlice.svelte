<script context="module">
	export const mouseContext = Symbol('mouseContext')
</script>

<script>
	import FeatureCard from './FeatureCard.svelte'
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import PluginsIcon from '~icons/gg/arrange-back'
	import ShortcutsIcon from '~icons/gg/push-chevron-right-o'
	import TouchpadIcon from '~icons/gg/touchpad'
	import Title from '$lib/components/Title.svelte'
	import Hypractive from './Hypractive.svelte'
	import { getIsMobile } from '$lib/Helper.mjs'
	import configDefaultImage from '$lib/images/features/config_default.png'
	import tileDefaultImage from '$lib/images/features/tiling_default.png'
	import configHoverImage from '$lib/images/features/config_hover.png'
	import tileHoverImage from '$lib/images/features/tiling_hover.png'
	import SmoothCircle from './SmoothCircle.svelte'

	let isMobile = false

	/** @type {HTMLElement}*/
	let smoothCircleElement

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

<section class="flex flex-col items-center px-3 md:px-8">
	<Title>
		<span slot="pre">TLDR</span>
		<span slot="title">Features</span>
	</Title>

	<div
		class="group grid w-full flex-wrap gap-6 text-lg font-medium text-white/70 lg:grid-cols-2 lg:grid-rows-2"
		role="contentinfo"
		on:mouseenter={!isMobile && onMouseEnter}
		on:mouseleave={!isMobile && onMouseLeave}
		bind:this={featuresContainer}
	>
		<FeatureCard title="Smooth" class="row-span-2" color="purple">
			<p class="max-w-[60ch]">
				Transition from windows and workspaces smoothly, with great animations. High performance.
				Instant input.
			</p>

			<SmoothCircle />
		</FeatureCard>
		<FeatureCard title="Easy to configure" color="purple">
			<p class="max-w-[60ch]">
				Live reloading config. Easy plain-text format. Sensible defaults. Great documentation.
			</p>

			<div class="_wrapper absolute inset-0 select-none" aria-hidden>
				<div class="feature-image">
					<img src={configDefaultImage} class="feature-image_inner" alt="" aria-hidden="true" />
					<img src={configHoverImage} class="feature-image_inner-hover" alt="" aria-hidden="true" />
				</div>
			</div>
		</FeatureCard>
		<FeatureCard class="" title="Dynamic tiling" color="purple">
			<p class="max-w-[60ch]">
				Automatic tiling which just works. Supports multiple fine-tuneable layouts.
			</p>
			<div class="_wrapper absolute inset-0 select-none" aria-hidden>
				<div class="feature-image">
					<img src={tileDefaultImage} class="feature-image_inner" alt="" aria-hidden="true" />
					<img src={tileHoverImage} class="feature-image_inner-hover" alt="" aria-hidden="true" />
				</div>
			</div>
		</FeatureCard>
	</div>

	<div class="z-10 mt-14 flex flex-col flex-wrap justify-center gap-8 sm:flex-row">
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
		<a
			href="https://wiki.hyprland.org/Configuring/Variables/#gestures"
			class="icon-feature hover:underline"
		>
			<TouchpadIcon class="h-8 w-8" />Touchpad gestures
		</a>
	</div>
</section>

<style lang="postcss">
	.icon-feature {
		@apply flex items-center justify-center gap-3 font-bold text-slate-400;
	}

	.feature-image {
		position: absolute;
		inset: 0 0 0 0;
		opacity: 0.5;
		z-index: -10;

		._wrapper:hover & {
			opacity: 1;
		}

		& img {
			position: absolute;
			transition: opacity 1500ms ease-in-out;
			pointer-events: none;

			width: 500px;
			right: -80px;
			top: -80px;

			@media screen(sm) {
				width: 800px;
				height: 800px;
				right: -200px;
				top: -209px;
			}
		}
	}
	.feature-image_inner-hover {
		opacity: 0;
	}
	._wrapper:hover {
		& .feature-image_inner {
			opacity: 0;
		}
		& .feature-image_inner-hover {
			opacity: 1 !important;
			filter: saturate(1.5);
		}
	}
</style>
