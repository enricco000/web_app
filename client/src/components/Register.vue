<template>
  <v-container class="fill-height">
      <v-row
      :align="'center'">
        <v-col>
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
                :rules="[rules.required]"
                autocomplete="new-email"
                prepend-inner-icon="person"
                v-model="email"
                v-mutate="() => onMutate('email')"
                >
                </v-text-field>

                <v-text-field
                v-model="password"
                label="Password"
                name="password"
                :type="show1 ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
                autocomplete="new-password"
                :prepend-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:prepend-inner="show1 = !show1">
                </v-text-field>

                <v-text-field
                v-if="password"
                v-model="reTypePassword"
                label="Re-type password"
                name="password"
                :type="show2 ? 'text' : 'password'"
                :rules="[rules.matchingPasswords, rules.min]"
                autocomplete="new-password"
                :prepend-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:prepend-inner="show2 = !show2">
                </v-text-field>
              </v-form>

              <v-alert
              type="error"
              v-if="error"
              elevation=6
              dismissible
              class="text-left"
              >
                {{ error }}
              </v-alert>

              <v-snackbar
              v-model="snackbarRules.snackbar"
              :timeout="snackbarRules.timeout">
                {{ snackbarRules.text }}
                <v-btn
                  color="green"
                  text
                  @click="snackbarRules.snackbar = false">
                  OK
                </v-btn>
              </v-snackbar>

            </v-card-text>

            <v-card-actions>
              <v-container>
                <v-row
                :align="'end'"
                :justify="'end'">
                  <v-btn
                  :disabled="!passwordsMatch || error !== null"
                  @click="register()"
                  color="primary"
                  >
                    Register
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
      reTypePassword: '',
      show1: false,
      show2: false,
      error: null,
      rules: {
        required: value => !!value || 'Required',
        min: value => value.length >= 8 || 'Min 8 characters',
        matchingPasswords: value => value === this.password || 'Passwords don\'t match'
      },
      snackbarRules: {
        snackbar: false,
        text: 'Succesful!',
        timeout: 5000
      }
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
        this.snackbarRules.snackbar = true
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    onMutate () {
      this.error = null
    }
  },
  computed: {
    passwordsMatch: function () {
      if (this.password === '' || this.reTypePassword === '') {
        return false
      } else {
        return this.password === this.reTypePassword
      }
    }
  }
}
</script>

<style scoped>
</style>
