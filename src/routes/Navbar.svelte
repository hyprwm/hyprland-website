<script>
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.png'
	import GithubIcon from '~icons/akar-icons/github-fill'
	import DiscordIcon from '~icons/prime/discord'
</script>

<header
	class="flex items-center p-1 z-10 justify-between text-blue-300 bg-black/50 fixed inset-4 h-7 rounded-full backdrop-blur animate-in slide-in-from-top-1 [animation-delay:1250ms] fade-in-0 duration-1000 fill-mode-backwards"
>
	<a href="/" class="flex gap-2 pl-2 text-sm items-center font-bold tracking-wide text-white">
		<img src={logo} alt="Hyprland Logo" class="w-6" />Hyprland</a
	>

	<nav class="flex font-semibold gap-4 items-center">
		<ul class="flex gap-4 px-3 rounded-full max-h-full border-primary border-1 border h-full">
			<li>
				<a href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/">Get_started</a>
			</li>
			<li>
				<a href="https://wiki.hyprland.org">Wiki</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/rices">Wall_of_fame</a>
			</li>
		</ul>
		<ul class="bg-purple-400 rounded-full flex items-center gap-3 px-2 py-1">
			<li>
				<a href="https://github.com/hyprwm/Hyprland">
					<DiscordIcon class="text-black" />
				</a>
			</li>
			<li>
				<a href="https://github.com/hyprwm/Hyprland">
					<GithubIcon class="text-black" />
				</a>
			</li>
		</ul>
		<a
			class="bg-primary rounded-full px-4 py-1 text-black"
			href="https://wiki.hyprland.org/Getting-Started/Installation/">Install</a
		>
	</nav>
</header>

<style>
</style>
