// tests/WidgetItemCard.spec.ts
import { mount } from "@vue/test-utils";
import WidgetItem from "@/components/WidgetItem.vue"; // Adjust the import path as needed

describe("WidgetItem", () => {
  it("should render the component", () => {
    const wrapper = mount(WidgetItem, {
      propsData: {
        widget: {
          id: 1,
          linked: false,
          active: false,
          selectedColor: "black",
          amount: 10,
          type: "carbon",
          action: "reduce carbon footprint",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
