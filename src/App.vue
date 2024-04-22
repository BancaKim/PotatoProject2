<template>
  <TheTop></TheTop>
  <TheHeader></TheHeader>
  <TheView></TheView>
  <AppAlert :items="alerts" />
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import TheTop from '@/layouts/TheTop.vue';
import { useAlert } from '@/composables/alert';

const {alerts} = useAlert();

</script>
<style>
#app {
  font-family: 'BMJUA', "Nanum Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>