export const actions = {
  changeWidgetLinkedStatus(
    // eslint-disable-next-line @typescript-eslint/ban-types
    { commit }: { commit: Function },
    payload: { widgetId: number; linkedStatus: boolean }
  ) {
    commit("updateWidgetLinkedStatus", payload);
  },
};
