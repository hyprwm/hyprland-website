<script>
	import clsx from 'clsx'
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte'
	import { spring } from 'svelte/motion'
	import { contextId as ctxId } from '../../routes/home-slices/CommunitySlice.svelte'
	import { convertStoreToObservable, isIntersecting, lerp } from '$lib/Helper.mjs'
	import { inview } from 'svelte-inview'
	import { Subject, distinctUntilChanged, throttle, throttleTime } from 'rxjs'

	/** @type {string} */
	export let image
	/** @type {string} */
	export let containerClass = ''
	/** @type {number} */
	export let size
	/** @type {[number, number]} */
	export let coordinates
	/** @type {string | undefined} User description */
	export let tag = undefined

	/** @type {string | undefined} */
	export let quote = undefined

	/** @type {symbol}*/
	export let contextId = ctxId
	export let isAnimating = true

	/** @type {HTMLElement}*/
	export let element = undefined
	/** @type {HTMLImageElement}*/
	export let imageWrapper
	/** @type {HTMLImageElement}*/
	export let imageElement
	/** @type {string|undefined}*/
	export let style = undefined
	export let hasDelay = true
	export let spawnInstanly = false

	/** @type {import('$lib/Types.ts').CommunityContext} **/
	const { biggestSize, getSectionElement, profilesState$ } = getContext(contextId)
	const dispatch = createEventDispatcher()

	const relativeSize = size / biggestSize
	const delay = hasDelay ? Math.pow(1 - size / biggestSize, 4) * 4654 : 0
	const dragCoordinates = spring([0, 0], {
		damping: lerp(0.2, 0.03, relativeSize),
		stiffness: lerp(0.2, 0.01, relativeSize),
		// stiffness: lerp(0.81, 0.9, relativeSize),
		precision: 0.001
	})

	let hasEnteredView = false
	let hasImageLoaded = false

	/** @type {import('interactjs').default} */
	let interactionjs

	function onViewEnter() {
		if (imageElement.__error) return

		setTimeout(
			() => {
				hasEnteredView = true
				if (tag && profilesState$) {
					profilesState$.update((state) => {
						// No drag yet, so we can just use the normal coordinates
						state.profiles[tag] = { size, coordinates }
						return state
					})
				}

				dispatch('enteredView', { dragCoordinates, imageElement, element, delay })
			},
			spawnInstanly ? 0 : 550
		)

		// Only load the library if the element entered the view, to improve performance
		import('interactjs').then(({ default: interact }) => {
			interactionjs = interact(imageElement).draggable({
				inertia: { resistance: lerp(5, 200, relativeSize) },
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
				modifiers: [
					interact.modifiers.restrictRect({
						restriction: getSectionElement,
						endOnly: true
					})
				]
			})
		})
	}

	const draggedSubscription = convertStoreToObservable(dragCoordinates)
		.pipe(throttleTime(80))
		.subscribe((drag) => {
			const displayedPosition = getDisplayedPosition(coordinates, drag)
			dispatch('dragged', displayedPosition)

			if (!tag) return

			// This whole things looks so slow, but if it works. Feel free to PR nicer way though
			profilesState$.update((state) => {
				state.profiles[tag] = { coordinates: displayedPosition, size }

				const otherIntersections = state.intersections.filter((pair) => !pair.includes(tag))
				const thisIntersections = Object.entries(state.profiles)
					.filter(
						([otherTag, rectangle]) =>
							otherTag !== tag &&
							isIntersecting(rectangle, { size, coordinates: displayedPosition })
					)
					.map(([otherTag]) => [otherTag, tag].sort().join('-'))
				const allIntersections = [...otherIntersections, ...thisIntersections]

				state.intersections = allIntersections

				return state
			})
		})

	onMount(() => {
		// Nesecarry as the load image event might not get fired when its already loaded ( for example after a page reload )
		hasImageLoaded = hasImageLoaded || imageElement.complete
	})

	onDestroy(() => {
		draggedSubscription.unsubscribe()
		interactionjs?.off()
	})

	/**
	 * @param {[x: number, y: number]}origin
	 * @param {[x: number, y: number]}dragCoordinates
	 */
	function getDisplayedPosition(origin, dragCoordinates) {
		return [origin.at(0) + dragCoordinates.at(0), origin.at(1) + dragCoordinates.at(1)]
	}
</script>

<div
	class={clsx(
		'absolute left-0 top-0 touch-none select-none transition-opacity ',
		containerClass,
		hasImageLoaded ? 'opacity-100' : 'opacity-0'
	)}
	style:translate={coordinates.map((xy) => xy + 'px').join(' ')}
	style="width: {size}px; height: {size}px;--delay: {delay}ms; "
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
