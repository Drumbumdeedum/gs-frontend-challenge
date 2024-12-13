import { RootState } from "./types";
import { Widget } from "@/types";

export const mutations = {
  setWidgets(state: RootState, widgets: Widget[]) {
    state.widgets = widgets;
  },
};
