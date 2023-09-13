<script>
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from './Navbar.svelte'
	import './styles.css'
	import '@fontsource-variable/work-sans'
	import '@fontsource/ibm-plex-mono/500.css'
</script>

<Navbar />

<main class="mx-auto flex w-full flex-col overflow-hidden">
	<slot />
</main>

<Footer />
