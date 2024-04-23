<template>
    <Bar
      id="outcomeChart"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'outcomeChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
          datasets: [ { label : '사용 감자 포인트',
                        data: [40, 20, 12, 52, 15,25,65,15,21,51,56,15,],
                        backgroundColor: [ 'rgba(54, 162, 235, 0.5)' ]} ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>