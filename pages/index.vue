<template>
  <HomePage :page="page" />
</template>

<script>
import init from '@/composables/init'
import getPageData from '@/composables/api/getPageData'

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
