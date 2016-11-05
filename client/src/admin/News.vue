<template lang="pug">
  #news
    md-toolbar
      .md-toolbar-container
        md-button.md-icon-button(@click="toggleLeftSidenav")
          md-icon menu
        span(style="flex: 1")
      //- md-button(v-if="user.authenticated", @click="logout") logout
      .md-toolbar-container
        h2.md-title Vue Material
        md-button.md-fab.md-fab-bottom-right(@click="addNews")
          md-icon add
    .single-page-content
      h2 News
      router-view
      //- md-button.md-icon-button.md-raised.md-primary
      //-   md-icon add
      md-list(style="border:1px solid rgba(0,0,0,.12)")
        md-list-item(v-for="news in newslist")
          md-avatar
            img(:src="news.media")
          span(style="flex: 1") {{news.title}}
          md-button.md-icon-button.md-list-action
            md-icon.md-primary edit
          md-button.md-icon-button.md-list-action
            md-icon.md-primary delete
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
    addNews () {
      this.$router.push('news/create')
    },
    toggleLeftSidenav() {
      console.log('all')
      this.$parent.$refs.leftSidenav.toggle();
    },
    fetchData () {
      Api.getNews((err, data) => {
        if (err) {
          this.error = err.toString()
          console.log(err)
        } else {
          this.newslist = data
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#news {
  .md-button.md-fab {
    margin: 0;
    right: 56px;
    bottom: -26px;
  }
  .md-toolbar {
    margin-bottom: 50px;
  } 
}
</style>
