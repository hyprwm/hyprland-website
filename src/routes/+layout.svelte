<script>
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from './Navbar.svelte'
	import './styles.css'
	import '@fontsource-variable/inter'
	import '@fontsource/ibm-plex-mono/500.css'
</script>

<Navbar />

<main class="mx-auto flex min-h-screen w-full flex-col">
	<slot />
</main>

<Footer />
