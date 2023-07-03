<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Below you can see a minimal example of <b>LightningChart JS</b> in a SvelteKit application.</p>
<div id='chart'></div>

<style>
    #chart {
        height: 300px;
    }
</style>

<script>
    import { onMount } from 'svelte'
    import { Themes, lightningChart } from '@arction/lcjs'
    export let data;

    onMount(() => {
        const container = document.getElementById('chart')
        if (!container) { return }

        const chart = lightningChart().ChartXY({ container, theme: Themes.light })
        const lineSeries = chart.addLineSeries({ dataPattern: { pattern: 'ProgressiveX' } })
            .add(data.exampleData)

        return () => {
            chart.dispose()
        }
    })
</script>