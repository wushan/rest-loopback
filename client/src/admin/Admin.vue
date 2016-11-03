<template lang="pug">
  #admin.container.md-theme-default
    md-sidenav.main-sidebar.md-left(ref="leftSidenav", @open="open('Left')", @close="close('Left')")
      md-toolbar.md-large
        .md-toolbar-container
          h3.md-title Sidenav content
      .main-sidebar-links
        md-list.md-dense
          md-list-item
            //- router-link(exact to="/") Introduction
            router-link(to="/admin/signup") Sign Up
          md-list-item
            router-link(to="/admin/signin") Sign In
          md-list-item
            router-link(exact to="/admin/news") News
          //- md-list-item
          //-   span News
          //-   md-list-expand
          //-     md-list
          //-       md-list-item.md-inset
          //-         router-link(exact to="/admin/news/add") Add News
    
    .page-content.single-page
      md-toolbar
        md-button.md-icon-button(@click="toggleLeftSidenav")
          md-icon menu
        h2.md-title(style="flex: 1") Admin Home
        md-button(v-if="user.authenticated", @click="logout") logout
      router-view
</template>

<script>
import Api from '../scripts/api'
import Store from '../scripts/vendor/store'
export default {
  name: 'AdminHome',
  data () {
    return {
      auth: {
        username: '',
        password: ''
      },
      user: {
        authenticated: false,
        token: ''
      }
    }
  },
  created () {
    this.checkAuth()
    this.$on('updateSecret', (res) => {
      this.user.token = res
      this.user.authenticated = true
    })
  },
  methods: {
    checkAuth() {
      var jwt = Store.get('access')
      if (jwt) {
        // this.user.authenticated = true
        // this.user.token = jwt
        Api.checkAuth(jwt, (err,data) => {
          if (err) {
            console.log(err)
          } else {
            console.log(data)
          }
        })
      } else {
        this.user.authenticated = false
        this.$router.replace('/admin/signin')
      }
    },
    toggleLeftSidenav() {
      console.log('all')
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    },
    logout() {
      Api.signOut(this.user.token, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          console.log(data)
          localStorage.removeItem('id_token')
          this.user.authenticated = false
          this.user.token = ''
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/styles/var';
  $sizebar-size: 280px;
  html,
  body {
    height: 100%;
  }
  body {
    display: flex;
  }
  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
    @media (min-width: 1280px) {
      padding-left: $sizebar-size;
    }
  }
  .main-header {
    position: relative;
    z-index: 3;
    .md-button:first-child {
      @media (min-width: 1280px) {
        display: none;
      }
    }
    .md-toolbar,
    .md-title {
      color: #fff;
    }
    .md-title {
      .page-title {
        margin-left: 0;
        @media (min-width: 1280px) {
          margin-left: 8px;
        }
      }
      span:not(.page-title) {
        @media (min-width: 1280px) {
          display: none;
        }
      }
    }
  }
  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      @media (min-width: 1280px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }
    .md-backdrop {
      @media (min-width: 1280px) {
        opacity: 0;
        pointer-events: none;
      }
    }
    .md-toolbar {
      min-height: 172px;
      border-bottom: 1px solid rgba(#000, .12);
    }
    .vue-material-logo {
      font-size: 24px;
      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }
      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }
    .main-sidebar-links {
      overflow: auto;
      .md-inset .md-list-item-container {
        padding-left: 36px;
      }
      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .page-content {
    display: flex;
    flex-flow: column;
    flex: 1;
    overflow: auto;
    position: relative;
    z-index: 1;
  }
  .page-content-wrapper {
    display: flex;
    flex-flow: column;
    flex: 1;
  }
  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
  }
  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: $swift-ease-out;
    @media (min-width: 1280px) {
      left: 280px;
    }
  }
  .md-router-enter,
  .md-router-leave-active {
    opacity: 0;
  }
  .md-router-enter {
    .md-display-2 {
      transform: translate3D(0, -36px, 0);
    }
  }
  code {
    &:not(.hljs) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 0 4px;
      display: inline-block;
      border-radius: 2px;
      font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
      pre {
        margin: 8px 0;
      }
    }
  }
  .single-page-content {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
  }
</style>
