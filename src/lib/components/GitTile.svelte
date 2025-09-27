<script lang="ts">
	import { lerp } from '$lib/Helper'
	import { createNoise2D } from 'simplex-noise'
	import { onMount } from 'svelte'
	import { expoIn } from 'svelte/easing'

	type Props = {
		/**  Lifespan in milliseconds */
		lifeSpan: number
		maxSpeed: number
		minSpeed: number
		maxOpacity: number
		scale: number
	}

	let {
		lifeSpan = 1500,
		maxSpeed = 20,
		minSpeed = 4,
		maxOpacity = 1,
		scale = 1
	}: Props = $props()

	const isDescending = Math.random() > 0.8
	const wobbliness = lerp(0.0001, 0.004, Math.random())

	const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed

	let x = $state(Math.random() * 30 - 30)
	let y = $state(Math.random() * 2)
	let lifeRemaining = $state(lifeSpan)
	let lifePercentage = $derived(lifeRemaining / lifeSpan)
	let timestamp = Date.now()

	const noiseY = createNoise2D()
	const noiseX = createNoise2D()

	const colors = ['#0e4429', '#006d32', '#26a641', '#39d353']
	const color = colors.at(Math.ceil(colors.length * Math.random()))

	onMount(() => {
		let animationId: number
		let i = 0

		animate()

		async function animate() {
			// One frame should last roughly 17ms for 60fps
			const deltaTime = (timestamp - Date.now()) / 17

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
	style:scale={isDescending
		? (lifeRemaining / lifeSpan - (1 - scale)) ** 2
		: undefined}
	style:top={50 + (Math.random() * 5 - 5) + '%'}
	style:left={50 + (Math.random() * 5 - 5) + '%'}
></div>
