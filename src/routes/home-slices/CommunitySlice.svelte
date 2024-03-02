<script context="module">
	export const contextId = Symbol('community context')
</script>

<script>
	import Button from '$lib/components/Button.svelte'
	import DiscordIcon from '~icons/prime/discord'
	import DiscordProfilePicture from '$lib/components/DiscordProfilePicture.svelte'
	import { setContext } from 'svelte'
	import Title from '$lib/components/Title.svelte'
	import background from '$lib/images/community-bg.webp'
	import amongUsGreenImage from '$lib/images/amongus/green.webp'
	import { discordLink } from '$lib/constants.mjs'

	let sectionElement
	let isDraggingChan = false

	// Okay everything multiplied by 24
	const validSizes = [16, 20, 24, 32, 40, 48, 64, 80, 96, 100, 128, 160, 240, 320, 640]

	/** @type {{image: string coordinates: [number, number] containerClass: string}[], size: number, quote?: string } */
	const profiles = [
		{
			// vaxry
			image:
				'https://cdn.discordapp.com/avatars/372809091208445953/a_33fd25e26c0ba17c05566bc3179c6476.gif?size=48',
			coordinates: [187, 296],
			size: 172,
			class: 'outline-red-500'
		},
		{
			// fufexan
			image:
				'https://cdn.discordapp.com/avatars/444952344308744203/9ee39cd422568dad9e70319df27b2560.webp',
			coordinates: [735, 441],
			size: 164,
			class: 'outline-yellow-500'
		},
		{
			// notashelf
			image:
				'https://cdn.discordapp.com/avatars/419880181101232129/2f57c8e5e681c5d8608d07c83053815f.webp',
			coordinates: [391, 615],
			size: 149,
			class: 'outline-orange-500'
		},
		{
			// Mathisbuilder
			image:
				'https://cdn.discordapp.com/avatars/378704069726044170/415dcb2ef8d1ef635e35e1d04d523cba.webp',
			coordinates: [568, 594],
			size: 120,
			class: 'outline-amber-500'
		},
		{
			// dani_2048
			image:
				'https://cdn.discordapp.com/avatars/623781003382751243/abea149ded923e8f4cd6f56bff016368.webp',
			coordinates: [525, 764],
			size: 80,
			class: 'outline-orange-500'
		},
		{
			// end_4
			image:
				'https://cdn.discordapp.com/avatars/862314649307054080/2dd9cbd31f5c53811ece2f5abdeab2bf.webp',
			coordinates: [648, 709],
			size: 128,
			class: 'outline-cyan-400'
		},
		{
			// liquidovski
			image:
				'https://cdn.discordapp.com/avatars/283259320802476042/7aa4969a2ce25638da49b54dcd862a35.webp',
			coordinates: [65, 208],
			size: 100,
			class: 'outline-lime-500'
		},
		{
			// roasted.cheese
			image:
				'https://cdn.discordapp.com/avatars/967764496527532083/5dc06d112653a529ecbae3b6f4225a93.webp',
			coordinates: [53, 399],
			size: 75,
			class: 'outline-sky-500'
		},
		{
			// donnan
			image:
				'https://cdn.discordapp.com/avatars/163678036401586177/0930f3f6f0839b4f9c59846e185aa8ad.webp?size=128',
			coordinates: [24, 341],
			size: 49,
			class: 'outline-yellow-500'
		},
		{
			// captainiveau
			image:
				'https://cdn.discordapp.com/avatars/223160360461402122/c6552a1c768613bffb83bf88e4ce2632.webp?size=128',
			coordinates: [47, 86],
			size: 48,
			class: 'outline-red-500'
		},
		{
			// sioodmy
			image:
				'https://cdn.discordapp.com/avatars/979473046404476998/c9a4af31050a785d896f7880f9d268e3.webp',
			coordinates: [1038, 446],
			size: 52,
			class: 'outline-amber-500'
		},
		{
			image: '/imgs/profile_pictures/_anon.webp',
			coordinates: [-85, 566],
			size: 40,
			class: 'outline-sky-500'
		},
		{
			// Angry snow man
			// psidotdiamparenthesis4pt5tol4poi
			image:
				'https://cdn.discordapp.com/avatars/486802226577276929/4c1cd003e9c7b7c19a858b38cca7104a.webp',
			coordinates: [273, 760],
			size: 52,
			quote: '"meds"',
			class: 'outline-cyan-500'
		},
		{
			// outfoxxed
			image:
				'https://cdn.discordapp.com/avatars/837425748435796060/248cd938377647404e3d8d1c53b639cf.webp',
			coordinates: [648, 364],
			size: 80,
			class: 'outline-orange-500'
		},
		{
			// kirottum
			image:
				'https://cdn.discordapp.com/avatars/480024733535174668/5453c57e69ff16f495d8dcbd597070e9.webp',
			coordinates: [772, 651],
			size: 62,
			class: 'outline-purple-500'
		},
		{
			// beardwarrior
			image:
				'https://cdn.discordapp.com/avatars/544368824842190861/1fbf29ea7ca9c2109b97af2ede3806fa.webp',
			coordinates: [736, 277],
			size: 101,
			class: 'outline-lime-500'
		},
		{
			// heisfer
			image:
				'https://cdn.discordapp.com/avatars/344854021166727180/0c8dd04188df26093164406cc1367f58.webp',
			coordinates: [898, 364],
			size: 68,
			class: 'outline-yellow-500'
		},
		{
			image: amongUsGreenImage,
			coordinates: [873, 224],
			size: 79,
			class: 'outline-green-500'
		},
		{
			// SimplyKyle!
			image:
				'https://cdn.discordapp.com/avatars/579120037034721281/c7b4341806d515f5d92bb53e322a4728.webp',
			coordinates: [887, 159],
			size: 39,
			class: 'outline-rose-500'
		},
		{
			// thesuncat
			image:
				'https://cdn.discordapp.com/avatars/246125351464337418/10c8bb5456d1ca1cebf2edff62b7001f.webp',
			coordinates: [1023, 552],
			size: 48,
			class: 'outline-amber-500'
		},
		{
			// flafy
			image:
				'https://cdn.discordapp.com/avatars/143031299152674816/4a143f00b0e014e9c3da37cd8599b106.webp',
			coordinates: [147, 553],
			size: 87,
			class: 'outline-pink-500'
		},
		{
			// vagahbond
			image:
				'https://cdn.discordapp.com/avatars/194157962498015232/ab11cc35bd9d057769254d1d3e29e468.webp',
			coordinates: [65, 643],
			size: 74,
			class: 'outline-amber-500 '
		},
		{
			// flick0
			image:
				'https://cdn.discordapp.com/avatars/482139697796349953/ce63690cf5adb8e096b4472bc0c175e8.webp',
			coordinates: [263, 653],
			size: 65,
			class: 'outline-stone-500 '
		},
		{
			// jacekpoz
			image: '/imgs/profile_pictures/jacekpoz.svg',
			coordinates: [893, 622],
			size: 80,
			class: 'outline-yellow-500 bg-black ',
			quote: '"piss blob"'
		},
		{
			// aylur
			image:
				'https://cdn.discordapp.com/avatars/231040215085481984/7f378337240110b76e6e9baa31f83670.webp',
			coordinates: [354, 798],
			size: 80,
			class: 'outline-amber-500'
		},
		{
			// aleph.nought
			image:
				'https://cdn.discordapp.com/avatars/784153590595321876/04cbb92b7fe3fea8a6cdb4e2fd8562c5.webp',
			coordinates: [583, 824],
			size: 69,
			class: 'outline-white',
			quote: 'Perfect being'
		},
		{
			// jappie3
			image:
				'https://cdn.discordapp.com/avatars/408513270916579338/bac966d3bae8ad01546ee32584917be9.webp',
			coordinates: [275, 844],
			size: 40,
			class: 'outline-rose-300'
		},
		{
			// nwg.piotr
			image:
				'https://cdn.discordapp.com/avatars/860670651026767942/7122b752fa6097472f8c76cc4458e33b.webp',
			coordinates: [939, 552],
			size: 48,
			class: 'outline-orange-500'
		},
		{
			// xsty_
			image:
				'https://cdn.discordapp.com/avatars/520860407720837131/3e73c777553fcd67f2f17bc119b79f15.webp',
			coordinates: [458, 913],
			size: 35,
			class: 'outline-orange-500  '
		},
		{
			// petingoso
			image:
				'https://cdn.discordapp.com/avatars/390226958241366016/513b77487a9fa01b1256c4dc8e1b0c55.webp',
			coordinates: [858, 707],
			size: 45,
			class: 'outline-blue-500  '
		},
		{
			// eriedaberrie
			image:
				'https://cdn.discordapp.com/avatars/594256188422488069/1e532709dbd756c172c54add8536e558.webp',
			coordinates: [8, 477],
			size: 54,
			class: 'outline-blue-500 bg-black '
		},
		{
			// errornointernet
			image:
				'https://cdn.discordapp.com/avatars/531392146767347712/0b5e5671e7e8eb0e4f6ec547c686667b.webp',
			coordinates: [950, 277],
			size: 47,
			class: 'outline-orange-500 bg-stone-800'
		},
		{
			// kosslan
			image:
				'https://cdn.discordapp.com/avatars/194584980922433536/7bb58205667ad9a6bf2791b59b32c109.webp',
			coordinates: [69, 561],
			size: 54,
			class: 'outline-blue-500 bg-black '
		},
		{
			// lassebq
			image:
				'https://cdn.discordapp.com/avatars/561863734264594452/e9d1b128f8a32849ae4e2a0d86d16fdb.webp',
			coordinates: [908, 463],
			size: 54,
			class: 'outline-orange-500 bg-black '
		},
		{
			// poutineburgerman
			image:
				'https://cdn.discordapp.com/avatars/426690378830184448/09181b1b476f221b7850702158778c1a.webp',
			coordinates: [823, 184],
			size: 44,
			class: 'outline-blue-500 bg-black '
		},
		{
			// visualdawg
			image:
				'https://cdn.discordapp.com/avatars/219573494713810945/5202607a6cf5e34ed705308459d0115c.webp',
			coordinates: [133, 493],
			size: 49,
			class: 'outline-stone-900 bg-black '
		},
		{
			// wickedlyhost
			image:
				'https://cdn.discordapp.com/guilds/961691461554950145/users/317785409763541002/avatars/5eca29ab79ffc48e5cbb935f807063db.webp?size=240',
			coordinates: [119, 202],
			size: 49,
			class: 'outline-blue-500 bg-black '
		},
		{
			// yavko
			image:
				'https://cdn.discordapp.com/guilds/961691461554950145/users/465960044094160908/avatars/11672d8e456e31a85a3d89b31fff913b.webp',
			coordinates: [179, 671],
			size: 69,
			class: 'outline-yellow-500 bg-black '
		},
		{
			// mcgoth
			image:
				'https://cdn.discordapp.com/avatars/706672850907430942/9330c50f778f6d3776da15335dfb5b3f.webp',
			coordinates: [771, 818],
			size: 49,
			class: 'outline-stone-500 bg-black '
		},
		{
			// brainless.bitch
			image:
				'https://cdn.discordapp.com/avatars/708440359587414067/2bcdf703f69ee35c4cf39b2a89c429e8.webp',
			coordinates: [1018, 123],
			size: 28,
			class: 'outline-lime-500 bg-black '
		},

		//
		// Extras
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
		}
	]
		.map(({ image, size, ...profile }) => ({
			...profile,
			size,
			image: image + '?size=' + validSizes.find((_, index) => size <= validSizes[index])
		}))
		.sort(({ size: a }, { size: b }) => b - a)

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

	<div class="absolute w-[1024px] select-none">
		<div class="flex h-full origin-bottom-right select-none flex-wrap gap-4">
			{#each profiles as { onDragEnd, onDragStart, onHover, ...props }}
				<DiscordProfilePicture
					{...props}
					on:dragStart={onDragStart}
					on:dragEnd={onDragEnd}
					on:hover={onHover}
				/>
			{/each}
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
