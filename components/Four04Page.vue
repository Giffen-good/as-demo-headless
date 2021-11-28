<template>
  <main class="site-main flex-1 z-10">
    <div class="page-not-found">
      <div class="container is-flex">
        <h1>Welcome to the 404</h1>
        <nuxt-link class="button button--sent" to="/">Go Back</nuxt-link>
      </div>
    </div>
  </main>
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
