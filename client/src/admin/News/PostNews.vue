<template lang="pug">
  .single-page-content
    form(novalidate)
      md-input-container
        label Title
        md-input(required, v-model="news.title")
      md-input-container
        label Content
        md-textarea(required, v-model="news.content")
      .controlgroup
        input#file(name="file", type="file", @change="updateFileInput")
        label(for="file")
          .filename
          span Browse
      md-button.md-raised.md-primary(type="submit", @click="submit") Submit      
</template>

<script>
import Api from '../../scripts/api'
export default {
  name: 'News',
  data () {
    return {
      news: {
        title: '',
        content: '',
        file: ''
      },
      newslist: []
    }
  },
  created () {
  },
  methods: {
    updateFileInput (e) {
      var files = e.target.files || e.dataTransfer.files
      var filename = e.target.value.split('\\').pop()
      e.target.nextSibling.childNodes[0].innerText = filename
      // console.log(e.target.nextSibling.childNodes[0].innerText)
      if (!files.length) {
        return
      }
      this.news.file = files
    },
    submit () {
      Api.addNews(this.news.title, this.news.content, this.news.file, (err, data) => {
        if (err) {
          this.error = err.toString()
          console.log(err)
        } else {
          console.log(data)
          this.$parent.fetchData()
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
