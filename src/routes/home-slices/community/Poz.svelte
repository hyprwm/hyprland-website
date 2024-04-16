<script>
	import { createThresholdStream, lerp, preloadImage } from '$lib/Helper.mjs'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { Subject, filter, first, map, merge, min, of, startWith, switchMap, timer } from 'rxjs'
	import amongPoz from '$lib/images/poz/amongpoz.webp'
	import chinesePoz from '$lib/images/poz/chinesepoz.webp'
	import discordPoz from '$lib/images/poz/discordpoz.webp'
	import lepszePoz from '$lib/images/poz/discordpoz_lepsze.webp'
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
	import { fade } from 'svelte/transition'

	const origin = [893, 622]
	let newPosition
	const clicksTarget = 5
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
				timer(140).pipe(map(() => ({ x: 0, y: 0 })))
			)
		}),
		startWith({ x: 0, y: 0 })
	)

	const randomCoordinates$ = of([0, 0]).pipe(
		switchMap((_) => timer(2500).pipe(map((__) => (newPosition ?? origin).map())))
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
	relativeLevel$
		.pipe(
			filter((level) => level >= 0.5),
			first()
		)
		.subscribe(() => images.forEach(preloadImage))
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
			image={'/imgs/profile_pictures/jacekpoz.svg'}
			coordinates={origin}
			size={80}
			class={'bg-black outline-yellow-500 '}
			quote={'"piss blob"'}
			on:click={() => clicksInput$.next(0)}
			style={`scale:${$relativeLevel$ * 0.5 + 1};transition: scale 80ms linear; translate: ${$shake$.x}px ${$shake$.y}px; `}
			on:dragged={({ detail }) => (newPosition = detail)}
		>
			{JSON.stringify($shake$)}
		</DiscordProfilePicture>
	</div>
{/if}
