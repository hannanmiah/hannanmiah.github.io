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
const description = 'Results-driven Fullstack Developer with over 5 years of experience specializing in the TALL and VILT stacks. Proven track record in architecting scalable ERP systems, high-traffic e-commerce platforms, and microservices.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://hannanmiah.github.io/photo.jpg',
  twitterImage: 'https://hannanmiah.github.io/photo.jpg',
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
        >hm<span>✳</span></NuxtLink><div class="desktop-nav">
          <a
            v-for="link in links.slice(0, 4)"
            :key="link"
            :href="'#' + link.toLowerCase()"
          >{{ link }}</a>
        </div><div class="nav-actions">
          <a
            href="#contact"
            class="nav-contact"
          >Let's talk <UIcon name="i-lucide-arrow-up-right" /></a><button
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
        >hm<span>✳</span></a><p>Thoughtfully built, from Dhaka.</p>
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
          href="/hannan_cv_4_apr_2026_latest.pdf"
          download
        >Résumé ↓</a>
      </div><span class="copyright">© {{ new Date().getFullYear() }} Hannan Miah</span>
    </footer>
  </div>
</template>
