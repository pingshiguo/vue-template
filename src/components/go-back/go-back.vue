<template>
  <a href="javascript:;" class="go-back" @click="goBack"></a>
</template>

<script>
  export default {
    name: 'go-back',
    methods: {
      goBack () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/variable.styl"

  .go-back
    position absolute
    top 50%
    left 8px
    z-index 1
    display inline-block
    width 32px
    height 32px
    transform translateY(-50%)

    &:before
      content ''
      position absolute
      top 50%
      left 50%
      width 12px
      height 12px
      border-top 2px solid $color-dark
      border-left 2px solid $color-dark
      margin-top -8px
      margin-left -4px
      transform rotate(-45deg)
</style>
