<template>
  <picture>
    <source
      v-for="(src, idx) in sources"
      :key="idx"
      :srcset="src.srcset"
      :media="src.media"
    />
    <img :class="fallback.classes" :src="fallback.src" :alt="fallback.alt" />
  </picture>
</template>
<script>
export default {
  name: 'Picture',
  props: {
    sources: {
      type: Array,
      required: true,
    },
    fallback: {
      type: Object,
      required: true,
    },
  },
}
</script>
