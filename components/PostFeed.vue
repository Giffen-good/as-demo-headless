<template>
  <section
    class="
      post-feed
      mt-6
      grid grid-cols-1
      gap-y-10 gap-x-4
      sm:grid-cols-2
      lg:grid-cols-4
      xl:gap-x-6
      max-w-screen-xl
      wd-container
    "
  >
    <PostCard v-for="(post, idx) in posts" :key="idx" :data="post" />
  </section>
</template>
<script>
export default {
  name: 'PostFeed',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
