# LightningChart<sup>&#174;</sup> JS SvelteKit usage example

Bare bones example of using LightningChart JS in a [SvelteKit](https://svelte.dev/) application.

Application template was created with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) v5.0.2 in July 2023.

See commit history for exact steps for adding LightningChart JS in.
Here's a summary of steps:

## Install LightningChart JS

`npm i @arction/lcjs`

## Use LightningChart JS in a Svelte page by

1. Creating a DIV to house the chart

```html
<!-- routes/+page.svelte -->
<div id='chart'></div>

<style>
    #chart {
        height: 300px;
    }
</style>
```

2. Creating the chart using `onMount` lifecycle function

```html
<!-- routes/+page.svelte -->
<script>
    import { onMount } from 'svelte'
    import { Themes, lightningChart } from '@arction/lcjs'

    onMount(() => {
        const container = document.getElementById('chart')
        if (!container) { return }

        const chart = lightningChart().ChartXY({ container, theme: Themes.light })

        return () => {
            // This callback is called when the component is destroyed.
            chart.dispose()
        }
    })
</script>
```

## Passing data to LightningChart JS

This example passes data to the chart using a simple import from the server, like so:

```js
// routes/+page.server.js
export function load() {
	const exampleData = [];
	let prevY = 0;
	for (let i = 0; i < 100000; i += 1) {
		const y = prevY + (Math.random() * 2 - 1);
		exampleData.push({ x: i, y });
		prevY = y;
	}
	return { exampleData };
}
```

```html
<!-- routes/+page.svelte -->
<script>
    export let data;
    // ...
    const lineSeries = chart.addLineSeries({ dataPattern: { pattern: 'ProgressiveX' } })
        .add(data.exampleData)
</script>
```

## More resources

- Learn more about [SvelteKit](https://kit.svelte.dev/)
- Learn more about [LightningChart JS](https://lightningchart.com/js-charts/docs/)

