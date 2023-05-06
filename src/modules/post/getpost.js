import axios from "@/service/axios.js";

export const getpost = {
  state: () => ({ data: null, loading: true, error: null }),

  mutations: {
    GET_POST(state, payload) {
      state.data = payload;
    },
    SET_LOADING(state) {
      state.loading = false;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        const result = await axios.get("/posts");
        commit("GET_POST", result.data);
        commit("SET_LOADING");
      } catch (e) {
        console.log(e);
        commit("SET_ERROR", e);
      }
    },
  },
};
