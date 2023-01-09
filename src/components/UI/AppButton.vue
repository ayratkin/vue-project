<template>
  <button class="appButton">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'app-button'
}
</script>

<style scoped>

.appButton {
  padding: 7px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid #82A4E1;
  transition: 0.3s all ease;

}

.appButton:hover {
  background-color: #82A4E1;
  transition: 0.3s all ease;
  color: white;
}

</style>