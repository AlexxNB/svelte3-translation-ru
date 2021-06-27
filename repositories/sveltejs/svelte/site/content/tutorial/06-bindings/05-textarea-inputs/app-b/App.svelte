<script>
	import marked from 'marked';
	let value = `Что-то написано *курсивом*, а что-то **жирным** шрифтом`;
</script>

{@html marked(value)}

<textarea bind:value />

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
