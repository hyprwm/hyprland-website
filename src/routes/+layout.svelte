<script>
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from './Navbar.svelte'
	import './styles.css'
	import '@fontsource-variable/work-sans'
	import '@fontsource/ibm-plex-mono/500.css'
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden">
	<Navbar />

	<main class="mx-auto w-full flex flex-col">
		<slot />
	</main>

	<Footer />
</div>
