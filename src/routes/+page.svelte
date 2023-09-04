<script>
	import Community from './CommunitySlice.svelte'
	import FeaturesSlice from './FeaturesSlice.svelte'
	import WallOfFameSlice from './WallOfFameSlice.svelte'
	import Hero from './Hero.svelte'
	import InstallSlice from './InstallSlice.svelte'
	import PreviewRiceSlice from './PreviewRiceSlice.svelte'
	import { onMount } from 'svelte'

	onMount(() => {
		console.log('Billions must tile')
	})
</script>

<svelte:head>
	<title>Hyprland</title>
	<meta name="description" content="Hyprland - Dynamic tiling Wayland compositor with the looks." />
</svelte:head>

<Hero />

<div class="-mt-8 flex flex-col items-center gap-20 md:gap-[16rem]">
	<PreviewRiceSlice class="mb-12" />

	<FeaturesSlice />

	<WallOfFameSlice />

	<Community />

	<InstallSlice />
</div>

<style>
</style>
