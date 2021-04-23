<script>
  import CustomButton from "./CustomButton.svelte";

  function handleClick() {
    alert("кнопка нажата");
  }
</script>

<CustomButton on:click={handleClick} />