<script>
	import Modal from './Modal.svelte';

	let showModal = true;
</script>


{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			Окно
			<small><em>существительное</em>  окно́</small>
		</h2>

		<ol class="definition-list">
			<li>Отверстие в стене здания для света и воздуха.</li>
			<li>Ничем не заполненный перерыв, пробел между уроками, лекциями, ведущий к потере времени преподавателя или учащихся.</li>
			<li>Остаток водоема, открытое углубление в болоте, трясине.</li>
			<li>Место, через которое можно выйти куда-нибудь, увидеть что-нибудь, завязать сношения с чем-нибудь, принять участие в чем-нибудь</li>
		</ol>

		<a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C_%D0%A3%D1%88%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0">Толковый словарь Ушакова</a>
	</Modal>
{:else}
	<button on:click="{() => showModal = true}">
		показать всплывающее окно
	</button>
{/if}