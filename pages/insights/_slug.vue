<template>
  <main class="post individual">
    <div v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <section v-html="post.content.rendered"></section>
    </div>
  </main>
</template>
<script>
export default {
  computed: {
    post() {
      return this.$store.state.posts.post
    },
  },
  created() {
    const slug = this.$route.params.slug
    this.$store.dispatch('posts/getPost', slug)
  },
}
</script>
