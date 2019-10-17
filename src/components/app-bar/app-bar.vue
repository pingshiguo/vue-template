<template>
  <header class="app-bar">
    <go-back v-if="showBack"/>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  import GoBack from '../go-back/go-back'

  export default {
    name: 'app-bar',
    props: {
      title: '',
      showBack: false
    },
    components: { GoBack }
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/variable.styl"
  @import "../../stylus/mixin.styl"

  .app-bar
    position fixed
    top 0
    right 0
    left 0
    z-index 1
    padding 8px 16px
    background #fff
    bottom-1px-border($color-border)

    .title
      margin 0
      line-height 32px
      text-align center
      font-size 18px
      font-weight 400
      color $color-dark
</style>
