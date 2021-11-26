<template>
  <section class="large-image-cta-container pt-10 md-lg:pt-1">
    <section
      v-for="(cta, idx) in largeImageCtas"
      :key="idx"
      class="
        large-image-cta
        grid grid-cols-16
        pt-20
        wd-container
        max-w-screen-xl
        md-lg:flex md-lg:flex-wrap
      "
    >
      <div
        :class="`
          relative
          row-span-full
          col-span-10
          self-center
          md-lg:w-full
          ${idx % 2 === 0 ? 'col-start-1' : 'col-end-17'}`"
      >
        <Picture
          v-if="Object.keys(cta.image).length"
          :sources="[
            {
              srcset: cta.image.sizes['2048x2048'],
              media: '(min-width:1000px)',
            },
            { srcset: cta.image.sizes['large'], media: '(min-width:800px)' },
          ]"
          :fallback="{
            classes: '',
            alt: cta.image.alt,
            src: cta.image.sizes['large'],
          }"
        />
      </div>
      <div
        :class="`row-span-full col-span-7 self-center z-10 md-lg:w-full md-lg:text-left md-lg:mt-2',
          ${idx % 2 == 0 ? 'col-end-17 text-right' : 'col-start-1 text-left'}`"
      >
        <div class="separator horizontal-separator"></div>
        <div
          :class="`w-full bg-white md-lg:pr-0 md-lg:pl-0 pl-6 ${
            idx % 2 === 0 ? 'pl-6' : 'pr-6'
          }`"
        >
          <h3 class="text-4xl font-light leading-tight mb-6 text-darker-grey">
            {{ cta.heading }}
          </h3>
        </div>
        <NuxtLink class="btn mb-8" :to="getPath(cta.callout_url)">{{
          cta.button_text
        }}</NuxtLink>
      </div>
    </section>
  </section>
</template>
<script>
import util from '@/util'
export default {
  name: 'AcfLargeImageCtas',
  props: {
    largeImageCtas: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getPath(url) {
      return util.getPathname(url)
    },
  },
}
</script>
