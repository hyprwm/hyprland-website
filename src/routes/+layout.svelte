<script>
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from './Navbar.svelte'
	import './styles.css'
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />

	<main class="mx-auto w-full flex flex-col">
		<slot />
	</main>

	<Footer />
</div>
