<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props()
</script>

<p class="mb-3 font-extrabold text-slate-300">
	{@render children?.()}
</p>
