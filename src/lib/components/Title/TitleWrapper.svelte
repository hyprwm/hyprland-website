<script>
	import { animateIn, cn } from '$lib/Helper.ts'

	
	/**
	 * @typedef {Object} Props
	 * @property { 'left' | 'right' | 'center'} [align]
	 * @property {import('svelte').Snippet} [pre]
	 * @property {import('svelte').Snippet} [title]
	 * @property {import('svelte').Snippet} [subtitle]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let {
		align = 'center',
		pre,
		title,
		subtitle,
		children,
		...rest
	} = $props();

	let alignClass =
		$derived(align === 'center'
			? 'text-center items-center'
			: align === 'left'
				? 'text-left items-start'
				: 'text-right items-end')
</script>

<hgroup
	use:animateIn={{ slide: 24, fade: 0 }}
	class={cn('z-10 flex flex-col  px-3 ', alignClass, rest.class)}
>
	{@render pre?.()}

	{#if title}{@render title()}{:else}No title given!!!{/if}

	{@render subtitle?.()}

	{@render children?.()}
</hgroup>
