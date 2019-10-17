<template>
  <div class="toast">
    <p class="content">{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        content: '',
        duration: 3000
      }
    },
    mounted () {
      setTimeout(() => {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, this.duration)
    }
  }
</script>

<style lang="stylus" scoped>
  .toast
    position fixed
    bottom 25%
    left 50%
    z-index 999
    max-width 60%
    border-radius 4px
    padding 10px 15px
    line-height 1.5
    text-align center
    word-wrap break-word
    word-break break-all
    background rgba(0, 0, 0, .6)
    transform translateX(-50%)

  .content
    margin 0
    font-size 14px
    color #fff
</style>
