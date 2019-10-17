import { mapActions, mapGetters } from 'vuex'

export const storeMixin = {
  created () {
    this.readyStore()
  },
  mounted () {
    window.addEventListener('beforeunload', this.saveStore)
  },
  destroyed () {
    window.removeEventListener('beforeunload', this.saveStore)
    this.removeStore()
  },
  methods: {
    saveStore () {
      sessionStorage.setItem('localStore', JSON.stringify(this.$store.state))
    },
    readyStore () {
      let localStore = sessionStorage.getItem('localStore')
      if (localStore) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStore)))
      }
    },
    removeStore () {
      sessionStorage.removeItem('localStore')
    }
  }
}

export const userMixin = {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'updateUser',
      'logout'
    ])
  }
}
