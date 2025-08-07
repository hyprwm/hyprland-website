<script lang="ts">
	import { cn } from '$lib/Helper'

	const sizes = {
		default: 'text-5xl  md:text-7xl lg:text-8xl',
		small: 'text-3xl  md:text-5xl lg:text-6xl'
	}
	export let size: keyof typeof sizes = 'default'
</script>

<h1 class={cn('mb-12  font-bold', sizes[size], $$restProps.class)}>
	<slot>No title given!!!</slot>
</h1>
