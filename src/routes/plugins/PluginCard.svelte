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
	><a href="/plugins/{plugin.slug}" class="relative flex size-full items-stretch @container">
		<!-- Main content -->
		<div
			class="flex min-w-0 shrink grow-[3] flex-col justify-end p-4 @2xl:max-w-max @4xl:min-w-20 sm:p-8 lg:p-8"
		>
			<!-- Logo -->
			<div
				class={clsx(
					'relative mb-4 ',
					!plugin.banner &&
						'flex h-full w-full grow items-center  justify-center max-2xl:@2xl:mx-0 max-2xl:@2xl:block max-2xl:@2xl:h-auto  max-2xl:@2xl:grow-0'
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
						class="letter-logo -ml-4 flex size-36 items-center justify-center bg-gradient-to-tr from-primary via-sky-400 to-blue-400 bg-clip-text text-center text-6xl font-bold leading-none text-transparent"
					>
						{plugin.name[0]}
					</div>
				{/if}
			</div>

			<!-- Texts -->
			<h2
				class="mb-4 min-w-[8ch] max-w-full text-pretty text-2xl font-bold text-white [overflow-wrap:break-word] md:text-3xl lg:text-4xl"
			>
				{plugin.name}
			</h2>
			<p class="max-w-[60ch] text-pretty text-sm font-medium text-slate-300">
				{trimText(plugin.description, 100)}
			</p>

			<!-- Tags -->
			<ul class="mt-5 flex flex-wrap gap-2">
				{#each plugin.tags ?? [] as tag}
					<Tag {tag} />
				{/each}
			</ul>
		</div>

		<!-- Banner -->
		{#if plugin.banner}
			<div class="banner-container">
				{#if plugin.banner.split('.').at(-1) === 'mp4'}
					<video
						src={plugin.banner}
						class="absolute inset-0 z-50 object-cover transition-transform duration-700"
						bind:this={videoElement}
						playsinline
						muted
						loop
					></video>
				{:else}
					<img
						src={plugin.banner}
						class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
						alt=""
					/>
				{/if}
			</div>
		{/if}
	</a>
</Card>

<style lang="postcss">
	._drop-shadow {
		filter: drop-shadow(0px 16px 24px black);
	}

	.logo {
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
			opacity: 70%;
			/* filter: brightness(2); */
			mask-image: radial-gradient(closest-side, black 0%, transparent 99%);
		}
	}

	.banner-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 70%;
		z-index: -20;
		margin: 2px;
		mask-image: linear-gradient(to top, transparent, black 70%);
		@apply overflow-hidden rounded-3xl;

		@container (min-width: theme(screens.md)) {
			position: relative;
			/* min-height: 100%; */
			max-height: 100%;
			height: 100%;
			flex-grow: 1;
			/* flex-basis: 50%;
			width: 100%; */
			max-height: none;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 4rem 100%);
			@apply rounded-l-none rounded-r-3xl;
			flex-shrink: 2;
		}
	}

	.letter-logo {
		text-shadow: 0 8px 24px theme(colors.primary / 60%);
	}
</style>
