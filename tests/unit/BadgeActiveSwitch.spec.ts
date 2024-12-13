import { mount } from "@vue/test-utils";
import BadgeActiveSwitch from "@/components/ui/BadgeActiveSwitch.vue"; // Adjust import path if necessary

describe("BadgeActiveSwitch.vue", () => {
  // Test 1: Ensure the switch is initially unchecked
  it("renders with the checkbox unchecked when value is false", () => {
    const wrapper = mount(BadgeActiveSwitch, {
      propsData: {
        value: false,
        onChecked: jest.fn(),
      },
    });

    const input = wrapper.find("#badge-active-switch");
    const checkbox = input.element as HTMLInputElement; // Cast to HTMLInputElement
    expect(checkbox.checked).toBe(false);
  });
});
