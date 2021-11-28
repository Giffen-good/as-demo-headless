<template>
  <main class="site-main flex-1 z-10">
    <h1 class="wp__title" v-html="page.title.rendered"></h1>
    <div class="wp__content" v-html="page.content.rendered"></div>
  </main>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>
