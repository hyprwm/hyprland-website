<script>
	import NewsThumb from '$lib/components/news-thumb.svelte'
	import Title from '$lib/components/Title.svelte'

	export let news
</script>

<section class="relative max-w-5xl px-8">
	<Title class="mb-8">
		<span slot="pre">Read while it's fresh</span>
		<span slot="title">Latest news</span>
	</Title>

	<ul class="flex flex-col gap-12">
		{#each news as entry}
			<NewsThumb {entry} />
		{/each}
	</ul>

	<div class="light"></div>
</section>

<style lang="postcss">
	.light {
		background: url('/imgs/grain.webp'),
			radial-gradient(
				50% 50% at 50% 50%,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 20%),
				transparent
			);

		mask-image: radial-gradient(
			100% 80% at top,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);

		width: 1200px;
		height: 800px;
		margin-left: -400px;
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;
	}
</style>
