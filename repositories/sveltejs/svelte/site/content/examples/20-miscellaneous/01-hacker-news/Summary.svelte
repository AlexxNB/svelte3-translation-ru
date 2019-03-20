<script>
	export let item;
	export let i;
	export let offset;

	function comment_text() {
		const c = item.comments_count;
		const cases = [2, 0, 1, 1, 1, 2]; 
		const titles = ['комментарий','комментария','комментариев'] 
		const text =  titles[ (c%100>4 && c%100<20)? 2 : cases[(c%10<5)?c%10:5] ]; 
		return `${c} ${text}`;
	}
</script>

<style>
	article {
		position: relative;
		padding: 0 0 0 2em;
		border-bottom: 1px solid #eee;
	}

	h2 {
		font-size: 1em;
		margin: 0.5em 0;
	}

	span {
		position: absolute;
		left: 0;
	}

	a {
		color: #333;
	}
</style>

<article>
	<span>{i + offset + 1}</span>
	<h2><a target="_blank" href={item.url}>{item.title}</a></h2>
	<p class="meta"><a href="#/item/{item.id}">{comment_text()}</a> от {item.user} {item.time_ago}</p>
</article>