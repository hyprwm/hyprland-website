<script>
	import { page } from '$app/stores'
	import logo from '$lib/images/logos/hyprland-color.svg'
	import GithubIcon from '~icons/ri/github-fill'
	import DiscordIcon from '~icons/prime/discord'
	import MenuIcon from '~icons/mingcute/menu-line'
	import CloseIcon from '~icons/mingcute/close-line'

	let isExpanded = false

	function toggleExpanded() {
		isExpanded = !isExpanded
	}
</script>

<header
	class="flex items-center z-50 justify-between fixed top-0 inset-x-0 rounded-full animate-in slide-in-from-top-1 [animation-delay:0ms] lg:[animation-delay:1250ms] fade-in-0 duration-1000 fill-mode-backwards pt-2 px-6"
>
	<a
		href="/"
		class="flex gap-4 font-london tracking-wider lg:px-4 py-1 text-sm rounded-full lg:bg-black/10 items-center lg:backdrop-blur font-bold text-white"
	>
		<img src={logo} alt="Hyprland Logo" class="w-6" /><span
			class="lg:block lg:mt-1 tracking-widest text-xl hidden">Hyprland</span
		></a
	>

	<button
		class="lg:hidden rounded-full p-2 bg-black/10 z-50 md:backdrop-blur"
		on:click={toggleExpanded}
	>
		{#if isExpanded}
			<CloseIcon class="h-6 w-6 text-slate-200" />
		{:else}
			<MenuIcon class="h-6 w-6 text-slate-200 " />
		{/if}
	</button>

	<nav class="nav" class:!flex={isExpanded}>
		<ul
			class="flex lg:flex-row flex-col gap-5 rounded-full items-center lg:max-h-full lg:h-full hover:[&_li]:text-cyan-300"
		>
			<li>
				<a href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/">Get started</a>
			</li>
			<li>
				<a href="https://wiki.hyprland.org">Wiki</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/wall_of_fame">Wall of fame</a>
			</li>
		</ul>
		<ul
			class="lg:border-purple-400 lg:border lg:mr-2 lg:ml-4 lg:rounded-full flex items-center flex-row gap-3 px-4"
		>
			<li>
				<a href="https://discord.com/invite/hQ9XvMUjjr" class="social-icon">
					<DiscordIcon class="w-full h-full" />
				</a>
			</li>
			<li>
				<a href="https://github.com/hyprwm/Hyprland" class="social-icon">
					<GithubIcon class="w-full h-full" />
				</a>
			</li>
		</ul>
		<a
			class="bg-primary rounded-full px-4 py-1 uppercase tracking-wide text-black hover:bg-cyan-200"
			href="https://wiki.hyprland.org/Getting-Started/Installation/">Install</a
		>
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
		backdrop-filter: blur(8px);
		padding: 3rem 1rem;
		display: none;

		/* Desktop classes */
		@media screen(lg) {
			@apply relative flex h-min w-max flex-row rounded-full bg-black/40 p-2 pl-5 outline outline-primary/10;
		}
	}

	.social-icon {
		width: 2.5rem;
		height: 2.5rem;
		display: block;

		@apply rounded-full p-1 hover:bg-purple-500 hover:text-white;

		@media screen(lg) {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
