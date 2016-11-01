<template lang="pug">
  #signup
    h2 Sign Up
    form(novalidate)
      md-input-container
        label Username
        md-input(v-model="auth.username")
      md-input-container(md-has-password)
        label Password
        md-input(v-model="auth.password", type="password")
      md-button.md-raised.md-primary(type="submit", @click="signUp") Primary
</template>

<script>
import Api from '../scripts/api'
export default {
  name: 'Home',
  data () {
    return {
      auth: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signUp() {
      const email = this.auth.username
      const password = this.auth.password
      Api.signUp(email, password, (err, data) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
          console.log(err)
        } else {
          console.log(data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
