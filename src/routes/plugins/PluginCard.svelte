<script>
	import { getGeneratedPath, trimText } from '$lib/Helper.ts'
	import Card from '$lib/components/Card.svelte'
	import clsx from 'clsx'
	import Tag from './Tag.svelte'

	// Dont forget to put this component inside of CardsContainer.svelte
	// Also pass a hight class to the element, as otherwise the banner might not align properly,
	

	/**
	 * @typedef {Object} Props
	 * @property {any} plugin - due to the parent container being unable to use height: full as there wont be a reference
	 * @property {any} [color]
	 * @property {boolean} [showCategory]
	 * @property {number} [taglineMaxLength]
	 */

	/** @type {Props & { [key: string]: any }} */
	let {
		plugin,
		color = undefined,
		showCategory = false,
		taglineMaxLength = 0,
		...rest
	} = $props();

	/** @type {HTMLVideoElement}*/
	let videoElement = $state()
</script>

<Card
	on:mouseenter={() => videoElement && videoElement.play().catch(console.error)}
	on:mouseleave={() => videoElement && videoElement.pause()}
	{color}
	class={rest.class}
	gradientOpacity={0.5}
	><a
		href={plugin.url}
		target="_blank"
		class="relative flex size-full min-h-max items-stretch @container"
	>
		<!-- Main content -->
		<div
			class="flex min-h-max min-w-0 shrink grow-[3] flex-col justify-end p-5 @xs:p-6 @md:p-8 @2xl:max-w-max @4xl:min-w-20"
		>
			<!-- Logo -->
			<div
				class="logo-container relative mb-4 transition-transform
			group-hover:scale-[1.02]"
			>
				{#if plugin.logo}
					<div
						class={clsx(
							'logo relative rounded  shadow-black   ',
							plugin.banner
								? 'size-20 @md:size-28 max-2xl:@2xl:after:hidden'
								: 'size-24 @md:size-28'
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
						{plugin.name
							.replace(/[-\.\_]/g, '')
							.replace(/^hypr-?(land)?/i, '')[0]
							?.toUpperCase()}
					</div>
				{/if}
			</div>

			<!-- Texts -->
			<div class="flex flex-col">
				<h2
					class="min-w-[8ch] max-w-full text-pretty text-base font-bold text-white [overflow-wrap:break-word] @xl:mb-3 @xl:text-5xl"
				>
					{plugin.name}
				</h2>
				<p
					class="overflow-hiddenx text-nowrapx max-w-[60ch] text-ellipsis text-sm font-medium text-slate-400 @xl:overflow-auto @xl:text-pretty @xl:text-base"
				>
					{trimText(plugin.tagline, taglineMaxLength || Number.POSITIVE_INFINITY)}
				</p>
			</div>

			<!-- Category -->
			{#if showCategory}
				<div
					class="relative mt-3 flex min-h-max items-center gap-2 overflow-hidden @xl:min-w-0 @xl:flex-wrap"
				>
					<Tag tag={plugin.category} />
				</div>
			{/if}
		</div>

		<!-- Banner -->
		{#if plugin.banner}
			<div class="banner-container hidden @xs:flex">
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
	.logo-container:not(.banner) {
		@container (max-width: theme(screens.md)) {
			@apply flex shrink-[2] grow items-center justify-center max-2xl:@2xl:mx-0 max-2xl:@2xl:block max-2xl:@2xl:h-auto max-2xl:@2xl:grow-0;
		}
	}

	.banner-container {
		position: absolute;
		inset: 2px;
		height: 100%;
		z-index: -20;
		/* translate: 0 -2px; */
		mask-image: radial-gradient(450% 120% at 0% 100%, black 18%, white);
		mask-mode: luminance;
		@apply rounded-3xl;
		contain: strict;

		@container (min-width: theme(screens.md)) {
			position: relative;
			/* width: 100%; */
			height: 100%;
			flex-grow: 1;
			margin-right: 3px;
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
