import { mount } from "@vue/test-utils";
import BadgeActiveSwitch from "@/components/ui/BadgeActiveSwitch.vue"; // Adjust import path if necessary

describe("BadgeActiveSwitch.vue", () => {
  it("renders with the checkbox unchecked when value is false", () => {
    const wrapper = mount(BadgeActiveSwitch, {
      propsData: {
        value: false,
        onChecked: jest.fn(),
      },
    });

    const input = wrapper.find("#badge-active-switch");
    const checkbox = input.element as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("renders with the correct default checked state based on the value prop", async () => {
    const wrapper = mount(BadgeActiveSwitch, {
      propsData: {
        value: true,
        onChecked: jest.fn(),
      },
    });

    const input = wrapper.find("#badge-active-switch");
    const checkbox = input.element as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
    await wrapper.setProps({ value: false });
    expect(checkbox.checked).toBe(false);
  });

  it("calls onChecked when the checkbox state is changed", async () => {
    const onCheckedMock = jest.fn();
    const wrapper = mount(BadgeActiveSwitch, {
      propsData: {
        value: false,
        onChecked: onCheckedMock,
      },
    });

    const input = wrapper.find("#badge-active-switch");
    const checkbox = input.element as HTMLInputElement;

    await input.setChecked(true);
    expect(onCheckedMock).toHaveBeenCalled();
    expect(checkbox.checked).toBe(true);

    await input.setChecked(false);
    expect(onCheckedMock).toHaveBeenCalledTimes(2);
    expect(checkbox.checked).toBe(false);
  });
});
