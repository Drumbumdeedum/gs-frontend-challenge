<template>
  <div class="radio-button-container">
    <label :for="`${id}-${index}-${colorName}-radio-buton`">
      <input
        :id="`${id}-${index}-${colorName}-radio-buton`"
        :aria-label="`${colorName} radio button`"
        type="radio"
        name="badge-theme"
        :style="{ backgroundColor }"
        :checked="checked"
        :value="value"
        @change="onChange"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "form-radio-button",
  props: {
    id: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    colorName: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    onChecked: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onChange() {
      this.onChecked(this.colorName);
    },
  },
});
</script>

<style scoped>
.radio-button-container {
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    outline: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    box-shadow: 0px 4px 4px 0px #00000003;
    border: 1.5px solid transparent;
    transition: border 0.3s ease-in-out;
    border-radius: 0px;
  }

  @media (hover: hover) {
    input[type="radio"]:hover {
      opacity: 0.8;
    }
  }

  input[type="radio"]:checked {
    border: 1.5px solid #b0b0b0;
  }
}
</style>
