<template>
  <div>
    <h1>Register</h1>
    <br>
    <input type="email" name="email" id="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" id="password" placeholder="password" v-model="password">
    <br>
    <button type="submit" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: 'email',
      password: 'password'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
