<script lang="ts">
	import type { SponsorsRanked } from '../../routes/api/sponsors/+server'
	import Sponsor from './Sponsor.svelte'

	export let sponsors: SponsorsRanked
</script>

<div class="relative max-w-[1024px] select-none text-slate-100">
	<div class="flex min-h-max flex-wrap gap-8 text-sm">
		{#if sponsors.platinum.length > 0}
			<div class="flex flex-col gap-2 rounded-xl">
				<h2
					class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-xl font-bold text-transparent"
				>
					Platinum
				</h2>
				<div class="flex flex-wrap gap-4">
					{#each sponsors.platinum as sponsor}
						<Sponsor {sponsor} showImage showSlogan />
					{/each}
				</div>
			</div>
		{/if}

		{#if sponsors.gold.length > 0}
			<div class="flex flex-col gap-2 rounded-xl">
				<h2
					class="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-xl font-bold text-transparent"
				>
					Gold
				</h2>
				<div class="flex flex-wrap gap-4">
					{#each sponsors.gold as sponsor}
						<Sponsor {sponsor} showImage />
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex flex-wrap gap-4">
			{#if sponsors.silver.length > 0}
				<div class="flex flex-col gap-2">
					<h2 class="font-bold text-slate-300">Silver</h2>

					<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
						{#each sponsors.silver as sponsor}
							<Sponsor {sponsor} />
						{/each}
					</div>
				</div>
			{/if}

			{#if sponsors.bronze.length > 0}
				<div class="flex flex-col gap-2">
					<h2 class="font-bold text-slate-300">Bronze</h2>

					<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
						{#each sponsors.bronze as sponsor}
							<Sponsor {sponsor} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
