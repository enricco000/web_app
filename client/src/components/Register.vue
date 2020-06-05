<template>
  <v-container class="fill-height">
    <v-layout row wrap align-center>
      <v-flex>
        <v-card
        hover>

          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>

            <v-form>
              <v-text-field
              label="Email"
              name="email"
              text="email"
              required
              autocomplete="new-email"
              prepend-inner-icon="person"
              v-model="email">
              </v-text-field>

              <v-text-field
              label="Password"
              name="password"
              text="password"
              :type="'password'"
              required
              autocomplete="new-password"
              prepend-inner-icon="lock"
              :model="password">
              </v-text-field>
            </v-form>

            <v-alert
            type="error"
            v-if="error"
            v-html="error">
            </v-alert>

          </v-card-text>

          <v-card-actions>
            <v-btn @click="register"
            color="primary">Register</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
