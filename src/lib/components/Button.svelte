<script>
	import clsx from 'clsx'

	/** @type { 'md'|'lg'|'xl'}*/
	export let size = 'md'
	/** @type { 'primary'|'outline'|'fancyOutline' }*/
	export let type = 'primary'

	$: classes = clsx(
		'animate  rounded text-sm font-bold hover:scale-[1.03] active:scale-95',
		'primary' == type && 'bg-slate-200 text-black',
		'outline' == type && 'bg-transparent text-white outline outline-2 outline-slate-200',
		'fancyOutline' == type && 'fancy',
		'md' == size && 'min-w-[5.5rem] px-4 py-2.5',
		'lg' == size && 'min-w-[5.5rem] px-6 py-3 ',
		'xl' == size && 'min-w-[5.5rem] px-8 py-4 ',
		$$restProps.class
	)
</script>

{#if type === 'fancyOutline'}
	<div class="relative">
		<button class={classes} on:click><slot>NO LABEL PROVIDED</slot></button>
		<span
			class="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-cyan-500/90 px-4 py-2 blur-xl"
			style="--easing: x; --duration: 8s;"
		/>
		<span
			class="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-secondary/90 px-4 py-2 blur-xl"
			style="--easing: y; --duration: 8s;"
		/>
		<span
			class="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-purple-500/90 px-4 py-2 blur-xl"
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
