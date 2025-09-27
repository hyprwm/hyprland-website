<script>
	let { backgroundData } = $props();

	const { workspacesPerRow, gapLength, workspaceHeight, height, leftColumns, rightColumns } =
		backgroundData

	const REVEAL_DURATION = 800 // in ms
</script>

<div class="wrapper" aria-hidden="true" style:--reveal-duration={REVEAL_DURATION + 'ms'}>
	<div
		class="inner-wrapper"
		style={`--amount: ${workspacesPerRow}; --workspace-gap: ${gapLength}px;--workspace-height: ${workspaceHeight}px; --length: ${height}px;`}
	>
		<!-- Gradient background -->
		<div class="top-light"></div>

		<div class="columns left" aria-hidden="true">
			{#each leftColumns as column}
				<div class="column">
					{#each column as workspace}
						<div class="workspace">
							{#each workspace as tiles}
								<div class="tiles">
									{#each tiles as { color, image }}
										<div class="tile" style:--color={color} class:hasImage={image}>
											{#if image}
												<img src={image} class="h-full w-full object-contain" alt="" />
											{/if}
										</div>
									{/each}
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<div class="columns right" aria-hidden="true">
			{#each rightColumns as column}
				<div class="column">
					{#each column as workspace}
						<div class="workspace">
							{#each workspace as tiles}
								<div class="tiles">
									{#each tiles as { color, image }}
										<div class="tile" style:--color={color} class:hasImage={image}>
											{#if image}
												<img src={image} class="h-full w-full object-contain" alt="" />
											{/if}
										</div>
									{/each}
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.left {
		transform: rotateY(10deg);
	}
	.right {
		transform: rotateY(-10deg);
	}

	.wrapper {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 48px);
		contain: strict;
		pointer-events: none;

		@apply max-sm:hidden;
	}

	.inner-wrapper {
		position: absolute;
		perspective: 100px;
		height: 100%;
		width: max(100vw, 2200px);
		contain: strict;
		display: flex;
		mask-image: linear-gradient(to top, transparent 0%, black 20%);
		contain: layout style content;
		pointer-events: none;

		&::after {
			content: ' ';
			background: radial-gradient(80% 250%, theme(colors.black) 10%, transparent 50%);
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			width: 100%;
			height: 100%;
			z-index: -10;
			pointer-events: none;
			contain: strict;
		}
	}

	.columns {
		display: flex;
		gap: 2rem;
		flex-grow: 1;
		mask-image: linear-gradient(to top, transparent 0%, black 30%);
		z-index: -10;
		height: var(--length);
		min-height: var(--length);
		max-height: var(--length);
		contain: layout style content;
	}

	.column {
		display: flex;
		flex-direction: column;
		height: 200%;
		width: 100%;
		gap: var(--workspace-gap);
		z-index: -50;
		contain: layout style content;
	}

	.workspace {
		display: flex;
		gap: 8px;
		min-height: var(--workspace-height);
		max-height: var(--workspace-height);
		width: 100%;
		contain: layout style content;
	}

	.tiles {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-grow: 1;
		contain: layout style content;
	}

	.tile {
		border: var(--color) 2px solid;
		flex-grow: 1;
		height: var(--height);
		border-radius: 12px;
		pointer-events: auto;
		transition: all 700ms ease-in-out;
		opacity: 0.5;
		contain: strict;
		pointer-events: all;
		filter: brightness(1);

		&:hover {
			opacity: 1;
			scale: 1.02;
			background-color: color-mix(in hsl, var(--color), transparent 20%);
			box-shadow:
				0px 0px 10px var(--color),
				0px 0px 40px var(--color);
		}

		&.hasImage {
			transition:
				all var(--reveal-duration) ease-in-out,
				scale var(--reveal-duration) cubic-bezier(1, -0.4, 0.165, 1),
				filter var(--reveal-duration) cubic-bezier(1, -0.4, 0.165, 1);
		}

		&.hasImage:hover {
			scale: 1.2;
			filter: brightness(1.1);
		}

		& img {
			opacity: 0;
			transition: opacity var(--reveal-duration) cubic-bezier(1, -0.4, 0.165, 1);
			pointer-events: none;
		}
		&:hover img {
			opacity: 1;
			/* transition: opacity 2s var(--artwork-delay); */
		}
	}

	.top-light {
		background: url('/imgs/grain.webp'),
			radial-gradient(
				100% 80% at top,
				theme(colors.cyan.500 / 50%) 0%,
				theme(colors.sky.500 / 20%),
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
		z-index: 10;
		top: 0;
		left: 0;
		pointer-events: none;
		contain: strict;
	}
</style>
