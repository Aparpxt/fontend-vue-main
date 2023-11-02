import router from "@/router/index.js";
import store from "@/store/store";

const DialogModule = {
  namespaced: true,
  state: {
    dialog: {
      color: "danger",
      title: " ",
      message: "",
      status:false
    },
    loading:false

  },

  mutations: {
    onLoading(state, data) {
      state.loading = data
    },

    onDialogMessage(state, data) {
      state.dialog = data
    },
  },

  actions: {

  },

  getters: {
    onGetMessageDialog(state) {
      return state.dialog
    },
    onGetLoading(state) {
      return state.loading
    }
  },
};

export default DialogModule;
