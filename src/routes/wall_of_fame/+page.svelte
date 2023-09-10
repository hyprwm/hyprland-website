<script>
	import Title from '$lib/components/Title.svelte'
	import Contest from './Contest.svelte'
	import FamedRice from './FamedRice.svelte'
	import colors from 'tailwindcss/colors'
</script>

<section>
	<div class="hero-wrapper" role="heading" aria-level={0}>
		<Title>
			<span slot="title">Wall of fame</span>
			<div slot="subtitle">
				The chronicles of the triumphant<br /> from bygone rice contests held within our Discord
			</div>
		</Title>
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
	section {
		@apply relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-hidden;
	}

	.hero-wrapper {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 800px;
		width: 100%;
		min-height: max-content;
		margin-bottom: min(-10vh, -12rem);
		background: radial-gradient(100% 50% at 50% 0%, theme(colors.cyan.500 / 50%), transparent);
	}
</style>
