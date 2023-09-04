<script>
	import baseColors from 'tailwindcss/colors'

	const amountTiles = 4 // Has to be an even number as the tiles get "mirrored"
	const workspaceHeight = 150
	const gapLength = 24
	const colors = [baseColors.blue[500], baseColors.cyan[400], baseColors.sky[500]]
	const leftColumns = Array.from({ length: 3 }, () => generateRow(amountTiles))
	const rightColumns = Array.from({ length: 3 }, () => generateRow(amountTiles))
	const leftTotalLength = leftColumns
		.slice(0, leftColumns.length / 2)
		.reduce((total, current, index, array) => total + workspaceHeight + gapLength, 0)

	function generateRow(amount) {
		const base = Array.from({ length: amount }).map(generateWorkspace)
		// For the effect to work, the items need to be duplicated
		return [...base, ...base]
	}

	function generateWorkspace() {
		return [
			generateTiles(),
			Math.random() > 0.4 ? generateTiles() : false,
			Math.random() > 0.7 ? generateTiles() : false
		].filter(Boolean)
	}

	function generateTiles() {
		const result = Math.random() > 0.5 ? [getRandomColor()] : [getRandomColor(), getRandomColor()]

		return result
	}

	function getRandomColor() {
		return colors.at(Math.floor(Math.random() * colors.length))
	}
</script>

<div class="wrapper" aria-hidden="true">
	<div
		class="inner-wrapper"
		style={`--amount: ${amountTiles}; --workspace-gap: ${gapLength}px;--workspace-height: ${workspaceHeight}px;`}
	>
		<div class="columns left" style={`--length: ${leftTotalLength}; `}>
			{#each leftColumns as column}
				<div class="column">
					{#each column as workspace}
						<div class="workspace">
							{#each workspace as tiles}
								<div class="tiles">
									{#each tiles as tile}
										<div class="tile" style:--color={tile}></div>
									{/each}
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<div class="columns right" style={`--length: ${leftTotalLength}; `}>
			{#each rightColumns as column}
				<div class="column">
					{#each column as workspace}
						<div class="workspace">
							{#each workspace as tiles}
								<div class="tiles">
									{#each tiles as tile}
										<div class="tile" style:--color={tile}></div>
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
		mask-image: linear-gradient(to right, black, transparent);
		/* margin-left: -2200px; */
	}
	.right {
		transform: rotateY(-10deg);
		/* margin-left: -2200px; */
	}

	.wrapper {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		/* margin-top: -200px; */
	}

	.inner-wrapper {
		position: absolute;
		perspective: 100px;
		height: 100%;
		width: max(100vw, 1100px);
		/* translate: -50% 0px; */
		/* overflow: visible; */
		contain: strict;
		display: flex;
		border: red solid 1px;
		mask-image: radial-gradient(circle, transparent 10%, black 50%);
	}

	.columns {
		display: flex;
		gap: 2rem;
		flex-grow: 1;
		mask-image: linear-gradient(to top, transparent 10%, black);
		/* border: cyan solid 1px; */
	}

	.column {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		animation: loop 20s infinite linear;
		gap: var(--workspace-gap);
		/* width: 400px; */
	}

	.workspace {
		display: flex;
		gap: 8px;
		height: var(--workspace-height);
		width: 100%;
		/* border: red solid 1px; */
	}

	.tiles {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-grow: 1;
		/* border: blue 1px solid; */
	}

	.tile {
		border: var(--color) 1px solid;
		flex-grow: 1;
		height: var(--height);
		border-radius: 12px;
		pointer-events: auto;
		transition: all 140ms ease-in-out;

		&:hover {
			animation: flicker infinite 800ms;
		}
	}

	@keyframes loop {
		100% {
			translate: 0px calc(-1px * var(--length));
		}
	}

	@keyframes flicker {
		0% {
			background: mix-color(var(--color), transparent 0%);
		}
		100% {
			background: var(--color);
			box-shadow: 0px 0px 10px var(--color);
		}
	}
</style>
