<script>
	let scoops = 1;
	let flavours = ['Шоколадная крошка с мятой'];

	let menu = [
		'Печенье со сливками',
		'Шоколадная крошка с мятой',
		'Малиновый джем'
	];

	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} и ${flavours[flavours.length - 1]}`;
	}
</script>

<h2>Размер</h2>

<label>
	<input type=radio bind:group={scoops} value={1}>
	Один шарик
</label>

<label>
	<input type=radio bind:group={scoops} value={2}>
	Два шарика
</label>

<label>
	<input type=radio bind:group={scoops} value={3}>
	Три шарика
</label>

<h2>Вкусы</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} value={flavour}>
		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Выберите хотя бы один вкус</p>
{:else if flavours.length > scoops}
	<p>Нельзя выбрать вкусов больше, чем шариков!</p>
{:else}
	<p>
		Вы заказали {scoops} {scoops === 1 ? 'шарик' : 'шарика'}:
		{join(flavours)}
	</p>
{/if}
