<template>
<br>

<v-card title="감자포인트 Dashboard" elevation="10">
  <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <incomeChart/>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <outcomeChart/>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <totalcomeChart/>
        </v-sheet>
      </v-col>
    </v-row>
  <v-row no-gutters>
    <v-col>
        <v-sheet class="pa-2 ma-2">
          <totalcomeLine/>
        </v-sheet>
    </v-col>
    <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card title="감자포인트 현황" subtitle="사용가능 방법" text="여기에는 월평균 남은 감자 포인트 / 현재 총 잔여감자포인트 수치 정보 등등등" elevation="3">
            <v-card-actions>
              <v-btn style="color:orange" size="large" @click="makeCsv()">자료 다운로드</v-btn>
           </v-card-actions>
          </v-card>
        </v-sheet>
    </v-col> 
  </v-row>
</v-card>

<v-card title="회원 Dashboard" elevation="10">
  <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <incomeuserChart/>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-2">
          <incomeuserLine/>
        </v-sheet>
    </v-col>

    </v-row>
  <!-- <v-row no-gutters>
    
    <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card title="회원 현황" subtitle="사용가능 방법" text="여기에는 월평균 유입고객 / 현재 총 회원수 등 수치" elevation="5">
            <v-card-actions>
              <v-btn style="color:orange">Excel 자료 받기</v-btn>
           </v-card-actions>
          </v-card>
        </v-sheet>
    </v-col> 
  </v-row> -->
</v-card>
</template>


<script>
import incomeChart from '@/views/admin/charts/IncomeChart'
import outcomeChart from '@/views/admin/charts/OutcomeChart'
import totalcomeChart from '@/views/admin/charts/TotalcomeChart'
import totalcomeLine from '@/views/admin/charts/TotalcomeLine'
import incomeuserChart from '@/views/admin/charts/IncomeUser'
import incomeuserLine from '@/views/admin/charts/IncomeUserLine'
import axios from 'axios';
// import Xlsx from 'xlsx'



export default {
  name: 'DashBoard',
  components: { incomeChart, outcomeChart, totalcomeChart, totalcomeLine, incomeuserChart,incomeuserLine },
  data () {
    return {

    }
  },

  methods: {                                                              //async await 가 안옴
     makeCsv() {
     axios.get("http://localhost:4000/getpayinfo")
      .then(res => {
        console.log(res);
        console.log('================123')
        let dataList = res.data.data;
        console.log(dataList);
        //console.log(JSON.parse(res.data));
        console.log(Object.values(dataList));

        let dataset = Object.values(dataList);
        console.log(dataset); // 데이터를 변수에 할당
        console.log('=====================');


        const csvContent = this.convertToCSV(dataset);
        console.log(csvContent);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'export_data.csv');
        link.click();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  //  async makeCsv() {
  //     const dataset = ''
  //     // [
  //     //   {name:'gerere', email:'adfasf@asdnfadf', age:'123123', ere:'ewrw'},
  //     //   {name:'gerere', email:'adfasf@asdnfadf', age:'123123', ere:'ewrw'},
  //     //   {name:'gerere', email:'adfasf@asdnfadf', age:'123123', ere:'ewrw'},
  //     // ];

  //     await axios.get("http://localhost:4000/getpayinfo")
  //           .then(res=> {
  //           console.log(res);
  //           console.log(res.data);                        // 이건 Array(3) 이 옵니다
  //           console.log(Object.values(res.data));

  //           this.dataset=Object.values(res.data);
  //           console.log(this.dataset);})


  //     const csvContent = this.convertToCSV(dataset);
  //     const blob = new Blob([csvContent],{type:'text/csv;charset=urf-8'});
  //     const url  = URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href=url;
  //     link.setAttribute('download','export_data.csv');
  //     link.click();
  //   },
      convertToCSV(data) {
        const headers = Object.keys(data[0]);
        const rows = data.map(obj=>headers.map(header=>obj[header]));
        const headerRow = headers.join(',');
        const csvRows = [headerRow, ...rows.map(row =>row.join(','))];
        return csvRows.join('\n');

      }

  }

}

</script>

