import Vue from "vue";
import Vuex from "vuex";
import Service from "../../../service/api.js";
import router from "../../../router/index.js";
import store from "@/store/store";

const UtilityModule = {
    namespaced: true,
    state: {
        status:[],
    },

    mutations: {
        objStatus(state, obj) {
            state.status = obj;
        },
    },

    actions: {
        onGetStatus({commit}) {
            Service.onGetStatus()
                .then((response) => {
                    console.log(response.data.data)
                    store.commit("utility/objStatus", response.data.data)
                }).catch((err) => {

            });
        }
    },

    getters: {
        objStatus(state) {
            return state.status;
        },

    },
};

export default UtilityModule;
