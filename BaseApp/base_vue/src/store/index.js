import { createStore } from 'vuex'
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import modules from "@/store/modules";
import getter from "@/store/getter";
export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules,
  getters:getter,
})
