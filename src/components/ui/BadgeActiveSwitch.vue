<template>
  <label class="switch">
    <input type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "badge-active-switch",
});
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40.11px;
  height: 20.05px;
  left: 0.29px;
}

.switch input {
  opacity: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f9f9f9;
  outline: 0.58978px solid #afc6bd;
  box-shadow: inset 0px 0.884669px 5.8978px rgba(0, 0, 0, 0.15);
  border-radius: 29.489px;
  transition: 0.3s;
}

.slider::before {
  position: absolute;
  content: "";
  width: 20.05px;
  height: 20.05px;
  left: 0px;
  top: 0px;
  background: #f9f9f9;
  outline: 0.58978px solid #f2ebdb;
  box-shadow: 0px 0px 1.17956px rgba(0, 0, 0, 0.35);
  border-radius: 29.489px;
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

.switch:hover .slider::before {
  box-shadow: 0 0 0 5px rgba(59, 117, 95, 0.3);
}
</style>
