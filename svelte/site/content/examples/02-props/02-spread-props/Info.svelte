<script>
	export let name;
	export let version;
	export let speed;
	export let website;
</script>

<p>
	Пакет <code>{name}</code> {speed} быстрый.
	Загрузите версию {version} из <a href="https://www.npmjs.com/package/{name}">npm</a>
	и узнайте о нем больше <a href={website}>тут</a>
</p>