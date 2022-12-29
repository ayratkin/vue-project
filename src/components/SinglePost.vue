<template>
  <div class="post">
    <div>
      <div>Название:</div>
      {{ post.title }}
    </div>
    <div>
      <div>Описание:</div>
      {{ post.text }}
    </div>
  </div>

</template>

<script>
export default {

  props: {
    post: Object,
    required: true,
  }

}
</script>

<style scoped>

.post {
  display: flex;
  flex-direction: column;
  border: 2px solid darkolivegreen;
  margin: 15px;
  padding: 5px;

}

</style>