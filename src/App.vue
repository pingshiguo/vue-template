<template>
  <div id="app">
    <app-bar v-if="showHeader" :title="title" :show-back="showBack"/>
    <router-view
      class="main"
      :class="{'is-show-header': showHeader, 'is-show-footer': showFooter}"/>
    <tab-bar v-if="showFooter"/>
  </div>
</template>

<script>
  import { storeMixin } from './utils/mixins'
  import AppBar from './components/app-bar/app-bar'
  import TabBar from './components/tab-bar/tab-bar'

  export default {
    name: 'App',
    mixins: [storeMixin],
    components: {
      AppBar,
      TabBar
    },
    computed: {
      showHeader () {
        return this.$route.meta.showHeader
      },
      title () {
        return this.$route.meta.title
      },
      showBack () {
        return this.$route.meta.showBack
      },
      showFooter () {
        return this.$route.meta.showFooter
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .main
    min-height 100vh

    &.is-show-header
      padding-top 48px

    &.is-show-footer
      padding-bottom 56px
</style>
