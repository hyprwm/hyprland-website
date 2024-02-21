<script>
	import Title from '$lib/components/Title.svelte'
	import Card from '$lib/components/Card.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
	import PluginCard from './plugin-card.svelte'
	import plugin from '@tailwindcss/typography'

	export let data

	const { plugins } = data
	console.log({ plugins })
</script>

<svelte:head>
	<title>{'Plugins'}</title>
</svelte:head>

<section>
	<header class="header">
		<Title class="mb-0  duration-1000 animate-in fade-in-0">
			<span slot="title">Plugins</span><span slot="subtitle">
				Easily load up plugins and customize everything
			</span>
		</Title>
	</header>

	<CardsContainer
		class="row-auto flex flex-col gap-14 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms]"
	>
		{#each plugins as plugin}
			<PluginCard {plugin} />
		{/each}
	</CardsContainer>
</section>

<style lang="postcss">
	section {
		@apply relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-hidden px-6;
	}

	.header {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: max-content;
		height: 55vh;
		min-height: 500px;
		max-height: 900px;
		width: 100%;
		margin-bottom: 8rem;
	}
</style>
