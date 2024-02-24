<script>
	import { onDestroy } from 'svelte'
	import ClipboardIcon from '~icons/mingcute/copy-2-line'

	/** @type {string} */
	export let command
	/** @type {string | undefined }*/
	export let commandClass = undefined
	/** @type {string | undefined }*/
	export let containerClass = undefined

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

<div class="relative flex grow flex-col font-mono {containerClass ?? ''}">
	<button
		class="group flex min-w-[18rem] items-center justify-center gap-4 rounded-lg border border-primary py-3 pl-6 pr-6 text-base font-medium transition-transform active:scale-[1.01] sm:rounded-full"
		on:click={$$slots.default ? undefined : copyCommand}
		on:click
	>
		<slot>
			<div class="relative flex w-full justify-between gap-4">
				<div class="flex gap-4">
					<div class="select-none font-bold text-primary">></div>
					<span class={commandClass}>{command}</span>
				</div>
				<ClipboardIcon
					class="hidden h-6 w-6  text-white opacity-50 transition-opacity duration-100 hover:!opacity-100 group-hover:opacity-80 group-active:opacity-100 md:block"
				/>
			</div>
		</slot>
	</button>

	<div
		class="pointer-events-none absolute left-1/2 z-20 hidden w-full max-w-max select-none rounded-full bg-black/10 px-2 text-green-400 backdrop-blur [translate:-50%_0px] max-md:-bottom-6 md:-top-8"
		class:copy={isShowingCopied}
	>
		Copied to clipboard ✔
	</div>

	{#if $$slots.extra}
		<div class="mt-3 flex w-full items-center justify-center font-sans text-xs opacity-80">
			<slot name="extra" />
		</div>
	{/if}
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
