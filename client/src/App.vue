<template>
  <div id="app">
    <v-app>

      <v-container
      class="mb-5">
        <page-header></page-header>
      </v-container>

      <v-container
      class="pa-5">
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
