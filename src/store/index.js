import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { cryptoCoins: [], coinsDetail: [] },
  getters: {
    sortedByDays(state) {
      const { coinsDetail } = state;
      const lastDays = coinsDetail.slice(-7);
      return lastDays;
    },
    getSpecificCoin: (state) => (id_) => {
      const { cryptoCoins } = state;
      const specificCoin = cryptoCoins.find((coin) => coin.id === id_);
      return specificCoin;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.cryptoCoins = payload.data;
    },
    SET_COINS_DATA(state, payload) {
      state.coinsDetail = payload.data;
    },
  },
  actions: {
    async getData({ commit }) {
      const URL = "https://api.coincap.io/v2/assets";
      try {
        const request = await axios(URL);
        const data = await request.data;
        commit("SET_DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getCoinDetail({ commit }, id_) {
      const URL = `https://api.coincap.io/v2/assets/${id_}/history?interval=d1`;
      try {
        const request = await axios(URL);
        const data = await request.data;
        commit("SET_COINS_DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
