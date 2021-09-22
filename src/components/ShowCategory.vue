<template>
  <div>
    <!-- <p>show all the category</p> -->
    <ul>
      <li v-for="item in category" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowCategory",
  props: {
    category: Array,
  },
  created() {
    console.log("hi", this.category);
  },
};
</script>

<style>
</style>