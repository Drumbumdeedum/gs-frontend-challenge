import { mount } from "@vue/test-utils";
import WidgetItem from "@/components/WidgetItem.vue";

const mockChangeWidgetLinkedStatus = jest.fn();

describe("WidgetItem", () => {
  /* TEST CASE 1 */
  it("Renders a widget item with props: black, 10, carbon, offsets", async () => {
    const wrapper = mount(WidgetItem, {
      propsData: {
        widget: {
          id: 1,
          linked: false,
          active: false,
          selectedColor: "black",
          amount: 10,
          type: "carbon",
          action: "offsets",
        },
        mocks: {
          $store: {
            dispatch: mockChangeWidgetLinkedStatus,
          },
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("10kgs of carbon");
    expect(wrapper.find("h3").text()).toBe("This product offsets");

    const vm = wrapper.vm as Vue & {
      headerText: string;
      subheaderText: string;
    };
    expect(vm.headerText).toBe("10kgs of carbon");
    expect(vm.subheaderText).toBe("This product offsets");
  });

  /* TEST CASE 2 */
  it("Renders a widget item with props: green, 2, trees, plants", async () => {
    const wrapper = mount(WidgetItem, {
      propsData: {
        widget: {
          id: 1,
          linked: false,
          active: false,
          selectedColor: "green",
          amount: 2,
          type: "trees",
          action: "plants",
        },
        mocks: {
          $store: {
            dispatch: mockChangeWidgetLinkedStatus,
          },
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("2 trees");
    expect(wrapper.find("h3").text()).toBe("This product plants");

    const vm = wrapper.vm as Vue & {
      headerText: string;
      subheaderText: string;
    };
    expect(vm.headerText).toBe("2 trees");
    expect(vm.subheaderText).toBe("This product plants");
  });
});

/* TEST CASE 3 */
it("Renders a widget item with props: beige, 300, plastic, collects", async () => {
  const wrapper = mount(WidgetItem, {
    propsData: {
      widget: {
        id: 1,
        linked: false,
        active: false,
        selectedColor: "green",
        amount: 300,
        type: "plastic",
        action: "collects",
      },
      mocks: {
        $store: {
          dispatch: mockChangeWidgetLinkedStatus,
        },
      },
    },
  });

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find("h2").text()).toBe("300 plastic bottles");
  expect(wrapper.find("h3").text()).toBe("This product collects");

  const vm = wrapper.vm as Vue & {
    headerText: string;
    subheaderText: string;
  };
  expect(vm.headerText).toBe("300 plastic bottles");
  expect(vm.subheaderText).toBe("This product collects");
});
