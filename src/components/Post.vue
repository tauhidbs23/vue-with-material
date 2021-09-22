<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>CREATE Post</md-dialog-title>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="showDialog = false"
          >Save</md-button
        >
      </md-dialog-actions>
    </md-dialog>
    <div>
      <md-button class="md-primary md-raised" @click="showDialog = true"
        >CREATE POST</md-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data: () => ({
    showDialog: false,
  }),
};
</script>

<style lang="scss" scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>