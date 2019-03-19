<script>
	import { onInterval } from './utils.js';

	let seconds = 0;
	onInterval(() => seconds += 1, 1000);
</script>

<p>
	Страница открылась {seconds} сек. назад
</p>