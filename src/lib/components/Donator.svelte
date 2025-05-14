<script lang="ts">
	import type { Donator } from '../../routes/api/community/+server'
	import Clickable from './Clickable.svelte'
	import { cn } from '$lib/Helper'

	export let donator: Donator
</script>

<Clickable
	class={cn(
		'group relative flex w-28 flex-col  gap-1.5 rounded-lg  bg-slate-100/5 p-2 outline outline-1 outline-slate-100/20 ',
		donator.link && 'cursor-pointer transition-all hover:bg-slate-100/10 hover:outline-cyan-500/50'
	)}
	href={donator.link}
>
	{#if donator.image}
		<img class="size-20 self-center justify-self-start rounded-md" src={donator.image} alt="" />
	{:else}
		<div class="size-20 self-center rounded-md bg-gradient-to-tr from-cyan-500/30 to-transparent" />
	{/if}

	<div class="text-xs font-bold text-slate-200">
		{donator.name}
	</div>
</Clickable>
