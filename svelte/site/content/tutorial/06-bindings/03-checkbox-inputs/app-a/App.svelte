<script>
	let yes = false;
</script>

<label>
	<input type=checkbox checked={yes}>
	Да, я хочу получать спам на почту!
</label>

{#if yes}
	<p>Спасибо! Мы будем слать вам тонны спама и продадим ваши личные данные.</p>
{:else}
	<p>Пожалуйста, поставьте галочку. Если вы ни за что не платите, то сами являетесь товаром.</p>
{/if}

<button disabled={!yes}>
	Подписаться
</button>