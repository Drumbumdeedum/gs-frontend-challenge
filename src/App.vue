<template>
  <div id="app">
    <BadgeActiveSwitch />
    <FormRadioButton :backgroundColor="'green'" />
    <FormRadioButton :backgroundColor="'blue'" />
    <FormRadioButton :backgroundColor="'red'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BadgeActiveSwitch from "./components/ui/BadgeActiveSwitch.vue";
import FormRadioButton from "./components/form/FormRadioButton.vue";

export default Vue.extend({
  name: "App",
  components: { BadgeActiveSwitch, FormRadioButton },
});
</script>
