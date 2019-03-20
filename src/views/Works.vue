<template>
  <v-container class="works" grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="repo in repositories" :key="repo.name" md4>
        <v-card class="card white--text">
          <v-card-title>
            <div class="headline">
              {{ repo.name }}
            </div>
            <v-spacer></v-spacer>
            {{ repo.language }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="grow">
            {{ repo.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="white--text "
              :href="repo.homepage"
              target="_blank"
              rel="noopener"
              v-show="repo.homepage"
              flat
            >
              Demo
            </v-btn>
            <v-btn class="white--text " :href="repo.html_url" target="_blank" rel="noopener" flat>
              Source Code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('github', ['repositories']),
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
