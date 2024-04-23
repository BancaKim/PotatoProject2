<template>
  <v-container fluid>
    <v-card title="Member information" flat>
      <template v-slot:text>
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
          single-line></v-text-field>
      </template>

      <v-data-table v-model="selected" :headers="headers" :items="members" :search="search" show-select></v-data-table>
    </v-card>

    <v-card-actions>
      <div class="pa-4 text-center"> <!-- 여기가 메시지 보내는 모달창 시작 -->
        <v-btn-group color="#b2d7ef" density="comfortable" rounded="pill" divided>
          <v-btn class="pe-2" prepend-icon="mdi-account-multiple-outline" variant="flat">
            <div class="text-none font-weight-regular">
              SEND MESSAGE
            </div>

            <v-dialog activator="parent" max-width="500">
              <template v-slot:default="{ isActive }">
                <v-card rounded="lg">
                  <v-card-title class="d-flex justify-space-between align-center">
                    <div class="text-h5 text-medium-emphasis ps-2">
                      메시지 작성
                    </div>

                    <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                  </v-card-title>

                  <v-divider class="mb-4"></v-divider>

                  <v-card-text>
                    <div class="text-medium-emphasis mb-4">
                      ffffffffffffff
                    </div>

                    <div class="mb-2">Message (optional)</div>

                    <v-textarea :counter="300" class="mb-2" rows="2" variant="outlined" persistent-counter></v-textarea>

                    <div class="text-overline mb-2">ffffff</div>

                    <div class="text-medium-emphasis mb-1">
                      fffffff
                    </div>

                    <!-- <v-btn class="text-none font-weight-bold ms-n4" color="primary" text="Retry Premium Free"
                      variant="text"></v-btn> -->
                  </v-card-text>

                  <!-- <v-divider class="mt-2"></v-divider> -->

                  <v-card-actions class="my-2 d-flex justify-end">
                    <v-btn class="text-none" rounded="xl" text="Cancel" @click="isActive.value = false"></v-btn>

                    <v-btn class="text-none" color="primary" rounded="xl" text="Send" variant="flat"
                      @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-btn>

          <!-- <v-btn size="small" icon>
            <v-icon icon="mdi-menu-down"></v-icon>

            <v-menu activator="parent" location="bottom end" transition="fade-transition">
              <v-list density="compact" min-width="250" rounded="lg" slim>
                <v-list-item prepend-icon="mdi-link" title="Copy link" link></v-list-item>

                <v-divider class="my-2"></v-divider> -->

                <!-- <v-list-item min-height="24">
                  <template v-slot:subtitle>
                    <div class="text-caption">
                      Shared with John + 1 more
                    </div>
                  </template>
                </v-list-item> -->
              <!-- </v-list>
            </v-menu>
          </v-btn> -->
        </v-btn-group>
      </div>                         <!-- 여기가 메시지 보내는 모달창 종료 -->

      
      <v-btn @click="sendMessage" color="primary white--text">Send Message</v-btn> <!--내가 해보려던 메시지 전송버튼 부분 -->
      <v-btn color="orange">회원정보 화면이동</v-btn>
      <v-btn color="primary">삭제기능??</v-btn>
      <v-btn color="orange">다른기능</v-btn>
    </v-card-actions>

  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { key: 'user_id', title: 'user_id', sortable: true, align: 'start' },
        { key: 'name', title: 'name' },
        { key: 'social_number', title: 'social_number' },
        { key: 'address', title: 'address' },
        { key: 'password', title: 'password' },
        { key: 'gamja_give', title: 'gamja_(판매)' },
        { key: 'gamja_take', title: 'gamja_(구매)' },
      ],
      members: [
        {
          user_id: 'bwer@qwe.com',
          name: '이상준',
          social_number: '980621_1032220',
          address: 159,
          password: 'qwe123!@#',
          gamja_give: 24,
          gamja_take: 5,
        },
        {
          user_id: 'dwer@qwe.com',
          name: '최유일',
          social_number: '440621_1032220',
          address: 159,
          password: 'qwe123!@#',
          gamja_give: 24,
          gamja_take: 5,
        },
        {
          user_id: 'awer@qwe.com',
          name: '구한별',
          social_number: '850621_1032220',
          address: 159,
          password: 'qwe123!@#',
          gamja_give: 24,
          gamja_take: 5,
        },
        {
          user_id: 'zwer@qwe.com',
          name: '김건',
          social_number: '660621_1032220',
          address: 159,
          password: 'qwe123!@#',
          gamja_give: 24,
          gamja_take: 5,
        },
        {
          user_id: 'qwer@qwe.com',
          name: '반수희',
          social_number: '850621_1032220',
          address: 159,
          password: 'qwe123!@#',
          gamja_give: 24,
          gamja_take: 5,
        },
      ],
      // selectedMembers: [], // 선택된 회원 넣는 자리
    };
  },
  methods: {
  },


}
</script>
<style></style>