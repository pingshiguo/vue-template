<template>
  <div
    class="marquee"
    :class="{'is-pause': duration <= 0}">
    <div
      ref="content"
      class="content"
      :style="'animation-duration: ' + duration + 's;'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'marquee',
    data () {
      return {
        duration: 0
      }
    },
    mounted () {
      this.refreshDuration()
    },
    updated () {
      this.refreshDuration()
    },
    methods: {
      refreshDuration () {
        this.duration = Math.round(this.$refs.content.getBoundingClientRect().width / 30)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .marquee
    position relative
    width 100%
    height 100%
    font-size inherit
    color inherit
    overflow hidden

    &.is-pause
      .content
        animation-play-state paused

    .content
      position absolute
      left 0
      height 100%
      padding-left 100%
      white-space nowrap
      animation-name marquee
      animation-timing-function linear
      animation-iteration-count infinite

  @keyframes marquee
    0%
      transform translateX(0)

    100%
      transform translateX(-100%)
</style>
