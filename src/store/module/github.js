import { github } from '@/config';
import axios from 'axios';

const state = { repositories: [] };

const getters = {};

const mutations = {
  setRepositories(state, payload) {
    state.repositories = payload;
  },
};

const actions = {
  async fetchRepo({ commit }) {
    try {
      const request = axios.create({
        baseURL: github.baseURL,
      });
      const { data } = await request.get(github.repos);
      const notForkRepo = data.filter(repo => repo.fork == false);
      commit('setRepositories', notForkRepo);
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
