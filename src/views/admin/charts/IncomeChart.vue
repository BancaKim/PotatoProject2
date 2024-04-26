<template>
  <Bar id="incomeChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {

  name: 'incomeChart',
  components: { Bar },
  data() {
    return {

      chartData: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
          label: "충전 감자 포인트",
          data: [],
          backgroundColor: ['rgba(255, 99, 132, 0.5)']
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {                                                                //값을 먼저 받아오고 
    try {
      axios.get("http://localhost:4000/getincomeinfo")
        .then(res => {


          const incomeData = res.data;
          this.chartData.datasets[0].data = incomeData;
          let chartData = this.chartData.datasets[0];
          console.log(this.chartData);
          console.log(this.chartOptions)
          console.log('=========')
          console.log(chartData.data);

          this.chartData = {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [{
              label: "충전 감자페이(월단위)",
              data: incomeData,
              backgroundColor: ['rgba(255, 99, 132, 0.5)']
            }]
          }

        });

    } catch (error) {
      console.error('Error fetching income data:', error);
    }

  },

  methods: {
    // async getIncomeInfo() {
    //   try {
    //     const res = await axios.get("http://localhost:4000/getincomeinfo");
    //     const incomeData = res.data;
    //     this.chartData.datasets[0].data = incomeData;
    //     let chartData = this.chartData.datasets[0];
    //     console.log(this.chartData);
    //     console.log(this.chartOptions)
    //     console.log('=========')
    //     console.log(chartData.data);

    //     //chartData.update();
    //     //this.renderChart(this.chartData);
    //   } catch (error) {
    //     console.error('Error fetching income data:', error);
    //   }
    // },
  },

}

</script>