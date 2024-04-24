<template>
  <Bar id="totalcomeChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import axios from 'axios';
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
          label: "월별 결산(충전-사용)",
          data: [],
          backgroundColor: ['rgba(255, 165, 100, 10)']
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {                                                                //값을 먼저 받아오고 
    try {
      axios.get("http://localhost:4000/gettotalcomeinfo")
        .then(res => {


          const totalcomeData = res.data;
          this.chartData.datasets[0].data = totalcomeData;
          let chartData = this.chartData.datasets[0];
          console.log(this.chartData);
          console.log(this.chartOptions)
          console.log('=========')
          console.log(chartData.data);

          this.chartData = {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [{
              label: "(충전-사용) 월단위",
              data: totalcomeData,
              backgroundColor: ['rgba(255, 165, 100, 10)']
            }]
          }

        });

    } catch (error) {
      console.error('Error fetching income data:', error);
    }

  },

  methods: {
    
  },

}

</script>

