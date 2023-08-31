<script>
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

	let background =
		blurredThumbnail ??
		// Get the `generated_<filename>` if blurredThumbnail is not set manually
		`${thumbnail.substring(0, thumbnail.lastIndexOf('/'))}/generated_${thumbnail.split('/').at(-1)}`
</script>

<div class="flex flex-col gap-14">
	<div class="flex justify-center items-center flex-col">
		<div class="text-lg font-bold mb-2">{pretitel}</div>
		<h3 class="text-6xl hover:text-slate-200 mb-6 font-bold">
			<a href={dotfilesLink} target="_blank">{name}</a>
		</h3>
		<a class="flex gap-3 group" href={dotfilesLink} target="_blank">
			<img
				src={creatorProfilePicture}
				class="rounded-full h-6 aspect-square"
				alt={creator + ' profile picture'}
			/>
			<div class="font-medium text-lg transition-colors group-hover:text-white text-slate-300">
				{creator}
			</div>
		</a>
	</div>

	<div class="px-6 sm:px-8 w-full max-w-[1100px] relative">
		<a class="" href={dotfilesLink} target="_blank">
			<img
				src={thumbnail}
				alt={`${name} by ${creator} thumbnail`}
				class="rounded-lg hover:scale-[1.01] duration-300 transition-transform w-full"
			/>
		</a>
		<!-- wide background -->
		<!-- <img
			src={background}
			aria-hidden="true"
			class="background"
			alt={`${name} by ${creator} thumbnail`}
		/> -->
		<!-- blur background -->
		<img
			src={background}
			aria-hidden="true"
			class="background-blurred"
			alt={`${name} by ${creator} thumbnail`}
		/>
	</div>
</div>

<style lang="postcss">
	.background {
		position: absolute;
		opacity: 0.4;
		min-width: calc(200% + 400px);
		height: calc(100% + 200px);
		pointer-events: none;
		inset: 0px 0 0 -200px;
		translate: 0px -50%;
		z-index: -10;
		background: red;

		mask-image: radial-gradient(closest-side, black, transparent);
	}
	.background-blurred {
		position: absolute;
		opacity: 0.3;
		min-width: calc(120% + 400px);
		height: calc(120% + 200px);
		pointer-events: none;
		top: -55%;
		left: 50%;
		translate: -50%;
		z-index: -10;

		mask-image: radial-gradient(farthest-side, black, transparent);
	}
</style>
