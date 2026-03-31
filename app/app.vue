<script setup>
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

const navItems = [
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Experience', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  { label: 'Education', to: '#education' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <AppLogo class="shrink-0" />
        </NuxtLink>
      </template>

      <template #center>
        <UNavigationMenu
          :items="navItems"
          class="hidden lg:flex"
        />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/hannanmiah"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />

        <UButton
          to="https://linkedin.com/in/hannanmiah"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          &copy; {{ new Date().getFullYear() }} Hannan Miah. All rights reserved.
        </p>
      </template>

      <template #right>
        <UButton
          to="mailto:hannanhridoy@gmail.com"
          icon="i-lucide-mail"
          aria-label="Email"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://github.com/hannanmiah"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://linkedin.com/in/hannanmiah"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
