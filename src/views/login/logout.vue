<template>
    <div>
      <h1>Log Out</h1>
</div>

</template>
  
<script>


export default {
  name: 'testComponent',
  data() {
    return{
        code: null,
        token: null
    }
  },
  created() {
        if (this.$route.query.code) {
            alert('test');
        }
    }
}
</script>