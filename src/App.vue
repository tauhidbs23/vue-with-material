<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Post</router-link> |
      <router-link to="/category">Category</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

</style>
