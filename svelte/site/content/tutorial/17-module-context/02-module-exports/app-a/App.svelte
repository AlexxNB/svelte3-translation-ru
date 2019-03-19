<script>
	import AudioPlayer from './AudioPlayer.svelte';
</script>

<button>
	остановить всё
</button>

<!-- https://musopen.org/music/9862-the-blue-danube-op-314/ -->
<AudioPlayer
	src="tutorial/music/strauss.mp3"
	title="На прекрасном голубом Дунае"
	composer="Иоганн Штраус"
	performer="European Archive"
/>

<!-- https://musopen.org/music/43775-the-planets-op-32/ -->
<AudioPlayer
	src="tutorial/music/holst.mp3"
	title="Планеты"
	composer="Густав Т. Холст"
	performer="USAF Heritage of America Band"
/>

<!-- https://musopen.org/music/8010-3-gymnopedies/ -->
<AudioPlayer
	src="tutorial/music/satie.mp3"
	title="Гимнопедия №1"
	composer="Эри́к Сати́"
	performer="Prodigal Procrastinator"
/>

<!-- https://musopen.org/music/2567-symphony-no-5-in-c-minor-op-67/ -->
<AudioPlayer
	src="tutorial/music/beethoven.mp3"
	title="Пятая симфония до минор, опус 67"
	composer="Людвиг ван Бетховен"
	performer="European Archive"
/>

<!-- https://musopen.org/music/43683-requiem-in-d-minor-k-626/ -->
<AudioPlayer
	src="tutorial/music/mozart.mp3"
	title="Реквием"
	composer="Вольфганг Амадей Моцарт"
	performer="Markus Staab"
/>
