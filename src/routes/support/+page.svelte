<script>
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import clsx from 'clsx'
	import * as R from 'remeda'
	import { getGeneratedPath } from '$lib/Helper.ts'
	import TitleSubtile from '$lib/components/Title/TitleSubtile.svelte'
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
</script>

<svelte:head>
	<title>{'Donate to Hyprland'}</title>
</svelte:head>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-14 px-6 md:pr-8
	
	lg:pl-0
"
>
	<div class="top-light"></div>

	<header class="mt-24 flex flex-col items-center justify-center md:mt-32">
		<Title>
			<TitlePre slot="pre">Help continue Hyprland development</TitlePre>
			<TitleHeading slot="title" class="">Donate</TitleHeading>
		</Title>
	</header>

	<section
		class="m-0 mx-auto flex w-full max-w-screen-3xl
	animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms]
	"
	>

		<div class="flex grow flex-col gap-4 items-start md:gap-16 items-center justify-center">
			<p class="text-xl lg:text-xl text-pretty text-base text-white max-w-[60ch]">
				Hyprland development is done by volunteers, and led by one person in their free time.
				If you want to show a token of appreciation, or help the development continue,
				consider dontating to the project!
			</p>

			<p class="text-2xl font-bold lg:text-2xl text-pretty text-base text-white">
				Donating
			</p>

			<div class="flex grow flex-col gap-2 items-start items-center justify-center">
				<p class="text-xl lg:text-xl text-pretty text-base text-white max-w-[60ch]">
					You can donate once, or monthly, via the following channels:
				</p>
				<ul class="text-xl lg:text-xl text-pretty text-base text-white max-w-[60ch]" style="margin-top: 0; list-style-type: disc;">
					<li>PayPal: <a href="https://ko-fi.com/vaxry" class="text-teal-500 hover:text-slate-200">ko-fi.com/vaxry</a></li>
					<li>Crypto: please see the pinned post <a href="https://ko-fi.com/vaxry" class="text-teal-500 hover:text-slate-200">here</a></li>
				</ul>
			</div>
			
			<p class="text-2xl font-bold lg:text-2xl text-pretty text-base text-white">
				Do I get anything?
			</p>

			<p class="text-xl lg:text-xl text-pretty text-base text-white max-w-[60ch]">
				If you decide to donate, you will be listed in the special thanks
				part of the next Hyprland release notes, and, if you are a member of the
				Discord server, a role to signify you have supported the project.
				<br/><br/>
				Outside of that, you get the satisfaction that you rock and support
				the software you use and love.
			</p>
			
		</div>
	</section>
</section>

<style lang="postcss">
	.top-light {
		background: url('/imgs/grain.webp'),
			radial-gradient(
				100% 80% at top,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 10%),
				transparent
			);

		mask-image: radial-gradient(
			100% 80% at top,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);

		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;

		animation: parallax ease-in-out 500ms;
		animation-duration: 1ms;
		animation-timeline: scroll();
	}

	@keyframes parallax {
		to {
			translate: 0px 1000px;
		}
	}
</style>
