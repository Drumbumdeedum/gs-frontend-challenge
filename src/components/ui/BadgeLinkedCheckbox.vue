<template>
  <div class="checkbox-wrapper">
    <label class="checkbox">
      <input
        id="badge-linked-checkbox"
        type="checkbox"
        v-bind="$attrs"
        @change="onChecked"
        :value="value"
        :checked="value"
      />
      <span class="checkbox-box">
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
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  inheritAttrs: true,
  name: "badge-linked-checkbox",
  props: {
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
.checkbox-wrapper {
  position: relative;

  .checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .checkbox input {
    opacity: 0;
    height: 16px;
    width: 16px;
    position: absolute;
    transform: translateX(50%) translateY(-50%);
    top: 31%;
    right: 33%;
  }

  .checkbox .checkbox-box {
    width: 14px;
    height: 14px;
    border: 2px solid #323232;
    color: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s;
    position: relative;
  }

  .checkbox .checkbox-box .checkmark {
    width: 14px;
    height: 14px;
    z-index: 3;
  }

  .checkbox input:checked + .checkbox-box {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: #ffffff;
  }

  .checkbox input:focus-visible {
    opacity: 100;
  }

  .checkbox::before {
    opacity: 0;
    z-index: 2;
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    background-color: #afc6bd;
    border-radius: 50%;
    transform: translateX(50%) translateY(-50%);
    top: 44%;
    right: 50%;
    transition: all 0.3s ease;
  }
  .checkbox:hover::before {
    opacity: 50%;
  }
}
</style>
