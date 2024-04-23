<template>
    <Line :data="chartData" :options="chartOptions" />
  </template>
  
  <script lang>
  import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,  Title, Tooltip, Legend} from 'chart.js'
  import { Line } from 'vue-chartjs'

  
  ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement,  Title, Tooltip, Legend )
  
  export default {
    name: 'totalcomeLine',
    components: {
      Line
    },
    data() {
      return {
       chartData:{
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{label: '월별 누적 감자',
                    backgroundColor: '#f87979',
                    data: [40, 50, 60, 90, 120, 150, 160,190,300,450,750,1050]} ]
                },
        chartOptions :{ 
                        responsive: true,
                        maintainAspectRatio: false
                    }
             }
         }
  }
  </script>