<template lang="pug">
  #signup.single-page-content
    h2 AdminHome
</template>

<script>
import Api from '../scripts/api'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods: {
    signIn() {
      const email = this.auth.username
      const password = this.auth.password
      Api.signIn(email, password, (err, data) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
          console.log(err)
        } else {
          console.log(data)
          this.$router.push('/admin/home')
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
