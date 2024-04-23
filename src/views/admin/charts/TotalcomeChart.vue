<template>
  <Bar id="totalcomeChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'totalcomeChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
          label: '잔여 감자 포인트(충전-사용)',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,],
          backgroundColor: ['rgba(255, 165, 100, 10)']
        }]  // 마지막 숫자는 투명도
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>