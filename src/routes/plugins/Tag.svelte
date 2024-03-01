<script>
	import clsx from 'clsx'
	import { pluginCategoryColors } from './pluginCategoryColors'

	/** @type {string}*/
	export let tag
</script>

<div
	class={clsx(
		'min-w-max rounded-full  p-1 px-2.5 text-xs font-bold ' + pluginCategoryColors[tag].text,
		pluginCategoryColors[tag].bg ?? 'bg-slate-100/5'
	)}
>
	{tag}
</div>
