<template>
  <div class="data-visualization">
    <h2>Data Visualization</h2>
    <div v-if="visualizationType === 'graph'">
      <Graph :data="data" :options="options" />
    </div>
    <div v-else-if="visualizationType === 'table'">
      <Table :data="data" :headers="headers" />
    </div>
    <div v-else>
      <p>Please select a visualization type.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Graph from './Graph.vue';
import Table from './Table.vue';

export default defineComponent({
  name: 'DataVisualization',
  components: {
    Graph,
    Table,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: false,
    },
    headers: {
      type: Array,
      required: false,
    },
    visualizationType: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.data-visualization {
  padding: 20px;
}
</style>