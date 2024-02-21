<script>
	import { trimText } from '$lib/Helper.mjs'
	import Card from '$lib/components/Card.svelte'

	// Dont forget to put component inside of CardsContainer.svelte

	export let plugin
	export let color = undefined

	/** @type {HTMLVideoElement}*/
	let videoElement

	const colors = {
		Design: 'text-pink-200 bg-pink-500/15',
		'Quality of Life': 'text-orange-200 bg-orange-500/15',
		Layout: 'text-blue-200 bg-blue-500/15',
		Miscellaneous: 'text-purple-200 bg-purple-500/15',
		Official: 'text-cyan-200 bg-cyan-500/15'
	}
</script>

<Card
	on:mouseenter={() => videoElement && videoElement.play().catch(console.error)}
	on:mouseleave={() => videoElement && videoElement.pause()}
	{color}
	class={$$restProps.class}
	><div class="relative flex size-full @container md:min-h-[25rem] lg:min-h-[34rem]">
		<!-- Small view banner-->
		{#if plugin.banner}
			{#if plugin.banner.split('.').at(-1) === 'mp4'}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video
					src={plugin.banner}
					class="banner absolute inset-x-0 top-0 -z-10 h-64 w-full rounded-3xl object-cover p-[1px] @4xl:hidden"
					bind:this={videoElement}
					playsinline
				></video>
			{:else}
				<img
					src={plugin.banner}
					class="banner absolute inset-x-0 top-0 -z-10 h-64 w-full rounded-3xl object-cover p-[1px] @4xl:hidden"
					alt=""
				/>
			{/if}
		{/if}
		<div class="flex min-w-0 grow flex-col justify-end p-8 @4xl:min-w-20 lg:p-14">
			<!-- Media -->
			<div class="relative mb-4 max-w-max">
				{#if plugin.logo}
					<img
						src={plugin.logo}
						class="logo mb-1 size-36 shadow-black transition-transform duration-700 group-hover:scale-[1.01]"
						alt={'Logo of ' + plugin.name}
					/>
				{:else}
					<span
						class="letter-logo -ml-4 flex size-36 items-center justify-center bg-gradient-to-tr from-cyan-300 to-blue-900 bg-clip-text text-center text-8xl font-bold text-transparent"
						>{plugin.name[0]}</span
					>
				{/if}
			</div>

			<!-- Texts -->

			<h2 class="mb-4 min-w-[8ch] max-w-full text-4xl font-bold text-white md:text-6xl lg:text-7xl">
				{plugin.name}
			</h2>

			<p class="max-w-[60ch] text-pretty font-medium text-slate-300">
				{trimText(plugin.description, 100)}
			</p>

			<!-- Tags -->
			<ul class="mt-5 flex flex-wrap gap-1">
				{#each plugin.tags ?? [] as tag}
					<li
						class={'rounded-full  p-1 px-2.5 text-sm font-bold ' + colors[tag] ?? 'bg-slate-100/5'}
					>
						{tag}
					</li>
				{/each}
			</ul>
		</div>
		<!-- Big view banner-->
		{#if plugin.banner}
			<div class="m-[2px] min-h-0 min-w-0 shrink overflow-hidden rounded-r-3xl">
				{#if plugin.banner.split('.').at(-1) === 'mp4'}
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						src={plugin.banner}
						class="big-banner z-50 hidden size-full object-cover transition-transform duration-700 group-hover:scale-[1.01] @4xl:block"
						bind:this={videoElement}
						playsinline
						muted
						loop
					></video>
				{:else}
					<img
						src={plugin.banner}
						class="big-banner hidden size-full object-cover transition-transform duration-700 group-hover:scale-[1.01] @4xl:block"
						alt=""
					/>
				{/if}
			</div>
		{/if}
	</div>
</Card>

<style>
	.logo {
		filter: drop-shadow(0px 16px 24px black);
	}
	.banner {
		mask-image: linear-gradient(to top, transparent, black 70%);
	}
	.big-banner {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 4rem 100%);
	}

	.letter-logo {
		text-shadow: 0 8px 24px theme(colors.primary / 60%);
	}
</style>
