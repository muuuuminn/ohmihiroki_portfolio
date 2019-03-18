<template>
  <div class="about">
    <v-layout align-center justify-center row>
      <v-avatar :size="120" color="grey lighten-4 mr-3">
        <img src="../assets/muuuuminn_kao.png" alt="muuuuminnの顔" />
      </v-avatar>
      <div class="detail display-1 font-weight-light">
        名前：近江宏樹（おうみひろき）<br />
        誕生日：1994/04/13<br />
        趣味：家庭用ゲーム、手品、アニメetc
      </div>
    </v-layout>

    <h2 class="mt-4 text-lg-center">経歴</h2>
    <v-timeline>
      <v-timeline-item v-for="story in stories" :key="story.title" color="light-blue lighten-3">
        <template v-slot:opposite>
          <span>{{ story.date }}</span>
        </template>
        <v-card>
          <v-card-title class="headline">{{ story.title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            {{ story.detail }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { stories } from '@/profile.js';
export default {
  data() {
    return { stories };
  },
};
</script>
