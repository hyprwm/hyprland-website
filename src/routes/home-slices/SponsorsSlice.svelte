<script lang="ts">
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Sponsors from '$lib/components/SponsorsSlice.svelte'
	import type { SponsorsRanked } from '../api/sponsors/+server'

	export let sponsors: SponsorsRanked
</script>

<section class="relative mb-12 flex max-w-5xl flex-col gap-8 px-8 md:mb-20">
	<Title align="left" class="px-0">
		<TitlePre slot="pre">And a huge thank you!</TitlePre>
		<h2 slot="title" class="text-2xl font-bold md:text-3xl">Our sponsors</h2>
	</Title>

	<Sponsors {sponsors} />
</section>
