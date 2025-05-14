<script lang="ts">
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import Donators from '$lib/components/Donators.svelte'
	import type { DonatorsRanked } from '../api/donators/+server'

	export let donators: DonatorsRanked
</script>

<section class="relative mb-12 flex max-w-5xl flex-col gap-8 px-8 md:mb-20">
	<Title>
		<TitlePre slot="pre">And a huge thank you!</TitlePre>
		<h2 slot="title" class="text-2xl font-bold md:text-3xl">Our top supporters</h2>
	</Title>

	<Donators {donators} />
</section>
