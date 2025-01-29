<script>
	import { formatDate } from '$lib/Helper'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import NewsThumb from '$lib/components/news-thumb.svelte'
	import clsx from 'clsx'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title} | Hyprland</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="fancy-top-gradient fad animate-in" />

<article
	class="mx-auto mt-navbar flex max-w-4xl flex-col gap-4 px-6 pt-20 md:gap-8 md:px-8 lg:mt-32 lg:gap-14"
>
	<hgroup
		class="flex flex-col items-start gap-8 duration-1000 animate-in fade-in-0 slide-in-from-bottom-4"
	>
		<h1 class="text-4xl font-bold lg:text-6xl">{data.meta.title}</h1>
		<div class="flex items-center gap-8 text-base font-medium text-slate-400">
			{#if data.meta.author}
				<svelte:element
					this={data.meta.author.link ? 'a' : 'div'}
					href={data.meta.author.link}
					rel="author"
					target="_blank"
					class={clsx(
						'flex items-center gap-3 rounded-full bg-slate-700/50 px-4 py-2 text-base font-medium text-slate-300 ',
						data.meta.author.link && 'transition-colors hover:bg-slate-700/70 hover:text-slate-200'
					)}
				>
					{#if data.meta.author.picture}
						<img
							class="size-10 rounded-full"
							src={data.meta.author.picture}
							alt={`Picture of ${data.meta.author.name}`}
						/>
					{/if}
					<div class="">
						{#if data.meta.author.name}
							by {data.meta.author.name}
						{/if}
					</div>
				</svelte:element>
			{/if}
			<time class="" datetime={new Date(data.meta.date * 1000).toISOString()}
				>{formatDate(data.meta.date * 1000)}</time
			>
		</div>
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
		<Title class="mb-6">
			<TitleHeading slot="title" class="">More news</TitleHeading>
		</Title>

		<ul class="grid grid-cols-2 gap-x-7 gap-y-16">
			{#each data.other as entry}
				<NewsThumb {entry} />
			{/each}
		</ul>
	</section>
{/if}
