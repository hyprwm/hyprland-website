<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import DiscordIcon from '~icons/prime/discord'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import background from '$lib/images/community-bg.webp'
	import { discordLink } from '$lib/constants.mjs'
	import Poz from './community/Poz.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import Chan from './community/Chan.svelte'
	import type { CommunityProfile } from '$lib/Types'

	export let communityProfiles: readonly CommunityProfile[]

	const biggestSize = communityProfiles.reduce(
		(previousSize, { size }) => (size > previousSize ? size : previousSize),
		0
	)

	let restrictionElement: HTMLElement
</script>

<section
	class="relative -mb-[200px] flex h-[1100px] min-h-max w-screen flex-col items-center"
	bind:this={restrictionElement}
>
	<Title>
		<TitleHeading slot="title" class="">Join a great<br />community</TitleHeading>
		<TitleSubtile slot="subtitle" class="class-w-[40ch]">
			Get help from Distro Hoppers, Haiku writers,<br />Hydrohomies, and human_(probably)
		</TitleSubtile>
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

	<div class="absolute w-[1024px] select-none">
		<div class="flex h-full origin-bottom-right select-none flex-wrap gap-4">
			{#each communityProfiles as props}
				{@const relativeSize = props.size / biggestSize}
				<DiscordProfilePicture
					{...props}
					weight={relativeSize}
					spawnDelay={Math.pow(1 - props.size / biggestSize, 4) * 4654}
					getRestrictionElement={() => restrictionElement}
				/>
			{/each}

			<Poz {biggestSize} getRestrictionElement={() => restrictionElement} />
			<Chan {biggestSize} getRestrictionElement={() => restrictionElement} />
		</div>
	</div>

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
