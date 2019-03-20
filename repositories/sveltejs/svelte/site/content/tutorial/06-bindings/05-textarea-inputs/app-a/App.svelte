<script>
	import marked from 'marked';
	let value = `Что-то написано *курсивом*, а что-то **жирным** шрифтом`;
</script>

<style>
	textarea { width: 100%; height: 200px; }
</style>

<textarea value={value}></textarea>

{@html marked(value)}