<template>
    <h1 style="margin-top: 5%">구매 내역</h1>
    <hr>
<hr>
<button class="btn-edit" style="margin-right: 30px; font-size: 20px;" @click="Back">이전</button>
</template>

<script>
    export default {
        methods: {
       Back(){
         this.$router.push('/profileback');
        },
    }
    }
</script>

<style>
.btn-edit {
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #eaeaea;
  cursor: pointer;
}
</style>