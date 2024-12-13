<template>
  <article class="widget-item-card">
    <header :style="computedStyle">
      <div class="header-content">
        <div class="header-logo">
          <GreenSparkLogo />
        </div>
        <div class="header-text">
          <h3>{{ subheaderText }}</h3>
          <h2>{{ headerText }}</h2>
        </div>
      </div>
    </header>
    <section>
      <div class="settings-option">
        <label class="setting-label">
          Link to public profile
          <span class="info-icon">
            <HoverTooltip :message="tooltipMessage">
              <IconInfo />
            </HoverTooltip>
          </span>
        </label>
        <div class="setting-control">
          <BadgeLinkedCheckbox
            :value="widget.linked"
            :onChecked="onLinkChecked"
          />
        </div>
      </div>
      <div class="settings-option">
        <label class="setting-label">Badge colour</label>
        <div class="setting-control">
          <BadgeColorSelector
            :selectedColor="widget.selectedColor"
            :onColorChange="onColorChanged"
          />
        </div>
      </div>
      <div class="settings-option">
        <label class="setting-label">Activate badge</label>
        <div class="setting-control">
          <BadgeActiveSwitch
            :value="widget.active"
            :onChecked="onActiveChecked"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { Widget } from "@/types";
import BadgeActiveSwitch from "./ui/BadgeActiveSwitch.vue";
import BadgeColorSelector from "./form/BadgeColorSelector.vue";
import BadgeLinkedCheckbox from "./ui/BadgeLinkedCheckbox.vue";
import GreenSparkLogo from "./icons/GreenSparkLogo.vue";
import IconInfo from "./icons/IconInfo.vue";
import { mapActions } from "vuex";
import HoverTooltip from "./ui/HoverTooltip.vue";

export default Vue.extend({
  name: "widget-item",
  components: {
    BadgeActiveSwitch,
    BadgeColorSelector,
    BadgeLinkedCheckbox,
    GreenSparkLogo,
    HoverTooltip,
    IconInfo,
  },
  props: {
    widget: {
      type: Object as () => Widget,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      "changeWidgetLinkedStatus",
      "changeWidgetActiveStatus",
      "changeWidgetSelectedColor",
    ]),
    onLinkChecked() {
      this.changeWidgetLinkedStatus({
        widgetId: this.widget.id,
        linkedStatus: !this.widget.linked,
      });
      console.log(this.$store.state.widgets.map((w: Widget) => w.linked));
    },
    onActiveChecked() {
      this.changeWidgetActiveStatus({
        widgetId: this.widget.id,
      });
      console.log(this.$store.state.widgets.map((w: Widget) => w.active));
    },
    onColorChanged(selectedColor: string) {
      this.changeWidgetSelectedColor({
        widgetId: this.widget.id,
        selectedColor,
      });
      console.log(
        this.$store.state.widgets.map((w: Widget) => w.selectedColor)
      );
    },
  },
  computed: {
    subheaderText(): string {
      return `This product ${this.widget.action}`;
    },
    headerText(): string {
      switch (this.widget.type) {
        case "carbon":
          return `${this.widget.amount}kgs of ${this.widget.type}`;
        case "plastic":
          return `${this.widget.amount} ${this.widget.type} bottles`;
        case "trees":
          return `${this.widget.amount} ${this.widget.type}`;
        default:
          return "Unknown type";
      }
    },
    tooltipMessage() {
      return "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";
    },
    computedStyle() {
      switch (this.widget.selectedColor) {
        case "black":
          return { backgroundColor: "#212121", color: "#f9f9f9" };
        case "white":
          return { backgroundColor: "#ffffff", color: "#3b755f" };
        case "blue":
          return { backgroundColor: "#2e3a8c", color: "#f9f9f9" };
        case "green":
          return { backgroundColor: "#3b755f", color: "#f9f9f9" };
        case "beige":
          return { backgroundColor: "#f2ebdb", color: "#3b755f" };
        default:
          return {};
      }
    },
  },
});
</script>

<style scoped>
.widget-item-card {
  display: flex;
  flex-direction: column;
  gap: 10px;

  header {
    display: flex;
    border-radius: 5.95px;
    height: 66px;
    align-items: center;
    gap: 16px;

    .header-content {
      display: flex;
      align-items: center;
      .header-logo {
        padding: 0 11.91px;
      }
      .header-text {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 3.97px;
        h2 {
          font-size: 17.86px;
        }
        h3 {
          font-size: 12.41px;
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .settings-option {
      width: 221px;
      display: flex;

      .setting-label {
        display: flex;
        align-items: center;
        gap: 2px;
        color: var(--primary-color);
        .info-icon {
          display: flex;
          align-items: start;
          flex-direction: column;
          height: 100%;
        }
      }

      .setting-control {
        flex-grow: 1;
        display: flex;
        justify-content: end;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 221.32px;
  }
}
</style>
