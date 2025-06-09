<script lang="ts">
	export let href: string | undefined = undefined
	export let isExternal: boolean = true

	let isExternalProp = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}
</script>

{#if href}
	<a {href} {...isExternalProp} class="cursor-pointer {$$restProps.class}">
		<slot />
	</a>
{:else}
	<div class={$$restProps.class}>
		<slot />
	</div>
{/if}
