<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let { children, ...rest } = $props()
</script>

<p
	class="-mt-4 mb-7 font-extrabold text-slate-300 sm:text-lg {rest.class}"
>
	{@render children?.()}
</p>
