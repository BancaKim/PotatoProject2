<template>
    <Bar
      id="incomeChart"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'incomeChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
          datasets: [ { label:"충전 감자 포인트",
                        data: [40, 20, 12, 30, 54, 21, 21, 54, 65, 21, 11, 56],
                        backgroundColor: [ 'rgba(255, 99, 132, 0.5)' ]} ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>