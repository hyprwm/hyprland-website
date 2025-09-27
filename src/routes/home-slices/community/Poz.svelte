<script lang="ts">
	import { createThresholdStream, lerp, preloadImage } from '$lib/Helper'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { Subject, filter, first, map, merge, of, startWith, switchMap, timer } from 'rxjs'
	import { onDestroy } from 'svelte'

	interface Props {
		biggestSize: number
		getRestrictionElement?: (() => HTMLElement) | undefined
	}

	let { biggestSize, getRestrictionElement = undefined }: Props = $props()

	const thePozArmy = Object.values(import.meta.glob('$lib/images/poz/*', { eager: true })).map(
		(x) => x.default as string
	)

	const size = 90
	const origin = [710, 615] as const
	let newPosition: readonly [number, number] = $state()
	const clicksTarget = 9
	const shakeMax = 24
	const clicksInput$ = new Subject()
	const level$ = clicksInput$.pipe(
		createThresholdStream({ clicksTarget, clicksEachMs: 250, fallof: 10 })
	)
	const relativeLevel$ = level$.pipe(map((clicks) => clicks / clicksTarget))
	const hasFinished$ = relativeLevel$.pipe(
		filter((clicks) => clicks >= 1),
		first(),
		map(() => true),
		startWith(false)
	)
	const showMainPoz$ = hasFinished$.pipe(
		filter((is) => is === true),
		switchMap(() => timer(550)),
		first(),
		map(() => false),
		startWith(true)
	)
	const shake$ = relativeLevel$.pipe(
		switchMap((progress) => {
			const shakeModifier = shakeMax * Math.max(progress, 0.01)
			return merge(
				of({
					x: Math.random() * shakeModifier,
					y: Math.random() * shakeModifier
				}),
				// Reset back to the original value after 140ms
				timer(140).pipe(map(() => ({ x: 0, y: 0 })))
			)
		}),
		startWith({ x: 0, y: 0 })
	)

	// Preload images when the user start clicking our beloved Poz
	const preloadSubscription = relativeLevel$
		.pipe(
			filter((level) => level >= 0.1),
			first()
		)
		.subscribe(() => thePozArmy.forEach(preloadImage))

	onDestroy(() => preloadSubscription.unsubscribe())
</script>

{#if $hasFinished$}
	{#each thePozArmy as poz}
		{@const maxSize = 75}
		{@const size = 35 * Math.random() + 40}
		<DiscordProfilePicture
			weight={size / biggestSize}
			image={poz}
			coordinates={newPosition ?? origin}
			{size}
			class={'bg-black/50 outline-yellow-500 '}
			spawnInstantly={false}
			isAnimating={false}
			tag="poz"
			{getRestrictionElement}
			onenteredView={({ detail: { dragCoordinates } }) => {
				dragCoordinates.update(([x, y]) => {
					x += lerp(400, 0, (size / maxSize) * (1 - Math.random())) * (Math.random() > 0.5 ? 1 : -1)
					y += lerp(400, 0, (size / maxSize) * (1 - Math.random())) * (Math.random() > 0.5 ? 1 : -1)
					return [x, y]
				})
			}}
		/>
	{/each}
{/if}

{#if $showMainPoz$}
	<div class="absolute z-20">
		<DiscordProfilePicture
			image="/imgs/profile_pictures/jacekpoz.svg"
			coordinates={origin}
			{size}
			weight={size / biggestSize}
			class={'bg-black outline-yellow-500 '}
			quote={'"piss blob"'}
			tag="poz"
			on:click={() => clicksInput$.next(0)}
			style={`scale:${$relativeLevel$ * 0.5 + 1};transition: scale 80ms linear; translate: ${$shake$.x}px ${$shake$.y}px; `}
			on:dragged={({ detail }) => (newPosition = detail)}
		></DiscordProfilePicture>
	</div>
{/if}
