<template>
  <NuxtLink
    :to="getPath(data.link)"
    class="post-card group relative cursor-pointer"
  >
    <div
      class="
        w-full
        min-h-80
        bg-gray-200
        aspect-w-1 aspect-h-1
        overflow-hidden
        lg:aspect-none
      "
    >
      <img :alt="img.alt_text" :src="img.source_url" class="object-cover" />
    </div>
    <hgroup class="mt-2 pl-6 relative">
      <h3>Insight</h3>
      <h4 class="text-2xl text-dark-blue leading-snug py-1 font-medium">
        {{ data.title.rendered }}
      </h4>
      <h5
        class="line-clamp-3 text-dark-grey"
        v-html="data.excerpt.rendered"
      ></h5>
      <div class="line-flare short-flare vertical-flare absolute"></div>
    </hgroup>
  </NuxtLink>
</template>
<script>
import util from '@/util'

export default {
  name: 'PostCard',
  props: ['data'],
  setup() {},
  computed: {
    img() {
      return this.data._embedded['wp:featuredmedia'][0]
    },
  },
  methods: {
    getPath(url) {
      return util.getPathname(url)
    },
  },
}
</script>
