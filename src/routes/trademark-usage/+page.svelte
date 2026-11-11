<script>
	const lastUpdated = '2026-11-11'
	const formattedLastUpdated = new Intl.DateTimeFormat('en', {
		dateStyle: 'long',
		timeZone: 'UTC'
	}).format(new Date(lastUpdated))
</script>

<svelte:head>
	<title>Trademark Usage | Hyprland</title>
	<meta name="description" content="Hyprland trademark usage policy." />
	<meta property="og:title" content="Trademark Usage | Hyprland" />
	<meta property="og:description" content="Hyprland trademark usage policy." />
</svelte:head>

<div class="fancy-top-gradient" aria-hidden="true" />

<article
	class="mx-auto mt-navbar flex w-full max-w-4xl flex-col gap-8 px-6 pt-20 md:px-8 lg:mt-32 lg:gap-12"
>
	<header class="flex flex-col gap-6">
		<h1 class="text-4xl font-bold lg:text-6xl">Trademark Usage</h1>
		<p class="text-base font-medium text-slate-400">
			Last updated: <time datetime={lastUpdated}>{formattedLastUpdated}</time>
		</p>
	</header>

	<section
		aria-labelledby="trademark-policy"
		class="prose prose-slate prose-invert min-h-64 max-w-none rounded-xl border border-cyan-400/20 bg-black/30 p-6 prose-a:text-cyan-400 md:p-10"
	>
		<h2 id="trademark-policy">Hyprland Trademark Usage Policy</h2>
		<p>
			The name "Hyprland" and the Hyprland logo are registered trademarks of Hyprland Development in
			the European Union. <br /><br />
			We welcome the use of our trademarks to accurately reference Hyprland and its role in the open-source
			ecosystem, subject to the following conditions.<br /><br />
			This Policy does not apply to the Hyprland code and repositories, which are freely licensed under
			BSD-3-Clause.
		</p>
		<h3>Permitted Uses</h3>
		<p>
			You may use the Hyprland name and official logo without requesting individual permission when:
		</p>
		<ul>
			<li>
				Identifying Hyprland as a package, software component, dependency, or technology used
				within, or by, your project.
			</li>
			<li>Listing Hyprland among the open-source projects your software is built on.</li>
			<li>Linking to Hyprland's official websites or repositories.</li>
			<li>
				Writing articles, documentation, tutorials, or other material that accurately discusses
				Hyprland.
			</li>
		</ul>

		<h3>Conditions</h3>
		<p>To use the Hyprland trademarks under the permission granted by this policy, you must:</p>
		<ol>
			<li>
				Use official Hyprland logo artwork. Proportional resizing and adjustments to colors,
				outlines, or shadows are permitted where necessary for readability. Do not otherwise alter,
				distort, or crop the logo.
			</li>
			<li>Clearly distinguish your project or organization from Hyprland.</li>
			<li>
				Not imply that Hyprland Development sponsors, endorses, certifies, or is affiliated with
				your project without separate written permission.
			</li>
			<li>
				Only state or imply your project is officially supported by Hyprland with written
				permission, or if your project is listed on our Wiki as officially supported.
			</li>
			<li>
				Not incorporate Hyprland trademarks into your own product name, company name, logo, or
				domain name in a manner that might imply official status. For example, "CoolTool for
				Hyprland" is acceptable, "Hyprland Plus" is not.
			</li>
			<li>Not use Hyprland trademarks in a misleading or deceptive manner.</li>
		</ol>

		<h3>Scope of Permission</h3>
		<p>
			Hyprland Development grants non-exclusive, royalty-free permission to use its trademarks for
			the purposes described above, subject to compliance with this policy. To the extent that
			Hyprland Development owns copyright in the official logo artwork, this permission also covers
			reproducing and displaying that artwork for these permitted purposes. Other uses, including
			merchandise, product branding, or uses suggesting official affiliation, require separate
			written permission. Hyprland Development may withdraw permission for a particular use by
			notifying the user. Upon receiving such notice, the user must promptly cease the use in
			question. This policy does not restrict any use of the trademarks that is independently
			permitted by applicable law.
		</p>

		<h3>Contact</h3>

		<p>
			For any inquiries about the trademark, please contact support [at] hypr [dot] land via e-mail.
		</p>

		<h3>Branding</h3>

		<p>Here you can find the official logo SVGs you can use.</p>

		<div class="not-prose flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
			<a href="/imgs/logo/hyprland_full.svg" class="block w-96 max-w-full">
				<img
					alt="Hyprland full logo"
					class="block h-auto w-full"
					src="/imgs/logo/hyprland_full.svg"
				/>
			</a>
			<a href="/imgs/logo/hyprland_short.svg" class="block w-56 max-w-full">
				<img
					alt="Hyprland short logo"
					class="block h-auto w-full"
					src="/imgs/logo/hyprland_short.svg"
				/>
			</a>
		</div>
	</section>
</article>
