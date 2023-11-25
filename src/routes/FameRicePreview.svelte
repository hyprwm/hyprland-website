<script>
	import { animateIn, getBlurredPath } from '$lib/Helper.mjs'

	/** @type {string}
	 * The path to the image. Usually the file within `static`, but can also be an URL
	 */
	export let image
	/** @type {string | undefined} */
	export let imageClass = undefined
	/** @type {string | undefined} */
	export let containerClass = undefined
	/** @type {string}
	 * The path to the image. Usually the file within `static`, but can also be an URL. Defaults to `generated_<image>`
	 */
	export let blurredBackground = undefined
</script>

<div class="rice {containerClass} group">
	<div class="h-full w-full" use:animateIn={{ slide: 20, duration: 800 }}>
		<img
			src={image}
			alt="Rice desktop"
			class="nice-hover w-full rounded-xl object-cover shadow-2xl hover:scale-[1.01] {imageClass}"
		/>
		<div class="rice-blurred">
			<img
				src={blurredBackground ?? getBlurredPath(image)}
				alt="Rice desktop"
				aria-hidden="true"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.rice {
		@apply relative h-auto w-full max-w-[1100px];
	}
	.nice-hover {
		transition: all 540ms cubic-bezier(0.1, -0.81, 0.31, 2);
	}
	.rice-blurred {
		translate: -50% 30%;
		position: absolute;
		bottom: -40px;
		left: 50%;
		pointer-events: none;
		width: calc(100% + 120px);
		height: calc(150% + 120px);
		opacity: 0.9;
		/* filter: brightness(2.5); */
		z-index: -10;
		mask-image: radial-gradient(50% 50% at 50% 50%, black, transparent);
		contain: content layout size style;

		@apply -z-10 transition-[filter] duration-500;

		/* Too laggy on firefox */
		/* .rice:hover & {
			filter: brightness(4);
		} */
	}
</style>
