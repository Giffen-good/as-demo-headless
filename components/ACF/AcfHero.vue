<template>
  <section class="hero-section">
    <div class="w-full relative hero-container">
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
      <div class="inset-center w-11/12 text-center absolute text-white">
        <h2 class="text-6xl font-light leading-none">{{ heading }}</h2>
        <hgroup
          v-if="callouts.length"
          class="flex justify-center items-center pt-7 flex-wrap sm:flex-nowrap"
        >
          <h3
            v-if="
              Object.prototype.hasOwnProperty.call(callouts[0], 'callout_label')
            "
            class="text-4xl w-full sm:w-auto"
          >
            <NuxtLink :to="getPath(callouts[0].callout_url)">{{
              callouts[0].callout_label
            }}</NuxtLink>
          </h3>
          <div class="separator mx-5 w-3px hidden sm:block"></div>
          <h3
            v-if="
              Object.prototype.hasOwnProperty.call(callouts[1], 'callout_label')
            "
            class="text-4xl w-full sm:w-auto"
          >
            <NuxtLink :to="getPath(callouts[1].callout_url)">{{
              callouts[1].callout_label
            }}</NuxtLink>
          </h3>
          <div class="separator mx-5 w-3px hidden sm:block"></div>
          <h3
            v-if="
              Object.prototype.hasOwnProperty.call(callouts[2], 'callout_label')
            "
            class="text-4xl w-full sm:w-auto"
          >
            <NuxtLink :to="getPath(callouts[2].callout_url)">{{
              callouts[2].callout_label
            }}</NuxtLink>
          </h3>
        </hgroup>
      </div>
    </div>
  </section>
</template>
<script>
import util from '@/util'

export default {
  name: 'AcfHero',
  props: {
    heroData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      heading: '',
      callouts: [],
      image: {},
    }
  },
  mounted() {
    const { hero_heading, hero_callouts, hero_image } = this.heroData
    this.heading = hero_heading
    this.callouts = hero_callouts
    this.image = hero_image
  },
  methods: {
    getPath(url) {
      return util.getPathname(url)
    },
  },
}
</script>
