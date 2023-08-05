<script>
	import { onDestroy } from 'svelte'
	import ClipboardIcon from '~icons/mingcute/copy-2-line'

	/** @type {string} */
	export let command
	/** @type {string} */
	export let image
	/** @type {string} */
	export let name

	let isShowingCopied = false
	let timeoutId

	async function copyCommand() {
		await navigator.clipboard.writeText(command).then(() => (isShowingCopied = true))
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => (isShowingCopied = false), 1400)
	}

	onDestroy(() => {
		clearTimeout(timeoutId)
	})
</script>

<div class="flex gap-4 items-center">
	<div
		class="flex flex-col gap-1 justify-center items-center text-primary text-lg font-medium rounded-full w-32 h-32"
	>
		<img src={image} alt="Arch Logo" />{name}
	</div>

	<div class="flex flex-col relative font-mono">
		<button
			class="flex text-base transition-all min-w-[18rem] items-center font-medium rounded-full border-primary border py-3 pl-6 pr-6 gap-4 justify-center group active:scale-[1.01]"
			on:click={$$slots.default ? undefined : copyCommand}
		>
			<slot>
				<div class="flex gap-4 relative justify-between w-full">
					<div class="flex gap-4">
						<div class="text-primary select-none font-bold">></div>
						<span>{command}</span>
					</div>
					<ClipboardIcon
						class="group-hover:opacity-80 group-active:opacity-100 opacity-0 w-6 h-6 hover:!opacity-100 transition-opacity"
					/>
				</div></slot
			>
		</button>
		<div
			class="text-green-400 [translate:-50%_0px] select-none pointer-events-none absolute -top-8 w-full left-1/2 hidden max-w-max"
			class:copy={isShowingCopied}
		>
			Copied to clipboard ✔
		</div>
		{#if $$slots.extra}
			<div class="text-xs font-sans opacity-80 absolute -bottom-6 w-full flex justify-center">
				<slot name="extra" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.copy {
		animation: 80ms cubic-bezier(0.5, 0.2, 0, 1.5) 1 copy;
		display: block;
	}

	@keyframes copy {
		from {
			opacity: 0.8;
			scale: 0.98;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	}
</style>
