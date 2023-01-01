<template>
  <input
      class="input"
      :value="modelValue"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: "app-input",

  props: {
    modelValue: [String, Number],
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  display: block;
  border: 2px solid darkolivegreen;
  margin: 5px 0 5px 0;
  padding: 5px;
  border: 3px solid #82A4E1;
  border-radius: 5px;
}

</style>