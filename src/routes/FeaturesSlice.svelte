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
	import Title from '$lib/components/Title.svelte'

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

<section class="px-3 md:px-8 flex flex-col items-center">
	<Title>
		<span slot="pre">TLDR</span>
		<span slot="title">Features</span>
	</Title>

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
		@apply flex items-center justify-center gap-3 font-bold opacity-60;
	}
</style>
