<script>
	import Title from '$lib/components/Title.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import PluginCard from './PluginCard.svelte'
	import clsx from 'clsx'
	import * as R from 'remeda'

	export let data

	const { plugins } = data
	const featuredPlugins = plugins.filter(({ featured }) => featured).slice(0, 4)
	const pluginsByCategory = R.pipe(
		plugins,
		R.groupBy(({ category }) => category),
		R.mapValues(
			R.sort(
				(a, b) =>
					(b.weight ?? 0) - (a.weight ?? 0) ||
					Boolean(b.logo) - Boolean(a.logo) ||
					b.name.localeCompare(a.name)
			)
		),
		R.toPairs,
		R.tap((x) => console.log({ x })),
		R.sort(([a], [b]) => a.localeCompare(b))
	)
</script>

<svelte:head>
	<title>{'Plugins'}</title>
</svelte:head>

<section
	class=" flex min-h-screen w-full flex-col items-center justify-center gap-14 px-6 md:pr-8 lg:pl-0
"
>
	<header class="header mt-24 md:mt-32">
		<Title class="mb-0  duration-1000 animate-in fade-in-0">
			<span slot="pre">Plugins</span>
			<span slot="title">Unlock full power</span><span slot="subtitle">
				Easily load up plugins and customize everything
			</span>
		</Title>
	</header>

	<section
		class="m-0 mx-auto flex w-full max-w-screen-3xl
	animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms]
	"
	>
		<!-- Secondary navigation -->
		<div class="hidden lg:block">
			<nav class="sticky top-32 z-40 max-h-max min-w-52 shrink-0 grow-0 flex-col gap-2 px-8">
				<ul class="flex flex-col gap-4 text-sm font-medium text-slate-400">
					{#each pluginsByCategory as category}
						<li>
							<a href={'#' + category[0]} class=" px-2 py-1 transition-colors hover:text-white"
								>{category[0]}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="flex grow flex-col items-start gap-6 md:gap-16">
			<div class="flex w-full flex-col gap-3">
				<h2 class="text-4xl font-bold text-slate-300">Featured</h2>
				<CardsContainer
					class="
					flex w-full grid-flow-dense  grid-cols-12   flex-col gap-3  md:grid "
				>
					{#each featuredPlugins as plugin, index}
						<PluginCard
							{plugin}
							class={clsx(
								plugin.banner &&
									featuredPlugins
										.slice(0, index)
										.reduce((total, { banner }) => (banner ? total + 1 : total), 0) < 2
									? 'col-span-8 h-[18rem] md:col-span-6  lg:col-span-8   '
									: 'col-span-6 h-[16rem]  lg:col-span-4  ',

								' md:min-h-full  '
							)}
							color={index % 3 === 0 ? 'purple' : 'cyan'}
						/>
					{/each}
				</CardsContainer>
			</div>

			<CardsContainer
				class="md:flotherex-row  flex  grow flex-col flex-wrap items-start justify-start gap-12 animate-in fade-in-0  "
				enableBorders={false}
			>
				{#each pluginsByCategory as [category, plugins]}
					<div class="flex flex-col gap-2">
						<h3 id={category} class="scroll-mt-32 text-lg font-medium text-slate-300">
							{category}
						</h3>
						<div class="flex flex-wrap gap-4">
							{#each plugins as plugin, index}
								<PluginCard
									{plugin}
									class="max-h-48 min-h-[14rem]  w-52 max-w-96 @sm:h-[18rem] 3xl:w-64   "
									color={index % 3 === 0 ? 'purple' : 'cyan'}
									taglineMaxLength={38}
								/>
							{/each}
						</div>
					</div>
				{/each}
			</CardsContainer>
		</div>
	</section>
</section>

<style lang="postcss">
	.featured-container {
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	}
</style>
