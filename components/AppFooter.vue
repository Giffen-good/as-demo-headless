<template>
  <footer
    id="colophon"
    class="
      site-footer
      flex-shrink-0
      bg-dark-blue
      border-t-4 border-gold
      text-white
      pt-8
      md:pt-14
      pb-6
    "
  >
    <div class="relative">
      <nav
        id="footer-nav"
        class="
          flex
          md:justify-between
          wd-container
          justify-center
          md:flex-nowrap
          flex-wrap
        "
      >
        <div class="site-branding hidden md:block text-center">
          <NuxtLink to="/" rel="home"><NuxtLogo /></NuxtLink>
        </div>
        <div
          class="
            right-footer-nav
            flex
            justify-center
            md:justify-end
            flex-wrap
            md:w-auto
            w-full
          "
        >
          <ul class="sm-nav w-full justify-center md:justify-end flex z-10">
            <li v-for="(sm, idx) in smNav" :key="idx" class="h-7 w-7 ml-2.5">
              <NuxtLink :to="sm.href"
                ><component :is="sm.component"
              /></NuxtLink>
            </li>
          </ul>

          <ul class="flex pt-4 pb-4 md:pb-8 z-10">
            <li v-for="(item, idx) in footerMenu" :key="idx" class="text-sm">
              <NuxtLink class="" :to="item.src"> {{ item.name }} </NuxtLink>
              <span
                v-if="idx !== footerMenu.length - 1"
                class="sep mx-2.5 text-blue-grey"
              >
                |
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div class="absolute giant-logo w-full bottom-0 site-branding">
        <NuxtLogo />
      </div>
    </div>
    <div
      class="
        site-info
        text-center
        md:text-right
        text-xxs
        mt-3
        md:mt-5
        wd-container
      "
    >
      <span>
        © NORR 2021<span class="sep mx-2.5 text-blue-grey"> | </span>Website by
        <a
          href="https://artscience.ca/"
          target="_blank"
          rel="noopener noreferrer"
          >Art &amp; Science</a
        ></span
      ><a
        href="https://artscience.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </div>
    <!-- .site-info --><a
      href="https://artscience.ca/"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
  </footer>
</template>
<script>
import NuxtLogo from '@/assets/logo-norr.svg?inline'
import FacebookLogo from '@/assets/icon-facebook.svg?inline'
import InstagramLogo from '@/assets/icon-instagram.svg?inline'
import LinkedinLogo from '@/assets/icon-linkedin.svg?inline'
import TwitterLogo from '@/assets/icon-twitter.svg?inline'
import YoutubeLogo from '@/assets/icon-youtube.svg?inline'

export default {
  name: 'AppFooter',
  components: {
    NuxtLogo,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
    YoutubeLogo,
    FacebookLogo,
  },
  computed: {
    smNav() {
      return [
        { component: FacebookLogo, href: '#facebook' },
        { component: InstagramLogo, href: '#insta' },
        { component: TwitterLogo, href: '#twitter' },
        { component: YoutubeLogo, href: '#youtube' },
        { component: LinkedinLogo, href: '#linked' },
      ]
    },
    footerMenu() {
      return [
        { name: 'Contact', src: '/contact' },
        { name: 'In the News', src: '/in-the-news' },
        { name: 'Terms of Use', src: '/terms-of-use' },
        { name: 'Accessibility', src: '/accessibility' },
        { name: 'Privacy', src: '/privacy' },
      ]
    },
  },
}
</script>
