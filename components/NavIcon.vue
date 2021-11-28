<template>
  <div class="md:hidden flex items-center justify-end nav-icon-wrapper">
    <div id="nav-icon3" :class="`${openNav ? 'open' : ''}`" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    openNav() {
      return this.$store.state.openNav
    },
  },
  methods: {
    toggleNav() {
      this.$store.dispatch('toggleNav')
    },
  },
}
</script>
