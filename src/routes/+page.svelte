<script>
	import Community from './home-slices/CommunitySlice.svelte'
	import FeaturesSlice from './home-slices/FeaturesSlice.svelte'
	import HallOfFameSlice from './home-slices/HallOfFameSlice.svelte'
	import Hero from './home-slices/Hero.svelte'
	import InstallSlice from './home-slices/InstallSlice.svelte'
	import PreviewRiceSlice from './home-slices/PreviewRiceSlice.svelte'
	import PluginsSlice from './home-slices/PluginsSlice.svelte'
	import NewsSlice from './home-slices/NewsSlice.svelte'

	export let data
</script>

<Hero backgroundData={data.backgroundData} />

<div class="-mt-8 flex flex-col items-center gap-20 md:gap-[16rem]">
	<PreviewRiceSlice class="mb-12" />

	<FeaturesSlice />

	<PluginsSlice />

	<HallOfFameSlice />

	<Community />

	<NewsSlice news={data.news} />

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
