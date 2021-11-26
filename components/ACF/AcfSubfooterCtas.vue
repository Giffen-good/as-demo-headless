<template>
  <section class="sub-footer-ctas relative mt-36">
    <Picture
      v-if="Object.keys(image).length"
      :sources="[
        { srcset: image.sizes['2048x2048'], media: '(min-width:1000px)' },
        { srcset: image.sizes['large'], media: '(min-width:800px)' },
      ]"
      :fallback="{
        classes: 'absolute w-full h-full inset-0 object-cover',
        alt: image.alt,
        src: image.sizes['large'],
      }"
    />
    <div
      v-if="ctaArray"
      class="
        flex
        max-w-screen-lg
        wd-container
        gap-6
        md:gap-16
        p-12
        py-16
        justify-center
        mx-auto
        flex-wrap
        md:flex-nowrap
      "
    >
      <div
        v-for="(cta, idx) in ctaArray"
        :key="idx"
        class="
          md:flex-1
          px-8
          pt-10
          pb-5
          z-10
          bg-white bg-opacity-80
          relative
          flex flex-col
          w-full
          md:w-auto
        "
      >
        <div class="separator horizontal-separator absolute"></div>
        <h3 class="text-3xl text-darker-grey font-medium leading-tight flex-1">
          {{ cta.column_heading }}
        </h3>
        <div class="flex-shrink-0 mt-6">
          <NuxtLink
            class="btn chevron-right inline-block"
            :to="getPath(cta.button_url)"
          >
            <span>{{ cta.button_text }} </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import util from '@/util'
export default {
  name: 'AcfSubfooterCtas',
  props: {
    subfooterCtas: {
      type: Object,
      required: true,
    },
    image: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ctaArray() {
      return Object.keys(this.subfooterCtas).length
        ? [
            this.subfooterCtas.left_column_cta,
            this.subfooterCtas.right_column_cta,
          ]
        : []
    },
  },
  methods: {
    getPath(url) {
      return util.getPathname(url)
    },
  },
}
</script>
