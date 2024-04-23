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
              <v-btn style="color:orange">Excel 자료 받기</v-btn>
           </v-card-actions>
          </v-card>
        </v-sheet>
    </v-col> 
  </v-row>
</v-card>

<v-card title="회원 Dashborad" elevation="10">
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
          <v-card title="회원 현황" subtitle="사용가능 방법" text="여기에는 월평균 유입고객 / 현재 총 회원수 등 수치" elevation="5">
            <v-card-actions>
              <v-btn style="color:orange">Excel 자료 받기</v-btn>
           </v-card-actions>
          </v-card>
        </v-sheet>
    </v-col> 
  </v-row>
</v-card>
</template>


<script>
import incomeChart from '@/views/admin/charts/IncomeChart'
import outcomeChart from '@/views/admin/charts/OutcomeChart'
import totalcomeChart from '@/views/admin/charts/TotalcomeChart'
import totalcomeLine from '@/views/admin/charts/TotalcomeLine'

export default {
  name: 'DashBoard',
  components: { incomeChart, outcomeChart, totalcomeChart, totalcomeLine },
}
</script>

