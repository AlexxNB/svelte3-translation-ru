<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Кот на клавишных' },
		{ id: 'z_AbfPXTKms', name: 'Мару' },
		{ id: 'OUtn3pvWmpg', name: 'Экзистенциальный кот' }
	];
</script>

<h1>Знаменитые YouTube котики</h1>

<ul>
	<!-- начало блока each -->
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li>
	<!-- конец блока each -->
</ul>