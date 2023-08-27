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
			thumbnail="/imgs/ricingcomp2/end_4.jpg"
			blurredThumbnail="/imgs/ricingcomp2/end_4.jpg"
		/>
		<FamedRice
			name="/ᐠ?_?ᐟ\ﾉ"
			creator="Flafy"
			pretitel="#2"
			dotfilesLink="https://github.com/Flafy"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/25975326?v=4"
			thumbnail="/imgs/ricingcomp2/flafy.png"
			blurredThumbnail="/imgs/ricingcomp2/flafy.png"
		/>
		<FamedRice
			name="Aurora"
			creator="flick0"
			pretitel="#3"
			dotfilesLink="https://github.com/flick0/dotfiles"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/77581181?v=4&s=24"
			thumbnail="/imgs/img4.webp"
			blurredThumbnail="/imgs/img4.webp"
		/>
	</Contest>

	<Contest name="Winter" number={1}>
		<FamedRice
			name="/ᐠ!_!ᐟ\ﾉ"
			creator="Flafy"
			pretitel="#1"
			dotfilesLink="https://github.com/Flafy"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/25975326?v=4"
			thumbnail="/imgs/ricingcomp1/flafy.png"
			blurredThumbnail="/imgs/ricingcomp1/flafy.png"
		/>
		<FamedRice
			name="Novel Nock"
			creator="end_4"
			pretitel="#2"
			dotfilesLink="https://github.com/end-4/dots-hyprland/tree/novelknock"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/97237370?s=24&v=4"
			thumbnail="/imgs/ricingcomp2/end_4.jpg"
			blurredThumbnail="/imgs/ricingcomp2/end_4.jpg"
		/>
		<FamedRice
			name="Aurora"
			creator="flick0"
			pretitel="#3"
			dotfilesLink="https://github.com/flick0/dotfiles"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/77581181?v=4&s=24"
			thumbnail="/imgs/img4.webp"
			blurredThumbnail="/imgs/img4.webp"
		/>
	</Contest>
</section>
