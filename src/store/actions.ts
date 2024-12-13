export const actions = {
  changeWidgetLinkedStatus(
    // eslint-disable-next-line @typescript-eslint/ban-types
    { commit }: { commit: Function },
    payload: { widgetId: number; linkedStatus: boolean }
  ) {
    commit("updateWidgetLinkedStatus", payload);
  },
  changeWidgetActiveStatus(
    // eslint-disable-next-line @typescript-eslint/ban-types
    { commit }: { commit: Function },
    payload: {
      widgetId: number;
    }
  ) {
    commit("updateWidgetActiveStatus", payload);
  },
  changeWidgetSelectedColor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    { commit }: { commit: Function },
    payload: {
      widgetId: number;
      selectedColor: "white" | "black" | "blue" | "green" | "beige";
    }
  ) {
    commit("updateWidgetSelectedColor", payload);
  },
};
