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
	class="mx-auto mt-navbar flex max-w-4xl flex-col gap-6 px-6 pt-20 md:gap-8 md:px-8 lg:mt-32 lg:gap-14"
>
	<hgroup class="flex flex-col gap-5 duration-1000 animate-in fade-in-0 slide-in-from-bottom-4">
		<h1 class="text-4xl font-bold lg:text-6xl">{data.meta.title}</h1>
		<time
			class="font-medium text-slate-300"
			datetime={new Date(data.meta.date * 1000).toISOString()}
			>Published on {formatDate(data.meta.date * 1000)}</time
		>
	</hgroup>

	<!-- Post -->
	<div
		class="prose prose-slate prose-invert transition-none delay-500 animate-in fade-in-0 fill-mode-backwards [animation-duration:2500ms] lg:prose-xl prose-a:text-cyan-400 prose-img:rounded-lg"
	>
		<svelte:component this={data.content} />
	</div>
</article>

{#if data.other.length > 0}
	<section class="mx-auto mt-72 max-w-screen-lg">
		<Title class="mb-6"><span slot="title">More news</span></Title>
		<ul class="grid grid-cols-2 gap-x-7 gap-y-16 overflow-auto">
			{#each data.other as entry}
				<NewsThumb {entry} />
			{/each}
		</ul>
	</section>
{/if}
