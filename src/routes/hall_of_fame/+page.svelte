<script>
	import Title from '$lib/components/Title.svelte'
	import Contest from './Contest.svelte'
	import FamedRice from './FamedRice.svelte'

	export let data
</script>

<section>
	<div class="hero-wrapper">
		<div class="japanese" aria-hidden="true">
			<div class="rice-symbol">「 米 」</div>
			<div class="wisdoms">
				'ベンソンハウス-デイアングルオン：地面にスニーカー。カメラが上に移動して、バリーベンソンのベッドルームアングルを表示します。バリーの手がクローゼットの中でさまざまなセーターをめくっています。バリーイエローブラック、イエローブラック、イエローブラック、イエローブラック、イエローブラック、イエローブラック...うーん、ブラックとイエロー...アングル：バリーが選んだセーターを着て、鏡を見て。バリー（続き）ええ、少し振りましょう彼は黒と黄色のものを選びます。彼はそれから流しに行き、蜂蜜の容器を外し、髪に蜂蜜を入れます。彼は口の中でいくつか潮吹きしてうがいをします。それから彼はボトルの蓋を外し、デオドラントのようにいくつかを転がします。カット'
			</div>
		</div>
		<div class="gradient_" />
		<Title>
			<span slot="title" class="title">Hall of fame</span>
			<div slot="subtitle" class="max-w-[40ch]">
				The chronicles of the triumphant from bygone rice contests held within our Discord
			</div>
		</Title>
	</div>

	{#each data.contests as { name, date, number, color, rices }}
		<Contest {name} {date} {number} --color={color}>
			{#each rices as { name: riceName, creator, creatorProfilePicture, dotfilesLink, pretitel, thumbnail }}
				<FamedRice
					name={riceName}
					{creator}
					{creatorProfilePicture}
					{pretitel}
					{dotfilesLink}
					{thumbnail}
				/>
			{/each}
		</Contest>
	{/each}
</section>

<svelte:head>
	<title>Hall of Fame</title>
	<meta name="description" content="The winners from Hyprlands rice contests" />
	<meta property="og:title" content="Hyprland's Hall of Fame" />
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
		white-space: nowrap;

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
		color: theme(colors.cyan.500);
		text-shadow: 0px 0px 8px blue;
		text-align: center;
	}
</style>
