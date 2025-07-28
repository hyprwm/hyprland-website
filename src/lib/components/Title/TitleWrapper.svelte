<script>
	import { animateIn, cn } from '$lib/Helper.ts'

	/** @type { 'left' | 'right' | 'center'} */
	export let align = 'center'

	$: alignClass =
		align === 'center'
			? 'text-center items-center'
			: align === 'left'
				? 'text-left items-start'
				: 'text-right items-end'
</script>

<hgroup
	use:animateIn={{ slide: 24, fade: 0 }}
	class={cn('z-10 flex flex-col  px-3 ', alignClass, $$restProps.class)}
>
	<slot name="pre" />

	<slot name="title">No title given!!!</slot>

	<slot name="subtitle" />

	<slot />
</hgroup>
