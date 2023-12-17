<script>
	import { animateIn } from '$lib/Helper.mjs'
</script>

<hgroup
	use:animateIn={{ slide: 24, fade: 0 }}
	class="z-10 flex flex-col items-center px-3 text-center {$$restProps.class}"
>
	{#if $$slots.pre}
		<p class="mb-3 font-extrabold text-slate-300">
			<slot name="pre" />
		</p>
	{/if}

	<h1 class="mb-12 text-center text-5xl font-bold md:text-8xl">
		<slot name="title">No title given!!!</slot>
	</h1>

	{#if $$slots.subtitle}
		<p class="-mt-4 mb-7 text-center font-extrabold text-slate-300 sm:text-lg">
			<slot name="subtitle" />
		</p>
	{/if}

	<slot />
</hgroup>
