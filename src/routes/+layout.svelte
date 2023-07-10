<script>
	import Navbar from './Navbar.svelte'
	import './styles.css'
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />

	<main class="mx-auto w-full flex flex-col">
		<slot />
	</main>

	<footer>
		<p>Footer</p>
	</footer>
</div>
