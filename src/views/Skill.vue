<template>
  <div class="skill">
    <v-card-title>
      <h3>Skill List</h3>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="検索ワードを入力してください。"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="skills"
      class="elevation-1"
      :search="search"
      hide-actions
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.period }}</td>
        <td class="text-xs-center">{{ props.item.remarks }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { skills } from '@/profile.js';
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: '名称',
          value: 'name',
          align: 'center',
          sortable: false,
        },
        {
          text: '期間',
          value: 'period',
          align: 'center',
          sortable: false,
        },
        {
          text: '備考',
          value: 'remarks',
          align: 'center',
          sortable: false,
        },
      ],
      skills,
    };
  },
};
</script>
