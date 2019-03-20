<script>
	import { time, elapsed } from './stores.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>Текущее время {formatter.format($time)}</h1>

<p>
	Эта страница открыта {$elapsed} сек. назад
</p>