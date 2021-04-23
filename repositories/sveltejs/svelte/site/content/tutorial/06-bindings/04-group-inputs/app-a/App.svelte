<script>
	let scoops = 1;
	let flavours = ['Шоколадная крошка с мятой'];

	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} и ${flavours[flavours.length - 1]}`;
	}
</script>

<h2>Размер</h2>

<label>
	<input type=radio group={scoops} value={1}>
	Один шарик
</label>

<label>
	<input type=radio group={scoops} value={2}>
	Два шарика
</label>

<label>
	<input type=radio group={scoops} value={3}>
	Три шарика
</label>

<h2>Вкусы</h2>

<label>
	<input type=checkbox group={flavours} value="Печенье со сливками">
	Печенье со сливками
</label>

<label>
	<input type=checkbox group={flavours} value="Шоколадная крошка с мятой">
	Шоколадная крошка с мятой
</label>

<label>
	<input type=checkbox group={flavours} value="Малиновый джем">
	Малиновый джем
</label>

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