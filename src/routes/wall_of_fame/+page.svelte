<script>
	import Title from '$lib/components/Title.svelte'
	import Contest from './Contest.svelte'
	import FamedRice from './FamedRice.svelte'
	import colors from 'tailwindcss/colors'
	import { onMount } from 'svelte'

	/** Maximum rotation in degrees */
	const maxDegress = 45
	const tiles = [
		{ top: '40px', left: '20px', z: -40 },
		{ top: '10px', left: '40px', z: -80 },
		{ top: '-120px', left: '70px', z: -80 },
		{ top: '30px', left: '5px', z: -80 },
		{ top: '80px', left: '4px', z: -80 },
		{ top: '20px', left: '4px', z: -80 },
		{ top: '80px', left: '20px' }
	]

	/** @type {HTMLElement} */
	let titleWrapper
	/** @type {DOMRect} */
	let container

	/**
	 * Bind the generated tiles here and iterate over them later
	 * @type {HTMLElement[]}*/
	const boundTiles = []

	onMount(() => {
		container = titleWrapper.getBoundingClientRect()
	})

	function rotateTiles({ clientX, clientY }) {
		boundTiles.forEach((tile) => {
			const { x, y, width, height } = tile.getBoundingClientRect()
			const middleX = x + width / 2
			const middleY = y + height / 2

			console.log({ middleX, middleY, clientX, clientY })

			const offsetX = minMax(((clientX - middleX) / clientX) * maxDegress, 95)
			const offsetY = minMax(((clientY - middleY) / clientY) * maxDegress, 95)

			tile.style.setProperty('--rotateX', offsetX)
			tile.style.setProperty('--rotateY', -offsetY)
		})
	}

	function minMax(value, minMax) {
		return value
		// return Math.max(Math.min(value, minMax), minMax * -1)
	}
</script>

<section
	class="relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-x-hidden"
>
	<div
		class="relative -mb-14 flex h-[90vh] min-h-min w-full flex-col items-center justify-center bg-white/10"
		bind:this={titleWrapper}
		on:mousemove={rotateTiles}
		role="heading"
		aria-level={0}
	>
		<Title>
			<span slot="title">Wall of fame</span>
			<div slot="subtitle">
				The chronicles of the triumphant<br /> from bygone rice contests held within our Discord
			</div>
		</Title>

		<div class="floating-wrapper">
			{#each tiles as { left, top, z }, index}
				<div
					class="floating-panel"
					style:--left={left}
					style:--top={top}
					style:--z={z}
					bind:this={boundTiles[index]}
				/>
			{/each}
		</div>
	</div>

	<Contest name="Summer" number={2} date="May 2023" --color="orange">
		<FamedRice
			name="Novel Nock"
			creator="end_4"
			pretitel="#1"
			dotfilesLink="https://github.com/end-4/dots-hyprland/tree/novelknock"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/97237370?s=24&v=4"
			thumbnail="/imgs/ricing_competitions/2/end_4.webp"
		/>
		<FamedRice
			name="Unnamed"
			creator="Flafy"
			pretitel="#2"
			dotfilesLink="https://github.com/Flafy"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/25975326?v=4"
			thumbnail="/imgs/ricing_competitions/2/flafy.webp"
		/>
		<FamedRice
			name="Day and Night"
			creator="Mathisbuilder"
			pretitel="#3"
			dotfilesLink="https://github.com/MathisP75/summer-day-and-night"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/98901170?v=4"
			thumbnail="/imgs/ricing_competitions/2/day-night.webp"
		/>
	</Contest>

	<Contest name="Winter" number={1} date="December 2022" --color={colors.cyan[500]}>
		<FamedRice
			name="Unnamed"
			creator="Flafy"
			pretitel="#1"
			dotfilesLink="https://github.com/Flafy"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/25975326?v=4"
			thumbnail="/imgs/ricing_competitions/1/flafy.webp"
		/>
		<FamedRice
			name="Aurora"
			creator="flick0"
			pretitel="#2 (ex aequo)"
			dotfilesLink="https://github.com/flick0/dotfiles/tree/aurora"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/77581181?s=48&v=4"
			thumbnail="/imgs/ricing_competitions/1/flicko.webp"
		/>
		<FamedRice
			name="Apatheia"
			creator="amadeus"
			pretitel="#2 (ex aequo)"
			dotfilesLink="https://github.com/AmadeusWM/dotfiles-hyprland"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/63149896?s=48&v=4"
			thumbnail="/imgs/ricing_competitions/1/amadeus.webp"
		/>
		<FamedRice
			name="Unnamed"
			creator="Lyasm"
			pretitel="#3 (ex aequo)"
			dotfilesLink="#"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/111616244?s=48&v=4"
			thumbnail="/imgs/ricing_competitions/1/lyasm.webp"
		/>
		<FamedRice
			name="Unnamed"
			creator="lauroro"
			pretitel="#3 (ex aequo)"
			dotfilesLink="https://github.com/lauroro/hyprland-dotfiles"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/88981092?s=48&v=4"
			thumbnail="/imgs/ricing_competitions/1/lauroro.webp"
			class="pb-16"
		/>
	</Contest>
</section>

<style lang="postcss">
	.floating-wrapper {
		perspective: 1000px;
		transform-style: preserve-3d;

		width: 20px;
		height: 20px;
		border: red solid 1px;
		position: absolute;
		/* contain: strict; */

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.floating-panel {
		position: absolute;
		/* margin-left: var(--left);
		margin-top: var(--top); */
		left: var(--left);
		top: var(--top);

		min-height: 100px;
		min-width: 200px;

		transform-style: preserve-3d;
		translate: 0px 0px calc(var(--z) * 1px);

		/* contain: layout; */

		&::after {
			content: ' ';
			border: solid white 2px;
			border-radius: 24px;
			background: rgba(255, 255, 255, 0.5);
			inset: 0px;
			position: absolute;
			transform: rotateY(calc(var(--rotateX) * 1deg)) rotateX(calc(var(--rotateY) * 1deg));
			/* transition: transform 40ms; */
		}
	}
</style>
