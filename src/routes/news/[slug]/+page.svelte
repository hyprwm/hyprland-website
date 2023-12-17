<script>
	import { formatDate } from '$lib/Helper'
	import Title from '$lib/components/Title.svelte'
	import NewsThumb from '$lib/components/news-thumb.svelte'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="mt-navbar mx-auto flex max-w-4xl flex-col gap-6 px-6 pt-20 md:gap-8 md:px-8 lg:gap-28"
>
	<Title>
		<span slot="title">{data.meta.title}</span>
		<time slot="subtitle" datetime={new Date(data.meta.date * 1000).toISOString()}
			>Published on {formatDate(data.meta.date * 1000)}</time
		>
	</Title>

	<!-- Post -->
	<div
		class="prose prose-slate prose-invert delay-500 duration-1000 animate-in fade-in-0 fill-mode-backwards lg:prose-xl prose-a:text-cyan-400 prose-img:rounded-lg"
	>
		<svelte:component this={data.content} />
	</div>
</article>

{#if data.other.length > 0}
	<section class="mx-auto mt-72 max-w-screen-lg">
		<Title class="mb-6"><span slot="title">More news</span></Title>
		<ul class="grid grid-cols-2 gap-x-7 gap-y-16">
			{#each data.other as entry}
				<NewsThumb {entry} />
			{/each}
		</ul>
	</section>
{/if}
