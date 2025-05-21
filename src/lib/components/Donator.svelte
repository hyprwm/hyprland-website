<script lang="ts">
	import { cn } from '$lib/Helper'
	import type { Donator } from '../../routes/api/community/+server'
	import Clickable from './Clickable.svelte'

	export let donator: Donator
	export let showImage = false
</script>

<Clickable href={donator.link}>
	{#if showImage && donator.image}
		<img
			title={donator.name}
			class="h-24 max-w-32 self-center justify-self-start rounded-md object-contain"
			src={donator.image}
			alt=""
		/>
	{:else}
		<div class={cn('text-xs font-bold text-slate-200', donator.link && 'hover:text-cyan-100')}>
			{donator.name}
		</div>
	{/if}
</Clickable>
