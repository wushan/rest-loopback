<template lang="pug">
  .single-page-content
    h2 News
    //- md-button.md-icon-button.md-raised.md-primary
    //-   md-icon add
    form(novalidate)
      md-input-container
        label Title
        md-input(required, v-model="news.title")
      md-input-container
        label Content
        md-textarea(required, v-model="news.content")
      md-button.md-raised.md-primary(type="submit", @click="submit") Submit

</template>

<script>
import Api from '../scripts/api'
export default {
  name: 'Home',
  data () {
    return {
      news: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit () {
      const title = this.news.title
      const content = this.news.content
      Api.addNews(title, content, (err, data) => {
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
