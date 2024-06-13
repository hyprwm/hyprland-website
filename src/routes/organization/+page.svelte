<script lang="ts">
	import CardBody from '$components/3dCard/CardBody.svelte'
	import CardContainer from '$components/3dCard/CardContainer.svelte'
	import CardItem from '$components/3dCard/CardItem.svelte'
	import Title from '$components/Title.svelte'
	import Uhay from '$lib/images/teams/uhay.webp'
	import rfcLogo from '$lib/images/teams/rfc.webp'
	import MatrixIcon from '~icons/simple-icons/matrix'
	import type { SvelteComponent } from 'svelte'
	import DiscordIcon from '~icons/prime/discord'
	import GithubIcon from '~icons/ri/github-fill'
	import TwitterIcon from '~icons/simple-icons/x'
	import RedditIcon from '~icons/ic/outline-reddit'
	import clsx from 'clsx'
	import { discordLink } from '$lib/constants.mjs'

	const spaces = [
		{
			title: 'Official spaces',
			subtitle: 'Chill and fun places moderated by us',
			items: [
				{
					name: 'Discord',
					Icon: DiscordIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: discordLink
				},
				{
					name: 'Matrix',
					Icon: MatrixIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: '#'
				},
				{
					name: 'Twitter',
					Icon: TwitterIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: 'https://twitter.com/hyprwm'
				},
				{
					name: 'Github',
					Icon: GithubIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: 'https://github.com/hyprwm/'
				}
			]
		},
		{
			title: 'Unofficial spaces',
			subtitle: 'Not moderated by us',
			items: [
				{
					name: 'hyprland-community',
					Icon: DiscordIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: 'https://discord.gg/zzWqvcKRMy'
				},
				{
					name: 'Reddit',
					Icon: RedditIcon,
					description: 'Real-time help, development chat, and off-topic community discussion.',
					url: 'https://www.reddit.com/r/hyprland/'
				}
			]
		}
	] as const satisfies {
		title: string
		subtitle: string
		items: {
			name: string
			Icon: typeof SvelteComponent<any, any, any>
			description: string
			url: string
		}[]
	}[]

	const teams: { name: string; image: string; description: string }[] = [
		{ name: 'RFC Steering Committee', image: rfcLogo, description: 'Ideate. Debate. Progress.' },
		{ name: 'Uhay', image: Uhay, description: 'Web. JS. Design.' },
		{ name: 'Core', image: Uhay, description: 'Commited. Pushed.' },
		{ name: 'Nix', image: Uhay, description: 'Declaritive Hyprland at your service ' }
	]
</script>

<main class="flex flex-col items-center justify-center">
	<div class="flex min-h-[min(50vh,30rem)] flex-col items-center justify-center">
		<Title>
			<span slot="title" class="title">Community</span>
			<div slot="subtitle" class="max-w-[40ch]">Everything about the community and the org</div>
		</Title>
	</div>

	<section class="mb-32 flex max-w-screen-xl flex-col gap-6 px-8 lg:mb-64">
		{#each spaces as { title, subtitle, items }}
			<div class="flex flex-wrap justify-center gap-4">
				<hgroup class="items-left flex flex-col justify-center gap-1 text-left">
					<h2 class="font-bold text-white">{title}</h2>
					<p class=" font-medium text-slate-300">{subtitle}</p>
				</hgroup>

				{#each items as { name, Icon, description, url }}
					<CardContainer let:hasMouseEntered
						><CardBody
							class={clsx(
								' inline-flex h-auto min-h-32 flex-col items-start justify-center gap-2  rounded-lg border border-slate-500/50 p-6 shadow transition-all  duration-700 after:absolute  after:inset-0 after:-z-10 after:size-full after:rounded-lg after:bg-gradient-to-r after:opacity-10 after:transition-opacity    after:duration-500',
								hasMouseEntered && 'after:opacity-20',
								title === 'Unofficial spaces' ? ' after:from-slate-400 ' : ' after:from-sky-400 '
							)}
						>
							<CardItem class="inline-flex items-center justify-start gap-3" translateZ={50}>
								<Icon class="flex h-6 w-6 items-center justify-center"></Icon>
								<div class=" text-xl font-medium text-white">{name}</div>
							</CardItem>
							<CardItem class="w-72 text-sm font-medium text-slate-400" translateZ={75}>
								{description}
							</CardItem>
							<CardItem class="w-72 text-sm font-medium text-slate-400" translateZ={90}>
								<a href={url} class="text-slate-300 hover:underline">Check out ></a>
							</CardItem>
						</CardBody></CardContainer
					>
				{/each}
			</div>
		{/each}
	</section>

	<section class="flex flex-col items-center">
		<h2
			class="mb-4 text-4xl font-bold duration-1000 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-both [animation-delay:300ms]"
		>
			Teams
		</h2>

		<div
			class="flex max-w-full flex-wrap items-center justify-center gap-8 px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 [&>*]:animate-in [&>*]:fade-in-0 [&>*]:slide-in-from-bottom-6 [&>*]:fill-mode-backwards [&>*]:[animation-delay:950ms] [&>*]:[animation-duration:400ms]"
		>
			{#each teams as { description, image, name }}
				<CardContainer
					let:hasMouseEntered
					containerClass="mt-20"
					style="animation-delay:640ms"
					animateInDelay={150}
				>
					<CardBody
						class="group/card relative  h-auto w-[21rem] rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1] "
					>
						<CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
							<div class="mb-4 flex w-full items-center justify-center">
								<img
									src={image}
									class="-mt-20 size-64 rounded-xl shadow-2xl shadow-blue-500/40 outline outline-slate-500/20 group-hover/card:outline-cyan-500/50"
									alt="RFC Team logo"
								/>
							</div>
						</CardItem>
						<CardItem class="mb-1 text-xl font-bold  text-white" translateZ={50}>
							<h3 class="">{name}</h3>
						</CardItem>
						<CardItem class="h-6  w-full  text-base text-slate-300" translateZ={90}>
							{#if name === 'Uhay'}
								{hasMouseEntered ? 'It`s pronounced UI you ' : description}
							{:else}
								{description}
							{/if}
						</CardItem>
					</CardBody>

					<div
						class="absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-tl from-slate-400/10 to-cyan-500 opacity-30 transition-opacity duration-200 group-hover/card:opacity-100"
					></div>
				</CardContainer>
			{/each}
		</div>
	</section>
</main>
