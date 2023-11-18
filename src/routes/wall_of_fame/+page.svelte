<script>
	import Title from '$lib/components/Title.svelte'
	import Contest from './Contest.svelte'
	import FamedRice from './FamedRice.svelte'
	import colors from 'tailwindcss/colors'

	const wisdoms = [
		'罰は米の硬さによる',
		'米どころでの休日',
		'フォーバイデン米術',
		'天国の米',
		'ジーンズの中には何キロもの米が入っているから、毎日がトレーニングなんだ。',
		'田んぼで撃たれたんだ！',
		'タイ式マッサージライス 秘伝のソース添え',
		'国の保護による田んぼでの仕事',
		'巨大な米ベースの子猫用フードがある。',
		'私たちは田んぼで一生懸命働いている。',
		'激辛炊飯器',
		'絶対にご飯を炊いた'
	]
</script>

<section>
	<div class="hero-wrapper">
		<div class="japanese" aria-hidden="true">
			<div class="rice-symbol">「 米 」</div>
			<div class="wisdoms">
				{#each wisdoms as text}
					<div class="wisdom">
						{text}
					</div>
				{/each}
			</div>
		</div>
		<div class="gradient_" />
		<Title>
			<span slot="title" class="title">Wall of fame</span>
			<div slot="subtitle" class="max-w-[40ch]">
				The chronicles of the triumphant from bygone rice contests held within our Discord
			</div>
		</Title>
	</div>

	<Contest name="Space" number={3} date="November 2023" --color={colors.indigo[500]}>
		<FamedRice
			name="Celestial"
			creator="Flafy"
			pretitel="#1"
			dotfilesLink="https://github.com/flafydev/nixos-config/"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/44374434?s=96&v=4"
			thumbnail="/imgs/ricing_competitions/3/flafy.webp"
		/>
		<FamedRice
			name="Globes"
			creator="Aylur"
			pretitel="#2"
			dotfilesLink="https://github.com/Aylur/dotfiles"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/104676705?v=4"
			thumbnail="/imgs/ricing_competitions/3/aylur.webp"
		/>
		<FamedRice
			name="Golden Era"
			creator="VDawg"
			pretitel="#3"
			dotfilesLink="https://github.com/Visual-Dawg/space_dots"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/28539403?s=96&v=4"
			thumbnail="/imgs/ricing_competitions/3/vdawg.webp"
		/>
		<FamedRice
			name="YoRHa"
			creator="flick0"
			pretitel="Honorable mention"
			dotfilesLink="https://github.com/flick0/dotfiles/tree/hyprland-yorha"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/77581181?s=96&v=4"
			thumbnail="/imgs/ricing_competitions/3/flick0.webp"
		>
			<div slot="after" class="-mt-2 text-sm text-slate-300">
				Not space themed, but awesome nevertheless
			</div></FamedRice
		>
	</Contest>

	<Contest name="Summer" number={2} date="May 2023" --color="orange">
		<FamedRice
			name="Summer Gruv"
			creator="end_4"
			pretitel="#1"
			dotfilesLink="https://github.com/end-4/dots-hyprland/tree/summer-gruv"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/97237370?s=24&v=4"
			thumbnail="/imgs/ricing_competitions/2/end_4.webp"
		/>
		<FamedRice
			name="Unnamed"
			creator="Flafy"
			pretitel="#2"
			dotfilesLink="https://github.com/FlafyDev/flutter_background_bar"
			creatorProfilePicture="https://avatars.githubusercontent.com/u/44374434?s=96&v=4"
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
			dotfilesLink="https://github.com/FlafyDev/flutter_workspaces_2"
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
			name="Hyprland Winter"
			creator="amadeus"
			pretitel="#2 (ex aequo)"
			dotfilesLink="https://github.com/AmadeusWM/hyprland-winter"
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

<svelte:head>
	<title>Wall of Fame</title>
	<meta name="description" content="The winners from Hyprlands rice contests" />
	<meta property="og:title" content="Hyprland's Wall of Fame" />
	<meta
		property="og:description"
		content="The chronicles of the triumphant from bygone rice contests held within our Discord"
	/>
</svelte:head>

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
		min-height: max-content;
		height: 85vh;
		max-height: 900px;
		width: 100%;
		margin-bottom: min(-10vh, -6rem);
	}

	.gradient_ {
		position: absolute;
		inset: 0;
		z-index: -1000;
		mask-image: radial-gradient(70% 50% at 50% 0%, white 70%, transparent);
		background: url('/imgs/grain.webp'),
			radial-gradient(70% 50% at 50% 0%, theme(colors.cyan.500 / 40%), transparent);
	}

	.japanese {
		position: relative;
		width: 100%;
		height: max-content;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		animation: enter 200ms ease-in-out both;
		z-index: -10;
	}

	.rice-symbol {
		font-size: 120px;
		color: transparent;
		background: linear-gradient(125deg, cyan 15%, blue);
		background-clip: text;
		font-weight: bold;
		text-shadow: 0px 0px 20px rgba(0, 255, 255, 0.3);
	}

	.wisdoms {
		position: absolute;
		width: 500px;
		display: flex;
		align-items: center;
		gap: 1rem;
		z-index: -10;
		opacity: 0.6;
		margin-top: -2rem;
		mask-image: linear-gradient(to top, transparent, white);
	}

	.wisdom {
		width: max-content;
		height: max-content;
		text-align: center;
		color: theme(colors.cyan.500);
		text-shadow: 0px 0px 8px blue;
	}
</style>
