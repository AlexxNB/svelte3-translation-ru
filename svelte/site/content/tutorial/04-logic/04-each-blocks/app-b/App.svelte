<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Кот на клавишных' },
		{ id: 'z_AbfPXTKms', name: 'Мару' },
		{ id: 'OUtn3pvWmpg', name: 'Экзистенциальный кот' }
	];
</script>

<h1>Знаменитые YouTube котики</h1>

<ul>
	{#each cats as { id, name }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{i + 1}: {name}
		</a></li>
	{/each}
</ul>