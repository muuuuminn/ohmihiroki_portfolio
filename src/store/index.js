import Vue from 'vue';
import Vuex from 'vuex';
import github from './module/github';
import qiita from './module/qiita';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github,
    qiita,
  },
});
