<template>
  <v-container class="fill-height">
    <v-layout row wrap align-center>
      <v-flex>
        <v-card>

          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Log in
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>

            <v-form>
              <v-text-field
              label="Email"
              name="email"
              text="email"
              v-model="email">
              </v-text-field>

              <v-text-field
              label="Password"
              name="password"
              text="password"
              v-model="password">
              </v-text-field>
            </v-form>

            <v-alert
            type="error"
            v-if="error">{{ error }}
            </v-alert>

          </v-card-text>

          <v-card-actions>
            <v-btn @click="login"
            color="primary">Register</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
      console.log('login')
    }
  }
}
</script>

<style scoped>
</style>
