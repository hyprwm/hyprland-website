<script lang="ts">
	import { cn } from '$lib/Helper'

	const sizes = {
		default: 'text-5xl  md:text-7xl lg:text-8xl',
		small: 'text-3xl  md:text-5xl lg:text-6xl'
	}
	interface Props {
		size?: keyof typeof sizes
		children?: import('svelte').Snippet
		[key: string]: any
	}

	let { size = 'default', children, ...rest }: Props = $props()
</script>

<h1 class={cn('mb-12  font-bold', sizes[size], rest.class)}>
	{#if children}{@render children()}{:else}No title given!!!{/if}
</h1>
