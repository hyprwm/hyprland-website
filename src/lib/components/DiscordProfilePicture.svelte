<script lang="ts">
	import clsx from 'clsx'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { spring, type Spring } from 'svelte/motion'
	import { convertStoreToObservable, lerp } from '$lib/Helper'
	import { inview } from 'svelte-inview'
	import { throttleTime } from 'rxjs'
	import type { Interactable } from '@interactjs/types/index'

	export let image: string
	export let containerClass: string = ''
	export let size: number
	export let coordinates: readonly [number, number]

	export let quote: string | undefined = undefined

	export let isAnimating = true

	export let element: HTMLElement | undefined = undefined
	export let imageWrapper: HTMLDivElement | undefined = undefined
	export let imageElement: HTMLImageElement | undefined = undefined
	export let style: string | undefined = undefined
	export let spawnDelay = 0
	export let spawnInstanly = false
	/**
	 * Usually just the size / biggestSize
	 * Goes from 0 - 1
	 */
	export let weight: number
	export let getRestrictionElement: (() => HTMLElement) | undefined = undefined

	const dispatch = createEventDispatcher<{
		enteredView: {
			dragCoordinates: Spring<readonly [number, number]>
			imageElement: HTMLImageElement
			element: HTMLElement
			delay: number
		}
		dragged: readonly [number, number]
		dragStart: any
		dragEnd: any
		hover: any
	}>()

	const dragCoordinates = spring([0, 0] as readonly [number, number], {
		damping: lerp(0.2, 0.03, weight),
		stiffness: lerp(0.2, 0.01, weight),
		// stiffness: lerp(0.81, 0.9, relativeSize),
		precision: 0.001
	})

	let hasEnteredView = false
	let hasImageLoaded = false

	let interactionjs: Interactable

	function onViewEnter() {
		// @ts-ignore
		if (imageElement?.__error) return
		if (!imageElement || !element) return

		setTimeout(
			() => {
				hasEnteredView = true

				dispatch('enteredView', {
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
						dragCoordinates.update(([x, y]) => {
							x += dx
							y += dy
							return [x, y]
						})
					},

					start(event) {
						dispatch('dragStart', event)
					},
					end(event) {
						dispatch('dragEnd', event)
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

	const draggedSubscription = convertStoreToObservable(dragCoordinates)
		.pipe(throttleTime(80))
		.subscribe((drag) => {
			const displayedPosition = getDisplayedPosition(coordinates, drag)
			dispatch('dragged', displayedPosition)
		})

	onMount(() => {
		// Nesecarry as the load image event might not get fired when its already loaded ( for example after a page reload )
		hasImageLoaded = hasImageLoaded || !!imageElement?.complete
	})

	onDestroy(() => {
		draggedSubscription.unsubscribe()
		interactionjs?.unset()
	})

	function getDisplayedPosition(
		origin: readonly [x: number, y: number],
		dragCoordinates: readonly [x: number, y: number]
	) {
		return [origin[0] + dragCoordinates[0], origin[1] + dragCoordinates[1]] as const
	}
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
		on:inview_enter={onViewEnter}
		on:click
	>
		<div class="" bind:this={imageWrapper}>
			<img
				class="group aspect-square h-full w-full touch-none select-none rounded-[50%] object-cover outline outline-4 {$$restProps.class}"
				bind:this={imageElement}
				on:load={() => (hasImageLoaded = true)}
				src={image}
				alt="community profile picture"
				aria-hidden="true"
				on:mouseenter={(event) => dispatch('hover', event)}
				class:hover:scale-125={!!quote}
				loading="lazy"
				referrerpolicy="no-referrer"
				crossorigin="anonymous"
				width={size}
				height={size}
				{...{
					/* @ts-ignore */
				}}
				onerror="this.__error = true"
				{style}
			/>
			<slot />
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
