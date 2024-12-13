import { mount } from "@vue/test-utils";
import BadgeLinkedCheckbox from "@/components/ui/BadgeLinkedCheckbox.vue";

describe("BadgeLinkedCheckbox.vue", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(BadgeLinkedCheckbox, {
      propsData: {
        value: false,
        onChecked: jest.fn(),
      },
    });

    // Check if the checkbox wrapper is rendered
    expect(wrapper.find(".checkbox").exists()).toBe(true);
  });
});
