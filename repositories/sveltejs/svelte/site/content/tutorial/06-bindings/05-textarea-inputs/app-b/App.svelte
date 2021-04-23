<script>
	import marked from 'marked';
	let value = `Что-то написано *курсивом*, а что-то **жирным** шрифтом`;
</script>

<textarea bind:value></textarea>

{@html marked(value)}

<style>
	textarea { width: 100%; height: 200px; }
</style>