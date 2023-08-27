<script>
	/** @type {string} */
	export let name
	/** @type {number} */
	export let number
</script>

<section class="flex flex-col mt-24">
	<div class="relative mb-24">
		<div class="mix-blend-color-dodge p-6 flex items-center flex-col">
			<div class="text-2xl font-bold text-slate-300/80">Contest #{number}</div>
			<h2 class="text-9xl text-slate-200/80 text-center font-bold">{name}</h2>
		</div>

		<div class="background" aria-hidden="true"></div>
	</div>

	<div class="flex flex-col gap-40">
		<slot />
	</div>
</section>

<style lang="postcss">
	.background {
		position: absolute;
		top: 150px;
		left: 50%;
		translate: -50% -50%;
		width: 100vw;
		height: 1000px;
		z-index: -10;
		background: radial-gradient(
				140px 100px at 50% 45%,
				var(--color, theme(colors.cyan.500)),
				transparent
			),
			radial-gradient(
				145px 110px at 50% 45%,
				var(--color, theme(colors.blue.500 / 80%)) 80%,
				transparent
			),
			radial-gradient(210px 140px, var(--color, theme(colors.blue.600)), transparent),
			radial-gradient(300px 200px, var(--color, theme(colors.sky.600)), transparent),
			radial-gradient(600px 220px, var(--color, theme(colors.blue.700)), transparent);

		& ::after {
			content: ' ';
		}
	}
</style>
