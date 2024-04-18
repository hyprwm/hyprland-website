<script>
	import { createThresholdStream, lerp, preloadImage } from '$lib/Helper.mjs'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { Subject, filter, first, map, merge, of, startWith, switchMap, timer } from 'rxjs'
	import amongPoz from '$lib/images/poz/amongpoz.webp'
	import chinesePoz from '$lib/images/poz/chinesepoz.webp'
	import discordPoz from '$lib/images/poz/discordpoz.webp'
	import lepszePoz from '$lib/images/poz/discordpoz_better.webp'
	import firePoz from '$lib/images/poz/firepoz.webp'
	import gimgPoz from '$lib/images/poz/gimppoz.webp'
	import lordPoz from '$lib/images/poz/jaceklord.webp'
	import krolPoz from '$lib/images/poz/krolewnapoz.webp'
	import marcelPoz from '$lib/images/poz/marcelinapoz.webp'
	import edgePoz from '$lib/images/poz/msedgepoz.webp'
	import nixPoz from '$lib/images/poz/nixpiss.webp'
	import slimaPoz from '$lib/images/poz/slimakpoz.webp'
	import teamPoz from '$lib/images/poz/teamspoz.webp'
	import trollPoz from '$lib/images/poz/trollpoz.webp'
	import windowsPoz from '$lib/images/poz/windowspoz.webp'
	import { getContext, onDestroy } from 'svelte'
	import { contextId } from '../CommunitySlice.svelte'

	/** @type {import('$lib/Types').CommunityContext}*/
	const { profilesState$ } = getContext(contextId)
	$: touches$$$$Voice = $profilesState$.intersections.includes('le_mod-poz')

	const origin = [893, 622]
	let newPosition
	const clicksTarget = 15
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

	const images = [
		amongPoz,
		chinesePoz,
		discordPoz,
		lepszePoz,
		firePoz,
		gimgPoz,
		lordPoz,
		krolPoz,
		marcelPoz,
		edgePoz,
		nixPoz,
		slimaPoz,
		teamPoz,
		trollPoz,
		windowsPoz
	]

	// Preload images when the user start clicking our beloved Poz
	const preloadSubscription = relativeLevel$
		.pipe(
			filter((level) => level >= 0.1),
			first()
		)
		.subscribe(() => images.forEach(preloadImage))

	onDestroy(() => preloadSubscription.unsubscribe())
</script>

{#if $hasFinished$}
	{#each images as poz}
		{@const maxSize = 75}
		{@const size = 35 * Math.random() + 40}
		<DiscordProfilePicture
			image={poz}
			coordinates={newPosition ?? origin}
			{size}
			class={'bg-black/50 outline-yellow-500 '}
			quote={poz.split('/').at(-1).split('.').at(0)}
			spawnInstantly={false}
			isAnimating={false}
			tag="poz"
			on:enteredView={({ detail: { dragCoordinates } }) => {
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
			image={touches$$$$Voice ? edgePoz : '/imgs/profile_pictures/jacekpoz.svg'}
			coordinates={origin}
			size={80}
			class={'bg-black outline-yellow-500 '}
			quote={'"piss blob"'}
			intersectionHandler={(image) => (image = '"piss blob"')}
			tag="poz"
			on:click={() => clicksInput$.next(0)}
			style={`scale:${$relativeLevel$ * 0.5 + 1};transition: scale 80ms linear; translate: ${$shake$.x}px ${$shake$.y}px; `}
			on:dragged={({ detail }) => (newPosition = detail)}
		></DiscordProfilePicture>
	</div>
{/if}
