<template>
  <label class="switch">
    <input
      id="badge-active-switch"
      aria-label="badge active switch"
      type="checkbox"
      @change="onChecked"
      :value="value"
      :checked="value"
    />
    <span class="slider"></span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "badge-active-switch",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    onChecked: {
      type: Function as PropType<(payload: Event) => void>,
      required: true,
    },
  },
});
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40.4px;
  height: 20.05px;
}

.switch input {
  opacity: 0;
}

.switch input:focus-visible + .slider {
  box-shadow: 0px 0px 0px 2px rgba(76, 175, 80, 0.8);
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  outline: 0.59px solid #afc6bd;
  transition: 0.3s;
  border-radius: 29.49px;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.3);
}

.slider::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  outline: 0.58978px solid #f2ebdb;
  transition: all 0.3s ease-in-out;
}

input:checked + .slider::before {
  outline: 0.68px solid #3b755f;
}

input:checked + .slider {
  background-color: #3b755f;
  outline: 0.68px solid #b0b0b0;
}

input:checked + .slider::before {
  transform: translateX(22px);
}

@media (hover: hover) {
  .switch:hover .slider::before {
    box-shadow: 0 0 0 6px rgba(59, 117, 95, 0.3);
  }
}
</style>
