import { createStore } from 'vuex'
import eventStore from "./event/event.store";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    eventStore: eventStore
  }
})
