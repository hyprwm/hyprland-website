<script>
	import { navigating, page } from '$app/stores'
	import logo from '$lib/images/logos/hyprland-color.svg'
	import GithubIcon from '~icons/ri/github-fill'
	import DiscordIcon from '~icons/prime/discord'
	import MenuIcon from '~icons/mingcute/menu-line'
	import CloseIcon from '~icons/mingcute/close-line'

	let isExpanded = false

	$: if ($navigating) isExpanded = false

	function toggleExpanded() {
		isExpanded = !isExpanded
	}

	//! TODO close mobile menu on navigation
</script>

<header
	class="fixed inset-x-0 top-0 z-50 flex items-center justify-between rounded-full px-6 pt-2 duration-1000 animate-in fade-in-0 slide-in-from-top-1 fill-mode-backwards [animation-delay:0ms] lg:[animation-delay:1250ms]"
>
	<a
		href="/"
		class="flex items-center gap-4 rounded-full py-1 font-london text-sm font-bold tracking-wider text-white lg:bg-black/50 lg:px-4 lg:py-2 lg:backdrop-blur"
	>
		<img src={logo} alt="Hyprland Logo" class="w-6" /><span
			class="hidden text-lg tracking-widest lg:mt-1 lg:block">Hyprland</span
		></a
	>

	<button
		class="z-50 rounded-full bg-black/10 p-2 md:backdrop-blur lg:hidden"
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
			class="flex flex-col items-center gap-5 rounded-full lg:h-full lg:max-h-full lg:flex-row hover:[&_li]:text-cyan-300"
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
				<a href="/wall_of_fame">Wall of fame</a>
			</li>
		</ul>
		<ul
			class="flex flex-row items-center gap-3 px-4 lg:ml-4 lg:mr-2 lg:rounded-full lg:border lg:border-purple-400"
		>
			<li>
				<a
					href="https://discord.com/invite/hQ9XvMUjjr"
					class="social-icon"
					aria-label="Join us on Discord"
					target="_blank"
				>
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
		</ul>
		<a
			class="rounded-full bg-primary px-4 py-1 uppercase tracking-wide text-black hover:bg-cyan-200"
			href="https://wiki.hyprland.org/Getting-Started/Installation/"
			target="_blank"
			aria-label="Install Hyprland">Install</a
		>
	</nav>
</header>

<style lang="postcss">
	.nav {
		/* Base classes */
		font-weight: 600;
		@apply text-lg;

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
			@apply relative flex h-min w-max flex-row rounded-full bg-black/40 p-2 pl-5 text-base outline outline-primary/10;
		}
	}

	.social-icon {
		width: 4rem;
		height: 4rem;
		display: block;

		@apply rounded-full p-1 hover:bg-purple-500 hover:text-white;

		@media screen(lg) {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
