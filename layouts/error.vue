<template>
  <SinglePage v-if="hasPageData && pageData.type === 'page'" :page="pageData" />
  <PostPage
    v-else-if="hasPageData && pageData.type === 'post'"
    :post="pageData"
  />
  <Four04Page v-else-if="completedFinalAttempt" />
  <main v-else class="site-main flex-1 z-10 items-center justify-center flex">
    <Loader />
  </main>
</template>

<script>
import init from '@/composables/init'
import getPageData from '@/composables/api/getPageData'

export default {
  setup() {
    const store = useStore()
    init(store)
  },
  data() {
    return {
      pageData: null,
      completedFinalAttempt: false,
    }
  },
  computed: {
    hasPageData() {
      return (
        !!this.pageData &&
        Object.prototype.hasOwnProperty.call(this.pageData, 'type')
      )
    },
  },
  async created() {
    // No response.. Check to see if page is a valid wordpress subpage with data before returning 404
    const pathParts = this.$route.path.split('/').filter((e) => e)
    const slug = pathParts[pathParts.length - 1]
    const p = { slug, _embed: true }
    this.pageData = await getPageData(p)
    this.completedFinalAttempt = true
  },
}
</script>
