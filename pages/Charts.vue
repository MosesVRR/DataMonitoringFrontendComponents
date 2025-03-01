<template>
  <div class="charts-demo">
    <h1>Charts Demo</h1>
    <LineChart :chartData="lineChartData" />
  </div>
</template>

<script>
import LineChart from '../components/charts/LineChart.vue';

export default {
  name: 'Charts',
  components: { LineChart },
  data() {
    return {
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Sample Data',
          data: [65, 59, 80, 81, 56],
          borderColor: '#42b983',
          tension: 0.1
        }]
      }
    }
  }
}
</script>
