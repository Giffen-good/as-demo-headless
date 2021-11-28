<template>
  <SinglePage
    v-if="
      pageData &&
      Object.prototype.hasOwnProperty.call(pageData, 'type') &&
      pageData.type === 'page'
    "
    :page="pageData"
  />
  <PostPage
    v-else-if="
      pageData &&
      Object.prototype.hasOwnProperty.call(pageData, 'type') &&
      pageData.type === 'post'
    "
    :post="pageData"
  />
  <Four04Page v-else-if="completed" />
  <main v-else class="site-main flex-1 z-10 items-center justify-center flex">
    <Loader />
  </main>
</template>

<script>
import init from '@/composables/init'
import getPageData from '@/composables/api/getPageData'
import wpConfig from '@/wp-config'
export default {
  setup() {
    const store = useStore()
    init(store)
  },
  async asyncData({ app, params }) {
    let pageData

    if (Object.prototype.hasOwnProperty.call(params, 'single')) {
      const p = { slug: params.single }
      pageData = await getPageData(p)

      // If response is undefined, single page may be post page
      if (typeof pageData === 'undefined') {
        const p = { slug: params.single, _embed: true }
        pageData = await getPageData(p, wpConfig.api.getPost)
      }
    }
    app.completed = true
    return { pageData }
  },
  data() {
    return {
      completed: false,
    }
  },
}
</script>
