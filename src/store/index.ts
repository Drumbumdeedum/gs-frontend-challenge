import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    widgets: [],
  },
  mutations,
  actions,
  getters: {},
  modules: {},
};

export default new Vuex.Store(store);
