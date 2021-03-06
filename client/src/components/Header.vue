<template>
  <v-container
  fluid>

  <v-app-bar
  v-if="!$route.meta.hideNavigation"
  :app=true
  dark
  color="primary">

    <v-app-bar-nav-icon
    @click="drawer = true; loginHide(); loginShow();"
    v-if="mobileNav === false"
    >
    </v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-btn
      icon
      exact
      to="/">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn
    icon
    class="mr-1"
    v-if="this.$route.name === 'content'">
      <v-icon>
        mdi-magnify
      </v-icon>
    </v-btn> -->

        <v-text-field
        hide-details
        v-if="$route.name === 'content'"
        v-model="search"
        prepend-icon="search"
        single-line
        solo
        label="Title, author or content"
        class="shrink"
          >
        </v-text-field>

    <v-btn
    icon
    v-if="mobileNav"
    @click="drawer = true; loginHide(); loginShow();">
      <v-icon>
        mdi-menu
      </v-icon>
    </v-btn>

  </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        temporary
        dark
        :mini-variant="mobileNav"
        :right="mobileNav"
        color="secondary"
        app
    >
      <v-list
        nav
      >
        <v-list-item-group>

          <v-list-item
          v-if="!mobileNav"
          >
            <v-list-item-content>
              <v-list-item-title class="title text-left">
                Web App
              </v-list-item-title>
              <v-list-item-subtitle class="text-left">
                Skeleton for a SPA
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
          v-if="!mobileNav">
          </v-divider>

          <v-list-item
          class="text-left"
          v-for="item of activeLinks"
          :key="item.title"
          link
          exact
          :to="item.to">

            <v-list-item-icon
            >
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

      <template v-slot:append
      v-if="checkToken">
        <v-container>
          <v-list
        nav
      >
        <v-list-item-group>

          <v-list-item
          class="text-left"
          v-for="item of bottomItems"
          :key="item.title"
          @click="item.action()"
          link>

            <v-list-item-icon
            class="mr-4"
            >
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
        </v-container>
      </template>

    </v-navigation-drawer>

    <v-snackbar
      v-model="snackbarRules.snackbar"
      :timeout="snackbarRules.timeout">
        {{ snackbarRules.text }}
        <v-btn
          color="blue"
          text
          @click="snackbarRules.snackbar = false">
          Close
        </v-btn>
      </v-snackbar>

  </v-container>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      drawer: null,
      topItems: [
        { title: 'Home', icon: 'mdi-duck', showOnLogin: false, hideOnLogin: false, to: '/', show: true },
        { title: 'Shop', icon: 'mdi-storefront', showOnLogin: false, hideOnLogin: false, to: '/shop', show: true },
        { title: 'Create Account', icon: 'mdi-account-plus', showOnLogin: false, hideOnLogin: true, to: '/register', show: true },
        { title: 'Log in', icon: 'mdi-login', showOnLogin: false, hideOnLogin: true, to: '/login', show: true },
        { title: 'Bookmarks', icon: 'mdi-bookmark-multiple', showOnLogin: true, hideOnLogin: false, to: '/bookmarks', show: false }
      ],
      bottomItems: [
        { title: 'Settings', icon: 'mdi-cog', action: this.navigateToSettings },
        { title: 'Logout', icon: 'mdi-logout', action: this.logout }
      ],
      snackbarRules: {
        snackbar: false,
        text: 'Goodbye!',
        timeout: 1000
      },
      search: null
    }
  },
  methods: {
    navigateTo (name) {
      if (this.$route.name !== name) {
        this.$router.push({name: name})
      }
    },
    navigateToSettings () {
      this.navigateTo('settings')
    },
    async logout () {
      try {
        this.drawer = false
        this.$store.dispatch('logout')
        this.snackbarRules.snackbar = true
        setTimeout(() => this.navigateTo('content'), 1250)
        this.topItems
          .filter(u => { return u.hideOnLogin === true })
          .map(u => { u.show = true })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    loginShow () {
      if (this.checkToken) {
        this.topItems
          .filter(u => { return u.showOnLogin === true })
          .map(u => { u.show = true })
      }
    },
    loginHide () {
      if (this.checkToken) {
        this.topItems
          .filter(u => { return u.hideOnLogin === true })
          .map(function (u) { u.show = false })
      }
    }
  },
  computed: {
    checkToken: function () {
      return this.$store.state.token != null
    },
    activeLinks: function () {
      return this.topItems
        .filter(u => u.show === true)
    },
    mobileNav () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  watch: {
    search: _.debounce (async function (value) {
      const route = {
        name: 'content'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      if (this.$route.query.search !== value) {
        this.$router.push(route)
      }
    }, 1000),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
</style>
