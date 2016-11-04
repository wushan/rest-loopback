<template lang="pug">
  #app(v-md-theme="'default'")
    router-view
    span Built by Vue.js / Vue Material and loopback.js
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  width: 100%; 
}
</style>
