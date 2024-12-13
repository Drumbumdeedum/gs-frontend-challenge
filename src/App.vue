<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "./layouts/MainLayout.vue";

export default Vue.extend({
  name: "App",
  components: { MainLayout },
});
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
