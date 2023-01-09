<template>
  <div class="post">
    <div class="column">
      <div class="titleWrapper">
        <p class="title">Название: </p>
        <p class="titleText"> {{ post.title }} </p>
      </div>
      <div class="descWrapper">
        <p class="title">Описание: </p>
        <p class="descText">{{ post.text }}</p>
      </div>
    </div>
    <div class="column">
      <app-button @click="removePost">
        Удалить
      </app-button>
    </div>
  </div>

</template>

<script>
export default {

  props: {
    post: Object,
    required: true,
  },

  methods: {
    removePost() {
      this.$emit('removePost', this.post.id);
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid #82A4E1;
}

.title {
  display: inline;
}

.titleText {
  display: inline;
}

.descText {
  display: inline;
}

</style>