<template>
  <div id="app">
    <BadgeLinkedCheckbox />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BadgeLinkedCheckbox from "./components/ui/BadgeLinkedCheckbox.vue";

export default Vue.extend({
  name: "App",
  components: { BadgeLinkedCheckbox },
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
