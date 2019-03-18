<template>
  <v-footer height="auto" app fixed>
    <v-card tile class="text-xs-center flex">
      <v-card-text>
        <v-btn
          v-for="link in snsLinks"
          :key="link.url"
          class="mx-3"
          icon
          :href="link.url"
          target="_blank"
          rel="noopener"
        >
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { snsLinks } from '@/profile.js';
export default {
  data: () => ({ snsLinks }),
};
</script>
