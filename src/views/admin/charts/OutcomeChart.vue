<template>
  <Bar id="outcomeChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {

  name: 'outcomeChart',
  components: { Bar },
  data() {
    return {

      chartData: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
          label: "사용 감자 포인트",
          data: [],
          backgroundColor: ['rgba(54, 162, 235, 0.5)']
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {                                                                //값을 먼저 받아오고 
    try {
      axios.get("http://localhost:4000/getoutcomeinfo")
        .then(res => {


          const outcomeData = res.data;
          this.chartData.datasets[0].data = outcomeData;
          let chartData = this.chartData.datasets[0];
          console.log(this.chartData);
          console.log(this.chartOptions)
          console.log('=========')
          console.log(chartData.data);

          this.chartData = {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [{
              label: "사용 감자페이(월단위))",
              data: outcomeData,
              backgroundColor: ['rgba(54, 162, 235, 0.5)']
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

<!-- <template>
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
  </script> -->