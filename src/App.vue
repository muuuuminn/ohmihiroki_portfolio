<template>
  <v-app id="app" dark>
    <Navigation></Navigation>
    <v-content class="mx-4 my-4">
      <router-view />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  components: { Navigation, Footer },
  mounted() {
    this.fetchRepo();
    this.fetchArticles();
  },
  methods: {
    ...mapActions('github', ['fetchRepo']),
    ...mapActions('qiita', ['fetchArticles']),
  },
};
</script>
