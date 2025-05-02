<script>
	import { navigating, page } from '$app/stores'
	import GithubIcon from '~icons/ri/github-fill'
	import DiscordIcon from '~icons/prime/discord'
	import ForgejoIcon from '~icons/fe/git'
	import MenuIcon from '~icons/mingcute/menu-line'
	import CloseIcon from '~icons/mingcute/close-line'
	import HyprlandLogo from '$lib/images/logos/HyprlandLogo.svelte'
	import { discordLink } from '$lib/constants.mjs'
	import { forgejoLink } from '$lib/constants.mjs'

	let isExpanded = false

	$: if ($navigating) isExpanded = false

	function toggleExpanded() {
		isExpanded = !isExpanded
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50 flex items-center justify-between rounded-full px-6 pt-2 text-sm duration-1000 animate-in fade-in-0 slide-in-from-top-1 fill-mode-backwards [animation-delay:0ms]"
>
	<a
		href="/"
		class="flex items-center gap-4 rounded-full bg-black/50 px-4 py-2 font-london font-bold tracking-wider text-white backdrop-blur"
	>
		<HyprlandLogo class="h-8 w-6 object-contain" />
		<span class="mt-1 tracking-widest">Hyprland</span></a
	>

	<button
		class="z-50 rounded-full bg-black/50 p-2 md:backdrop-blur lg:hidden"
		on:click={toggleExpanded}
		aria-label="Open Navigation"
	>
		{#if isExpanded}
			<CloseIcon class="h-6 w-6 text-slate-200" />
		{:else}
			<MenuIcon class="h-6 w-6 text-slate-200 " />
		{/if}
	</button>

	<nav class="nav" class:!flex={isExpanded}>
		<ul
			class="flex flex-col items-center gap-5 rounded-full lg:h-full lg:max-h-full lg:flex-row [&_li]:transition-colors hover:[&_li]:text-cyan-300"
		>
			<li>
				<a
					href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/"
					rel="noopener"
					target="_blank">Get started</a
				>
			</li>
			<li>
				<a href="https://wiki.hyprland.org">Wiki</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/hall_of_fame">Hall of fame</a>
			</li>
			<li aria-current={$page.url.pathname === '/news' ? 'page' : undefined}>
				<a href="/news">News</a>
			</li>
			<li aria-current={$page.url.pathname === '/plugins' ? 'page' : undefined}>
				<a href="/plugins">Plugins</a>
			</li>
		</ul>
		<ul class="flex flex-row items-center gap-3 px-4">
			<li>
				<a href={discordLink} class="social-icon" aria-label="Join us on Discord" target="_blank">
					<DiscordIcon class="h-full w-full" />
				</a>
			</li>
			<li>
				<a
					href="https://github.com/hyprwm/Hyprland"
					class="social-icon"
					aria-label="Go to Hyprlands Github"
					target="_blank"
				>
					<GithubIcon class="h-full w-full" />
				</a>
			</li>
			<li>
				<a
					href={forgejoLink}
					class="social-icon"
					aria-label="Hyprland git instance"
					target="_blank"
				>
					<ForgejoIcon class="h-full w-full" />
				</a>
			</li>
		</ul>

		<ul class="flex gap-4">
			<li aria-current={$page.url.pathname === '/support' ? 'page' : undefined}>
				<a
					class="rounded-full px-4 py-2 outline outline-cyan-500 hover:outline-cyan-200"
					href="/support">Donate</a
				>
			</li>

			<li>
				<a
					class="rounded-full bg-cyan-300 px-4 py-2 uppercase tracking-wide text-black hover:bg-cyan-200"
					href="https://wiki.hyprland.org/Getting-Started/Installation/"
					target="_blank"
					aria-label="Install Hyprland">Install</a
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	.nav {
		/* Base classes */
		font-weight: 600;

		/* Mobile classes */
		position: absolute;
		width: 100vw;
		height: 100vh;
		inset: 0 0 0 0;
		background: rgba(0, 0, 0, 0.6);
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		backdrop-filter: blur(12px);
		padding: 5rem 2rem;
		display: none;

		/* Desktop classes */
		@media screen(lg) {
			@apply relative flex h-min w-max flex-row rounded-full bg-black/40 p-2 pl-5 pr-3 outline outline-primary/10;
		}
	}

	.social-icon {
		width: 4rem;
		height: 4rem;
		display: block;

		@apply rounded-full p-1 transition-colors hover:bg-cyan-500 hover:text-white;

		@media screen(lg) {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
