<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import Contest from './Contest.svelte'
	import FamedRice from './FamedRice.svelte'
</script>

<section class="min-h-screen flex flex-col gap-14 items-center justify-center p-8 overflow-hidden">
	<div class="h-[50vh] min-h-min flex flex-col items-center justify-center">
		<Title>
			<h1 slot="title">Wall of fame</h1>
			<div slot="subtitle">
				The chronicles of the triumphant<br /> from bygone rice contests held within our Discord
			</div>
		</Title>
	</div>

	<Contest name="Summer" number={2}>
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

	<Contest name="Winter" number={1}>
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
		/>
	</Contest>
</section>
