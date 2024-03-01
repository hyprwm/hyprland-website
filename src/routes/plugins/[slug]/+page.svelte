<script>
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import Title from '$lib/components/Title.svelte'
	import clsx from 'clsx'
	import PluginCard from '../PluginCard.svelte'
	import Tag from '../Tag.svelte'
	import { getGeneratedPath } from '$lib/Helper.mjs'
	import GithubIcon from '~icons/ri/github-fill'
	import BackIcon from '~icons/gg/arrow-left-r'
	import InstallButton from '$lib/components/CommandButton.svelte'
	import Button from '$lib/components/Button.svelte'

	export let data
	$: ({ meta } = data)
	$: title = meta.name + ' Hyprland Plugin'

	/** @type {HTMLVideoElement}*/
	let videoElement

	function playVideo() {
		videoElement && videoElement.play().catch(console.error)
	}
	function pauseVideo() {
		videoElement && videoElement.pause()
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	{#if meta.logo}
		<meta property="og:image" content={meta.logo} />
	{/if}
</svelte:head>

<article
	class={clsx(
		'mx-auto mt-navbar flex min-h-[min(100vh,900px)] w-full max-w-screen-lg flex-col  pt-8 transition-none delay-500 animate-in fade-in-0 fill-mode-backwards [animation-duration:400ms] lg:px-0',
		meta.banner | meta.logo ? 'md:pt-12' : 'mt-12'
	)}
>
	<!-- Back button -->
	<a
		href="/plugins"
		class="mb-2 ml-2 flex items-center gap-3 text-slate-400 hover:text-slate-100 lg:ml-0"
		><BackIcon />Back to all plugins</a
	>
	<!-- Banner  -->
	{#if meta.banner || meta.logo}
		<div
			class="relative flex aspect-video w-full min-w-full items-center justify-center overflow-hidden bg-neutral-950 animate-in fade-in-0 fill-mode-backwards [animation-delay:0.4s] [animation-duration:1.2s] sm:rounded-3xl md:h-[28rem]"
			on:mouseenter={playVideo}
			on:mouseleave={pauseVideo}
			role="banner"
		>
			{#if meta.banner?.split('.').at(-1) === 'mp4'}
				<video
					src={meta.banner}
					class="absolute left-1/2 top-1/2 z-10 size-full min-h-[44rem] min-w-full -translate-x-1/2 -translate-y-1/2"
					bind:this={videoElement}
					playsinline
					muted
					loop
				></video>
			{:else if meta.banner}
				<img src={meta.banner} class="absolute inset-0 size-full object-cover" alt="" />
			{:else if meta.logo}
				<div class="grain absolute inset-0 flex size-full items-center justify-center">
					<img src={meta.logo} class="z-30 size-48" alt="" />
					<img
						src={getGeneratedPath(meta.logo)}
						class="absolute inset-0 object-cover opacity-30"
						alt=""
					/>
				</div>
			{/if}
		</div>
	{/if}

	<!-- ( Logo, Heading, Install buttons ) and tags -->
	<div
		class={clsx(
			'relative z-20 mx-6 mb-24 mt-6 flex    flex-col flex-wrap justify-between gap-4 duration-1000 animate-in fade-in-0 slide-in-from-bottom-4 md:mx-8 md:gap-8 lg:flex-nowrap',
			!meta.banner && !meta.logo && 'mt-24 lg:mt-44',
			!meta.banner && meta.logo && 'sm:-mt-16 md:-mt-20 lg:-mt-32',
			meta.banner && meta.logo && 'sm:-mt-24 md:-mt-52 lg:-mt-64 '
		)}
	>
		<hgroup
			class="flex w-full flex-col gap-4"
			on:mouseenter={playVideo}
			on:mouseleave={pauseVideo}
			role="heading"
			aria-level="1"
		>
			<!-- Logo -->
			{#if meta.logo && meta.banner}
				<img src={meta.logo} class="size-20 md:size-28 lg:size-40" alt={'Logo ' + meta.name} />
			{/if}
			<h1
				class="_text-shadow max-w-max text-pretty bg-gradient-to-br from-white via-white to-white/50 bg-clip-text py-2 text-5xl font-bold text-transparent md:text-7xl xl:text-8xl"
			>
				{meta.name}
			</h1>
		</hgroup>

		<div class="flex w-full flex-wrap gap-16 md:flex-nowrap md:gap-8">
			<div class="flex w-full grow-[4] flex-col justify-between gap-8 md:gap-12">
				<p class="font-medium text-slate-300 sm:text-lg">
					{meta.tagline}
				</p>

				<InstallButton
					containerClass="max-w-max"
					commandClass="text-left break-all md:break-normal  text-slate-300 group-hover:text-white"
					command={`hyprpm add ${meta.url}`}
				>
					<div class="self-start justify-self-start" slot="extra">
						<span class="text-red-200">Trust the plugin source before installing!</span>

						<a
							href="https://wiki.hyprland.org/Plugins/Using-Plugins/"
							target="_blank"
							class="w-full text-left hover:underline"
							>Installation is done via hyprpm ↗
						</a>
					</div>
				</InstallButton>
			</div>

			<!-- Tags, Github button -->
			<div class="flex shrink-0 flex-col items-start gap-8 md:items-end lg:shrink-[2]">
				<a href={meta.url} target="_blank">
					<GithubIcon class="size-10" />
				</a>

				<Tag tag={meta.category} />
			</div>
		</div>
	</div>

	<!-- Markdown -->
	<section
		class="prose prose-slate prose-invert mx-auto px-6 lg:prose-xl prose-a:text-cyan-400 prose-img:rounded-lg sm:px-8"
	>
		<svelte:component this={data.content} />
	</section>
</article>

<!-- More plugins -->
{#if data.other.length > 0}
	<section
		class="relative mx-auto mt-64 flex w-full max-w-screen-xl flex-col items-center px-0 md:px-8"
	>
		<Title class="mb-6"><span slot="title">More plugins</span></Title>
		<CardsContainer class="flex w-full grid-cols-2 flex-col gap-8 xl:grid">
			{#each data.other as plugin}
				<PluginCard showCategory={true} {plugin} class="min-h-96" />
			{/each}
		</CardsContainer>

		<div
			class="m-4 mt-16 max-w-max rounded-xl bg-slate-900/20 px-12 py-8 outline outline-cyan-100/5"
		>
			<Button type="fancyOutline"><a href="/plugins">Back to all plugins</a></Button>
		</div>
	</section>
{/if}

<style lang="postcss">
	.grain {
		&::after {
			content: ' ';
			background: url('/imgs/grain.webp');
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
		}
	}

	._text-shadow {
		filter: drop-shadow(0 0 20px theme(colors.black / 50%));
	}
</style>
