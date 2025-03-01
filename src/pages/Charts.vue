<template>
  <div class="charts">
    <h1>Data Charts</h1>
    <LineChart :chartData="chartData" />
  </div>
</template>

<script>
import LineChart from '../components/LineChart.vue';

export default {
  name: 'Charts',
  components: {
    LineChart
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sample Data',
            data: [65, 59, 80, 81, 56],
            borderColor: '#2196f3',
            tension: 0.1
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.charts {
  padding: 20px;
}
</style>
