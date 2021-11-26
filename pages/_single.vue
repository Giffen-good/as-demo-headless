<template>
  <Page v-if="single.type === 'page'" :page="single" />
  <Post v-else :post="single" />
</template>

<script>
import Page from '@/components/templates/Page.vue'
import Post from '@/components/templates/Post.vue'

export default {
  components: {
    Page,
    Post,
  },
  computed: {
    single() {
      return this.$store.state.pages.page
    },
  },
  created() {
    const slug = this.$route.params.single
    this.$store.dispatch('pages/getSinglePageData', slug)
  },
}
</script>
