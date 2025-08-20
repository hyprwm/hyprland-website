<script lang="ts">
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Sponsor from '$lib/components/Sponsor.svelte'
	import type { SponsorsRanked } from '../api/sponsors/+server'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import PatternBackground from '$lib/PatternBackground.svelte'

	export let sponsors: SponsorsRanked
	const hasSponsors = Object.values(sponsors)
		.filter((value) => !Array.isArray(value))
		.every((array) => array.length === 0)

	const smallImages = 'aspect-square sm:size-12 size-10'
</script>

{#if hasSponsors}
	<div class="relative flex w-full flex-col items-center justify-center">
		<PatternBackground
			class="absolute -inset-12 inset-x-0  h-[100%]  w-full text-slate-800 opacity-40"
		/>

		<section class="relative mb-12 flex max-w-5xl flex-col gap-2 px-8 md:mb-20">
			<Title class="px-0">
				<TitlePre slot="pre">A huge thank you!</TitlePre>
				<TitleHeading size="small" slot="title">Our sponsors</TitleHeading>
			</Title>

			<div
				class="relative flex max-w-[1024px] select-none flex-col justify-center rounded-t-xl p-6 text-slate-100"
			>
				<div class="flex min-h-max flex-col gap-20 text-sm">
					{#if sponsors.diamond.length > 0}
						<div class="flex flex-col gap-6 rounded-xl">
							<h2
								class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-center text-xl font-bold text-transparent"
							>
								Diamond
							</h2>
							<div class="flex justify-center gap-14 md:gap-16">
								{#each sponsors.diamond as sponsor}
									<Sponsor {sponsor} showImage showSlogan class="h-16 w-40 md:h-24 md:w-64" />
								{/each}
							</div>
						</div>
					{/if}

					{#if sponsors.platinum.length > 0}
						<div class="flex flex-col gap-6 rounded-xl">
							<h2
								class="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-center text-xl font-bold text-transparent"
							>
								Platinum
							</h2>
							<div class="flex justify-center gap-14 md:gap-16">
								{#each sponsors.platinum as sponsor}
									<Sponsor {sponsor} showImage showSlogan class="h-16 w-40 md:h-20 md:w-60" />
								{/each}
							</div>
						</div>
					{/if}

					{#if sponsors.gold.length > 0}
						<div class="flex flex-col gap-6 rounded-xl">
							<h2
								class="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-center text-xl font-bold text-transparent"
							>
								Gold
							</h2>
							<div class="flex flex-wrap justify-center gap-10">
								{#each sponsors.gold as sponsor}
									<Sponsor
										{sponsor}
										showImage
										showLink
										class="w-30 h-12 md:h-20 md:w-48"
										linkClass="max-md:hidden"
									/>
								{/each}
							</div>
						</div>
					{/if}

					<div class="flex flex-wrap justify-center gap-x-16 gap-y-10">
						{#if sponsors.silver.length > 0}
							<div class="flex flex-col gap-2">
								<h2 class="text-center font-bold text-slate-300">Silver</h2>

								<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
									{#each sponsors.silver as sponsor}
										<Sponsor {sponsor} showImage class={smallImages} />
									{/each}
								</div>
							</div>
						{/if}

						{#if sponsors.bronze.length > 0}
							<div class="flex flex-col gap-2">
								<h2 class="text-center font-bold text-slate-300">Bronze</h2>

								<div class="flex flex-wrap gap-x-4 gap-y-2 font-medium">
									{#each sponsors.bronze as sponsor}
										<Sponsor {sponsor} class={smallImages} />
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>

				<div
					class="col-span-full mt-8 flex size-full w-full items-center justify-center self-center"
					style="margin-top: 5rem; margin-bottom: -5rem;"
				>
					<Button type="outline" href="https://account.hypr.land/sponsors" size="xl"
						>Sponsor us</Button
					>
				</div>
			</div>
		</section>
	</div>
{:else}
	<section
		class="group -my-5 mt-16 flex flex-col gap-3 self-center text-center text-slate-300 md:-my-[8rem]"
	>
		<p class="text-2xl font-medium text-slate-500">We currently have no sponsors :(</p>
		<p class="text-slate-200">Are you interested or know one person who might be?</p>
		<a
			href="https://account.hypr.land/sponsors"
			class="text-cyan-400 decoration-primary hover:text-cyan-300 hover:underline"
			>Hit us up :)
		</a>
	</section>
{/if}
