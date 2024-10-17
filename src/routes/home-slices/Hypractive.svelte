<script>
	import ActiveGitIcon from '~icons/gg/git-branch'
	import VaxryImage from '$lib/images/vaxry-github.webp'

	import {
		Subject,
		interval,
		map,
		of,
		scan,
		startWith,
		switchMap,
		merge,
		timer,
		timeInterval,
		filter,
		first,
		take
	} from 'rxjs'
	import GitTile from '$lib/components/GitTile.svelte'
	import { lerp } from '$lib/Helper.ts'
	import { cubicInOut, expoInOut } from 'svelte/easing'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { setContext } from 'svelte'

	const click$ = new Subject()

	const ASCENION_CLICKS = 69
	const MAX_LIFESPAN_TILE = 2500
	const MIN_LIFESPAN_TILE = 800
	const MAX_TILES_PER_CLICK = 15
	const MIN_TILES_PER_CLICK = 2
	/** How fast the user has to click to progress */
	const CLICK_EACH_MS = 400
	const ASCENION_FALLOFF = -ASCENION_CLICKS / 20

	const clickLevel$ = click$.pipe(
		timeInterval(),
		filter(({ interval }) => interval < CLICK_EACH_MS),
		map(() => 1),
		switchMap((value) =>
			merge(
				of(value),

				/** If no new value comes in, start decreasing the progress */
				interval(CLICK_EACH_MS + 100).pipe(
					take(ASCENION_CLICKS), // Prevent this interval from running forever
					map(() => ASCENION_FALLOFF)
				)
			)
		),
		scan((level, value) => Math.min(ASCENION_CLICKS, Math.max(level + value, 0))),
		startWith(0)
	)
	/** How many clicks are left in percent */
	const relativeLevel$ = clickLevel$.pipe(map((clicks) => clicks / ASCENION_CLICKS))
	/** Tween/Ease the percents for a nicer look */
	const cubicRelativeLevel$ = relativeLevel$.pipe(map(cubicInOut))
	const expoRelativeLevel$ = relativeLevel$.pipe(map(expoInOut))

	const hasAscended$ = relativeLevel$.pipe(
		filter((level) => level >= 1),
		first(),
		map(() => true),
		startWith(false)
	)

	// Only emit on mouseUp to prevent emitting when the level decreases due to no user interaction
	const tiles$ = click$.pipe(
		switchMap(() =>
			merge(
				of(Math.floor(lerp(MIN_TILES_PER_CLICK, MAX_TILES_PER_CLICK, $cubicRelativeLevel$))),
				// Remove the tiles after a timeout, if no new ones came in
				timer(MAX_LIFESPAN_TILE)
			)
		),
		scan(
			(acc, value) => (value === 0 ? [] : [...acc, ...Array.from({ length: value }, () => 1)]),
			[]
		),
		startWith([])
	)

	$: hue = lerp(200, 130, $cubicRelativeLevel$)
	$: scale = lerp(0.9, 2, $cubicRelativeLevel$)
	$: translateY = lerp(0, 10, $cubicRelativeLevel$)

	/** @type {HTMLDivElement} */
	let containerElement
	let isAnimationComplete = false

	const vaxrySize = 220
	const contextId = Symbol('hypractive context')
	setContext(contextId, {
		biggestSize: vaxrySize * 1.2, // Make it lighter to drag
		getSectionElement: () => containerElement
	})

	function onClick() {
		click$.next(1)
	}

	function onClickUnlocked() {
		window.open('https://github.com/hyprwm/Hyprland/commits/main/', '_blank')
	}
</script>

<div class="relative overflow-visible">
	<button
		class="flex items-center gap-3 font-bold text-slate-400 shadow-black drop-shadow-lg transition-colors hover:underline active:scale-95"
		on:click={isAnimationComplete ? onClickUnlocked : onClick}
		style:color={$relativeLevel$ > 0 ? `hsl(${hue} 64% 53%)` : undefined}
		style:scale={$relativeLevel$ > 0 ? scale : undefined}
		style:translate={$relativeLevel$ > 0 ? `0px -${translateY}px` : undefined}
	>
		<ActiveGitIcon class="h-8 w-8" />
		<span class="transition-colors"> Hypractive development </span>
	</button>

	<div class="pointer-events-none absolute left-1/2 top-1/2 -z-10">
		{#each $tiles$ as _}
			<GitTile
				lifeSpan={lerp(MIN_LIFESPAN_TILE, MAX_LIFESPAN_TILE, $cubicRelativeLevel$)}
				maxSpeed={lerp(10, 38, $expoRelativeLevel$)}
				minSpeed={lerp(1, 9, $expoRelativeLevel$)}
			/>
		{/each}
	</div>

	<div class="mask" bind:this={containerElement}>
		{#if $hasAscended$}
			<div
				class="vaxx-wrapper absolute bottom-[240px] left-1/2 z-50 aspect-square -translate-x-[100px] rounded-full animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-[500px] slide-in-from-left-20 [animation-duration:2.5s]"
				style:width={vaxrySize + 'px'}
				on:animationend={() => (isAnimationComplete = true)}
			>
				<DiscordProfilePicture
					image={VaxryImage}
					size={vaxrySize}
					coordinates={[0, 0]}
					class="outline-orange-300"
					{contextId}
					isAnimating={false}
				/>
			</div>
		{/if}

		<!-- Rising sun -->
		<div
			class="bg-gradient"
			style:opacity={$hasAscended$ ? 1 : $relativeLevel$}
			style="--relativeLevel: {$hasAscended$ ? 1 : $expoRelativeLevel$ - 0.2}"
		/>
	</div>
</div>

<style lang="postcss">
	.bg-gradient {
		position: absolute;
		bottom: -100%;
		left: 50%;
		translate: -50% calc(var(--relativeLevel) * -60%);
		z-index: -10;
		transition:
			opacity 550ms,
			translate 1.5s ease-in;
		background: radial-gradient(
			closest-side,
			theme(colors.yellow.200),
			theme(colors.orange.300 / 50%),
			theme(colors.red.800 / 0%)
		);
		width: 150vw;
		height: 800px;
	}

	.vaxx-wrapper {
		animation-timing-function: cubic-bezier(0.05, -0.82, 0.165, 1);
		pointer-events: auto;
		filter: drop-shadow(0px 0px 10px theme(colors.orange.200))
			drop-shadow(0px 0px 40px theme(colors.orange.300));
	}

	.mask {
		position: absolute;
		pointer-events: none;
		bottom: 0%;
		z-index: 10;
		left: 50%;
		translate: -50% 0%;
		width: 150vw;
		height: 1000px;
		/* background: linear-gradient(0deg, black 50%, white 50%); */
		/* mask-image: linear-gradient(0deg, transparent 50%, white 50%); */
		overflow: hidden;
	}
</style>
