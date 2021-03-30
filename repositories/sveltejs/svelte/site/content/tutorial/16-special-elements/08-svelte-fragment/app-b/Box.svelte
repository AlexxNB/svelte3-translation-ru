<div class="box">
  <slot name="header">Заголовок не предоставлен</slot>
  <p>Любое содержимое между заголовком и футером</p>
  <slot name="footer" />
</div>

<style>
  .box {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 0 0 1em 0;

    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
