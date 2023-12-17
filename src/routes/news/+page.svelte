<script>
	import Title from '$lib/components/Title.svelte'
	import NewsThumb from '$lib/components/news-thumb.svelte'

	import { onMount } from 'svelte'

	export let data

	const posts = data.posts

	const latest = posts.at(0)
	const others = posts.slice(1)

	onMount(() => {
		console.log({ data })
	})
</script>

<svelte:head>
	<title>{''}</title>
</svelte:head>

<section>
	<header class="header">
		<Title class="mb-8">
			<span slot="title">News</span><span slot="subtitle">
				Fresh updates straight from the oven
			</span>
		</Title>
	</header>

	<ul
		class="row-auto grid grid-cols-1 gap-14 delay-500 duration-1000 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards lg:grid-cols-2"
	>
		<div class="col-span-full flex lg:justify-center">
			<NewsThumb entry={latest} />
		</div>
		{#each others as entry}
			<NewsThumb {entry} />
		{/each}
	</ul>
</section>

<style lang="postcss">
	section {
		@apply relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-hidden px-6;
	}

	.header {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: max-content;
		height: 55vh;
		min-height: 500px;
		max-height: 900px;
		width: 100%;
		margin-bottom: min(-10vh, -6rem);
	}
</style>
