import Vue from "vue";
import Vuex from "vuex";
import Service from "../../../service/api.js";
import store from '@/store/store'
import router from '@/router/index'

const LoginModule = {
    namespaced: true,
    state: {
        objJwt: {},
        token: null,
        user: null,
        username: null,
        isUserLoggedIn: false,
        dialog: {
            statue: true,
            title: "",
            message: ""
        }

    },

    mutations: {
        setDialog(state, obj) {

            var dialog = {};
            dialog.statue = true
            dialog.title = "ข้อผิดพลาดในการเข้าสู่ระบบ"
            dialog.message = obj.msg

            state.dialog = dialog;
        },
        setToken(state, token) {
            state.token = token;
            state.isUserLoggedIn = !!token;
        },
        setUser(state, user) {
            state.user = user;
        },
        setUsername(state, username) {
            state.username = username;
        },
        clear(state) {
            state.token = null;
            state.user = null;
            state.isUserLoggedIn = false
        }
    },

    actions: {

        onGetSettingMessage({commit}, body) {
            Service.onGetSettingMessage(body)
                .then((response) => {

                }).catch((err) => {

            });
        },

        onSettingMessage({commit}, body) {
            Service.onSettingMessage(body)
                .then((response) => {

                }).catch((err) => {

            });
        },

        onLogin({commit}, body) {
            Service.onLogin(body)
                .then((response) => {

                    var decodedString = atob(response.data.token.split('.')[1]);
                    var obj = JSON.parse(decodedString);

                    if (response.data.status == "success") {
                        store.commit("auth/setToken", response.data.token);
                        store.commit("auth/setUser", obj.user_claims.data);
                        store.commit("auth/setUsername", obj.user_claims.data.username);

                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('username', obj.user_claims.data.username);

                        Service.onSetToken();
                        store.dispatch("auth/onCheckGroups",{})

                    }
                }).catch((err) => {
                console.log(err)
                switch (err.response.data.code) {
                    // case 40100 :
                    //     router.push('/login')
                    //     break
                    default :
                        commit("setDialog", err.response.data)
                        break
                }
            });
        },

        onCheckGroups({commit}, body){
            Service.onCheckgroup().then((response) => {

                var obj = store.getters["auth/objState"].user;

                obj.vtype = response.data.data[0].vtype;

                store.commit("auth/setUser", obj);
                localStorage.setItem('user', JSON.stringify(obj));

                // console.log(obj.vtype)
                obj.vtype = "2"
                switch(obj.vtype){
                    case "0":
                        router.push('/students');
                        break;
                    case "1":
                        router.push('/instructor');
                        break;
                    case "2":
                        router.push('/advisor');
                        break;
                    case "3":
                        router.push('/staff');
                        break;
                    case "4":
                        router.push('/dean');
                        break;
                }

            }).catch((error) => {
                this.dialog = {
                    message : error.response.message.en,
                    type : 'danger',
                    style : 'modal-danger',
                    status : true,
                }
            });
        }

    },

    getters: {
        objState(state) {
            return state;
        },
        dialogError(state) {
            return state.dialog;
        },
    },
};

export default LoginModule;
