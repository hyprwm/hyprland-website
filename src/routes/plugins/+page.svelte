<script>
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import PluginCard from './PluginCard.svelte'
	import clsx from 'clsx'
	import * as R from 'remeda'
	import { getGeneratedPath } from '$lib/Helper.mjs'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'

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
		R.entries(),
		R.tap((x) => console.log({ x })),
		R.sort(([a], [b]) => a.localeCompare(b))
	)
</script>

<svelte:head>
	<title>{'Plugins'}</title>
</svelte:head>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-14 px-6 md:pr-8
	
	lg:pl-0
"
>
	<div class="top-light"></div>

	<header class="header mt-24 md:mt-32">
		<Title>
			<TitlePre>Plugins</TitlePre>
			<TitleHeading slot="title" class="">Unlock full power</TitleHeading>
			<TitleSubtile>Easily load up plugins and customize everything</TitleSubtile>
		</Title>

		<!-- <div class="absolute top-0">
			{#each plugins.filter(({ logo }) => logo) as { logo }, index}
				<img
					src={getGeneratedPath(logo)}
					alt=""
					width={index * 50}
					height={index * 50}
					class="bg-logo"
				/>
			{/each}
		</div> -->
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
				class="md:flotherex-row flex  w-full  grow flex-col flex-wrap items-start justify-start gap-12 animate-in fade-in-0  "
				enableBorders={false}
			>
				{#each pluginsByCategory as [category, plugins]}
					<div class="flex w-full flex-col gap-2">
						<h3 id={category} class="scroll-mt-32 text-lg font-medium text-slate-300">
							{category}
						</h3>
						<div class="flex w-full flex-wrap gap-4">
							{#each plugins as plugin, index}
								<PluginCard
									{plugin}
									class="max-h-48 min-h-[14rem] w-full  max-w-96 @sm:h-[18rem] sm:w-52 3xl:w-64   "
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
	.top-light {
		background: url('/imgs/grain.webp'),
			radial-gradient(
				100% 80% at top,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 10%),
				transparent
			);

		mask-image: radial-gradient(
			100% 80% at top,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);

		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;

		animation: parallax ease-in-out 500ms;
		animation-duration: 1ms;
		animation-timeline: scroll();
	}

	@keyframes parallax {
		to {
			translate: 0px 1000px;
		}
	}
</style>
