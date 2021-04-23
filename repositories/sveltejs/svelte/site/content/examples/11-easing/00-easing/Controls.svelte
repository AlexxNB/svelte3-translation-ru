<script>
	import { createEventDispatcher } from 'svelte';

	export let current_ease;
	export let current_type;
	export let eases;
	export let types;
	export let duration;
	export let playing;
	export let width;

	const dispatch = createEventDispatcher();

	$: mobile = width && width < 600;
</script>

<div class="easing-sidebar">
	<div class="easing-types">
		<h3>Функция</h3>
		{#if mobile}
			<select bind:value={current_ease}>
				{#each [...eases] as [name]}
					<option
						value={name}
						class:selected={name === current_ease}
					>
						{name}
					</option>
				{/each}
			</select>
		{:else}
			<ul>
				{#each [...eases] as [name]}
					<li
						class:selected={name === current_ease}
						on:click={() => current_ease = name}
					>
						{name}
					</li>
				{/each}
			</ul>
		{/if}
		<h3>Тип</h3>
		{#if mobile }
			<select bind:value={current_type}>
				{#each types as [name, type]}
					<option
						value={type}
					>
						{name}
					</option>
				{/each}
			</select>
		{:else}
			<ul>
				{#each types as [name, type]}
					<li
						class:selected={type === current_type}
						on:click={() => current_type = type}
					>
						{name}
				</li>
				{/each}
			</ul>
		{/if}
	</div>
	<h4>
		Длительность
	</h4>
	<div class="duration">
		<span>
			<input type="number" bind:value={duration} min="0" step="100"/>
			<button class="number" on:click={() => duration -= 100}>-</button>
			<button class="number" on:click={() => duration += 100}>+</button>
		</span>
		<button class="play" on:click={() => dispatch('play')}>
			{playing ? 'Restart' : 'Play'}
		</button>
	</div>
</div>