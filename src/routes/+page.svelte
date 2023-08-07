<script>
	import Community from './CommunitySlice.svelte'
	import FeaturesSlice from './FeaturesSlice.svelte'
	import HallOfFameSlice from './HallOfFameSlice.svelte'
	import Hero from './Hero.svelte'
	import InstallSlice from './InstallSlice.svelte'
	import PreviewRiceSlice from './PreviewRiceSlice.svelte'
</script>

<svelte:head>
	<title>Hyprland</title>
	<meta name="description" content="Hyprland - Dynamic tiling Wayland compositor with the looks." />
</svelte:head>

<Hero />

<div class="-mt-8 gap-20 md:gap-[16rem] flex flex-col items-center">
	<PreviewRiceSlice class="mb-52" />

	<FeaturesSlice />

	<HallOfFameSlice />

	<Community />

	<InstallSlice />
</div>

<style>
</style>
