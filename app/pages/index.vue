<script setup>
const stats = [
  { value: '5+', label: 'Years Exp.', icon: 'i-lucide-briefcase-business' },
  { value: '10+', label: 'Projects', icon: 'i-lucide-folder-open' },
  { value: '4', label: 'Industry Awards', icon: 'i-lucide-award' },
  { value: '100%', label: 'Client Joy', icon: 'i-lucide-heart-handshake' }
]

const skills = [
  {
    title: 'Frontend & Meta-Frameworks',
    icon: 'i-lucide-layout',
    items: ['Vue.js', 'Nuxt.js', 'ReactJs', 'Inertia.js', 'Livewire', 'AlpineJs', 'Tailwind CSS']
  },
  {
    title: 'Backend & Runtimes',
    icon: 'i-lucide-server',
    items: ['PHP (Laravel)', 'Node.js (HonoJs, AdonisJS, Express)', 'NitroJs', 'Go', 'Microservices']
  },
  {
    title: 'Database & ORM',
    icon: 'i-lucide-database',
    items: ['MySQL', 'PostgreSQL', 'Drizzle ORM', 'Eloquent', 'Prisma', 'Redis']
  },
  {
    title: 'DevOps',
    icon: 'i-lucide-cloud',
    items: ['Docker', 'Git', 'CI/CD', 'Nginx', 'Traefik', 'AWS']
  }
]

const technicalSkills = [
  { name: 'Laravel / PHP', level: 95 },
  { name: 'Vue.js / Nuxt.js', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Docker / DevOps', level: 80 },
  { name: 'MySQL / PostgreSQL', level: 88 },
  { name: 'Go', level: 60 }
]

const experience = [
  {
    role: 'Backend Developer',
    company: 'Amarsolution',
    period: '02/2025 – 02/2026',
    location: 'Uttara, Dhaka',
    description: [
      'Architecting and maintaining the AmarSolution ERP, a leading enterprise resource planning tool in Bangladesh',
      'Developing robust Laravel-based microservices to handle high-concurrency data processing',
      'Collaborating with stakeholders to translate complex business requirements into scalable technical specifications'
    ]
  },
  {
    role: 'Senior Laravel Developer',
    company: 'Curlware Digital Agency',
    period: '04/2024 – 01/2025',
    location: 'Shyamloy, Dhaka',
    description: [
      'Led the backend engineering team, improving sprint delivery speed by mentoring junior developers and implementing code review standards',
      'Managed end-to-end lifecycles for multiple client projects, ensuring on-time delivery and high-quality deployments'
    ]
  },
  {
    role: 'Laravel Developer',
    company: 'Boost Education Service',
    period: '06/2022 – 12/2022',
    location: 'Remote',
    description: [
      'Spearheaded the development of a custom CRM for student consultancy, integrating Laravel WebSockets for real-time notifications',
      'Managed cloud infrastructure and automated deployment processes to reduce downtime'
    ]
  }
]

const projects = [
  {
    title: 'Dazzle.com.bd',
    description: 'Popular e-commerce platform in Bangladesh. Backend Team Lead and Project Manager. Next.js frontend, Laravel API backend, Reverb WebSocket, deployed on DigitalOcean with Docker.',
    tags: ['Laravel', 'Next.js', 'Docker', 'E-commerce'],
    link: 'https://dazzle.com.bd',
    image: '/projects/dazzle.png'
  },
  {
    title: 'AmarSolution ERP',
    description: 'Comprehensive ERP solution with microservices architecture. Laravel API powering business process automation.',
    tags: ['Laravel', 'Microservices', 'ERP'],
    link: 'https://amarsolution.com',
    image: '/projects/amarsolution.jpg'
  },
  {
    title: 'Swapix Ecommerce',
    description: 'UK-based e-commerce platform with real-time features. Built with Laravel, Nuxt, Inertia, and WebSocket.',
    tags: ['Laravel', 'Nuxt', 'WebSocket'],
    link: 'https://swapix.co.uk',
    image: '/projects/swapix.png'
  },
  {
    title: 'TechMax POS',
    description: 'Point-of-sale software for UK businesses. Laravel backend with Inertia.js and Vue 3 frontend.',
    tags: ['Laravel', 'Inertia', 'Vue 3'],
    link: 'https://pos.tech-max.co.uk',
    image: '/projects/techmax_pos.png'
  },
  {
    title: 'The Lead Library',
    description: 'CRM platform for student consultancy. Real-time features with WebSocket, built on Laravel and Vue.js.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    link: 'https://bhe.theleadlibrary.com',
    image: '/projects/lead_library.png'
  },
  {
    title: 'YourHouseTV',
    description: 'Streaming platform powered by Laravel, Reverb, and Inertia.js for real-time video delivery.',
    tags: ['Laravel', 'Reverb', 'Inertia'],
    link: 'https://yourhousetv.com',
    image: '/projects/yourhousetv.png'
  },
  {
    title: 'Techdiary Blog',
    description: 'Open-source tech blog platform. Built with Laravel backend and Nuxt.js for the frontend.',
    tags: ['Laravel', 'Nuxt.js', 'Open Source'],
    link: 'https://techdiary.dev',
    image: '/projects/techdiary.png'
  },
  {
    title: 'Nazmul Villa',
    description: 'House rental platform with Laravel API backend and Nuxt.js frontend for property management.',
    tags: ['Laravel', 'Nuxt.js', 'API'],
    link: ''
  },
  {
    title: 'Padma Textile',
    description: 'Textile sample management system built with Laravel and Inertia.js for streamlined operations.',
    tags: ['Laravel', 'Inertia.js'],
    link: ''
  },
  {
    title: 'University Hall Management',
    description: 'Hall management system for universities using Laravel, Livewire, Filament, and Tailwind CSS.',
    tags: ['Laravel', 'Livewire', 'Filament'],
    link: ''
  }
]

const awards = [
  '2nd Place — National Mobile App Development, ICT Division Bangladesh (2019)',
  'Mobile Apps Development Training — ICT Division Bangladesh',
  'ICT Olympiad Bangladesh — University Team Lead',
  'Digital Marketing Training — LEDP Project by Govt. of Bangladesh'
]

const aboutHighlights = [
  { icon: 'i-lucide-code-xml', label: 'TALL & VILT Specialist' },
  { icon: 'i-lucide-box', label: 'Microservices & ERP Systems' },
  { icon: 'i-lucide-rocket', label: 'Production-ready Delivery' }
]

const strategicMetrics = [
  { name: 'Architecture & Design', pct: 95 },
  { name: 'Performance Optimization', pct: 88 },
  { name: 'Security Best Practices', pct: 82 }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-[1200px] mx-auto px-6 pt-20 pb-[80px] flex flex-col items-center text-center">
      <!-- Availability badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 mb-6">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span class="text-sm font-semibold text-secondary uppercase tracking-[0.05em]">Available for new opportunities</span>
      </div>

      <h1 class="text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-on-background mb-6 max-w-4xl">
        Crafting digital experiences with <span class="text-primary">technical precision</span> and creative flair.
      </h1>

      <p class="text-lg leading-[1.6] text-secondary max-w-2xl mb-12">
        Results-driven Fullstack Developer with over 5 years of experience specializing in the TALL and VILT stacks. Proven track record in architecting scalable ERP systems, high-traffic e-commerce platforms, and microservices.
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          class="bg-primary text-on-primary px-8 py-4 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-on-primary-fixed-variant transition-colors"
        >
          View My Work
          <UIcon
            name="i-lucide-arrow-right"
            class="w-5 h-5"
          />
        </a>
        <a
          href="#experience"
          class="border border-outline text-on-background px-8 py-4 rounded-lg text-sm font-semibold hover:bg-surface-container-high transition-colors"
        >
          The Process
        </a>
      </div>
    </section>

    <!-- Stats Bento Grid -->
    <section class="max-w-[1200px] mx-auto px-6 pb-[48px]">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white border border-slate-100 p-8 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] text-center"
        >
          <UIcon
            :name="stat.icon"
            class="w-6 h-6 text-primary mx-auto mb-3"
          />
          <span class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-primary block">
            {{ stat.value }}
          </span>
          <span class="text-sm font-semibold tracking-[0.05em] text-secondary uppercase">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="max-w-[1200px] mx-auto px-6 py-[80px] grid md:grid-cols-2 gap-6 items-center"
    >
      <div class="space-y-6">
        <div class="inline-flex items-center px-3 py-1 bg-surface-container rounded-full gap-2 border border-outline-variant/30">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span class="text-sm font-semibold text-secondary uppercase tracking-[0.05em]">Digital Craftsman</span>
        </div>

        <h2 class="text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-on-background">
          Crafting digital solutions with <span class="text-primary">technical precision</span>.
        </h2>

        <p class="text-lg leading-[1.6] text-secondary max-w-lg">
          I bridge the gap between complex engineering and human-centric design. My work is defined by a commitment to performance, accessibility, and clean architecture.
        </p>

        <div class="flex flex-wrap gap-2 pt-2">
          <span
            v-for="(item, index) in aboutHighlights"
            :key="index"
            class="px-3 py-1 bg-surface-container text-secondary text-sm font-semibold rounded-full border border-outline-variant/30"
          >
            {{ item.label }}
          </span>
        </div>

        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="/hannan_cv_4_apr_2026_latest.pdf"
            target="_blank"
            download
            class="bg-primary text-on-primary px-8 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all active:scale-95"
          >
            Download CV
          </a>
          <a
            href="#experience"
            class="border border-outline text-on-surface px-8 py-3 rounded-lg text-sm font-semibold hover:bg-surface-container transition-all active:scale-95"
          >
            View Philosophy
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
          <img
            src="/photo.jpg"
            alt="Hannan Miah"
            class="w-full h-full object-cover"
          >
        </div>
        <!-- Decorative elements -->
        <div class="absolute -top-6 -right-6 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl" />
        <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl" />
      </div>
    </section>

    <!-- Core Expertise Bento Grid -->
    <section
      id="expertise"
      class="bg-surface-container-low py-[80px]"
    >
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-background mb-4">
            Core Expertise
          </h2>
          <p class="text-base leading-[1.6] text-secondary">
            A balanced mix of technical stacks and creative disciplines.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Tech Stack: Large Span -->
          <div class="md:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-primary/30 transition-all group">
            <div class="flex justify-between items-start mb-6">
              <div class="p-3 bg-primary-container/20 rounded-lg text-primary">
                <UIcon
                  name="i-lucide-code"
                  class="w-6 h-6"
                />
              </div>
              <span class="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Fullstack Development
              </span>
            </div>
            <h3 class="text-2xl font-semibold leading-[1.3] mb-4 text-on-background">
              The Technical Engine
            </h3>
            <p class="text-base text-secondary mb-6">
              Building robust systems using modern frameworks. Architecture that scales with your business needs.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in [...skills[1].items, ...skills[2].items]"
                :key="item"
                class="px-3 py-1 bg-surface-container text-secondary text-sm font-semibold rounded-full border border-outline-variant/30"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <!-- Visual Craft -->
          <div class="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-primary/30 transition-all">
            <div class="p-3 bg-secondary-container rounded-lg text-on-secondary-container w-fit mb-6">
              <UIcon
                name="i-lucide-palette"
                class="w-6 h-6"
              />
            </div>
            <h3 class="text-2xl font-semibold leading-[1.3] mb-2 text-on-background">
              Visual Craft
            </h3>
            <p class="text-base text-secondary">
              Aesthetic precision meets functional clarity.
            </p>
          </div>

          <!-- Infrastructure -->
          <div class="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-primary/30 transition-all">
            <div class="p-3 bg-tertiary-container rounded-lg text-on-tertiary-container w-fit mb-6">
              <UIcon
                name="i-lucide-cloud"
                class="w-6 h-6"
              />
            </div>
            <h3 class="text-2xl font-semibold leading-[1.3] mb-2 text-on-background">
              Infrastructure
            </h3>
            <p class="text-base text-secondary">
              Optimizing for speed, safety, and 99.9% uptime.
            </p>
          </div>

          <!-- Terminal Experience Card -->
          <div class="md:col-span-2 lg:col-span-1 bg-inverse-surface p-8 rounded-xl shadow-xl flex flex-col justify-between overflow-hidden relative group">
            <div class="relative z-10">
              <h3 class="text-2xl font-semibold leading-[1.3] text-white mb-2 font-mono">
                system.log
              </h3>
              <div class="space-y-1 font-mono text-xs text-primary-fixed-dim/80">
                <p>
                  > initializing_creative_process...
                </p>
                <p>
                  > mapping_user_journey...
                </p>
                <p>
                  > refining_design_tokens...
                </p>
                <p class="text-white">
                  > status: optimal
                </p>
              </div>
            </div>
            <div class="absolute -bottom-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <UIcon
                name="i-lucide-terminal"
                class="w-[120px] h-[120px] text-white"
              />
            </div>
          </div>

          <!-- Strategic Design with progress bars -->
          <div class="md:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-primary/30 transition-all flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2">
              <div class="p-3 bg-surface-container rounded-lg text-on-background w-fit mb-6">
                <UIcon
                  name="i-lucide-target"
                  class="w-6 h-6"
                />
              </div>
              <h3 class="text-2xl font-semibold leading-[1.3] mb-4 text-on-background">
                Strategic Design
              </h3>
              <p class="text-base text-secondary">
                Beyond just pixels — solving real business problems through design-led thinking and data-driven insights.
              </p>
            </div>
            <div class="md:w-1/2 flex items-center justify-center p-4 bg-background rounded-lg border border-slate-50">
              <div class="w-full space-y-4">
                <div
                  v-for="metric in strategicMetrics"
                  :key="metric.name"
                >
                  <div class="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div
                      class="h-full bg-primary"
                      :style="{ width: metric.pct + '%' }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend skills card -->
          <div class="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-primary/30 transition-all">
            <div class="p-3 bg-primary-container/20 rounded-lg text-primary w-fit mb-6">
              <UIcon
                name="i-lucide-layout"
                class="w-6 h-6"
              />
            </div>
            <h3 class="text-2xl font-semibold leading-[1.3] mb-2 text-on-background">
              Frontend Stack
            </h3>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="item in skills[0].items"
                :key="item"
                class="px-3 py-1 bg-surface-container text-secondary text-sm font-semibold rounded-full border border-outline-variant/30"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section
      id="experience"
      class="max-w-[1200px] mx-auto px-6 py-[80px]"
    >
      <div class="text-center mb-[80px]">
        <h2 class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-background">
          Professional Evolution
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line (centered on md+, left-aligned on mobile) -->
        <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-surface-container" />

        <!-- Timeline Items -->
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="relative flex flex-col md:flex-row md:justify-between items-start w-full mb-12 group last:mb-0"
        >
          <!-- Left content (desktop only) -->
          <div class="hidden md:block w-[45%] text-right">
            <span class="text-sm font-semibold text-primary bg-primary-container/20 px-3 py-1 rounded-full">
              {{ job.period }}
            </span>
            <h4 class="text-2xl font-semibold leading-[1.3] mt-2 text-on-background">
              {{ job.role }}
            </h4>
            <p class="text-base text-secondary">
              {{ job.company }}
            </p>
          </div>

          <!-- Dot -->
          <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10 group-hover:scale-150 transition-transform top-1" />

          <!-- Right content / full width on mobile -->
          <div class="w-full md:w-[45%] pl-10 md:pl-0">
            <div class="md:hidden mb-2">
              <span class="text-sm font-semibold text-primary bg-primary-container/20 px-3 py-1 rounded-full">
                {{ job.period }}
              </span>
            </div>
            <div class="bg-white border border-slate-100 p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
              <div class="md:hidden mb-3">
                <h4 class="text-lg font-semibold text-on-background">
                  {{ job.role }}
                </h4>
                <p class="text-primary font-medium">
                  {{ job.company }}
                </p>
              </div>
              <ul class="space-y-1.5">
                <li
                  v-for="(item, i) in job.description"
                  :key="i"
                  class="flex items-start gap-2 text-sm text-secondary"
                >
                  <UIcon
                    name="i-lucide-chevron-right"
                    class="w-4 h-4 mt-0.5 text-primary shrink-0"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section
      id="projects"
      class="max-w-[1200px] mx-auto px-6 py-[80px]"
    >
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-background">
            Featured Projects
          </h2>
          <p class="text-base text-secondary">
            A selection of work that defines my approach.
          </p>
        </div>
      </div>

      <!-- Bento: 1 large + 2 small stacked -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Featured project (large) -->
        <div class="bg-white border border-slate-100 rounded-xl overflow-hidden group shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:shadow-xl transition-shadow duration-300">
          <a
            :href="projects[0].link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <div class="aspect-video bg-surface-container overflow-hidden">
              <img
                v-if="projects[0].image"
                :src="projects[0].image"
                :alt="projects[0].title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </div>
            <div class="p-8">
              <div class="flex gap-2 mb-4">
                <span
                  v-for="tag in projects[0].tags"
                  :key="tag"
                  class="bg-surface-container-low text-secondary px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-2xl font-semibold leading-[1.3] text-on-background mb-2">
                {{ projects[0].title }}
              </h3>
              <p class="text-base text-secondary mb-6">
                {{ projects[0].description }}
              </p>
              <span class="text-primary text-sm font-semibold flex items-center gap-2">
                Case Study
                <UIcon
                  name="i-lucide-arrow-right"
                  class="w-4 h-4"
                />
              </span>
            </div>
          </a>
        </div>

        <!-- Right Column Stack -->
        <div class="flex flex-col gap-6">
          <div
            v-for="project in projects.slice(1, 3)"
            :key="project.title"
            class="bg-white border border-slate-100 rounded-xl overflow-hidden group shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex-1 flex flex-col md:flex-row"
          >
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full md:w-2/5 bg-surface-container overflow-hidden"
            >
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </a>
            <div class="p-6 md:w-3/5 flex flex-col justify-center">
              <span class="bg-surface-container-low text-secondary px-3 py-1 rounded-full text-sm font-semibold w-fit mb-3">
                {{ project.tags[0] }}
              </span>
              <h3 class="text-2xl font-semibold leading-[1.3] text-on-background mb-2">
                {{ project.title }}
              </h3>
              <p class="text-base text-secondary mb-4">
                {{ project.description }}
              </p>
              <span class="text-primary text-sm font-semibold flex items-center gap-2">
                View Details
                <UIcon
                  name="i-lucide-arrow-right"
                  class="w-4 h-4"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Remaining projects bento grid -->
      <div class="bento-grid">
        <template
          v-for="(project, index) in projects.slice(3)"
          :key="project.title"
        >
          <!-- Every other card starting from 0 spans 8 cols, others span 4 -->
          <article
            :class="index % 3 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'"
            class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] group transition-all duration-300 hover:border-primary/30"
          >
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div
                v-if="project.image"
                class="h-48 relative overflow-hidden"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-3">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="bg-surface-container text-tertiary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    {{ tag }}
                  </span>
                </div>
                <h3 class="text-2xl font-semibold leading-[1.3] mb-2 group-hover:text-primary transition-colors text-on-background">
                  {{ project.title }}
                </h3>
                <p class="text-secondary text-sm leading-relaxed mb-4">
                  {{ project.description }}
                </p>
                <span class="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Details
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="w-4 h-4"
                  />
                </span>
              </div>
            </a>
            <div
              v-else
              class="p-6"
            >
              <div class="flex gap-2 mb-3">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-surface-container text-tertiary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-2xl font-semibold leading-[1.3] mb-2 text-on-background">
                {{ project.title }}
              </h3>
              <p class="text-secondary text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </article>
        </template>
      </div>
    </section>

    <!-- Technical Arsenal -->
    <section class="bg-white border-y border-slate-100 py-[80px]">
      <div class="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-background mb-6">
            Technical Arsenal
          </h2>
          <p class="text-lg leading-[1.6] text-secondary mb-12">
            I bridge the gap between design and engineering. My toolkit is built for speed, performance, and accessibility.
          </p>
          <div class="space-y-6">
            <div
              v-for="skill in technicalSkills"
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between text-sm font-semibold text-on-background">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="h-1 w-full bg-surface-container rounded-full">
                <div
                  class="h-full bg-primary rounded-full"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Code Terminal -->
        <div class="bg-on-background p-8 rounded-xl shadow-2xl relative overflow-hidden group">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-3 h-3 rounded-full bg-red-500" />
            <div class="w-3 h-3 rounded-full bg-amber-500" />
            <div class="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <pre class="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-mono"><span class="text-primary-fixed-dim">class</span> <span class="text-blue-400">Portfolio</span> {
  <span class="text-primary-fixed-dim">constructor</span>() {
    <span class="text-secondary-fixed-dim">this</span>.name = <span class="text-emerald-400">"Hannan Miah"</span>;
    <span class="text-secondary-fixed-dim">this</span>.mission = <span class="text-emerald-400">"Build for Humans"</span>;
  }

  <span class="text-primary-fixed-dim">render</span>() {
    <span class="text-primary-fixed-dim">return</span> <span class="text-secondary-fixed-dim">this</span>.design() + <span class="text-secondary-fixed-dim">this</span>.code();
  }
}

<span class="text-slate-500">// Initialize high-performance career</span>
<span class="text-primary-fixed-dim">const</span> work = <span class="text-primary-fixed-dim">new</span> Portfolio();
work.ship();</pre>
        </div>
      </div>
    </section>

    <!-- Education & Awards -->
    <section
      id="education"
      class="max-w-[1200px] mx-auto px-6 py-[80px]"
    >
      <div class="text-center mb-12">
        <h2 class="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-on-background">
          Education & Awards
        </h2>
        <p class="text-base text-secondary">
          Academic background and achievements.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-4">
        <!-- Education -->
        <div class="bg-white border border-slate-100 p-8 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 bg-primary-container/20 rounded-lg text-primary">
              <UIcon
                name="i-lucide-graduation-cap"
                class="w-5 h-5"
              />
            </div>
            <span class="text-sm font-semibold text-primary bg-primary-container/20 px-3 py-1 rounded-full">
              2016 – 2023
            </span>
          </div>
          <h3 class="text-2xl font-semibold leading-[1.3] text-on-background mb-1">
            B.Sc. in Electrical and Electronic Engineering
          </h3>
          <p class="text-primary font-medium mb-1">
            Bangabandhu Sheikh Mujibur Rahman Science and Technology University
          </p>
          <p class="text-sm text-secondary">
            Gopalganj
          </p>
        </div>

        <!-- Awards -->
        <div class="bg-white border border-slate-100 p-8 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-primary-container/20 rounded-lg text-primary">
              <UIcon
                name="i-lucide-award"
                class="w-5 h-5"
              />
            </div>
            <h3 class="text-2xl font-semibold leading-[1.3] text-on-background">
              Awards & Certifications
            </h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(award, index) in awards"
              :key="index"
              class="flex items-start gap-2 text-base text-secondary"
            >
              <UIcon
                name="i-lucide-chevron-right"
                class="w-4 h-4 mt-1 text-primary shrink-0"
              />
              {{ award }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="contact"
      class="max-w-[1200px] mx-auto px-6 py-[80px] text-center"
    >
      <div class="bg-primary p-12 md:p-[80px] rounded-3xl relative overflow-hidden">
        <div
          class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"
        />
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-on-primary mb-6">
            Ready to start your next project?
          </h2>
          <p class="text-lg leading-[1.6] text-primary-fixed mb-12">
            Currently accepting select freelance inquiries and fullstack opportunities. Let's build something great together.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hannanhridoy@gmail.com"
              class="bg-white text-primary px-8 py-4 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-lowest transition-colors"
            >
              Send an Email
              <UIcon
                name="i-lucide-mail"
                class="w-5 h-5"
              />
            </a>
            <a
              href="/hannan_cv_4_apr_2026_latest.pdf"
              target="_blank"
              download
              class="bg-on-primary-fixed-variant text-on-primary border border-white/20 px-8 py-4 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary-fixed transition-colors"
            >
              Download CV
              <UIcon
                name="i-lucide-download"
                class="w-5 h-5"
              />
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="https://github.com/hannanmiah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hannanmiah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <span class="flex items-center gap-1.5 text-sm text-white/50">
              <UIcon
                name="i-lucide-map-pin"
                class="w-4 h-4"
              />
              Uttara, Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
