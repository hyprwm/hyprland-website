<script>
	import DiscordIcon from '~icons/prime/discord'
	import GithubIcon from '~icons/ri/github-fill'
	import { accountsLink, discordLink, forumLink } from '$lib/constants'
	import { forgejoLink } from '$lib/constants'
	import RssIcon from '~icons/mingcute/rss-fill'
	import ForgejoIcon from '~icons/fe/git'
	import Sponsor from '$lib/components/Sponsor.svelte'
	import sponsors from '../../content/sponsors.json'

	/** @type {[string, string, string, string]} */
	const team = [
		['Fufexan', 'Supporting Developer', 'cyan', 'https://github.com/fufexan'],
		['NotAShelf', 'Community Manager', 'teal', 'https://github.com/NotAShelf'],
		['VDawg', 'Webdesign and dev', 'emerald', 'https://github.com/vdawg-git']
	]
	function createRole(role, color) {
		return `<span class='text-${color}-500'><span class='text-${color}-600'>[ </span>${role}<span class='text-${color}-600'> ]</span></span>`
	}

	const categories = [
		{ name: 'diamond', label: 'Diamond', gradient: 'from-primary to-blue-500' },
		{ name: 'platinum', label: 'Platinum', gradient: 'from-white to-cyan-300' },
		{ name: 'gold', label: 'Gold', gradient: 'from-yellow-200 to-yellow-400' },
		{ name: 'silver', label: 'Silver', gradient: '' },
		{ name: 'bronze', label: 'Bronze', gradient: '' }
	]

	const hasAnySponsors = categories.some((cat) => sponsors[cat.name]?.length > 0)
</script>

<footer
	class="max-w-screen relative mt-16 flex items-center justify-center border-t border-blue-400/50 bg-black/50 md:mt-24 lg:mt-32"
>
	<div class="footer-inner">
		{#if hasAnySponsors}
			<div class="sponsors-row">
				<div class="sponsors-title">Sponsors</div>
				{#each categories as category, index}
					{#if sponsors[category.name]?.length > 0}
						<div class="sponsor-category">
							<div class="sponsor-label {category.gradient ? 'gradient-text' : 'text-slate-400'}">
								{#if category.gradient}
									<span class="bg-gradient-to-r {category.gradient} bg-clip-text text-transparent">
										{category.label}
									</span>
								{:else}
									{category.label}
								{/if}
							</div>
							<div class="sponsor-logos">
								{#each sponsors[category.name] as sponsor}
									<Sponsor {sponsor} showImage class="sponsor-logo tier-{category.name}" />
								{/each}
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
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
				<li><a href="https://wiki.hypr.land/" target="_blank">Wiki</a></li>
				<li>
					<a href="https://wiki.hypr.land/Getting-Started/Master-Tutorial/" target="_blank"
						>Get started</a
					>
				</li>
				<li><a href="/hall_of_fame">Hall of fame</a></li>
				<li><a href={forumLink} target="_blank">Forum</a></li>
				<li><a href={accountsLink} target="_blank">Account</a></li>
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
						href={forgejoLink}
						class="text-slate-400 hover:text-slate-200"
						target="_blank"
						aria-label="Rss Feed"><ForgejoIcon class="h-12 w-12 " /></a
					>
				</li>
			</ul>
		</div>

		<div class="flex w-full flex-wrap gap-4 text-sm font-medium text-slate-400">
			<p>Hyprland is licensed under the BSD 3-Clause "New" or "Revised" License.</p>
			<p>The name "Hyprland" and the logo are registered trademarks of Hyprland Development.</p>
			<p>© Hyprland Development {new Date().getFullYear()}.</p>
			<p>Stay hydrated</p>
		</div>
	</div>

	<div class="gradient" aria-hidden="true" />
</footer>

<style lang="postcss">
	.footer-inner {
		@apply flex max-w-screen-xl flex-wrap items-start justify-between gap-x-12 gap-y-20 px-8 py-16 text-slate-300;
	}

	.pretitle {
		@apply text-sm font-bold uppercase text-slate-400;
	}

	.sponsors-row {
		@apply -mb-4 flex w-full flex-wrap gap-x-8 gap-y-6 border-b border-blue-400/30 pb-6;
	}

	.sponsors-title {
		@apply -mb-3 w-full text-sm font-bold uppercase text-slate-400;
	}

	.sponsor-category {
		@apply flex flex-col gap-2;
	}

	.sponsor-label {
		@apply text-xs font-bold uppercase;
		@apply flex h-4 items-center;
	}

	.sponsor-logos {
		@apply flex flex-wrap items-center gap-3;
		@apply min-h-[theme(spacing.10)];
	}

	.sponsor-category :global(.sponsor-logo.tier-diamond) {
		@apply h-10 w-auto object-contain;
	}

	.sponsor-category :global(.sponsor-logo.tier-platinum) {
		@apply h-8 w-auto object-contain;
	}

	.sponsor-category :global(.sponsor-logo.tier-gold) {
		@apply h-7 w-auto object-contain;
	}

	.sponsor-category :global(.sponsor-logo.tier-silver) {
		@apply h-6 w-auto object-contain;
	}

	.sponsor-category :global(.sponsor-logo.tier-bronze) {
		@apply h-5 w-auto object-contain;
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
