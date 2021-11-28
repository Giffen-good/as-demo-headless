<template>
  <HomePage :page="page" />
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import init from '@/composables/init'
import getPageData from '@/composables/api/getPageData'

import tailwindConfig from '@/tailwind.config.js'

export default {
  setup() {
    const store = useStore()
    init(store)
  },
  async asyncData({ app }) {
    const page = await getPageData()
    return { page }
  },
}
</script>
