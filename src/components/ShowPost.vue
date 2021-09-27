<template>
  <div>
    <md-content>
      <md-table class="md-table-area">
        <md-table-row>
          <md-table-head>Title</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
        <md-table-row v-for="post in posts" :key="post.id">
          <md-table-cell>{{ post.title }}</md-table-cell>
          <md-table-cell>
            <span class="material-icons"  @click="openNew(post.id)"> open_in_full </span>
            <span class="material-icons" @click="editPost1(post.id)"> edit </span>
            <span class="material-icons" @click="deletePost1(post.id)"> delete </span>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </md-content>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ShowPost",
  props: {
    posts: Array,
  },
  methods: {
    ...mapActions(["deletePost"]),
    deletePost1(id) {
      console.log("delete ", id);
    },
    editPost1(id) {
      console.log("edit ", id);
    },
    openNew(id) {
      console.log("open new tab ", id);
    },
  },
};
</script>

<style>
.icon-transform {
  pointer-events: none;
}
</style>