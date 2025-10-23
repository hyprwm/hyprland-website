<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} tag
	 */

	/** @type {Props} */
	let { tag } = $props()

	const colors = {
		Design: 'text-pink-200 bg-pink-500/15',
		'Quality of Life': 'text-orange-200 bg-orange-500/15',
		Layout: 'text-blue-200 bg-blue-500/15',
		Miscellaneous: 'text-purple-200 bg-purple-500/15',
		Official: 'text-cyan-200 bg-cyan-500/15'
	}
</script>

<div
	class={'min-w-max rounded-full  p-1 px-2.5 text-xs font-bold ' +
		colors[tag] ?? 'bg-slate-100/5'}
>
	{tag}
</div>
