<script lang="ts">
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'

	export let biggestSize: number
	export let getRestrictionElement: (() => HTMLElement) | undefined = undefined
	const size = 90

	let isDragging = false
	let isHover = false
	let image: string
	$: image = isDragging
		? 'imgs/chan/surprise.svg'
		: isHover
			? 'imgs/chan/wink.svg'
			: 'imgs/chan/joy.svg'
</script>

<div class="absolute z-20">
	<DiscordProfilePicture
		{image}
		coordinates={[284, 533]}
		{size}
		weight={size / biggestSize}
		{getRestrictionElement}
		class={'bg-blue-300 outline-cyan-500'}
		on:dragStart={() => (isDragging = true)}
		on:dragEnd={() => (isDragging = false)}
		on:hover={() => (isHover = true)}
	></DiscordProfilePicture>
</div>
