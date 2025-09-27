<script lang="ts">
	interface Props {
		href?: string | undefined
		isExternal?: boolean
		children?: import('svelte').Snippet
		[key: string]: any
	}

	let {
		href = undefined,
		isExternal = true,
		children,
		...rest
	}: Props = $props()

	let isExternalProp = isExternal
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {}
</script>

{#if href}
	<a {href} {...isExternalProp} class="cursor-pointer {rest.class}">
		{@render children?.()}
	</a>
{:else}
	<div class={rest.class}>
		{@render children?.()}
	</div>
{/if}
