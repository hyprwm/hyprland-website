<script lang="ts">
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Sponsor from '$lib/components/Sponsor.svelte'
	import type { SponsorsRanked } from '../api/sponsors/+server'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import PatternBackground from '$lib/PatternBackground.svelte'

	export let sponsors: SponsorsRanked
	$: exclusiveSponsor = sponsors.diamond[0]
</script>

{#if exclusiveSponsor}
	<div class="relative flex w-full flex-col items-center justify-center">
		<PatternBackground
			class="absolute inset-x-0 -bottom-24 -top-12 text-slate-800 opacity-40 md:-bottom-32"
		/>

		<section class="relative flex w-full max-w-5xl flex-col items-center gap-2 px-8">
			<Title class="px-0">
				<TitlePre slot="pre">A huge thank you!</TitlePre>
				<TitleHeading size="small" slot="title">Our exclusive sponsor</TitleHeading>
			</Title>

			<div class="w-full max-w-lg">
				<Sponsor sponsor={exclusiveSponsor} showImage class="h-auto w-full rounded-none" />
			</div>
		</section>
	</div>
{/if}
