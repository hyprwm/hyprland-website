<script>
	import { getBlurredPath } from '$lib/Helper.mjs'
	import { inview } from 'svelte-inview'

	/** @type {string} */
	export let name
	/** @type {string} */
	export let creator
	/** @type {string} */
	export let dotfilesLink
	/** @type {string} */
	export let creatorProfilePicture
	/** @type {string} */
	export let thumbnail
	/**
	 * Specify the blurred background image to be used.
	 * Defaults to `"generated_<thumbnail>"`
	 * @type {string | undefined} */
	export let blurredThumbnail = undefined
	/** @type {string} */
	export let pretitel

	let background = blurredThumbnail ?? getBlurredPath(thumbnail)
</script>

<div class="flex flex-col items-center gap-12 px-4 {$$restProps.class}">
	<div class="flex flex-col items-center justify-center">
		<div class="mb-2 text-lg font-bold">{pretitel}</div>
		<h3 class="mb-6 text-4xl font-bold hover:text-slate-200 sm:text-6xl">
			<a href={dotfilesLink} target="_blank">{name}</a>
		</h3>
		<a class="group flex gap-3" href={dotfilesLink} target="_blank">
			<img
				src={creatorProfilePicture}
				class="aspect-square h-6 rounded-full"
				alt={creator + ' profile picture'}
				loading="lazy"
			/>
			<div class="text-lg font-medium text-slate-300 transition-colors group-hover:text-white">
				{creator}
			</div>
		</a>
	</div>

	<div class="image-wrapper">
		<a class="rice" href={dotfilesLink} target="_blank">
			<img src={thumbnail} alt={`${name} by ${creator} thumbnail`} class="" loading="lazy" />
		</a>
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
		display: block;
		contain: layout style;
		@apply w-full rounded-lg transition-transform;
		box-shadow: 0px 0px 8px theme(colors.black / 40%);

		& img {
			@apply rounded-lg shadow-lg duration-300;
			&:hover {
				scale: 1.005;
			}
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
</style>
