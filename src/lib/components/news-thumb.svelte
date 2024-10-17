<script>
	import ArrowRight from '~icons/mingcute/arrow-right-circle-line'

	import { animateIn, formatDate } from '$lib/Helper.ts'
	export let entry

	$: link = `/news/${entry.slug}`
</script>

<li class="flex gap-14" use:animateIn={{ fade: 0, slide: 24 }}>
	<article class="flex flex-col gap-4 rounded">
		<div class="flex flex-col gap-4 text-sm font-medium text-slate-400">
			<p class="font-bold text-slate-400">{formatDate(entry.date)}</p>
		</div>
		<h2 class="title text-3xl font-bold hover:text-slate-200 md:text-5xl lg:text-6xl">
			<a href={link}>{entry.title}</a>
		</h2>
		<a
			href={link}
			class="group flex max-w-max items-center gap-4 font-medium text-slate-300 transition-all hover:text-white"
			>Read up <ArrowRight class="transition-transform group-hover:translate-x-0.5" /></a
		>
	</article>
</li>
