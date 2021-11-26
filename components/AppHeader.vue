<template>
  <header
    v-if="nav"
    id="masthead"
    class="site-header wd-container pb-1.5 bg-white"
  >
    <nav
      id="topbar"
      class="flex justify-end text-xs pt-1.5 items-center hidden md:flex"
    >
      <NuxtLink to="#" class="flex items-center search-icon">
        <span><SearchIcon /></span>
        <span class="pl-0.5">Search</span>
      </NuxtLink>
      <div class="separator"></div>
      <NuxtLink to="#" class="pl-2.5">Login</NuxtLink>
      <div class="separator"></div>
      <NuxtLink to="#" class="pl-2.5">Covid-19 Info</NuxtLink>
    </nav>
    <div id="main-nav" class="flex justify-between items-baseline mt-1">
      <div class="site-branding">
        <h1 class="site-title">
          <NuxtLink to="/"><SiteLogo /></NuxtLink>
        </h1>
      </div>
      <nav id="site-navigation" class="main-navigation text-sm hidden md:block">
        <ul id="primary-menu" class="flex text-dark-blue">
          <li
            v-for="(menuItem, idx) in nav"
            :key="idx"
            :class="[
              'menu-item',
              {
                'menu-item-has-children': Object.prototype.hasOwnProperty.call(
                  menuItem,
                  'children'
                ),
              },
            ]"
          >
            <NuxtLink :to="getPath(menuItem.url)">{{
              menuItem.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import axios from 'axios'
import wpConfig from '@/wp-config'
import SearchIcon from '@/assets/icon-search.svg?inline'
import SiteLogo from '@/assets/logo-norr.svg?inline'
import util from '@/util'

export default {
  name: 'AppHeader',
  components: {
    SearchIcon,
    SiteLogo,
  },
  data() {
    return {
      nav: [],
    }
  },
  async created() {
    const navData = await axios
      .get(`${wpConfig.wpDomain}${wpConfig.api.getHeaderNavigation}`)
      .then((res) => res.data)
    this.nav = this.organizeMenuHierarchically(navData)
  },
  methods: {
    organizeMenuHierarchically(rawNav) {
      const orderedNav = []
      const tmpDeepMenuItems = {}
      for (let i = 0; i < rawNav.length; i++) {
        const rNavItem = rawNav[i]
        if (!rNavItem.post_parent) {
          orderedNav.push(rNavItem)
        } else {
          tmpDeepMenuItems[rNavItem.post_parent] = rNavItem
        }
      }
      for (let i = 0; i < orderedNav.length; i++) {
        if (orderedNav[i].object_id in tmpDeepMenuItems) {
          if (
            !Object.prototype.hasOwnProperty.call(orderedNav[i], 'children')
          ) {
            orderedNav[i].children = [tmpDeepMenuItems[orderedNav[i].object_id]]
          } else {
            orderedNav[i].children.push(
              tmpDeepMenuItems[orderedNav[i].object_id]
            )
          }
        }
      }
      return orderedNav
    },
    getPath(url) {
      return util.getPathname(url)
    },
  },
}
</script>
