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

<div class="group flex flex-col items-center gap-2 md:flex-row md:gap-4">
	<div
		class="relative flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full text-lg font-medium text-primary transition-transform group-focus-within:-translate-y-1"
	>
		<img src={image} class="h-20 w-32 object-contain" alt="{name} Logo" loading="lazy" />{name}
		<slot name="imageExtra" />
	</div>

	<div class="relative mb-2 flex grow flex-col font-mono md:mb-6">
		<button
			class="flex min-w-[18rem] items-center justify-center gap-4 rounded-full border border-primary py-3 pl-6 pr-6 text-base font-medium transition-transform active:scale-[1.01]"
			on:click={$$slots.default ? undefined : copyCommand}
		>
			<slot>
				<div class="relative flex w-full justify-between gap-4">
					<div class="flex gap-4">
						<div class="select-none font-bold text-primary">></div>
						<span>{command}</span>
					</div>
					<ClipboardIcon
						class="hidden h-6 w-6  text-white opacity-0 transition-opacity duration-100 hover:!opacity-100 group-hover:opacity-80 group-active:opacity-100 sm:block"
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
			<div class="absolute -bottom-6 flex w-full justify-center font-sans text-xs opacity-80">
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
