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
	/** @type {string} */
	export let blurredThumbnail
	/** @type {string} */
	export let pretitel
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
		<img
			src={blurredThumbnail}
			aria-hidden="true"
			class="absolute pointer-events-none -bottom-5 -z-10 opacity-20 inset-x-0 w-full rounded-lg"
			alt={`${name} by ${creator} thumbnail`}
		/>
	</div>
</div>
