<script>
	import clsx from 'clsx'

	/** @type { 'md'|'lg'}*/
	export let size = 'md'
	/** @type { 'primary'|'outline'|'fancyOutline' }*/
	export let type = 'primary'

	$: classes = clsx(
		'animate  rounded font-bold text-sm hover:scale-[1.03] active:scale-95',
		'primary' == type && 'bg-slate-200 text-black',
		'outline' == type && 'outline-2 outline outline-slate-200 text-white bg-transparent',
		'fancyOutline' == type && 'fancy',
		'md' == size && 'px-4 py-2 min-w-[5rem]',
		'lg' == size && 'px-6 py-2.5 min-w-[5rem] text-lg',
		$$restProps.class
	)
</script>

{#if type === 'fancyOutline'}
	<div class="relative">
		<button class={classes} on:click><slot>NO LABEL PROVIDED</slot></button>
		<span
			class="-z-10 absolute fancy-bg inset-0 w-[110%] h-full px-4 py-2 min-w-[5rem] bg-cyan-500/90 blur-xl scale-y-75"
			style="--easing: x; --duration: 8s;"
		/>
		<span
			class="-z-10 absolute fancy-bg inset-0 w-[110%] h-full px-4 py-2 min-w-[5rem] bg-secondary/90 blur-xl scale-y-75"
			style="--easing: y; --duration: 8s;"
		/>
		<span
			class="-z-10 absolute fancy-bg inset-0 w-[110%] h-full px-4 py-2 min-w-[5rem] bg-purple-500/90 blur-xl scale-y-75"
			style="--easing: z;--duration: 8s;"
		/>
	</div>
{:else}
	<button class={classes} on:click><slot>NO LABEL PROVIDED</slot></button>
{/if}

<style lang="postcss">
	.animate {
		animation: pop 380ms cubic-bezier(0.1, -0, 0.42, 1.8);
		transition: transform 180ms cubic-bezier(0.1, -0, 0.42, 1.8);
	}

	.fancy {
		background: theme(colors.black / 50%);
		/* background-clip: padding-box; */
		outline: 2px theme(colors.primary) solid;
	}

	.fancy-bg {
		animation: var(--easing, 'x') var(--duration, 8s) infinite;
	}
</style>
