<script>
	export let backgroundData

	const { workspacesPerRow, gapLength, workspaceHeight, height, leftColumns, rightColumns } =
		backgroundData
</script>

<div class="wrapper" aria-hidden="true">
	<div
		class="inner-wrapper"
		style={`--amount: ${workspacesPerRow}; --workspace-gap: ${gapLength}px;--workspace-height: ${workspaceHeight}px; --length: ${height}px;`}
	>
		<!-- Gradient background -->
		<div class="top-light" />

		<div class="columns left" aria-hidden="true">
			{#each leftColumns as column}
				<div class="column">
					{#each column as workspace}
						<div class="workspace">
							{#each workspace as tiles}
								<div class="tiles">
									{#each tiles as { color }}
										<div class="tile" style:--color={color}></div>
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
									{#each tiles as { color }}
										<div class="tile" style:--color={color}></div>
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
		/* animation: backwards animate-in ease-in 2000ms 300ms; */
		contain: layout style content;
	}

	.column {
		display: flex;
		flex-direction: column;
		height: 200%;
		width: 100%;
		gap: var(--workspace-gap);
		z-index: -50;
		/* animation: loop 98s infinite linear; */
		contain: layout style content;

		/* @media (prefers-reduced-motion) {
			animation: none;
		} */
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
		--reveal-length: 0.5s;

		border: var(--color) 2px solid;
		flex-grow: 1;
		height: var(--height);
		border-radius: 12px;
		pointer-events: auto;
		transition: 480ms ease-in-out;
		transition-property: background-color background-image opacity scale box-shadow;
		opacity: 0.5;
		contain: strict;
		pointer-events: all;

		&:hover {
			opacity: 1;
			scale: 1.02;
			background-color: color-mix(in hsl, var(--color), transparent 20%);
			box-shadow:
				0px 0px 10px var(--color),
				0px 0px 40px var(--color);
		}
		&:hover.with-image {
			scale: 1;
			animation: reveal-artwork_tile calc(var(--reveal-length) + 280ms)
				cubic-bezier(1, -0.4, 0.165, 1) forwards;
		}
	}

	.top-light {
		background: radial-gradient(
			100% 80% at top,
			theme(colors.cyan.500 / 50%) 0%,
			theme(colors.sky.500 / 20%),
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
