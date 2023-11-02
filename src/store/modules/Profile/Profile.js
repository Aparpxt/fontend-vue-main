import Vue from "vue";
import Vuex from "vuex";
import Service from "../../../service/api.js";
import router from "../../../router/index.js";
import store from "@/store/store";

const LoginModule = {
    namespaced: true,
    state: {
        profileSidbar:{
            show:true,
            imageProfile:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            profile: [{
                key:"Code : ",
                value:"61360131"
            },{
                key:"Name : ",
                value:"Saksith Rittanasatheiyn"
            }]
        },
        profile: {}
    },

    mutations: {
        objProfileSidbar(state, obj) {
            state.profileSidbar = obj;
        },



        setProfile(state, obj) {
            state.profile = obj;
        }
    },

    actions: {
        onGetPrfile({commit}, body) {
            Service.onGetPrfile(body)
                .then((response) => {
                    console.log(response.data.data)
                    store.commit("profile/setProfile", response.data.data)

                }).catch((err) => {

            });
        }




    },

    getters: {
        objProfileSidbar(state) {
            return state.profileSidbar;
        },

        profile(state) {
            return state.profile;
        },

    },
};
export default LoginModule;
