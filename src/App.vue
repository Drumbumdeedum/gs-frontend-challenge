<template>
  <div id="app">
    <BadgeActiveSwitch />
    <BadgeColorSelector />
    <BadgeLinkedCheckbox />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BadgeActiveSwitch from "./components/ui/BadgeActiveSwitch.vue";
import BadgeColorSelector from "./components/form/BadgeColorSelector.vue";
import BadgeLinkedCheckbox from "./components/ui/BadgeLinkedCheckbox.vue";

export default Vue.extend({
  name: "App",
  components: { BadgeActiveSwitch, BadgeColorSelector, BadgeLinkedCheckbox },
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
