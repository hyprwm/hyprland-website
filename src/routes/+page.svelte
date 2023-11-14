<script>
	import Community from './CommunitySlice.svelte'
	import FeaturesSlice from './FeaturesSlice.svelte'
	import WallOfFameSlice from './WallOfFameSlice.svelte'
	import Hero from './Hero.svelte'
	import InstallSlice from './InstallSlice.svelte'
	import PreviewRiceSlice from './PreviewRiceSlice.svelte'
	import PluginsSlice from './PluginsSlice.svelte'

	export let data
</script>

<Hero backgroundData={data.backgroundData} />

<div class="-mt-8 flex flex-col items-center gap-20 md:gap-[16rem]">
	<PreviewRiceSlice class="mb-12" />

	<FeaturesSlice />

	<PluginsSlice />

	<WallOfFameSlice />

	<Community />

	<InstallSlice />
</div>

<svelte:head>
	<title>Hyprland</title>
	<meta name="description" content="Hyprland - Dynamic tiling Wayland compositor with the looks." />
	<meta
		property="og:description"
		content="Hyprland - Dynamic tiling Wayland compositor with the looks."
	/>
	<meta property="og:title" content="Hyprland: Dynamic tiling window compositor with the looks" />
</svelte:head>

<style>
</style>
