<script>
	import DiscordIcon from '~icons/prime/discord'
	import GithubIcon from '~icons/ri/github-fill'
	import { discordLink } from '$lib/constants.mjs'
	import RssIcon from '~icons/mingcute/rss-fill'
	import ForgejoIcon from '~icons/fe/git'

	/** @type {[string, string, string, string]} */
	let team = [
		['Fufexan', 'Supporting Developer', 'cyan', 'https://github.com/fufexan'],
		['NotAShelf', 'Real Chad', 'teal', 'https://github.com/NotAShelf'],
		['VDawg', 'Webdesign-and dev', 'emerald', 'https://github.com/Visual-Dawg']
	]
	function createRole(role, color) {
		return `<span class='text-${color}-500'><span class='text-${color}-600'>[ </span>${role}<span class='text-${color}-600'> ]</span></span>`
	}
</script>

<footer
	class="max-w-screen relative mt-16 flex items-center justify-center border-t border-blue-400/50 bg-black/50 md:mt-24 lg:mt-32"
>
	<div class="footer-inner">
		<div class="flex grow flex-col gap-4 rounded-lg">
			<div class="pretitle">Humans</div>
			<ul class="flex flex-col gap-3 font-medium">
				<li>
					<a href="https://github.com/vaxerski" target="_blank">
						Vaxry <span
							class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
							>[ Lead Developer ]</span
						>
					</a>
				</li>
				{#each team as [name, role, color, href]}
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
			<div class="pretitle">Links</div>
			<ul class="flex flex-col gap-3 font-medium">
				<li><a href="https://wiki.hyprland.org/" target="_blank">Wiki</a></li>
				<li>
					<a href="https://wiki.hyprland.org/Getting-Started/Master-Tutorial/" target="_blank"
						>Get started</a
					>
				</li>
				<li><a href="/hall_of_fame">Hall of fame</a></li>
			</ul>
		</div>

		<div class="flex flex-col gap-4">
			<div class="pretitle" font-bold>Socials</div>
			<ul class="flex grid-cols-2 gap-6 gap-y-3 md:grid">
				<li class="">
					<a
						href={discordLink}
						class="text-slate-400 hover:text-slate-200"
						aria-label="Join us on Discord"
						target="_blank"><DiscordIcon class="h-12 w-12 " /></a
					>
				</li>
				<li class="">
					<a
						href="https://github.com/hyprwm/Hyprland"
						class="text-slate-400 hover:text-slate-200"
						target="_blank"
						aria-label="Go to our Github"><GithubIcon class="h-12 w-12 " /></a
					>
				</li>
				<li class="">
					<a
						href="/rss.xml"
						class="text-slate-400 hover:text-slate-200"
						target="_blank"
						aria-label="Rss Feed"><RssIcon class="h-12 w-12 " /></a
					>
				</li>
				<li class="">
					<a
						href="https://code.hyprland.org/"
						class="text-slate-400 hover:text-slate-200"
						target="_blank"
						aria-label="Rss Feed"><ForgejoIcon class="h-12 w-12 " /></a
					>
				</li>
			</ul>
		</div>

		<div class="flex w-full flex-wrap gap-4 text-sm font-medium text-slate-400">
			<p>Hyprland is licensed under the BSD 3-Clause "New" or "Revised" License.</p>
			<p>© Hyprland Development {new Date().getFullYear()}.</p>
			<p>Stay hydrated</p>
		</div>
	</div>

	<div class="gradient" aria-hidden="true" />
</footer>

<style lang="postcss">
	.footer-inner {
		@apply flex max-w-screen-2xl flex-wrap items-start justify-between gap-12 px-8 py-14 text-slate-300;
	}

	.pretitle {
		@apply text-sm font-bold uppercase text-slate-400;
	}

	a:hover {
		filter: brightness(1.5);
	}
	.gradient {
		position: absolute;
		bottom: 50px;
		left: 0px;
		width: 100%;
		height: 900px;
		z-index: -10;
		mask-image: radial-gradient(105vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
		background: url('/imgs/grain.webp'),
			radial-gradient(105vw 450px at 50% 50%, theme(colors.blue.600 / 80%), transparent);
	}
</style>
