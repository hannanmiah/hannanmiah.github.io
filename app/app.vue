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
</script>

<template>
  <div class="min-h-screen bg-background text-on-background font-sans antialiased">
    <!-- TopAppBar -->
    <header class="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
      <nav class="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <UIcon
            name="i-lucide-terminal"
            class="text-green-600 w-6 h-6"
          />
          <span class="text-xl font-bold tracking-tighter text-slate-900">Hannan Miah</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <a
            href="#about"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >About</a>
          <a
            href="#expertise"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >Expertise</a>
          <a
            href="#experience"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >Experience</a>
          <a
            href="#projects"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >Projects</a>
          <a
            href="#education"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >Education</a>
          <a
            href="#contact"
            class="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
          >Contact</a>
        </div>

        <a
          href="#contact"
          class="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
        >
          Hire Me
        </a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-[80px]">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-50 w-full mt-20 border-t border-slate-200">
      <div class="max-w-[1200px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-4">
          <span class="font-bold text-slate-900 text-lg">Hannan Miah</span>
          <span class="text-slate-400">/</span>
          <p class="text-sm text-slate-500">
            &copy; {{ new Date().getFullYear() }} Portfolio. Designed with precision.
          </p>
        </div>
        <div class="flex gap-8">
          <a
            href="https://linkedin.com/in/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-500 hover:text-green-500 transition-colors text-sm"
          >LinkedIn</a>
          <a
            href="https://github.com/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-500 hover:text-green-500 transition-colors text-sm"
          >GitHub</a>
          <a
            href="mailto:hannanhridoy@gmail.com"
            class="text-slate-500 hover:text-green-500 transition-colors text-sm"
          >Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>
