<script lang="ts">
	import { cn } from '$lib/Helper'
	import type { Sponsor } from '../../routes/api/sponsors/+server'
	import Clickable from './Clickable.svelte'

	export let sponsor: Sponsor
	export let showImage = false
	export let showSlogan = false
	export let size = 1
</script>

<Clickable href={sponsor.link} class="flex flex-col items-center">
	{#if showImage && sponsor.image}
		<img
			title={sponsor.name}
			class="h-24 max-w-{size == 1 ? "32" : size == 2 ? "38" : "42"} self-center justify-self-start rounded-md object-contain"
			src={sponsor.image}
			alt=""
		/>
	{:else}
		<div
			class={cn(
				'text-xs font-bold text-slate-100',
				sponsor.link && 'hover:text-cyan-100',
				showImage && 'text-lg'
			)}
		>
			{sponsor.name}
		</div>
	{/if}
	{#if showSlogan && sponsor.slogan}
		<div class={cn('text-sm text-slate-100 italic')}>
			{sponsor.slogan}
		</div>
	{/if}
</Clickable>
