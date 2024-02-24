<script>
	/** @type {string | undefined} */
	export let image = undefined
	/** @type {string | undefined} */
	export let name = undefined
	/**
	 * @type {string | undefined }
	 * Classes for the command text
	 */
</script>

<div class="group flex flex-col items-center gap-2 md:flex-row md:gap-4">
	{#if image && name}
		<div
			class="relative flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full text-lg font-medium text-primary transition-transform group-focus-within:-translate-y-1"
		>
			<img src={image} class="h-20 w-32 object-contain" alt="{name} Logo" loading="lazy" />{name}

			<slot name="imageExtra" />
		</div>
	{/if}

	<!-- Command button slot -->
	<div class="mb-2 md:mb-6">
		<slot />
	</div>
</div>
