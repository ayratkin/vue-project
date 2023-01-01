<template>
  <form class="form" @submit.prevent>
    <div class="fromTitle">Adding a new post</div>

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

        <app-button
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
  margin: 15px;
}

.fromTitle {
  font-weight: bold;
}


</style>