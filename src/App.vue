<template>
  <div id="app">
    <IconInfo />
    <GreenSparkLogo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconInfo from "./components/icons/IconInfo.vue";
import GreenSparkLogo from "./components/icons/GreenSparkLogo.vue";

export default Vue.extend({
  name: "App",
  components: { GreenSparkLogo, IconInfo },
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
