<script>
	import Community from './CommunitySlice.svelte'
	import FeaturesSlice from './FeaturesSlice.svelte'
	import WallOfFameSlice from './WallOfFameSlice.svelte'
	import Hero from './Hero.svelte'
	import InstallSlice from './InstallSlice.svelte'
	import PreviewRiceSlice from './PreviewRiceSlice.svelte'
	import { onMount } from 'svelte'

	export let data

	onMount(() => {
		import.meta.env.DEV &&
			console.log(`
Lt. Dixon Piper:
Why did he do it? Why did Cunth kill your wife?

MacGruber:
To this day, I have no idea. We actually all went to college together. Believe it or not, we were very close friends. \nThen after graduation, he got engaged to her. He asked me to be his best man and right about that time, I started banging her and mowing her box. \nShe was actually the first person I felt comfortable enough around to let eat out my butt. \nAnyway, shortly thereafter, she left him for me. She was actually carrying his child at the time. I asked her to terminate it, obviously, so we could start fresh. And she agreed. We were so in love. \nAnd he took that from me.

Lt. Dixon Piper:
That's really f***ed up.

MacGruber:
Thanks.`)
	})
</script>

<svelte:head>
	<title>Hyprland</title>
	<meta name="description" content="Hyprland - Dynamic tiling Wayland compositor with the looks." />
</svelte:head>

<Hero backgroundData={data.backgroundData} />

<div class="-mt-8 flex flex-col items-center gap-20 md:gap-[16rem]">
	<PreviewRiceSlice class="mb-12" />

	<FeaturesSlice />

	<WallOfFameSlice />

	<Community />

	<InstallSlice />
</div>

<style>
</style>
