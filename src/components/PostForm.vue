<template>
  <form class="form" @submit.prevent>
    <div class="formTitle">Adding a new task</div>

    <app-input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Write a title..."
    />
      <app-input
          v-model="post.text"
          class="input"
          type="text"
          placeholder="Write a desc..."
      />

        <app-button class="addPostBtn"
            @click="addPost"
        >
          Добавить
        </app-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        id: 0,
        title: '',
        text: '',
      }
    }
  },

  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('addPost', this.post);

      this.post = {
        title: '',
        text: '',
      }

    }
  }

}

</script>

<style scoped>

.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.formTitle {
  margin-bottom: 15px;
}

.addPostBtn {
  margin-top: 15px;
}

</style>