<script>
	import { animateIn } from '$lib/Helper.mjs'

	/** @type {string}
	 * The path to the image. Usually the file within `static`, but can also be an URL
	 */
	export let image
	/** @type {string | undefined} */
	export let imageClass = undefined
	/** @type {string | undefined} */
	export let containerClass = undefined
</script>

<div class="rice {containerClass} group">
	<div class="w-full h-full" use:animateIn={{ slide: 20, duration: 800 }}>
		<img
			src={image}
			alt="Rice desktop"
			class="w-full nice-hover object-cover object-top rounded-xl overflow-hidden shadow-2xl hover:scale-[1.01] {imageClass}"
		/>
		<img src={image} alt="Rice desktop" aria-hidden="true" class="rice-bg" />
	</div>
</div>

<style lang="postcss">
	.rice {
		@apply relative w-full max-w-[1100px];
	}
	.nice-hover {
		transition: all 540ms cubic-bezier(0.1, -0.81, 0.31, 2);
	}
	.rice-bg {
		@apply w-[calc(100%-24px)] pointer-events-none transition-[filter] duration-500   absolute left-3 brightness-150 rounded-3xl -z-10 saturate-[5] h-full blur-2xl -bottom-10 opacity-50;

		.rice:hover & {
			@apply brightness-200;
		}
	}
</style>
