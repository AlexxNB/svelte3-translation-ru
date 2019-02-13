<script>
	let sy;
</script>

<!-- тут `sy` привязывается к текущему значению `window.scrollY` -->
<svelte:window bind:scrollY={sy}/>

<!-- попробуйте менять множитель для `sy` -
     чем ближе к 0, тем дальше будет казаться картинка -->
<div class="parallax-container">
	<img style="transform: translate(0,{-sy * 0.2}px)" src="https://www.firewatchgame.com/images/parallax/parallax0.png">
	<img style="transform: translate(0,{-sy * 0.3}px)" src="https://www.firewatchgame.com/images/parallax/parallax1.png">
	<img style="transform: translate(0,{-sy * 0.4}px)" src="https://www.firewatchgame.com/images/parallax/parallax3.png">
	<img style="transform: translate(0,{-sy * 0.5}px)" src="https://www.firewatchgame.com/images/parallax/parallax5.png">
	<img style="transform: translate(0,{-sy * 0.6}px)" src="https://www.firewatchgame.com/images/parallax/parallax7.png">
</div>

<div class="text">
	<small style="
		transform: translate(0,{-sy * 1.5}px);
		opacity: {1 - Math.max( 0, sy / 80 )}
	">(прокрути вниз)</small>
	<span>паралакс никогда не был так прост</span>
</div>

<style>
	.parallax-container {
		position: fixed;
		width: 2400px;
		height: 712px;
		left: 50%;
		transform: translate(-50%,0);
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}

	.text {
		position: relative;
		width: 100%;
		min-height: 100vh;
		color: white;
		text-align: center;
		padding: 50vh 0.5em 0.5em 0.5em;
		box-sizing: border-box;
	}

	.text::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to bottom, rgba(45,10,13,0) 60vh,rgba(45,10,13,1) 712px);
	}

	small {
		display: block;
		font-size: 4vw;
		will-change: transform, opacity;
	}

	.text span {
		font-size: 20vw;
		position: relative;
		z-index: 2;
	}

	:global(body) { margin: 0; padding: 0; }
</style>
