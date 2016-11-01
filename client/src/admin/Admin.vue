<template lang="pug">
  #admin
    md-toolbar
      md-button.md-icon-button(@click="toggleLeftSidenav")
        md-icon menu
      h2.md-title Admin Home
    h1 Admin Home
    router-link(to="/admin/signup") Sign Up
    router-link(to="/admin/signin") Sign In
    router-view
    md-sidenav.md-left(ref="leftSidenav", @open="open('Left')", @close="close('Left')")
      md-toolbar.md-large
        .md-toolbar-container
          h3.md-title Sidenav content
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!
</template>

<script>
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
