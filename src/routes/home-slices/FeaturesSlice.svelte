<script>
	import Card from '$lib/components/Card.svelte'
	import GameIcon from '~icons/gg/games'
	import SpecialWorkspaceIcon from '~icons/gg/shutterstock'
	import ShortcutsIcon from '~icons/gg/push-chevron-right-o'
	import TabIcon from '~icons/gg/tab'
	import IpcIcon from '~icons/gg/media-podcast'
	import TouchpadIcon from '~icons/gg/touchpad'
	import Title from '$lib/components/Title.svelte'
	import Hypractive from './Hypractive.svelte'
	import configDefaultImage from '$lib/images/features/config_default.webp'
	import configHoverImage from '$lib/images/features/config_hover.webp'
	import smoothDefaultImage from '$lib/images/features/smooth_default.webp'
	import smoothHoverImage from '$lib/images/features/smooth_hover.webp'
	import tileDefaultImage from '$lib/images/features/tiling_default.webp'
	import tileHoverImage from '$lib/images/features/tiling_hover.webp'
	import CardsContainer from '$lib/components/CardsContainer.svelte'
</script>

<section class="relative flex flex-col items-center px-3 md:px-8">
	<Title>
		<span slot="pre">TLDR</span>
		<span slot="title">Features</span>
	</Title>

	<CardsContainer
		class="group grid w-full flex-wrap gap-6 text-lg font-medium text-white/70 lg:grid-cols-2 lg:grid-rows-2"
	>
		<Card class="row-span-2" color="purple">
			<h2 class="mb-6 text-5xl font-bold text-white lg:text-8xl">Smooth</h2>
			<p class="max-w-[60ch]">
				Smooth transitions. Great animations. High performance. Instant input.
			</p>

			<div class="_wrapper absolute inset-0 select-none" aria-hidden="true">
				<div class="feature-image">
					<img
						src={smoothDefaultImage}
						class="feature-image_inner"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
					<img
						src={smoothHoverImage}
						class="feature-image_inner-hover"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</div>
		</Card>
		<Card color="purple">
			<h2 class="mb-6 text-5xl font-bold text-white">Easy to configure</h2>
			<p class="max-w-[60ch]">
				Live reloading config. Easy plain-text format. Sensible defaults. Great documentation.
			</p>

			<div class="_wrapper absolute inset-0 select-none" aria-hidden="true">
				<div class="feature-image">
					<img
						src={configDefaultImage}
						class="feature-image_inner"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
					<img
						src={configHoverImage}
						class="feature-image_inner-hover"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</div>
		</Card>
		<Card color="purple">
			<h2 class="mb-6 text-5xl font-bold text-white">Dynamic tiling</h2>
			<p class="max-w-[60ch]">
				Automatic tiling that just works. Supports multiple fine-tuneable layouts.
			</p>
			<div class="_wrapper absolute inset-0 select-none" aria-hidden="true">
				<div class="feature-image">
					<img
						src={tileDefaultImage}
						class="feature-image_inner"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
					<img
						src={tileHoverImage}
						class="feature-image_inner-hover"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</div>
			</div>
		</Card>
	</CardsContainer>

	<div
		class="z-10 mt-14 flex max-w-screen-xl flex-col flex-wrap justify-center gap-8 text-lg sm:flex-row"
	>
		<a
			href="https://github.com/hyprland-community/awesome-hyprland#plugins"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<GameIcon class="h-8 w-8" />
			Tearing support
		</a>
		<a
			href="https://github.com/hyprland-community/awesome-hyprland#plugins"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<IpcIcon class="h-8 w-8" />
			Socket-based IPC
		</a>
		<a
			href="https://github.com/hyprland-community/awesome-hyprland#plugins"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<TabIcon class="h-8 w-8" />
			Window groups
		</a>
		<a
			href="https://github.com/hyprland-community/awesome-hyprland#plugins"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<SpecialWorkspaceIcon class="h-8 w-8" />
			Special workspaces
		</a>
		<Hypractive />
		<a
			href="https://wiki.hyprland.org/Configuring/Binds/#global-keybinds"
			target="_blank"
			class="icon-feature hover:underline"
		>
			<ShortcutsIcon class="h-8 w-8" />
			Global shortcuts for apps
		</a>
		<a
			href="https://wiki.hyprland.org/Configuring/Variables/#gestures"
			class="icon-feature hover:underline"
			target="_blank"
		>
			<TouchpadIcon class="h-8 w-8" />Touchpad gestures
		</a>
	</div>
</section>

<style lang="postcss">
	.icon-feature {
		@apply flex items-center justify-center gap-3 font-bold text-slate-400;
	}

	.feature-image {
		position: absolute;
		inset: 0 0 0 0;
		opacity: 0.5;
		z-index: -10;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 180ms ease-in-out;

		._wrapper:hover & {
			opacity: 1;
		}

		& img {
			position: absolute;
			transition: opacity 1500ms ease-in-out;
			pointer-events: none;

			width: 400px;
			aspect-ratio: 1;
			right: -80px;
			top: 50%;
			translate: 0px -50%;

			@media screen(md) {
				width: 600px;
				right: -80px;
			}
		}
	}
	.feature-image_inner-hover {
		opacity: 0;
	}
	._wrapper:hover {
		& .feature-image_inner {
			opacity: 0;
		}
		& .feature-image_inner-hover {
			opacity: 1 !important;
			filter: saturate(1.3);
		}
	}

	p {
		word-break: pretty;
	}
</style>
