<template>
    <Bar
      id="incomeChart"
      :options="chartOptions"
      :data="chartData"
    />
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
          labels: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
          datasets: [ { label:"충전 감자 포인트",
                        data:[],
                        backgroundColor: [ 'rgba(255, 99, 132, 0.5)' ]} ]
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    
    mounted() {                                             //바로 띄울 수 있게 정보 입력
      this.getIncomeInfo()
    },

    
    methods: {
    async getIncomeInfo() {
      try {
        const res = await axios.get("http://localhost:4000/getincomeinfo");
        const incomeData = res.data;
        this.chartData.datasets[0].data = incomeData;
      } catch (error) {
        console.error('Error fetching income data:', error);
      }
    },
  }
}

    // methods: {
    //     getIncomeInfo() {                                  // 수입합계 가져오는 부분
    //         axios.get("http://localhost:4000/getincomeinfo")
    //         .then(res=> {
    //         console.log(res);
    //         console.log(res.data);                        
    //         const incomeData = res.data;

    //         this.chartData.datasets[0].data = incomeData;

    //         console.log(incomeData);
    //         console.log(this.chartData.datasets[0].data);

    //         //this.data=res.data;
    //                   })
    //               },
    //         },






  
  </script>