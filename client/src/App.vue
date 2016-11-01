<template lang="pug">
  #app(v-md-theme="'default'")
    router-view
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
