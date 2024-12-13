<template>
  <div class="main-container">
    <div class="widget-container">
      <header>
        <h1>Per product widgets</h1>
      </header>
      <main><WidgetItemList /></main>
    </div>
  </div>
</template>

<script lang="ts">
import WidgetItemList from "@/components/WidgetItemList.vue";
import Vue from "vue";
export default Vue.extend({
  name: "main-layout",
  components: { WidgetItemList },
});
</script>

<style scoped>
.main-container {
  box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05),
    0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
    0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
    0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
    0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
  border-radius: 8px;
  background: #f9f9f9;

  header {
    border-bottom: 2px solid #b0b0b0;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }

  .widget-container {
    padding: 36px;
    @media (max-width: 768px) {
      width: 258px;
    }

    @media (min-width: 769px) {
      width: 779px;
    }
  }
}
</style>
