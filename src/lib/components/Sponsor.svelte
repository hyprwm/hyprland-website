<script lang="ts">
	import { cn } from '$lib/Helper'
	import type { Sponsor } from '../../routes/api/sponsors/+server'
	import Clickable from './Clickable.svelte'

	interface Props {
		sponsor: Sponsor;
		showImage?: boolean;
		showSlogan?: boolean;
		sloganClass?: string;
		[key: string]: any
	}

	let {
		sponsor,
		showImage = false,
		showSlogan = false,
		sloganClass = '',
		...rest
	}: Props = $props();
</script>

<Clickable href={sponsor.link} class="flex flex-col items-center gap-4">
	{#if showImage && sponsor.image}
		<img
			title={sponsor.name}
			class={cn(
				'size-full self-center justify-self-start rounded-md object-contain',
				rest.class
			)}
			src={sponsor.image}
			alt={sponsor.name}
		/>
	{:else}
		<div
			class={cn(
				'size-full px-1 py-0.5 text-sm font-medium text-slate-100',
				sponsor.link && 'hover:text-cyan-200',
				showImage && 'text-lg'
			)}
		>
			{sponsor.name}
		</div>
	{/if}

	{#if showSlogan && sponsor.slogan}
		<div
			class={cn(
				'text-center text-base font-bold text-slate-300',
				sponsor.link && 'transition-colors hover:text-primary',
				sloganClass
			)}
		>
			{sponsor.slogan}
		</div>
	{/if}
</Clickable>
