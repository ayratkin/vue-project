<template>
  <single-post
      v-for="post in posts"
      :post="post"
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
  }

}
</script>

<style scoped>

</style>