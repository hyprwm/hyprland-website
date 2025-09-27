<script lang="ts">
	import Title from '$lib/components/Title/TitleWrapper.svelte'
	import TitlePre from '$lib/components/Title/TitlePre.svelte'
	import TitleHeading from '$lib/components/Title/TitleHeading.svelte'
	import Button from '$lib/components/Button.svelte'
	import CloseIcon from '~icons/mingcute/close-line'

	let kofiModal: HTMLDialogElement | undefined = $state()

	function lockScroll() {
		document.querySelector('html')?.classList.add('lock-scroll')
	}
	function unlockScroll() {
		document.querySelector('html')?.classList.remove('lock-scroll')
	}
</script>

<svelte:head>
	<title>{'Support | Hyprland'}</title>
	<meta name="description" content="Support Hyprland Development" />
	<meta property="og:title" content="Donate to Hyprland" />
	<meta
		property="og:description"
		content="Support the continuation of Hyprland Development"
	/>
</svelte:head>

<div class="top-light"></div>

<section class="min-h-screen w-full md:mt-32">
	<Title class="mb-4 md:mb-8">
		{#snippet pre()}
			<TitlePre>Help continue Hyprland development</TitlePre>
		{/snippet}
		{#snippet title()}
			<TitleHeading class="">Support Hyprland</TitleHeading>
		{/snippet}
	</Title>

	<div
		class="prose prose-slate prose-invert m-0 mx-auto flex flex-col px-6 transition-none delay-500 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms] lg:prose-xl prose-a:text-cyan-400 prose-img:rounded-lg"
	>
		<p>
			Hyprland development is done by volunteers, and led by one
			person in their free time. If you want to show a token of
			appreciation, or help the development continue, consider
			supporting the project!
		</p>

		<h2>Subscribe to Hyprperks</h2>
		<p class="!mb-0 !pb-0">
			We offer hyprperks, a 5€+tax/mo subscription that is like a
			monthly donation, but you also get access to member-only forums
			(with dev Q&A, support straight from the devs) and Hyprland DE,
			a fully preconfigured, easy to use, one-click updating dotfiles
			straight from the Hyprland team.

			<br />
			<br />

			Check it out
			<a href="https://account.hypr.land/pricing" target="_blank"
				>here</a
			>
		</p>

		<h2>Donate</h2>
		<p class="!mb-0 !pb-0">
			You can donate once, or monthly, via the following channels:
		</p>

		<ul class="">
			<li>
				PayPal: <a href="https://ko-fi.com/vaxry" target="_blank"
					>ko-fi.com/vaxry</a
				>
			</li>
			<li>
				Crypto: please see the pinned post <a
					href="https://ko-fi.com/vaxry"
					target="_blank">here</a
				>
			</li>
		</ul>

		<h2>Do I get anything?</h2>

		<p>
			If you decide to donate, you will be listed in the special
			thanks part of the next Hyprland release notes, and, if you are
			a member of the Discord server, a role to signify you have
			supported the project.
			<br /><br />
			Outside of that, you get the satisfaction that you rock and support
			the software you use and love!
		</p>

		<div
			class="flex flex-col items-center justify-center rounded-xl border border-cyan-400/20 bg-black/10 md:p-12"
		>
			<Button
				type="fancyOutline"
				size="xl"
				on:click={() => {
					lockScroll()
					kofiModal?.showModal()
				}}>Donate here</Button
			>

			<p>
				Hyprland is, and will always stay Free and Open Source
				software. Donating is purely voluntary.<br />We will never
				lock out features behind a paywall.
			</p>
		</div>

		<h3>Thank you, you rock! :)</h3>

		<dialog
			bind:this={kofiModal}
			class="overflow-visible bg-transparent backdrop:bg-black/40 md:p-8"
		>
			<div class="relative h-[712px] min-h-[712px] shadow-2xl">
				<form class="absolute -right-2 -top-4 z-10">
					<button
						onclick={() => {
							unlockScroll()
						}}
						formmethod="dialog"
						class="rounded-full bg-white p-1 shadow-md"
						><CloseIcon class="size-5" /></button
					>
				</form>
				<div class="modal-content overflow-hidden rounded-2xl">
					<iframe
						id="kofiframe"
						src="https://ko-fi.com/vaxry/?hidefeed=true&widget=true&embed=true&preview=true"
						title="vaxry"
						height="712"
					></iframe>
				</div>
			</div>
		</dialog>
	</div>
</section>

<style lang="postcss">
	.pills li {
		@apply mx-0 rounded-lg border border-cyan-200/10 bg-slate-200/5 p-0 px-2 transition-all;
		&:hover {
			@apply -translate-y-1 border-cyan-300;
		}
		& a {
			@apply text-inherit no-underline;
		}
	}

	.top-light {
		background:
			url('/imgs/grain.webp'),
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
	}

	dialog {
		transition:
			display 0.2s allow-discrete,
			overlay 0.2s allow-discrete;

		animation: close 0.2s forwards;
		&[open] {
			animation: open 0.5s forwards;

			& .modal-content {
				height: 712px;
				transition:
					scale 0.2s cubic-bezier(0.2, 0.2, 0.165, 1.5),
					height 0.15s cubic-bezier(0.875, 0.2, 0.165, 1);
				scale: 1;

				@starting-style {
					height: 0px;
					scale: 0.9;
				}
			}
		}
	}

	.modal-content {
		height: 0px;
		scale: 0.4;
		transition: all 2.5s ease-in-out;
	}

	@keyframes open {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes close {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
