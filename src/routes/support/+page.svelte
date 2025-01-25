<script>
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import clsx from 'clsx'
	import * as R from 'remeda'
	import { getGeneratedPath } from '$lib/Helper.ts'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import Card from '$lib/components/Card.svelte'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
</script>

<svelte:head>
	<title>{'Support | Hyprland'}</title>
	<meta name="description" content="Support Hyprland Development" />
	<meta property="og:title" content="Donate to Hyprland" />
	<meta property="og:description" content="Support the continuation of Hyprland Development" />
</svelte:head>

<div class="top-light"></div>

<section class="min-h-screen w-full md:mt-32">
	<Title class="mb-4 md:mb-8">
		<TitlePre slot="pre">Help continue Hyprland development</TitlePre>
		<TitleHeading slot="title" class="">Support Hyprland</TitleHeading>
	</Title>

	<div
		class="prose prose-slate prose-invert m-0 mx-auto flex flex-col px-6 transition-none delay-500 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms] lg:prose-xl prose-a:text-cyan-400 prose-img:rounded-lg"
	>
		<p>
			Hyprland is forever free and Open-Source. <br />
			No paywall, no fremium, just the good stuff for you. <br />
			Development is done by volunteers, and led by one person in their free time. <br />
			Support us to keep the project going strong!
		</p>

		<h2>Donate</h2>
		<p class="!mb-0 !pb-0">
			Direclty help the creator to pay his bills (and potentially work full-time on Hyprland).
			Donate once (or twice), or monthly, via the following channels:
		</p>

		<ul class="">
			<li>
				PayPal: <a href="https://ko-fi.com/vaxry" target="_blank">ko-fi.com/vaxry</a>
			</li>
			<li>
				Crypto: please see the pinned post <a href="https://ko-fi.com/vaxry" target="_blank">here</a
				>
			</li>
			<li>Cash and pipebombs to his mailbox: ghoegouh</li>
		</ul>

		<p class="rounded-xl border border-cyan-500/50 p-4 shadow-lg shadow-cyan-600/50">
			Hyprland is, and will always stay Free and Open Source software. <br />
			We will never lock out features behind a paywall.
		</p>

		<h2>Share</h2>
		<p class="!mb-0 !pb-0">
			Spread the word. Post your rice, shitpost on Twitter, tell your parents! We need you to become
			the best desktop on Linux.<br /><br />

			Check out the socials of Vaxry, the creator and maintainer:
		</p>

		<ul class="pills flex list-none flex-wrap gap-4 !p-0">
			<li>
				<a href="https://x.com/vaxryy" target="_blank">Twitter</a>
			</li>
			<li>
				<a href="https://vaxry.net/" target="_blank">Personal site</a>
			</li>
			<li>
				<a href="https://github.com/vaxerski/" target="_blank">Github</a>
			</li>
			<li>
				<a href="https://www.youtube.com/@vaxryy" target="_blank">Youtube</a>
			</li>
		</ul>

		<h2>Do I get anything?</h2>

		<p>
			If you decide to donate, you will be listed in the special thanks part of the next Hyprland
			release notes, and, if you are a member of the Discord server, a role to signify you have
			supported the project.
			<br /><br />
			Outside of that, you get the satisfaction that you rock and support the software you use and love!
			<br /><br />
		</p>

		<h3>Thank you, you rock! :)</h3>
	</div>
</section>

<style lang="postcss">
	.pills li {
		@apply mx-0 rounded-lg border border-cyan-200/10 bg-slate-200/5 p-0 px-2 transition-all;
		&:hover {
			@apply -translate-y-1 border-cyan-300;
		}
		& a {
			@apply text-inherit no-underline;
		}
	}

	.top-light {
		background: url('/imgs/grain.webp'),
			radial-gradient(
				100% 80% at top,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 10%),
				transparent
			);

		mask-image: radial-gradient(
			100% 80% at top,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);

		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;

		animation: parallax ease-in-out 500ms;
		animation-duration: 1ms;
		animation-timeline: scroll();
	}

	@keyframes parallax {
		to {
			translate: 0px 1000px;
		}
	}
</style>
