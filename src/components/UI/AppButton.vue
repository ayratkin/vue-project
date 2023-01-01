<template>
  <button class="myButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'app-button'
}
</script>

<style scoped>

.myButton {
  padding: 7px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid #82A4E1;
}

</style>