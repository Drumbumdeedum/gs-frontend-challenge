<template>
  <div class="checkbox-container">
    <input
      :id="`badge-linked-checkbox-${id}`"
      aria-label="Badge linked checkbox"
      type="checkbox"
      v-bind="$attrs"
      @change="onChecked"
      :value="value"
      :checked="value"
    />
    <label :for="`badge-linked-checkbox-${id}`">
      <svg
        class="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 12l4 4L18 6" />
      </svg>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  inheritAttrs: true,
  name: "badge-linked-checkbox",
  props: {
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    onChecked: {
      type: Function as PropType<(payload: Event) => void>,
      required: true,
    },
  },
});
</script>

<style scoped>
.checkbox-container {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #323232;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s;
    position: relative;
    margin: 0 auto;
  }

  input[type="checkbox"]::before {
    opacity: 0;
    z-index: 2;
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    background-color: #afc6bd;
    border-radius: 50%;
    transform: translateX(50%) translateY(-50%);
    top: 50%;
    right: 50%;
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    input[type="checkbox"]:hover::before {
      opacity: 50%;
    }
  }

  input[type="checkbox"]:focus-visible {
    outline-color: rgba(76, 175, 80, 0.8);
  }

  .checkmark {
    pointer-events: none;
    display: none;
    width: 18px;
    height: 18px;
    color: #ffffff;
    z-index: 100;
    position: absolute;
    transform: translateX(50%) translateY(-50%);
    top: 53%;
    right: 50%;
  }

  input[type="checkbox"]:checked {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: #ffffff;
  }

  input[type="checkbox"]:checked + label {
    .checkmark {
      display: inline;
    }
  }
}
</style>
