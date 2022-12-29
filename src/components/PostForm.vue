<template>
  <form class="form" @submit.prevent>
    <div class="fromTitle">Adding a new post</div>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Write a title...">
    <input
        v-model="post.text"
        class="input"
        type="text"
        placeholder="Write a desc...">
    <button
        class="addPostBtn"
        @click="addPost">
      Add post
    </button>
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
    addPost(){
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

.input {
  display: block;
  border: 2px solid darkolivegreen;
  margin: 5px 0 5px 0;
  padding: 5px;
}

.addPostBtn {
  padding: 5px;
}

</style>