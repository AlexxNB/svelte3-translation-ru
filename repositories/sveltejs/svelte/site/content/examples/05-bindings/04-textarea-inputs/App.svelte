<script>
	import marked from 'marked';
	let text = `Что-то написано *курсивом*, а что-то **жирным** шрифтом`;
</script>

<textarea bind:value={text}></textarea>

{@html marked(text)}

<style>
	textarea { width: 100%; height: 200px; }
</style>