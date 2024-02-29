<script>
	import { getGeneratedPath, trimText } from '$lib/Helper.mjs'
	import Card from '$lib/components/Card.svelte'
	import clsx from 'clsx'
	import Tag from './Tag.svelte'

	// Dont forget to put component inside of CardsContainer.svelte

	export let plugin
	export let color = undefined

	/** @type {HTMLVideoElement}*/
	let videoElement
</script>

<Card
	on:mouseenter={() => videoElement && videoElement.play().catch(console.error)}
	on:mouseleave={() => videoElement && videoElement.pause()}
	{color}
	class={$$restProps.class}
	gradientOpacity={0.5}
	><a
		href="/plugins/{plugin.slug}"
		class="relative flex size-full min-h-max items-stretch @container"
	>
		<!-- Main content -->
		<div
			class="flex min-h-max min-w-0 shrink grow-[3] flex-col justify-end p-4 @2xl:max-w-max @4xl:min-w-20 sm:p-8 lg:p-8"
		>
			<!-- Logo -->
			<div
				class={clsx(
					'relative mb-4  transition-transform  group-hover:scale-[1.02]',
					!plugin.banner &&
						'flex shrink-[2] grow  items-center justify-center  max-2xl:@2xl:mx-0 max-2xl:@2xl:block max-2xl:@2xl:h-auto  max-2xl:@2xl:grow-0'
				)}
			>
				{#if plugin.logo}
					<div
						class={clsx(
							'logo relative  shadow-black   ',
							plugin.banner ? 'size-24 max-2xl:@2xl:after:hidden' : 'size-28'
						)}
						style:--background={`url("${getGeneratedPath(plugin.logo)}")`}
					>
						<img class="size-full" src={plugin.logo} alt={'Logo of ' + plugin.name} />
					</div>
				{:else}
					<!-- Placeholder logo -->
					<div
						aria-hidden="true"
						class="letter-logo -ml-4 flex items-center justify-center bg-gradient-to-tr from-primary via-sky-400 to-blue-400 bg-clip-text text-center text-6xl font-bold leading-none text-transparent"
					>
						{plugin.name[0]}
					</div>
				{/if}
			</div>

			<!-- Texts -->
			<h2
				class="mb-2 min-w-[8ch] max-w-full text-pretty text-2xl font-bold text-white [overflow-wrap:break-word] @xl:mb-3 @xl:text-5xl"
			>
				{plugin.name}
			</h2>
			<p
				class="max-w-[60ch] overflow-hidden text-ellipsis text-nowrap text-sm font-medium text-slate-300 @xl:overflow-auto @xl:text-pretty"
			>
				{trimText(plugin.description, 100)}
			</p>

			<!-- Tags -->
			<ul
				class="relative mt-3 flex min-h-max items-center gap-2 overflow-hidden @xl:min-w-0 @xl:flex-wrap"
			>
				{#each plugin.tags ?? [] as tag}
					<Tag {tag} />
				{/each}
				<div
					class="absolute inset-y-0 right-0 h-full w-4 bg-gradient-to-r from-transparent to-[black] @xl:hidden"
				></div>
			</ul>
		</div>

		<!-- Banner -->
		{#if plugin.banner}
			<div class="banner-container">
				{#if plugin.banner.split('.').at(-1) === 'mp4'}
					<video
						src={plugin.banner}
						class="absolute inset-0 z-50 size-full object-cover"
						bind:this={videoElement}
						playsinline
						muted
						loop
					></video>
				{:else}
					<img src={plugin.banner} class="absolute inset-0 size-full object-cover" alt="" />
				{/if}
			</div>
		{/if}
	</a>
</Card>

<style lang="postcss">
	.logo {
		contain: layout size;
		&::after {
			content: ' ';
			position: absolute;
			left: 0%;
			bottom: -2rem;
			background-image: var(--background);
			background-repeat: no-repeat;
			background-size: cover;
			height: 150%;
			width: 120%;
			translate: -12% 15%;
			z-index: -1;
			opacity: 50%;
			/* filter: brightness(2); */
			mask-image: radial-gradient(closest-side, black 0%, transparent 99%);
		}
	}

	.banner-container {
		position: absolute;
		inset: 2px;
		height: 70%;
		z-index: -20;
		/* translate: 0 -2px; */
		mask-image: radial-gradient(450% 120% at 0% 100%, black 18%, white);
		/* linear-gradient(to top, black, white 70%); */
		mask-mode: luminance;
		@apply rounded-3xl;
		contain: strict;

		@container (min-width: theme(screens.md)) {
			position: relative;
			/* width: 100%; */
			height: 100%;
			flex-grow: 1;
			margin-right: 4px;
			max-height: calc(100% - 4px);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 4rem 100%);
			@apply rounded-l-none rounded-r-3xl;
			flex-shrink: 2;
			mask-image: unset;
		}
	}

	.letter-logo {
		text-shadow: 0 8px 24px theme(colors.primary / 60%);
	}
</style>
