<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Table',
  props: {
    tableData: {
      type: Array as PropType<Array<Array<string | number>>>,
      required: true
    },
    headers: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  }
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>