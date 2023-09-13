<script>
	import { animateIn } from '$lib/Helper.mjs'
</script>

<div
	use:animateIn={{ slide: 24, fade: 0 }}
	class="flex flex-col items-center px-3 text-center {$$restProps.class}"
>
	<div class="mb-3 font-extrabold text-slate-300">
		<slot name="pre" />
	</div>

	<h1 class="mb-8 text-center text-5xl font-bold md:text-8xl">
		<slot name="title">No title given!!!</slot>
	</h1>

	<div class="text-center font-extrabold text-slate-300 sm:text-lg"><slot name="subtitle" /></div>

	<slot />
</div>
