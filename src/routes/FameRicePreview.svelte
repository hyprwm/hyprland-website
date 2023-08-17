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
			class="max-sm:[xmask-image:none] w-full nice-hover object-cover object-top rounded-xl overflow-hidden shadow-2xl hover:scale-[1.01] {imageClass}"
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
		@apply pointer-events-none absolute -bottom-10 left-3 -z-10   h-full w-[calc(100%-24px)] rounded-3xl opacity-50 blur-2xl brightness-150 saturate-[5] transition-[filter] duration-500 max-sm:hidden;

		.rice:hover & {
			@apply brightness-200;
		}
	}
</style>
