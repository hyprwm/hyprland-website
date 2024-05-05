<script lang="ts">
	import CardBody from '$components/3dCard/CardBody.svelte'
	import CardContainer from '$components/3dCard/CardContainer.svelte'
	import CardItem from '$components/3dCard/CardItem.svelte'
	import Title from '$components/Title.svelte'
	import Uhay from '$lib/images/teams/uhay.webp'
	import rfcLogo from '$lib/images/teams/rfc.webp'
</script>

<main>
	<div class="flex min-h-[min(50vh,30rem)] flex-col items-center justify-center">
		<Title>
			<span slot="title" class="title">Organization</span>
			<div slot="subtitle" class="max-w-[40ch]">The HyprWm Organization</div>
		</Title>
	</div>
	<section class="flex flex-col items-center">
		<h2
			class="mb-4 text-4xl font-bold duration-1000 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-both [animation-delay:300ms]"
		>
			Teams
		</h2>

		<div
			class="flex max-w-full flex-wrap items-center justify-center gap-8 px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 [&>*]:animate-in [&>*]:fade-in-0 [&>*]:slide-in-from-bottom-6 [&>*]:fill-mode-backwards [&>*]:[animation-delay:950ms] [&>*]:[animation-duration:400ms]"
		>
			<!-- RFC -->
			<CardContainer containerClass="mt-20">
				<CardBody
					class="group/card relative  h-auto  w-[21rem]   rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1]"
				>
					<CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
						<div class="mb-4 flex w-full items-center justify-center">
							<img
								src={rfcLogo}
								class="-mt-20 size-64 rounded-xl shadow-2xl shadow-blue-500 outline outline-blue-500/20 group-hover/card:outline-cyan-500/50"
								alt="RFC Team logo"
							/>
						</div>
					</CardItem>
					<CardItem class="mb-1 text-xl font-bold  text-white" translateZ={50}>
						<h3 class="">RFC Steering Committee</h3>
					</CardItem>
					<CardItem class="text-base  text-white" translateZ={90}>
						<p class="font-medium text-slate-400">Ideate. Debate. Progress.</p>
					</CardItem>
				</CardBody>

				<div
					class="absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-tl from-blue-500 to-cyan-500 opacity-50 transition-opacity duration-200 group-hover/card:opacity-100"
				></div>
			</CardContainer>

			<!-- Uhay Web -->
			<CardContainer
				let:hasMouseEntered
				containerClass="mt-20"
				style="animation-delay:640ms"
				animateInDelay={150}
			>
				<CardBody
					class="group/card relative  h-auto w-[21rem] rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1] "
				>
					<CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
						<div class="mb-4 flex w-full items-center justify-center">
							<img
								src={Uhay}
								class="-mt-20 size-64 rounded-xl shadow-2xl shadow-blue-500 outline outline-blue-500/20 group-hover/card:outline-cyan-500/50"
								alt="RFC Team logo"
							/>
						</div>
					</CardItem>
					<CardItem class="mb-1 text-xl font-bold  text-white" translateZ={50}>
						<h3 class="">Uhay</h3>
					</CardItem>
					<CardItem class="h-6  w-full  text-base text-white" translateZ={90}>
						<div class=" font-medium text-slate-400">
							<p class="group-hover/web:visible">
								{hasMouseEntered ? 'It`s pronounced UI you ' : 'Web. JS. Design.'}
							</p>
						</div>
					</CardItem>
				</CardBody>

				<div
					class="absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-tl from-blue-500 to-cyan-500 opacity-50 transition-opacity duration-200 group-hover/card:opacity-100"
				></div>
			</CardContainer>
		</div>
	</section>
</main>
