<script context="module">
	export const contextId = Symbol('community context')
</script>

<script>
	import Button from '$lib/components/Button.svelte'
	import DiscordIcon from '~icons/prime/discord'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { onMount, setContext } from 'svelte'
	import Title from '$lib/components/Title.svelte'
	import background from '$lib/images/community-bg.webp'
	import amongUsGreenImage from '$lib/images/amongus/green.webp'
	import { discordLink } from '$lib/constants.mjs'
	import profiles from '../../content/profiles.json'
	import Poz from './community/Poz.svelte'

	let sectionElement
	let isDraggingChan = false

	const validSizes = [16, 20, 24, 32, 40, 48, 64, 80, 96, 100, 128, 160, 240, 320, 640]

	/** @type {Promise<import('./Types').CommunityProfile[]>}*/
	let allProfilesPromise = new Promise(() => {})

	/** @type {import('./Types').CommunityProfile[]} */
	const extraProfiles = [
		{
			image: 'imgs/chan/joy.svg',
			coordinates: [284, 533],
			size: 90,
			class: 'outline-cyan-500 bg-blue-300',
			onDragStart: ({ detail: { currentTarget } }) => {
				isDraggingChan = true
				currentTarget.src = 'imgs/chan/surprise.svg'
			},
			onDragEnd: ({ detail: { currentTarget } }) => {
				isDraggingChan = false
				currentTarget.src = 'imgs/chan/tongueout.svg'
			},
			onHover: ({ detail: { srcElement } }) =>
				!isDraggingChan && (srcElement.src = 'imgs/chan/wink.svg')
		},
		// {
		// jacekpoz
		// image: '/imgs/profile_pictures/jacekpoz.svg',
		// coordinates: [893, 622],
		// size: 80,
		// class: 'outline-yellow-500 bg-black ',
		// quote: '"piss blob"'
		// },
		{
			image: amongUsGreenImage,
			coordinates: [873, 224],
			size: 79,
			class: 'outline-green-500'
		},
		{
			image: '/imgs/profile_pictures/chan_1.webp',
			coordinates: [91, 799],
			size: 55,
			class: 'outline-sky-500'
		},
		{
			image: '/imgs/profile_pictures/chan_cat.webp',
			coordinates: [-10, 844],
			size: 32,
			class: 'outline-blue-800'
		},
		{
			image: '/imgs/profile_pictures/chan_cat_2.webp',
			coordinates: [1000, 744],
			size: 32,
			class: 'outline-cyan-500'
		},
		{
			image: '/imgs/profile_pictures/_anon.webp',
			coordinates: [-85, 566],
			size: 40,
			class: 'outline-sky-500'
		}
	]

	setContext(contextId, {
		biggestSize: profiles.reduce(
			(previousSize, { size }) => (size > previousSize ? size : previousSize),
			1
		),
		smallestSize: profiles.reduce(
			(previousSize, { size }) => (size < previousSize ? size : previousSize),
			Number.POSITIVE_INFINITY
		),
		getSectionElement: () => sectionElement
	})

	onMount(() => {
		allProfilesPromise = import('../../content/profiles.json').then(({ default: profiles }) => {
			return [...profiles, ...extraProfiles]
				.map(({ image, size, ...profile }) => ({
					...profile,
					size,
					image: image + '?size=' + validSizes.find((_, index) => size <= validSizes[index])
				}))
				.sort(({ size: a }, { size: b }) => b - a)
		})
	})
</script>

<section
	class="relative -mb-[200px] flex h-[1100px] min-h-max w-screen flex-col items-center"
	bind:this={sectionElement}
>
	<Title>
		<span slot="title">Join a great<br />community</span>

		<span slot="subtitle">
			Get help from Distro Hoppers, Haiku writers,<br />Hydrohomies, and human_(probably)
		</span>
	</Title>

	<div class="group mt-16 flex flex-col items-center">
		<a
			class="discord p-4"
			href={discordLink}
			target="_blank"
			rel="noopener"
			aria-label="Join us on Discord"
		>
			<DiscordIcon class="h-full w-full  " />
		</a>

		<a href={discordLink}>
			<Button type="fancyOutline">Join us on Discord</Button>
		</a>
	</div>

	{#await allProfilesPromise then allProfiles}
		<div class="absolute w-[1024px] select-none">
			<div class="flex h-full origin-bottom-right select-none flex-wrap gap-4">
				{#each allProfiles as { onDragEnd, onDragStart, onHover, ...props }}
					<DiscordProfilePicture
						{...props}
						on:dragStart={onDragStart}
						on:dragEnd={onDragEnd}
						on:hover={onHover}
					/>
				{/each}

				<Poz />
			</div>
		</div>
	{/await}
	<img
		src={background}
		class="absolute top-0 -z-10 min-w-[1400px] select-none"
		alt=""
		aria-hidden="true"
		loading="lazy"
	/>
</section>

<style lang="postcss">
	.discord {
		width: 9rem;
		height: 9rem;
		transition:
			rotate 500ms cubic-bezier(0.5, 0, 0.5, 1),
			scale 420ms cubic-bezier(0.5, 0.1, 0, 1),
			filter 840ms;
		transition-delay: 240ms, 180ms, 20ms;
		transform: translateY(-25%);
		filter: drop-shadow(0px 0px 0px cyan) drop-shadow(0px 0px 0px blue);

		&:hover,
		.group:hover & {
			scale: 1.2 1.2;
			rotate: 360deg;
			filter: drop-shadow(4px 4px 14px #0fffef7a) drop-shadow(-4px -4px 12px purple);
			animation: bounce 0.7s infinite 180ms both;
		}
		&:active {
			scale: 1;
			transition: scale 80ms;
		}
	}
</style>
