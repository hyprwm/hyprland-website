<script>
	import { animateIn } from '$lib/Helper.mjs'
	import archLogo from '$lib/images/logos/arch.svg'
	import nixLogo from '$lib/images/logos/nixos.svg'
	import bsdLogo from '$lib/images/logos/freebsd.svg'
	import suseLogo from '$lib/images/logos/opensuse.svg'
	import LinkOutIcon from '~icons/akar-icons/link-out'
	import InstallButton from './InstallButton.svelte'
	import Button from '$lib/components/Button.svelte'
	import Title from '$lib/components/Title.svelte'
</script>

<section>
	<Title class="mb-8">
		<span slot="title">Install now</span><span slot="subtitle"> For your favourite distro </span>
	</Title>

	<div class="flex flex-col md:gap-6 gap-12 items-center" use:animateIn={{ slide: 24, fade: 0 }}>
		<InstallButton name="Arch" command="pacman -S hyprland" image={archLogo}
			><div slot="extra">
				AUR git version: <a href="https://aur.archlinux.org/packages/hyprland-git/">hyprland-git</a>
			</div></InstallButton
		>
		<InstallButton name="NixOs" image={nixLogo}
			><a
				href="https://wiki.hyprland.org/Nix/"
				target="_blank"
				class="flex gap-4 items-center justify-between w-full">See instructions <LinkOutIcon /></a
			></InstallButton
		>
		<InstallButton name="FreeBSD" command="pkg install hyprland" image={bsdLogo} />
		<InstallButton name="openSuse" command="zypper in hyprland" image={suseLogo}
			><div slot="extra">or install “hyprland” via YaST2 Software.</div></InstallButton
		>

		<a href="https://wiki.hyprland.org/Getting-Started/Installation/#packages" class="mt-10">
			<Button size="lg" type="fancyOutline">Install more</Button>
		</a>
	</div>
</section>
