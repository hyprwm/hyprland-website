<script>
	import { animateIn } from '$lib/Helper.mjs'
</script>

<div use:animateIn={{ slide: 24, fade: 0 }} class="text-center {$$restProps.class}">
	<div class="font-extrabold mb-3 text-slate-300">
		<slot name="pre" />
	</div>

	<h1 class="text-6xl md:text-8xl font-bold text-center mb-8">
		<slot name="title">No title given!!!</slot>
	</h1>

	<div class="text-center text-lg font-extrabold text-slate-300"><slot name="subtitle" /></div>

	<slot />
</div>
