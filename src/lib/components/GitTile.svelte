<script>
	import { lerp } from '$lib/Helper.ts'
	import { createNoise2D } from 'simplex-noise'
	import { onMount } from 'svelte'
	import { expoIn } from 'svelte/easing'

	/** Lifespan in milliseconds */
	export let lifeSpan = 1500
	export let maxSpeed = 20
	export let minSpeed = 4
	export let maxOpacity = 1
	export let scale = 1

	const isDescending = Math.random() > 0.8
	const wobbliness = lerp(0.0001, 0.004, Math.random())

	const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed

	let x = Math.random() * 30 - 30
	let y = Math.random() * 2
	let lifeRemaining = lifeSpan
	$: lifePercentage = lifeRemaining / lifeSpan
	let timestamp = Date.now()

	const noiseY = createNoise2D()
	const noiseX = createNoise2D()

	const colors = ['#0e4429', '#006d32', '#26a641', '#39d353']
	const color = colors.at(Math.ceil(colors.length * Math.random()))

	onMount(() => {
		let animationId
		let i = 0

		animate()

		async function animate() {
			const deltaTime = (timestamp - Date.now()) / 17 // One frame should last roughly 17ms for 60fps

			x += noiseX(i, 1) * speed * deltaTime * expoIn(lifePercentage)
			y += noiseY(i, 1) * speed * deltaTime * expoIn(lifePercentage)

			i += wobbliness * deltaTime

			lifeRemaining -= Date.now() - timestamp
			timestamp = Date.now()

			if (lifeRemaining <= -1) return

			animationId = requestAnimationFrame(animate)
		}

		return () => cancelAnimationFrame(animationId)
	})
</script>

<div
	class="absolute h-6 w-6 rounded-md"
	style:translate={`${x}px ${y}px`}
	style:background={color}
	style:opacity={(lifeRemaining / lifeSpan - (1 - maxOpacity)) ** 5}
	style:scale={isDescending ? (lifeRemaining / lifeSpan - (1 - scale)) ** 2 : undefined}
	style:top={50 + (Math.random() * 5 - 5) + '%'}
	style:left={50 + (Math.random() * 5 - 5) + '%'}
></div>
