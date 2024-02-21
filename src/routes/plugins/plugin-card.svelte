<script>
	// Dont forget to put this inside of CardsContainer.svelte

	import Card from '$lib/components/Card.svelte'

	export let plugin
    
    const colors = {
        design: 'pink',
        "Quality of Life": 'orange',
        "Layout": 'blue',
        Miscellaneous: 'purple'
    }

</script>

<Card >
<h2 class='text-4xl font-bold text-white'>{plugin.name}</h2>
<p class='text-sm font-medium text-slate-300'>{plugin.description}</p>

	<div class="p-8">
		{JSON.stringify(plugin, undefined, 4)}
	</div>
    
    <!-- Tags -->
    <ul>
        {#each plugin.tags ?? [] as tag}
            <li class="p-2">tag</li>
        {/each}
</ul>
</Card>
