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

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn
      v-if="!checkToken"
      to="register"
      depressed
      color="primary">
        Sign up
      </v-btn>

      <v-btn
      v-if="!checkToken"
      to="login"
      depressed
      color="primary">
        Login
      </v-btn>

      <v-btn
      v-if="checkToken"
      @click="logout"
      depressed
      color="primary">
        Logout
      </v-btn>

    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async logout () {
      try {
        this.$store.dispatch('logout')
        this.$router.push('root')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  computed: {
    checkToken: function () {
      return this.$store.state.token != null
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
