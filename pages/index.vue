<template>
  <main v-if="pageData" id="primary" class="site-main flex-1 z-10">
    <AcfHero v-if="Object.keys(heroData).length" :hero-data="heroData" />
    <div class="text-center">
      <h2
        class="
          c-underline
          text-dark-blue
          my-12
          text-5xl
          font-medium
          inline-block
        "
      >
        Inspiration
      </h2>
    </div>
    <PostFeed :posts="posts" />
    <AcfLargeImageCtas :large-image-ctas="largeImageCtas" />
    <AcfSubfooterCtas :subfooter-ctas="subfooterCtas" :image="subfooterImage" />
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts
    },
    pageData() {
      return this.$store.state.pages.page
    },
    largeImageCtas() {
      return this.pageData.acf ? this.pageData.acf.large_image_ctas : []
    },
    subfooterCtas() {
      return this.pageData.acf
        ? {
            left_column_cta: this.pageData.acf.left_column_cta,
            right_column_cta: this.pageData.acf.right_column_cta,
          }
        : {}
    },
    subfooterImage() {
      return this.pageData.acf ? this.pageData.acf.background_image_footer : {}
    },
    heroData() {
      return this.pageData.acf
        ? {
            hero_heading: this.pageData.acf.hero_heading,
            hero_callouts: this.pageData.acf.hero_callouts,
            hero_image: this.pageData.acf.hero_image,
          }
        : {}
    },
  },
  created() {
    this.$store.dispatch('posts/getAllPosts')
    this.$store.dispatch('pages/getSinglePageData', 'front-page')
  },
}
</script>
