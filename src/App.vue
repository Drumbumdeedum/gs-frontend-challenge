<template>
  <div id="app">
    <BadgeActiveSwitch />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BadgeActiveSwitch from "./components/ui/BadgeActiveSwitch.vue";

export default Vue.extend({
  name: "App",
  components: { BadgeActiveSwitch },
});
</script>
