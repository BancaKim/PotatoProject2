<template>
    <Line :data="chartData" :options="chartOptions" />
  </template>
  
  <script lang>
  import axios from 'axios';
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
        datasets: [{label: '누적 감자페이 금액',
                    backgroundColor: '#f87979',
                    data: []} ]
                },
        chartOptions :{ 
                        responsive: true,
                        maintainAspectRatio: false
                    }
             }
         },

 created() {                                                                //값을 먼저 받아오고 
    try {
      axios.get("http://localhost:4000/gettotallineinfo")
        .then(res => {


          const totallineData = res.data;
          this.chartData.datasets[0].data = totallineData;
          let chartData = this.chartData.datasets[0];
          console.log(this.chartData);
          console.log(this.chartOptions)
          console.log('=========')
          console.log(chartData.data);

          this.chartData = {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{label: '누적 감자페이 금액',
                    backgroundColor: '#f87979',
                    data: totallineData} ]
          }

        });

    } catch (error) {
      console.error('Error fetching income data:', error);
    }

  },
  }
  </script>
  