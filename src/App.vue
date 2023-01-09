<template>
  <div class="appWrapper">
    <router-view></router-view>

    <PostForm @addPost="addPost" />
    <p v-if="posts.length == 0" class="placeholder">
      Tasks list is clear.
    </p>
    <PostsList 
      v-if="!isPostsLoading"
      :posts="posts" 
      @removePost="removePost"
     />
     <p class="placeholder" v-else>loading data from server...</p>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostsList from "@/components/PostsList";
import axios from 'axios'

export default {

  components: {
    PostForm, PostsList,
  },

  data() {
    return {
      posts: [],
      isPostsLoading: true,
    }

  },

  methods: {
    addPost(post) {
      if (post.title != 0 && post.text != 0) {
        this.posts.push(post);
      } else {
        alert('Please, write the task text')
      }
    },

    removePost(id) {
      this.posts = this.posts.filter(post => post.id != id)
    },

    setPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout( async () => {
          await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => this.posts = response.data);
            this.isPostsLoading = false;
        }, 3000);

      } catch (e) {
        console.log('Error')
      }


    }
  },

  mounted() {
    this.setPosts();
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

.appWrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
}

.placeholder {
  margin-top: 20px;
  text-align: center;
}
</style>