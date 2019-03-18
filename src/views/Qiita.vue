<template>
  <v-list two-line>
    <template v-for="(article, index) in articles">
      <v-list-tile :key="article.title" avatar ripple>
        <v-list-tile-content>
          <v-list-tile-title class="mb-2">{{ article.title }}</v-list-tile-title>
          <div class="text--primary flex">
            <div v-for="tag in article.tags" :key="tag.name">
              <v-chip small>{{ tag.name }}</v-chip>
            </div>
          </div>
        </v-list-tile-content>
        <v-btn :href="article.url" target="_blank" rel="noopener" small>See more</v-btn>
        <v-list-tile-action>
          <v-list-tile-action-text class="white--text ">{{
            article.likes_count
          }}</v-list-tile-action-text>
          <v-icon color="red">far fa-heart</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="index + 1 < articles.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('qiita', ['articles']),
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
}
</style>
