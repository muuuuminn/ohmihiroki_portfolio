<template>
  <v-toolbar app class="font-weight-medium">
    <v-toolbar-title>
      <span>Ohmi Hiroki's Portfolio site</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-3 hidden-sm-and-down"
      flat
      large
      v-for="link in links"
      :key="link.name"
      router
      :to="link.route"
    >
      {{ link.name }}
    </v-btn>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.name">
          <v-list-tile-content>
            <v-btn router :to="link.route" flat>{{ link.name }}</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
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
  }),
};
</script>
