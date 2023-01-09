<template>
  <single-post
      v-for="post in posts"
      :post="post"
      @removePost="removePost"
  />

</template>

<script>

import SinglePost from "@/components/SinglePost";

export default {
  components: {SinglePost},

  props: {
    posts: {
      type: Array,
      required: true,
    }
  },

  methods: {
    removePost(id) {
      this.$emit('removePost', id)
    }
  }

}
</script>

<style scoped>

</style>