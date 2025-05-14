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

	<div class="bg-gradient"></div>
</div>

<style lang="postcss">
	.donator-text {
		opacity: 20%;
		background: blue;
	}

	[data-hasImage].donator-visible {
		.donator-text {
			opacity: 100%;
			background: red;
			transition: all 150ms ease-in;
			@starting-style {
			}
		}
	}

	.bg-gradient {
		width: 200%;
		min-height: 500px;
		height: 220%;
		translate: -40% -200px;
		margin-top: -100px;

		background: url('/imgs/grain.webp'),
			radial-gradient(
				closest-side,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 20%),
				transparent
			);

		mask-image: radial-gradient(
			closest-side,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);

		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;
	}
</style>
