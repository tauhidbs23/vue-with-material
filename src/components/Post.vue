<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>CREATE Post</md-dialog-title>

      <md-field>
        <label>Title</label>
        <md-input v-model="postDetails.title" md-counter="30"></md-input>
      </md-field>

      <md-field>
        <label>Category</label>
        <md-input v-model="postDetails.category" md-counter="30"></md-input>
      </md-field>

      <md-field>
        <label>Post Body</label>
        <md-input v-model="postDetails.details" md-counter="30"></md-input>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="addPost">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div>
      <md-button class="md-primary md-raised" @click="showDialog = true"
        >CREATE POST</md-button
      >
    </div>
    <ShowPost :posts="posts" />
  </div>
</template>

<script>
import ShowPost from "./ShowPost.vue";
export default {
  name: "Post",
  components: {
    ShowPost,
  },
  data() {
    return {
      posts: [],
      showDialog: false,
      postDetails: {
        id: "",
        title: "",
        category: "",
        details: "",
      },
    };
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      this.showDialog = false;

      const newPost = {
        id: Math.floor(Math.random() * 1000),
        title: this.postDetails.title,
        category: this.postDetails.category,
        details: this.postDetails.details,
      };

      console.log(newPost);

      this.posts = [...this.posts, newPost];

      this.postDetails.id = "";
      this.postDetails.title = "";
      this.postDetails.category = "";
      this.postDetails.details = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>