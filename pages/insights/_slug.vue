<template>
  <PostPage v-if="pageData" :post="pageData" />
  <Four04Page v-else-if="completed" />
  <main v-else class="site-main flex-1 z-10 items-center justify-center flex">
    <Loader />
  </main>
</template>
<script>
import getPageData from '@/composables/api/getPageData'
import init from '@/composables/init'
import wpConfig from '@/wp-config'

export default {
  setup() {
    const store = useStore()
    init(store)
  },
  async asyncData({ app, params }) {
    let pageData

    if (Object.prototype.hasOwnProperty.call(params, 'slug')) {
      const p = { slug: params.slug }
      pageData = await getPageData(p, wpConfig.api.getCustomPosts)

      // If response is undefined, single page may be post page
      if (typeof pageData === 'undefined') {
        const p = { slug: params.single, _embed: true }
        pageData = await getPageData(p, wpConfig.api.getCustomPosts)
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
