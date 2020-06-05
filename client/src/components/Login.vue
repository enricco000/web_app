<template>
  <v-container class="fill-height">
    <v-layout row wrap align-center>
      <v-flex>
        <v-card
        hover>

          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>

            <v-form>
              <v-text-field
              label="Email"
              name="email"
              text="email"
              prepend-inner-icon="person"
              v-model="email">
              </v-text-field>

              <v-text-field
              label="Password"
              name="password"
              text="password"
              :type="'password'"
              prepend-inner-icon="lock"
              v-model="password">
              </v-text-field>
            </v-form>

          </v-card-text>

          <v-card-actions>
            <v-btn @click="login"
            color="primary">Login</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
