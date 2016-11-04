<template lang="pug">
  .providers
    p Walkinghome Co., Ltd.
    .providers-list
      a.provider(href="https://vuejs.org", target="_blank")
        img(src="https://vuejs.org/images/logo.png")
        p Vue.js
      a.provider(href="https://marcosmoura.github.io/vue-material/", target="_blank")
        img(src="https://marcosmoura.github.io/vue-material/assets/logo-vue-material-blue.png")
        p Vue Material
      a.provider(href="https://loopback.io/", target="_blank")
        img(src="https://loopback.io/images/overview/loopback.svg")
        p loopback.js
</template>

<script>
export default {
  name: 'Provider',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.providers {
  text-align: center;
}
.providers-list {
  display: flex;
  -webkit-align-content: center;
  justify-content: center;
  align-content: center;
  justify-content: center;
  .provider {
    flex: initial;
    width: 100px;
    text-align: center;
    opacity: .33;
    transition: .3s all ease;
    &:hover {
      opacity: 1;
      img {
        filter: grayscale(0%);
      }
    }
    img {
      filter: grayscale(100%);
    }
  }
  img {
    max-width: 100%;
    max-height: 50px;
  }
}
</style>
