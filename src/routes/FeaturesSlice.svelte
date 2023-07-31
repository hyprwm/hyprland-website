<script context="module">
	export const mouseContext = Symbol('mouseContext')
</script>

<script>
	import FeatureCard from './FeatureCard.svelte'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import PluginsIcon from '~icons/gg/arrange-back'
	import ActiveGitIcon from '~icons/gg/git-branch'
	import ShortcutsIcon from '~icons/gg/push-chevron-right-o'
	import BleedingEdgeIcon from '~icons/gg/controller'
	import { animateIn } from '$lib/Helper.mjs'

	/**
	 * type {{name: string, github: string}}
	 */
	let createdBy

	const context = setContext(mouseContext, {
		x: writable(0),
		y: writable(0),
		isHoverCards: writable(false)
	})

	/** @type HTMLDivElement */
	let featuresContainer

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

<section class="flex flex-col items-center">
	<div class="text-center" use:animateIn={{ fade: 0, slide: 24, duration: 1480, threshold: 0.4 }}>
		<div class="font-extrabold mb-3 text-slate-300">TLDR</div>
		<h1 class="text-8xl font-bold mb-14">Features</h1>
	</div>

	<div
		class="grid lg:grid-cols-2 lg:grid-rows-2 w-full gap-6 text-lg text-white/70 font-medium flex-wrap group"
		role="contentinfo"
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
		bind:this={featuresContainer}
	>
		<FeatureCard title="Smooth" class="row-span-2">
			<p>
				Transition from windows and workspaces smoothly, without abrupt changes. Instant input with
				a custom WSLroot patch included
			</p></FeatureCard
		>
		<FeatureCard title="Easy to configure" color="purple">
			<p>
				Live reloading config. Easy plain-text format. Sensible defaults. Great documentation.
			</p></FeatureCard
		>
		<FeatureCard class="" title="Dynamic tiling">
			<p>
				Automatic tiling which just works. Supports multiple fine-tuneable layouts.
			</p></FeatureCard
		>
	</div>

	<div class="mt-14 flex-wrap justify-center flex gap-8">
		<div class="icon-feature">
			<PluginsIcon class="h-8 w-8" />
			Plugin system
		</div>
		<div class="icon-feature">
			<ActiveGitIcon class="h-8 w-8" />
			Hypractive development
		</div>
		<div class="icon-feature">
			<ShortcutsIcon class="h-8 w-8" />
			Global shortcuts for apps
		</div>
		<div class="icon-feature">
			<BleedingEdgeIcon class="h-8 w-8" />Bleeding edge tech
		</div>
	</div>
</section>

<style lang="postcss">
	.icon-feature {
		@apply flex gap-3 items-center justify-center font-bold opacity-60;
	}
</style>
