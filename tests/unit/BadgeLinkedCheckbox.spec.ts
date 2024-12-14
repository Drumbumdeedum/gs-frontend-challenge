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

    expect(wrapper.find("input[type='checkbox']").exists()).toBe(true);
  });

  it("renders with the correct default checked state based on the value prop", async () => {
    const wrapper = mount(BadgeLinkedCheckbox, {
      propsData: {
        value: true,
        onChecked: jest.fn(),
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    const checkboxElement = checkbox.element as HTMLInputElement;
    expect(checkboxElement.checked).toBe(true);
    await wrapper.setProps({ value: false });
    expect(checkboxElement.checked).toBe(false);
  });

  it("calls onChecked when the checkbox is clicked", async () => {
    const onCheckedMock = jest.fn();
    const wrapper = mount(BadgeLinkedCheckbox, {
      propsData: {
        value: false,
        onChecked: onCheckedMock,
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    await checkbox.setChecked(true);
    expect(onCheckedMock).toHaveBeenCalled();
  });

  it("does not trigger onChecked if the checkbox is already in the desired state", async () => {
    const onCheckedMock = jest.fn();
    const wrapper = mount(BadgeLinkedCheckbox, {
      propsData: {
        value: true,
        onChecked: onCheckedMock,
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    await checkbox.setChecked(true);
    expect(onCheckedMock).not.toHaveBeenCalled();
  });

  it("is accessible and has a label for screen readers", () => {
    const wrapper = mount(BadgeLinkedCheckbox, {
      propsData: {
        value: false,
        onChecked: jest.fn(),
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    const label = wrapper.find("label");
    expect(checkbox.attributes("aria-labelledby")).toBe(label.attributes("id"));
  });
});
