<script>
	import Folder from './Folder.svelte';

	let root = [
		{
			type: 'folder',
			name: 'Важные документы по работе',
			files: [{ name: 'quarterly-results.xlsx' }],
		},
		{
			type: 'folder',
			name: 'Гифки с животными',
			files: [
				{
					type: 'folder',
					name: 'Собаки',
					files: [{ name: 'treadmill.gif' }, { name: 'rope-jumping.gif' }],
				},
				{
					type: 'folder',
					name: 'Козлики',
					files: [{ name: 'parkour.gif' }, { name: 'rampage.gif' }],
				},
				{ name: 'cat-roomba.gif' },
				{ name: 'duck-shuffle.gif' },
				{ name: 'monkey-on-a-pig.gif' },
			],
		},
		{ name: 'TODO.md' },
	];
</script>

<Folder name="Домашняя папка" files={root} expanded />
