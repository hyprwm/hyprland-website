<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import DiscordIcon from '~icons/prime/discord'
</script>

<section class="relative overflow-hidden w-screen min-h-max h-[850px]">
	<h1 class="text-8xl font-bold text-center mb-8">Join a great community</h1>
	<div class="text-center font-extrabold text-slate-300">
		Get help from Distro Hoppers, Haiku writers, Hydrohomies and human_(probably)
	</div>

	<div class="flex flex-col w-full items-center">
		<div class="w-28 h-28"><DiscordIcon class="h-full w-full" /></div>

		<a href="https://discord.com/invite/hQ9XvMUjjr">
			<Button type="fancyOutline">Join us on Discord</Button>
		</a>
	</div>

	<div class=" absolute inset-0 w-[1024px]">
		<div class="_bg-color bg-yellow-500 top-[146px] right-[17px] w-[359px] h-[207px] opacity-20" />
		<div class="_bg-color bg-orange-500 top-[411px] right-0 w-[400px] h-[300px] opacity-30" />
		<div class="_bg-color bg-purple-500 opacity-30 w-[321px] h-[295px] top-[209px] left-[368px]" />
		<div class="_bg-color bg-cyan-500 opacity-30 w-[363px] h-[250px] left-[402px] top-[462px]" />
		<div class="_bg-color bg-red-500 opacity-30 w-[323px] h-[482px] left-[53px] top-[179px]" />
		<div class="_bg-color bg-fuchsia-500 opacity-30 w-[243px] h-[167px] left-[135px] top-[596px]" />
	</div>
</section>

<style lang="sass">
// taken from https://codepen.io/mikegolus/pen/Jegvym?editors=1100 
$quantity: 6

._bg-color
    position: absolute
    animation: ease 200s alternate infinite
    pointer-events: none
    animation: drift ease alternate infinite
    filter: blur(80px)
    border-radius: 50%
    z-index: -50


// Randomize Motion
@for $i from 1 through $quantity
  $steps: random(12) + 16
  
  ._bg-color:nth-child(#{$i})
    // animation-name: move#{$i}
    animation-duration:  random(6000) + 50000ms
    animation-delay: 0ms, random(8000) + 500ms

  @keyframes move#{$i}
    @for $step from 0 through $steps
      #{$step * (100 / $steps)}%
        transform: translateX(random(50) - 50px) translateY(random(50) - 50px) scale(calc(random(5) / 100 + 0.95))


</style>
