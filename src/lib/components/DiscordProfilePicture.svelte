<script lang="ts">
	import clsx from 'clsx'
	import { onDestroy, onMount } from 'svelte'
	import { spring, type Spring } from 'svelte/motion'
	import { inview } from 'svelte-inview'
	import type { Interactable } from '@interactjs/types/index'
	import { lerp } from '$lib/Helper'

	type Props = {
		image: string
		containerClass?: string
		size: number
		coordinates: readonly [number, number]
		class?: string

		quote?: string | undefined

		isAnimating?: boolean

		element?: HTMLElement | undefined
		imageWrapper?: HTMLDivElement | undefined
		imageElement?: HTMLImageElement | undefined
		style?: string | undefined
		spawnDelay?: number
		spawnInstanly?: boolean
		/**
		 * Usually just the size / biggestSize
		 * Goes from 0 - 1
		 */
		weight: number
		getRestrictionElement?: (() => HTMLElement) | undefined
		onClick?: () => void

		enteredView?: (data: {
			dragCoordinates: Spring<readonly [number, number]>
			imageElement: HTMLImageElement
			element: HTMLElement
			delay: number
		}) => void
		dragged?: (data: readonly [number, number]) => void
		dragStart?: (data: any) => void
		dragEnd?: (data: any) => void
		hover?: (data: any) => void

		children?: import('svelte').Snippet
	}

	let {
		image,
		class: className,
		containerClass = '',
		size,
		coordinates,
		quote = undefined,
		isAnimating = true,
		element = undefined,
		imageWrapper = undefined,
		imageElement = undefined,
		style = undefined,
		spawnDelay = 0,
		spawnInstanly = false,
		/**
		 * Usually just the size / biggestSize
		 * Goes from 0 - 1
		 */
		weight,
		getRestrictionElement = undefined,
		onClick,
		dragEnd,
		dragStart,
		enteredView,
		hover,
		children
	}: Props = $props()

	const dragCoordinates = spring([0, 0] as readonly [number, number], {
		damping: lerp(0.2, 0.03, weight),
		stiffness: lerp(0.2, 0.01, weight),
		precision: 0.001
	})

	let hasEnteredView = $state(false)
	let hasImageLoaded = $state(false)

	let interactionjs: Interactable

	function onViewEnter() {
		// @ts-ignore
		if (imageElement?.__error) return
		if (!imageElement || !element) return

		setTimeout(
			() => {
				hasEnteredView = true

				enteredView?.({
					dragCoordinates,
					imageElement: imageElement!,
					element: element!,
					delay: spawnDelay
				})
			},
			spawnInstanly ? 0 : 550
		)

		// Only load the library if the element entered the view, to improve performance
		import('interactjs').then(({ default: interact }) => {
			interactionjs = interact(imageElement!).draggable({
				inertia: { resistance: lerp(5, 200, weight) },
				listeners: {
					move({ dx, dy }) {
						dragCoordinates.update(([x, y]) => [x + dx, y + dy])
					},

					start(event) {
						dragStart?.(event)
					},
					end(event) {
						dragEnd?.(event)
					}
				},
				modifiers: getRestrictionElement
					? [
							interact.modifiers.restrictRect({
								restriction: getRestrictionElement,
								endOnly: true
							})
						]
					: []
			})
		})
	}

	onMount(() => {
		// Nesecarry as the load image event might not get fired when its already loaded ( for example after a page reload )
		hasImageLoaded = hasImageLoaded || !!imageElement?.complete
	})

	onDestroy(() => {
		interactionjs?.unset()
	})

	// function getDisplayedPosition(
	// 	origin: readonly [x: number, y: number],
	// 	dragCoordinates: readonly [x: number, y: number]
	// ) {
	// 	return [origin[0] + dragCoordinates[0], origin[1] + dragCoordinates[1]] as const
	// }
</script>

<div
	class={clsx(
		'absolute left-0 top-0 touch-none select-none transition-opacity ',
		containerClass,
		hasImageLoaded ? 'opacity-100' : 'opacity-0'
	)}
	style:translate={coordinates.map((xy) => xy + 'px').join(' ')}
	style="width: {size}px; height: {size}px;--delay: {spawnDelay}ms; "
	aria-hidden="true"
	bind:this={element}
>
	<button
		class={clsx(
			'group absolute inset-0 h-full w-full  touch-none select-none',
			isAnimating && 'opacity-0'
		)}
		style:translate={`calc( ${$dragCoordinates[0]}px  ) ${$dragCoordinates[1]}px`}
		use:inview={{ unobserveOnEnter: true, threshold: 0.2 }}
		class:_animate={hasImageLoaded && isAnimating && hasEnteredView}
		oninview_enter={onViewEnter}
		onclick={onClick}
	>
		<div class="" bind:this={imageWrapper}>
			<img
				class="group aspect-square h-full w-full touch-none select-none rounded-[50%] object-cover outline outline-4 {className}"
				bind:this={imageElement}
				onload={() => (hasImageLoaded = true)}
				src={image}
				alt="community profile picture"
				aria-hidden="true"
				onmouseenter={(event) => hover?.(event)}
				class:hover:scale-125={!!quote}
				loading="lazy"
				referrerpolicy="no-referrer"
				crossorigin="anonymous"
				width={size}
				height={size}
				{...{
					/* @ts-ignore */
				}}
				onerror={() => (this.__error = true)}
				{style}
			/>
			{#if children}
				{@render children()}
			{/if}
		</div>

		{#if quote}
			<div class="quote" aria-hidden="true">
				{quote}
			</div>
		{/if}
	</button>
</div>

<style lang="postcss">
	._animate {
		animation: reveal 440ms 1 var(--delay) both cubic-bezier(0, 1, 0.765, 3.8);
		touch-action: none;
		user-select: none;

		img {
			transition: scale cubic-bezier(0.95, 0.82, 0.165, 2) 180ms;
			&:hover {
				scale: 1.05;
			}
		}
	}

	.quote {
		@apply pointer-events-none absolute -top-6 left-1/2 min-w-max -translate-x-1/2 select-none rounded bg-slate-800/50 px-2 py-1 text-sm font-medium tracking-wide opacity-0 duration-150 group-hover:opacity-100;
	}

	@keyframes reveal {
		from {
			opacity: 0%;
			scale: 0.72 0.72;
		}
		to {
			opacity: 100%;
			scale: 1 1;
		}
	}
</style>
