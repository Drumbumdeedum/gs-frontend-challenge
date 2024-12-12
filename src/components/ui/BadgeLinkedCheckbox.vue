<template>
  <div class="checkbox-wrapper">
    <label class="checkbox">
      <input type="checkbox" />
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
      <span class="label-text">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "badge-linked-checkbox",
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
    display: none;
  }

  .checkbox .checkbox-box {
    width: 18px;
    height: 18px;
    border: 2px solid #212121;
    color: transparent;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s;
    position: relative;
  }

  .checkbox .checkbox-box .checkmark {
    width: 16px;
    height: 16px;
    z-index: 3;
  }

  .checkbox input:checked + .checkbox-box {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: #ffffff;
  }

  .checkbox::before {
    opacity: 0;
    z-index: 2;
    content: "";
    position: absolute;
    width: 44px;
    height: 44px;
    background-color: #afc6bd;
    border-radius: 50%;
    top: 0%;
    transform: translateX(50%) translateY(-50%);
    top: 50%;
    right: 50%;
    transition: all 0.3s ease;
  }
  .checkbox:hover::before {
    opacity: 50%;
  }
}
</style>
