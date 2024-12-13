<template>
  <div class="widget-list">
    <template v-for="widget in widgets">
      <WidgetItem :key="widget.id" :widget="widget" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { mapMutations } from "vuex";
import WidgetItem from "./WidgetItem.vue";

export default Vue.extend({
  name: "widget-item-list",
  components: { WidgetItem },
  data() {
    return {
      loading: false,
      error: "",
    };
  },
  mounted() {
    this.fetchWidgets();
  },
  methods: {
    ...mapMutations(["setWidgets"]),
    async fetchWidgets(): Promise<void> {
      this.loading = true;
      this.error = "";
      try {
        const response = await axios.get(
          "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets"
        );
        this.setWidgets(response.data);
      } catch (err) {
        this.error = "Failed to load widgets. Please try again later.";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    widgets: {
      get() {
        return this.$store.state.widgets;
      },
    },
  },
});
</script>

<style scoped>
.widget-list {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .widget-list {
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }
}

@media (min-width: 769px) {
  .widget-list {
    flex-direction: row;
  }
}
</style>
