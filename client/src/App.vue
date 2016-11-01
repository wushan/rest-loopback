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

<style>
</style>
