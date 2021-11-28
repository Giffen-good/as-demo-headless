<template>
  <main id="primary" class="site-main flex-1 z-10">
    <template v-if="page">
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
      <PostFeed v-if="posts" :posts="posts" />
      <Loader v-else />
      <AcfLargeImageCtas :large-image-ctas="largeImageCtas" />
      <AcfSubfooterCtas
        :subfooter-ctas="subfooterCtas"
        :image="subfooterImage"
      />
    </template>
  </main>
</template>

<script>
import getAllPosts from '~/composables/api/getAllPosts'
export default {
  props: ['page'],
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await getAllPosts()
  },
  computed: {
    largeImageCtas() {
      return this.page.acf ? this.page.acf.large_image_ctas : []
    },
    subfooterCtas() {
      return this.page.acf
        ? {
            left_column_cta: this.page.acf.left_column_cta,
            right_column_cta: this.page.acf.right_column_cta,
          }
        : {}
    },
    subfooterImage() {
      return this.page.acf ? this.page.acf.background_image_footer : {}
    },
    heroData() {
      return this.page.acf
        ? {
            hero_heading: this.page.acf.hero_heading,
            hero_callouts: this.page.acf.hero_callouts,
            hero_image: this.page.acf.hero_image,
          }
        : {}
    },
  },
  methods: {},
}
</script>
