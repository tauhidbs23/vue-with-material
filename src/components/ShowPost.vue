<template>
  <div>
    <md-content>
      <ul class="listStyle">
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
          
          <md-divider></md-divider>
        </li>
      </ul>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "ShowPost",
  props: {
    posts: Array,
  },
};
</script>

<style>
.listStyle {
  list-style: none;
}
</style>