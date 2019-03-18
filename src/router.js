import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About';
import Skill from './views/Skill';
import Works from './views/Works';
import Qiita from './views/Qiita';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/qiita',
      name: 'qiita',
      component: Qiita,
    },
  ],
});
