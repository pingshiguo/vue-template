<template>
  <footer class="tab">
    <router-link to="/" class="tab-item" replace exact>
      <div class="tab-item-icon">
        <span class="icon is-home"></span>
      </div>
      <span class="tab-item-label">首页</span>
    </router-link>
    <router-link to="/order" class="tab-item" replace>
      <div class="tab-item-icon">
        <span class="icon is-order"></span>
      </div>
      <span class="tab-item-label">订单</span>
    </router-link>
    <router-link to="/withdraw" class="tab-item" replace>
      <div class="tab-item-icon">
        <span class="icon is-withdraw"></span>
      </div>
      <span class="tab-item-label">提现</span>
    </router-link>
    <router-link to="/user" class="tab-item" replace>
      <div class="tab-item-icon">
        <span class="icon is-user"></span>
      </div>
      <span class="tab-item-label">我的</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: 'tab'
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/variable.styl"
  @import "../../stylus/mixin.styl"

  .tab
    position fixed
    bottom 0
    left 0
    z-index 1
    display flex
    width 100%
    background #fff
    top-1px-border($color-border)

  .tab-item
    display flex
    flex-direction column
    justify-content center
    align-items center
    flex 1
    padding 8px 0
    text-align center

    &.router-link-active
      .tab-item-icon .icon
        background-color $color-theme

      .tab-item-label
        color $color-theme

  .tab-item-icon
    width 24px
    height 24px

  .tab-item-label
    display inline-block
    margin-top 4px
    line-height 1
    font-size $font-size-small
    color #999
</style>
