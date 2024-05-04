<script lang="ts">
	import CardBody from '$components/3dCard/CardBody.svelte'
	import CardContainer from '$components/3dCard/CardContainer.svelte'
	import CardItem from '$components/3dCard/CardItem.svelte'
	import Title from '$components/Title.svelte'
	import { get } from 'svelte/store'
</script>

<main>
	<div class="flex min-h-[min(50vh,30rem)] flex-col items-center justify-center">
		<Title>
			<span slot="title" class="title">Organization</span>
			<div slot="subtitle" class="max-w-[40ch]">The HyprWm Organization</div>
		</Title>
	</div>
	<section class="flex flex-col items-center">
		<h2 class="mb-4 text-4xl font-bold [animation-delay:300ms]">Teams</h2>

		<div
			class="flex max-w-full flex-wrap items-center justify-center gap-8 px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 [&>*]:animate-in [&>*]:fade-in-0 [&>*]:slide-in-from-bottom-6 [&>*]:fill-mode-backwards [&>*]:[animation-duration:1400ms]"
		>
			<!-- RFC -->
			<CardContainer containerClass="mt-20">
				<CardBody
					class="group/card relative  h-auto  w-[21rem]   rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1]"
				>
					<CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
						<div class="mb-4 flex w-full items-center justify-center">
							<img
								src="https://images-ext-1.discordapp.net/external/Sfe4WDX8-BapzTSt6PBRm7G3JtznnVE8dCN0-pWQmn8/https/s.mj.run/nG05gh6Li-w?format=webp&width=979&height=979"
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
								src="https://media.discordapp.net/attachments/1233710054729842729/1235516223819878420/visualdawg_logo_black_background_globe_minimalistic_illustratio_addd6568-b95f-40ec-8de6-e90366f66bea.png?ex=6636a1e6&is=66355066&hm=83c0f90353c3a748589b25ac919c3e1acd56029efbdc9c86b2f5a5427d12d563&=&format=webp&quality=lossless&width=560&height=560"
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
								{hasMouseEntered ? 'Hello world' : 'Web. JS. Design.'}
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
