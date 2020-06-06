<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
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
              v-model="email"
              label="Email"
              name="email"
              text="email"
              :rules="[rules.required]"
              prepend-inner-icon="person">
              </v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                name="password"
                :type="show ? 'text' : 'password'"
                :rules="[rules.required]"
                autocomplete="new-password"
                :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:prepend-inner="show = !show">
                </v-text-field>
            </v-form>

          </v-card-text>

          <v-card-actions>
              <v-container>
                <v-row
                :align="'end'"
                :justify="'end'">
                  <v-btn
                  :disabled="!enteredCredentials"
                  @click="login"
                  to="root"
                  color="primary">
                    Login
                  </v-btn>
                </v-row>
              </v-container>
            </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      show: false,
      error: null,
      rules: {
        required: value => !!value || 'Required'
      }
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
  },
  computed: {
    enteredCredentials: function () {
      return this.email !== '' && this.password !== ''
    }
  }
}
</script>

<style scoped>
</style>
