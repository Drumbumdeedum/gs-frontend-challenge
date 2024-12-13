import { RootState } from "./types";
import { Widget } from "@/types";

export const mutations = {
  setWidgets(state: RootState, widgets: Widget[]) {
    state.widgets = widgets;
  },
  updateWidgetLinkedStatus(
    state: RootState,
    { widgetId, linkedStatus }: { widgetId: number; linkedStatus: boolean }
  ) {
    const widget = state.widgets.find((w) => w.id === widgetId);
    if (widget) {
      widget.linked = linkedStatus;
    }
  },
};
