<script>
	/**
	 * @typedef {Object} Props
	 * @property {string | undefined} [image]
	 * @property {string | undefined} [name]
	 * @property {import('svelte').Snippet} [imageExtra]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		image = undefined,
		name = undefined,
		imageExtra,
		children
	} = $props()
</script>

<div
	class="group relative flex flex-col items-center gap-2 md:flex-row md:gap-4"
>
	{#if image && name}
		<div
			class="relative flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full text-lg font-medium text-primary transition-transform group-focus-within:-translate-y-1"
		>
			<img
				src={image}
				class="h-20 w-32 object-contain"
				alt="{name} Logo"
				loading="lazy"
			/>{name}

			{@render imageExtra?.()}
		</div>
	{/if}

	<!-- Command button slot -->
	<div class="mb-2 w-full">
		{@render children?.()}
	</div>
</div>
