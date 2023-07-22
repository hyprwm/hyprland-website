<script>
	import Community from './Community.svelte'
	import FeaturesSlice from './FeaturesSlice.svelte'
	import HallOfFameSlice from './HallOfFameSlice.svelte'
	import Hero from './Hero.svelte'
	import PreviewRiceSlice from './PreviewRiceSlice.svelte'
</script>

<svelte:head>
	<title>Hyprland</title>
	<meta name="description" content="Hyprland - Dynamic tiling Wayland compositor with the looks." />
</svelte:head>

<Hero />

<div class="-mt-8 mx-auto gap-[16rem] flex flex-col items-center">
	<div class="px-8 lg:px-32">
		<PreviewRiceSlice />

		<FeaturesSlice />
	</div>

	<HallOfFameSlice />

	<Community />
</div>

<div class="mt-[16rem]" />

<style>
</style>
