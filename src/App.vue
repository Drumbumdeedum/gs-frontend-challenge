<template>
  <div id="app">
    <BadgeActiveSwitch />
    <BadgeColorSelector />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BadgeActiveSwitch from "./components/ui/BadgeActiveSwitch.vue";
import BadgeColorSelector from "./components/form/BadgeColorSelector.vue";

export default Vue.extend({
  name: "App",
  components: { BadgeActiveSwitch, BadgeColorSelector },
});
</script>
