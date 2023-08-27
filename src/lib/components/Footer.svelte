<script>
	import DiscordIcon from '~icons/prime/discord'
	import GithubIcon from '~icons/ri/github-fill'

	/** @type {[string, string, string, string]} */
	let developers = [
		['Fufexan', 'Core Developer', 'cyan', 'https://github.com/fufexan'],
		['NotAShelf', 'Core Member', 'teal', 'https://github.com/NotAShelf'],
		['VDawg', 'Webdesign-and dev', 'emerald', 'https://github.com/Visual-Dawg'],
		['System-x64', 'Webdev', 'green', 'https://github.com/System-x64']
	]
	function createRole(role, color) {
		return `<span class='text-${color}-500'><span class='text-${color}-600'>[ </span>${role}<span class='text-${color}-600'> ]</span></span>`
	}
</script>

<footer
	class="bg-black/50 mt-16 md:mt-24 lg:mt-32 border-t border-blue-400/50 relative flex items-center justify-center max-w-screen"
>
	<div
		class="flex flex-wrap gap-12 justify-between px-8 py-14 max-w-5xl text-slate-300 items-start"
	>
		<div class="flex flex-col gap-4 rounded-lg">
			<div class="text-slate-400 text-sm uppercase font-bold">Developers</div>
			<ul class="flex flex-col gap-3 font-medium">
				<li>
					<a href="https://github.com/vaxerski">
						Vaxerski <span
							class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
							>[ Lead Developer ]</span
						>
					</a>
				</li>
				{#each developers as [name, role, color, href]}
					<li>
						<a {href} target="_blank">{name} {@html createRole(role, color)}</a>
					</li>
				{/each}
				<li>
					<a href="https://github.com/hyprwm/Hyprland/graphs/contributors" target="_blank"
						>and our <span class="text-indigo-500">fellow contributors</span></a
					>
				</li>
			</ul>
		</div>

		<div class="flex flex-col gap-4">
			<div class="text-slate-400 font-bold text-sm uppercase">Links</div>
			<ul class="flex flex-col font-medium gap-3">
				<li><a href="https://wiki.hyprland.org/">Wiki</a></li>
				<li>
					<a href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/">Get started</a>
				</li>
				<li><a href="/wall_of_fame">Hall of fame</a></li>
			</ul>
		</div>

		<div class="flex flex-col gap-4">
			<div class="text-slate-400 text-sm uppercase font-bold" font-bold>Socials</div>
			<ul class="flex gap-6">
				<li class="">
					<a
						href="https://discord.com/invite/hQ9XvMUjjr"
						class="text-slate-400 hover:text-slate-200"><DiscordIcon class="h-12 w-12 " /></a
					>
				</li>
				<li class="">
					<a href="https://github.com/hyprwm/Hyprland" class="text-slate-400 hover:text-slate-200"
						><GithubIcon class="h-12 w-12 " /></a
					>
				</li>
			</ul>
		</div>

		<div class="flex gap-4 flex-wrap text-sm text-slate-400 font-medium w-full">
			<div>Hyprland is licensed under the BSD 3-Clause "New" or "Revised" License.</div>
			<div>© Hyprland Development {new Date().getFullYear()}.</div>
			<div>Doki doki waku waku.</div>
		</div>
	</div>

	<div class="gradient"></div>
</footer>

<style lang="postcss">
	a:hover {
		filter: brightness(1.5);
	}
	.gradient {
		position: absolute;
		top: -450px;
		left: 0px;
		width: 100%;
		height: 900px;
		z-index: -10;
		background: radial-gradient(105vw 450px at 50% 50%, theme(colors.blue.600 / 80%), transparent);
	}
</style>
