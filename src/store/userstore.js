import { defineStore } from 'pinia';

export const useUserStore = defineStore("userLogin", {
  state: () => ({
        userInfo: new Array(),
        isLogin: false,
  }),
  getters: {
    getUserInfo(state) {
      return state.userInfo;
        },
    getIsLogin(state) {
      return state.isLogin;
        },
    },
  actions: {
      addInfo(obj) {
      this.userInfo.push(obj);
    },
    resetInfo() {
      this.userInfo.splice(0, 1);
    },
    onOff() {
      this.isLogin = !this.isLogin;
    },
  },
});