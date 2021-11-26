<template>
  <div class="page-not-found">
    <div class="container is-flex">
      <nuxt-link class="button button--sent" to="/">HOME</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Page not Found',
    }
  },
}
</script>
