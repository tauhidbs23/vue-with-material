<template>
  <div>
    <md-table class="md-table-area">
      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>

      <md-table-row v-for="item in category" :key="item.id">
        <md-table-cell>{{ item.name }}</md-table-cell>
        <span class="icons-area">
          <md-table-cell>
            <span>
              <md-icon class="fa fa-edit"></md-icon>
              <md-icon class="fa fa-trash"></md-icon>
            </span>
          </md-table-cell>
        </span>

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
};
</script>

<style>
</style>