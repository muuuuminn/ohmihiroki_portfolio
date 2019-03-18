<template>
  <v-toolbar fixed app class="font-weight-medium">
    <v-toolbar-title>
      <span>Ohmi Hiroki's Portfolio site</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      large
      v-for="link in links"
      :key="link.name"
      class="mx-3"
      router
      :to="link.route"
    >
      {{ link.name }}
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'About', route: '/' },
      { name: 'Skill', route: '/skill' },
      { name: 'Works', route: '/works' },
      { name: 'Qiita', route: '/qiita' },
    ],
    drawer: false,
  }),
};
</script>
