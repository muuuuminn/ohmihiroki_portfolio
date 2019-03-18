import { qiita } from '@/config';
import axios from 'axios';

const state = { articles: [] };

const getters = {};

const mutations = {
  setArticles(state, payload) {
    state.articles = payload;
  },
};

const actions = {
  async fetchArticles({ commit }) {
    try {
      const request = axios.create({});
      const { data } = await request.get(qiita.baseURL, {
        params: { page: qiita.page, per_page: qiita.per_page },
      });
      commit('setArticles', data);
    } catch (e) {
      console.log(`Error:${e}`);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
