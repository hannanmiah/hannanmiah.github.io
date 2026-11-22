<script setup>
const menuOpen = ref(false)
const colorMode = useColorMode()

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' }
]

const isDark = computed(() => colorMode.value === 'dark')

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://hannanmiah.github.io' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Hannan Miah — Fullstack Software Developer'
const description = 'Dhaka-based fullstack developer with 5+ years shipping Laravel backends, Vue and Nuxt frontends, microservices, and Docker deployments.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://hannanmiah.github.io',
  ogImage: 'https://hannanmiah.github.io/hannan-portrait-1024.jpg',
  twitterImage: 'https://hannanmiah.github.io/hannan-portrait-1024.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
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
          >
            hannan<span>.dev</span>
          </NuxtLink>

          <div class="desktop-nav">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.href"
            >{{ link.label }}</a>
          </div>

          <div class="nav-actions">
            <button
              type="button"
              class="icon-button"
              :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
              @click="toggleTheme"
            >
              <ClientOnly>
                <UIcon :name="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" />
                <template #fallback>
                  <UIcon name="i-lucide-moon" />
                </template>
              </ClientOnly>
            </button>

            <a
              href="#contact"
              class="nav-contact"
            >
              Contact
              <UIcon name="i-lucide-arrow-up-right" />
            </a>

            <button
              type="button"
              class="menu-toggle"
              aria-controls="mobile-nav"
              :aria-expanded="menuOpen"
              :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
              @click="menuOpen = !menuOpen"
            >
              <UIcon :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" />
            </button>
          </div>
        </nav>

        <nav
          v-if="menuOpen"
          id="mobile-nav"
          class="mobile-nav section-shell"
          aria-label="Mobile navigation"
        >
          <a
            v-for="link in [...navLinks, { label: 'Contact', href: '#contact' }]"
            :key="link.label"
            :href="link.href"
            @click="menuOpen = false"
          >{{ link.label }}</a>
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
          >hannan<span>.dev</span></a>
          <p>Fullstack software developer in Dhaka, Bangladesh.</p>
        </div>

        <div class="footer-links">
          <a
            href="https://github.com/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub ↗</a>
          <a
            href="https://linkedin.com/in/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn ↗</a>
          <a
            href="mailto:hannanhridoy@gmail.com"
          >Email ↗</a>
          <a
            href="/hannan_cv_16_10_2026.pdf"
            download
          >Résumé ↓</a>
        </div>

        <span class="copyright">© {{ new Date().getFullYear() }} Hannan Miah</span>
      </footer>
    </div>
  </UApp>
</template>
