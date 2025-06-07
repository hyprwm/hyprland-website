<script lang="ts">
	import type { DonatorsRanked } from '../../routes/api/donators/+server'
	import Donator from './Donator.svelte'

	export let donators: DonatorsRanked
</script>

<div class="relative max-w-[1024px] select-none text-slate-100">
	<div class="flex min-h-max flex-wrap gap-8 text-sm">
		{#if donators.platinum.length > 0}
			<div class="flex flex-col gap-2 rounded-xl">
				<h2
					class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-xl font-bold text-transparent"
				>
					Platinum
				</h2>
				<div class="flex flex-wrap gap-4">
					{#each donators.platinum as donator}
						<Donator {donator} showImage />
					{/each}
				</div>
			</div>
		{/if}

		{#if donators.gold.length > 0}
			<div class="flex flex-col gap-2 rounded-xl">
				<h2
					class="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-xl font-bold text-transparent"
				>
					Gold
				</h2>
				<div class="flex flex-wrap gap-4">
					{#each donators.gold as donator}
						<Donator {donator} showImage />
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex flex-wrap gap-4">
			{#if donators.silver.length > 0}
				<div class="flex flex-col gap-2">
					<h2 class="font-bold text-slate-300">Silver</h2>

					<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
						{#each donators.silver as donator}
							<Donator {donator} />
						{/each}
					</div>
				</div>
			{/if}

			{#if donators.bronze.length > 0}
				<div class="flex flex-col gap-2">
					<h2 class="font-bold text-slate-300">Bronze</h2>

					<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
						{#each donators.bronze as donator}
							<Donator {donator} />
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<h2 class="font-bold text-slate-300">Monthly top donators in {donators.month}</h2>
			<div class="flex flex-wrap gap-4 font-medium">
				{#each donators.monthTop as donator, index}
					<Donator donator={{ ...donator, name: `#${index + 1} ${donator.name}` }} />
				{/each}
			</div>
		</div>
	</div>
</div>
