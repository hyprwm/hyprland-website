<script>
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.png'
	import GithubIcon from '~icons/ri/github-fill'
	import DiscordIcon from '~icons/prime/discord'
</script>

<header
	class="flex items-center z-30 justify-between fixed top-4 inset-x-6 rounded-full animate-in slide-in-from-top-1 [animation-delay:1250ms] fade-in-0 duration-1000 fill-mode-backwards"
>
	<a
		href="/"
		class="flex gap-2 font-london tracking-wider px-4 py-1 text-sm rounded-full bg-black/50 items-center font-bold text-white"
	>
		<img src={logo} alt="Hyprland Logo" class="w-6" />Hyprland</a
	>

	<nav class="flex font-semibold items-center backdrop-blur pl-5 rounded-full bg-black/50">
		<ul class="flex gap-5 rounded-full items-center max-h-full h-full hover:[&_li]:text-cyan-300">
			<li>
				<a href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/">Get_started</a>
			</li>
			<li>
				<a href="https://wiki.hyprland.org">Wiki</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/#">Wall_of_fame</a>
			</li>
		</ul>
		<ul class="border-purple-400 border mr-2 ml-4 rounded-full flex items-center gap-3 px-4">
			<li>
				<a href="https://discord.com/invite/hQ9XvMUjjr">
					<DiscordIcon class="w-8 h-8 p-1 rounded-full hover:bg-purple-500 hover:text-white" />
				</a>
			</li>
			<li>
				<a href="https://github.com/hyprwm/Hyprland">
					<GithubIcon class="w-8 h-8 p-1 hover:bg-purple-500 rounded-full hover:text-white" />
				</a>
			</li>
		</ul>
		<a
			class="bg-primary rounded-full px-4 py-1 uppercase tracking-wide text-black hover:bg-cyan-200"
			href="https://wiki.hyprland.org/Getting-Started/Installation/">Install</a
		>
	</nav>
</header>
