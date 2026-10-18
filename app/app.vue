<script setup>
const menuOpen = ref(false)
const links = ['About', 'Projects', 'Expertise', 'Experience', 'Education', 'Contact']

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Hannan Miah — Fullstack Software Developer'
const description = 'Full-Stack Laravel Developer with over 5 years of experience building web applications with Laravel, Vue.js, Nuxt.js, Tailwind CSS, and MySQL. Skilled in Dockerized environments and delivering clean, scalable, user-centric solutions.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://hannanmiah.github.io/hannan-portrait-1024.jpg',
  twitterImage: 'https://hannanmiah.github.io/hannan-portrait-1024.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="portfolio">
    <a
      href="#main"
      class="skip-link"
    >Skip to content</a>
    <header class="site-header">
      <nav
        class="section-shell nav-bar"
        aria-label="Main navigation"
      >
        <NuxtLink
          to="/"
          class="wordmark"
          aria-label="Hannan Miah home"
        >hannan<span>.dev</span></NuxtLink><div class="desktop-nav">
          <a
            v-for="link in links.slice(0, 4)"
            :key="link"
            :href="'#' + link.toLowerCase()"
          >{{ link }}</a>
        </div><div class="nav-actions">
          <a
            href="#contact"
            class="nav-contact"
          >Contact me <UIcon name="i-lucide-arrow-up-right" /></a><button
            class="menu-toggle"
            aria-controls="mobile-nav"
            :aria-expanded="menuOpen"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <UIcon :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" />
          </button>
        </div>
      </nav><nav
        v-if="menuOpen"
        id="mobile-nav"
        class="mobile-nav section-shell"
        aria-label="Mobile navigation"
      >
        <a
          v-for="link in links"
          :key="link"
          :href="'#' + link.toLowerCase()"
          @click="menuOpen = false"
        >{{ link }}</a>
      </nav>
    </header>
    <main id="main">
      <NuxtPage />
    </main>
    <footer class="section-shell site-footer">
      <div>
        <a
          href="#main"
          class="wordmark"
        >hannan<span>.dev</span></a><p>Fullstack development. Product thinking.</p>
      </div><div class="footer-links">
        <a
          href="https://github.com/hannanmiah"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub ↗</a><a
          href="https://linkedin.com/in/hannanmiah"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn ↗</a><a
          href="/hannan_cv_16_10_2026.pdf"
          download
        >Résumé ↓</a>
      </div><span class="copyright">© {{ new Date().getFullYear() }} Hannan Miah</span>
    </footer>
  </div>
</template>
