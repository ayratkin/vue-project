<template>
  <div>

    <PostForm
        @addPost="addPost"
    />
    <PostsList
        :posts="posts"
    />

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostsList from "@/components/PostsList";

export default {

  components: {
    PostForm, PostsList,
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'Some title 1', text: 'Some text 1'},
        {id: 2, title: 'Some title 2', text: 'Some text 2'},
        {id: 3, title: 'Some title 3', text: 'Some text 3'},
      ],
    }

  },

  methods: {
    addPost(post) {
      this.posts.push(post);

    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 18px;
}

</style>