<script lang="ts">
	import type { DonatorsRanked } from '../../routes/api/donators/+server'
	import Donator from './Donator.svelte'

	export let donators: DonatorsRanked
</script>

<div class="relative max-w-[1024px] select-none">
	<div class="flex min-h-max origin-bottom-right select-none flex-wrap gap-8">
		{#if donators.platinum.length > 0 || donators.gold.length > 0}
			<div class="flex flex-col gap-2 rounded-xl p-4 outline outline-1 outline-primary">
				<h2
					class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-xl font-bold text-transparent"
				>
					Platinum + Gold sponsor
				</h2>
				<div class="flex flex-wrap gap-4">
					{#each donators.platinum as donator}
						<Donator {donator} />
					{/each}
				</div>
			</div>
		{/if}

		{#if donators.silver.length > 0 || donators.bronze.length > 0}
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-bold">Silver + Bronze sponsor</h2>

				<div class="flex flex-wrap gap-4">
					{#each donators.silver as donator}
						<Donator {donator} />
					{/each}

					{#each donators.bronze as donator}
						<Donator {donator} />
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex flex-col gap-2">
			<h2 class=" text-lg font-bold">Top donators</h2>
			<div class="flex flex-wrap gap-4">
				{#each donators.top as donator}
					<Donator {donator} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<h2 class=" text-lg font-bold">Monthly top donators</h2>
			<div class="flex flex-wrap gap-4">
				{#each donators.month as donator}
					<Donator {donator} />
				{/each}
			</div>
		</div>
	</div>
</div>
