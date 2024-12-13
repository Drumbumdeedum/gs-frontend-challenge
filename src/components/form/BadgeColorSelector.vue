<template>
  <form>
    <FormRadioButton
      v-for="(badgeColor, index) in badgeColors"
      v-bind:key="badgeColor.name"
      :index="index"
      :colorName="badgeColor.name"
      :backgroundColor="badgeColor.color"
      :checked="badgeColor.name === selectedColor"
      :value="badgeColor.name === selectedColor"
      :onChecked="onChange"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import FormRadioButton from "./FormRadioButton.vue";

export default Vue.extend({
  name: "badge-color-selector",
  components: { FormRadioButton },
  props: {
    selectedColor: {
      type: String,
      required: true,
      default: "blue",
    },
    onColorChange: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      selectedValue: null as string | null,
      badgeColors: [
        {
          name: "blue",
          color: "#2E3A8C",
        },
        {
          name: "green",
          color: "#3B755F",
        },
        {
          name: "beige",
          color: "#F2EBDB",
        },
        {
          name: "white",
          color: "#FFFFFF",
        },
        {
          name: "black",
          color: "#212121",
        },
      ],
    };
  },
  methods: {
    onChange(color: string) {
      this.onColorChange(color);
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
</style>
