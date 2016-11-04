<template lang="pug">
  .single-page-content
    h2 News
    //- md-button.md-icon-button.md-raised.md-primary
    //-   md-icon add
    md-tabs
      md-tab#newsList(md-label="List")
        md-list(style="border:1px solid rgba(0,0,0,.12)")
          md-list-item(v-for="news in newslist")
            md-avatar
              img(:src="news.media")
            span(style="flex: 1") {{news.title}}
            md-button.md-icon-button.md-list-action
              md-icon.md-primary edit
            md-button.md-icon-button.md-list-action
              md-icon.md-primary delete
      md-tab#addNews(md-label="Add News")
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
import Api from '../scripts/api'
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
    this.fetchData()
  },
  methods: {
    fetchData () {
      Api.getNews((err, data) => {
        if (err) {
          this.error = err.toString()
          console.log(err)
        } else {
          this.newslist = data
        }
      })
    },
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
