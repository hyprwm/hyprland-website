<script>
	import LogoPng from '$lib/images/logos/HyprlandLogo.png'
	import Title from '$lib/components/Title.svelte'
	import NewsThumb from '$lib/components/news-thumb.svelte'
	import { onDestroy, onMount } from 'svelte'

	export let data

	/** @type {HTMLElement} */
	let asciiElement

	const { posts } = data

	let interval
	let objectUrl

	// Taken from https://github.com/NotAShelf/hyprascii/blob/main/web/script.js
	onMount(async () => {
		const logoBlob = await fetch(LogoPng).then((response) => response.blob())
		objectUrl = URL.createObjectURL(logoBlob)
		const img = document.createElement('img')
		img.src = objectUrl

		const cvs = document.createElement('canvas')
		cvs.width = 72
		cvs.height = 36
		const ctx = cvs.getContext('2d', { willReadFrequently: true })

		const getLuminance = (r, g, b) => {
			return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b)
		}
		ctx.fillStyle = '#000000'

		interval = setInterval(() => {
			ctx.fillRect(0, 0, cvs.width, cvs.height)

			const t = new Date().getTime() * 0.0007
			let px = ((-Math.cos(t) + 1) / 2) * cvs.width
			let sx = Math.cos(t) * cvs.width

			ctx.drawImage(img, px, 0, sx, cvs.height)

			const idata = ctx.getImageData(0, 0, cvs.width, cvs.height)
			const pixels = idata.data
			const text = []
			const chars = ' .-=+'
			for (let y = 0; y < cvs.height; y++) {
				for (let x = 0; x < cvs.width; x++) {
					const idx = 4 * ((sx < 0 ? cvs.width - x - 1 : x) + cvs.width * y)
					const br = getLuminance(pixels[idx] / 256, pixels[idx + 1] / 256, pixels[idx + 2] / 256)
					text.push(chars[Math.floor(br * chars.length)])
				}
				text.push('\n')
			}
			asciiElement.innerText = text.join('')
		}, 40)
	})

	onDestroy(() => {
		clearInterval(interval)
		URL.revokeObjectURL(objectUrl)
	})
</script>

<svelte:head>
	<title>{''}</title>
</svelte:head>

<section>
	<header class="header">
		<pre class="spinner-wrapper" bind:this={asciiElement} />

		<Title class="mb-0  duration-1000 animate-in fade-in-0">
			<span slot="title">News</span><span slot="subtitle">
				Fresh updates straight from the oven
			</span>
		</Title>
	</header>

	<ul
		class="row-auto flex flex-col gap-14 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms]"
	>
		{#each posts as entry}
			<NewsThumb {entry} />
		{/each}
	</ul>
</section>

<style lang="postcss">
	section {
		@apply relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-hidden px-6;
	}

	.header {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: max-content;
		height: 55vh;
		min-height: 500px;
		max-height: 900px;
		width: 100%;
		margin-bottom: 8rem;
	}

	.spinner-wrapper {
		@apply flex  items-center justify-center bg-gradient-to-tr from-blue-500/0 to-cyan-500 bg-clip-text text-transparent animate-in fade-in-0;
		animation-duration: 2000ms;
		font-size: min(1vh, 1rem);
		/* There are 36 rows */
		height: min(36vh, 36rem);
	}
</style>
