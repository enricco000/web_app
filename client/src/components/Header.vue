<template>
  <v-app-bar
  fixed
  dark
  color="primary">

    <v-toolbar-title class="mr-4">
      <span
      class="home"
      @click="navigateTo({name: 'root'})">
        Toolbar
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn depressed color="primary">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn
      to="register"
      depressed
      color="primary">
        Sign up
      </v-btn>

      <v-btn
      to="login"
      depressed
      color="primary">
        Log in
      </v-btn>

    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: #000;
}
</style>
