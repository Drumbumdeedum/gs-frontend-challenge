<template>
  <div class="tooltip">
    <span class="tooltip-wrapper">
      <section class="tooltip-content">
        <div class="tooltip-text">
          <p>
            {{ message }}
          </p>
          <a href="">View public profile</a>
        </div>
      </section>
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "hover-tooltip",
  props: {
    message: {
      type: String,
      required: true,
      default: "Default tooltip message!",
    },
  },
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
}

.tooltip-wrapper {
  visibility: hidden;
  opacity: 0;
  cursor: auto;
  text-align: center;
  padding: 5px 10px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: opacity 0.3s;
  .tooltip-content {
    width: 248px;
    height: 162px;
    background: #ffffff;
    box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05),
      0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
      0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
      0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
      0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
      0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
    gap: 12px;
    border-radius: 4px;
    .tooltip-text {
      padding: 24px 16px 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      p {
        color: #212121;
        width: 216px;
      }
      a {
        font-weight: 700;
        font-size: 14px;
        color: #3b755f;
        text-decoration: none;
      }
    }
  }
}

.tooltip:hover .tooltip-wrapper,
.tooltip:focus .tooltip-wrapper {
  visibility: visible;
  opacity: 1;
}
</style>
