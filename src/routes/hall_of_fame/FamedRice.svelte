<script lang="ts">
	import { getGeneratedPath } from '$lib/Helper'
	import IconLinkOut from '~icons/tabler/external-link'
	import PlayIconFill from '~icons/mingcute/play-fill'
	import PlayIconOutline from '~icons/mingcute/play-line'

	export let name: string
	export let creator: string
	export let dotfilesLink: string
	export let creatorProfilePicture: string
	export let thumbnail: string
	export let video: string | undefined = undefined
	/**
	 * Specify the blurred background image to be used.
	 * Defaults to `"generated_<thumbnail>"` * */
	export let blurredThumbnail: string | undefined = undefined
	export let pretitel: string

	let toShow: 'thumbnail' | 'video' = 'thumbnail'

	let background = blurredThumbnail ?? getGeneratedPath(thumbnail)
</script>

<div
	class="flex flex-col items-center gap-10 px-4 {$$restProps.class}"
	style:--bg="url('{background}')"
>
	<div class="flex flex-col items-center justify-center">
		<div class="flex items-center gap-2">
			<div class="relative mb-2 rounded-full px-3 py-1 text-lg font-bold">
				{pretitel}
			</div>
		</div>

		<h3 class="title_">
			<a href={dotfilesLink} target="_blank">{name}</a>
		</h3>

		<a
			class="group flex items-center gap-1.5 rounded-full bg-slate-100/10 py-1 pl-1 pr-2 text-slate-300 transition-all hover:scale-105 hover:text-white"
			href={dotfilesLink}
			target="_blank"
		>
			<img
				src={creatorProfilePicture}
				class="aspect-square h-6 rounded-full"
				alt={creator + ' profile picture'}
				loading="lazy"
			/>
			<div class="font-medium text-slate-300 transition-colors group-hover:text-white">
				{creator}
			</div>
		</a>
	</div>

	<div class="image-wrapper">
		<div class="rice group relative" class:hasVideo={video}>
			{#if toShow === 'thumbnail'}
				{#if video}
					<button on:click={() => (toShow = 'video')}>
						<img src={thumbnail} alt={`${name} by ${creator} thumbnail`} class="" loading="lazy" />
					</button>
					<button
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900/60 p-4 text-white/80 opacity-0 outline outline-gray-100/10 duration-300 hover:scale-105 hover:bg-gray-900/80 hover:text-white group-hover:opacity-100"
						on:click={() => (toShow = 'video')}><PlayIconFill class="size-8 " /></button
					>

					<button
						class="absolute bottom-6 left-6 rounded-full bg-gray-900/60 p-2 text-white/80 outline outline-gray-100/10 duration-300 hover:scale-105 hover:bg-gray-900/80 hover:text-white"
						on:click={() => (toShow = 'video')}><PlayIconOutline class="size-5 " /></button
					>
				{:else}
					<img src={thumbnail} alt={`${name} by ${creator} thumbnail`} class="" loading="lazy" />
				{/if}
			{:else if toShow === 'video'}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video autoplay controls poster={thumbnail} src={video} />
			{/if}
		</div>
		<!-- blur background -->
		<img
			src={background}
			aria-hidden="true"
			class="background-blurred"
			alt={`${name} by ${creator} thumbnail`}
			loading="lazy"
		/>
		<div class="grain_" />
	</div>
</div>

<style lang="postcss">
	.image-wrapper {
		@apply relative w-full max-w-[1100px] px-6 sm:px-8;
		position: relative;
		width: 100%;
	}

	.rice {
		position: relative;
		display: flex;
		contain: layout style;
		@apply w-full items-center justify-center rounded-lg transition-transform;
		box-shadow: 0px 0px 8px theme(colors.black / 40%);

		&.hasVideo img:hover {
			scale: 1.005;
		}

		& img,
		video {
			@apply rounded-lg shadow-lg duration-300;
		}

		&:after {
			--size: 5rem;
			color: red;
			z-index: -1000;
			content: ' ';
			@apply rounded-lg shadow-2xl;
			width: calc(100% + var(--size) * 0.5);
			height: calc(100% + var(--size) * 0.5);
			pointer-events: none;
			position: absolute;
			left: calc(var(--size) * -0.25);
			top: calc(var(--size) * -0.25);
			/* background: red; */
			background: rgba(255, 255, 255, 0.05);
			border: rgba(255, 255, 255, 0.1) solid 1px;
		}
	}
	.background-blurred {
		position: absolute;
		opacity: 0.3;
		min-width: calc(120% + 200px);
		height: calc(120% + 200px);
		pointer-events: none;
		top: -45%;
		left: 50%;
		translate: -50%;
		z-index: -10;
		filter: contrast(2.5);
		contain: layout size style paint;

		mask-image: radial-gradient(farthest-side, black, transparent);
	}
	.grain_ {
		position: absolute;
		min-width: calc(120% + 200px);
		height: calc(120% + 200px);
		top: -45%;
		left: 50%;
		translate: -50%;
		z-index: -5;
		contain: layout size style paint;

		background-blend-mode: hard-light;
		mask-image: radial-gradient(farthest-side, black 80%, transparent);
		background-image: url('/imgs/grain.webp');
	}

	.title_ {
		filter: saturate(1.5) brightness(1);
		@apply relative -mt-1 mb-5 py-1 text-4xl font-bold text-transparent sm:text-6xl;
		background-image: linear-gradient(
				-195deg,
				theme(colors.white / 80%) 50%,
				rgba(255, 255, 255, 0.4)
			),
			var(--bg);
		background-size: cover;
		background-clip: text;
		mask-image: linear-gradient(-195deg, white 65%, transparent);
		transition: filter 150ms ease-in-out;

		&:hover {
			filter: saturate(2.2) brightness(1.5);
		}
	}
</style>
