<template>
  <div>
    <md-content>
      <div class="md-layout md-gutter post-heading">
        <div class="md-layout-item">
          <h3>All Categories</h3>
        </div>
        <div class="md-layout-item">
          <md-button class="md-primary md-raised" @click="showDialog = true"
            >CREATE CATEGORY</md-button
          >
        </div>
      </div>
    </md-content>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>
        <span class="md-title">CREATE Category</span>
      </md-dialog-title>

      <md-field>
        <label>Name</label>
        <md-input v-model="name"></md-input>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="addCategory">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!-- here show all the category  -->
    <ShowCategory :category="category" />
  </div>
</template>

<script>
import ShowCategory from "./ShowCategory.vue";
export default {
  name: "Category",
  components: {
    ShowCategory
  },
  data() {
    return {
      category: [],
      name: "",
      id: "",
      showDialog: false,
    };
  },
  methods: {
    addCategory(e) {
      this.showDialog = false;

      e.preventDefault();
      const newCategory = {
        id: Math.floor(Math.random() * 1000),
        name: this.name,
      };
      console.log(newCategory);
      console.log("click add category function");

      this.category = [...this.category, newCategory];

      this.name = "";
      this.id = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>