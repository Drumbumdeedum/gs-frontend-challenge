<template>
  <form>
    <FormRadioButton :backgroundColor="'green'" />
    <FormRadioButton :backgroundColor="'blue'" />
    <FormRadioButton :backgroundColor="'red'" />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import FormRadioButton from "./FormRadioButton.vue";

export default Vue.extend({
  name: "badge-color-selector",
  components: { FormRadioButton },
  props: {},
});
</script>

<style scoped>
form {
  display: flex;
  gap: 4px;
}
</style>
