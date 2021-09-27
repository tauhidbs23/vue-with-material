<template>
  <div>
    <md-table class="md-table-area">
      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>
      <md-table-row v-for="item in category" :key="item.id">
        <md-table-cell>{{ item.name }}</md-table-cell>
        <md-table-cell>
          <span class="material-icons" @click="editCategory1(item.id)">
            edit
          </span>
          <span class="material-icons" @click="deleteCategory1(item.id)"
            >delete</span
          >
        </md-table-cell>
      </md-table-row>
    </md-table>

    <!-- <p>show all the category</p> -->
    <!-- <ul>
      <li v-for="item in category" :key="item.id">
        {{ item.name }}
      </li>
    </ul> -->
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
  methods: {
    editCategory1(id) {
      console.log("edit category", id);
    },
    deleteCategory1(id) {
      console.log('delete category',id);
    },
  },
};
</script>

<style>
</style>