<script lang="ts">
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'

	interface Props {
		biggestSize: number
		getRestrictionElement?: (() => HTMLElement) | undefined
	}

	let { biggestSize, getRestrictionElement = undefined }: Props =
		$props()
	const size = 90

	let isDragging = $state(false)
	let isHover = $state(false)
	let image: string = $derived(
		isDragging
			? 'imgs/chan/surprise.svg'
			: isHover
				? 'imgs/chan/wink.svg'
				: 'imgs/chan/joy.svg'
	)
</script>

<div class="absolute z-20">
	<DiscordProfilePicture
		{image}
		coordinates={[284, 533]}
		{size}
		weight={size / biggestSize}
		{getRestrictionElement}
		class={'bg-blue-300 outline-cyan-500'}
		ondragStart={() => (isDragging = true)}
		ondragEnd={() => (isDragging = false)}
		onhover={() => (isHover = true)}
	></DiscordProfilePicture>
</div>
