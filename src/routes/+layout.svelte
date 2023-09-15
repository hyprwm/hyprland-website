<script>
	import Footer from '$lib/components/Footer.svelte'
	import { onMount } from 'svelte'
	import Navbar from './Navbar.svelte'
	import './styles.css'
	import '@fontsource-variable/work-sans'
	import '@fontsource/ibm-plex-mono/500.css'
	import { getRandom } from '$lib/Helper.mjs'
</script>

<Navbar />

<main class="mx-auto flex w-full flex-col overflow-hidden">
	<slot />
</main>

<Footer />
