<script setup>
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
</script>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      class="pt-10 pb-16"
    >
      <template #headline>
        <div class="flex justify-center mb-6">
          <img
            src="/photo.jpg"
            alt="Hannan Miah"
            class="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20"
          >
        </div>
      </template>

      <template #title>
        <span class="text-primary">Hannan Miah</span>
      </template>

      <template #description>
        <p class="text-xl font-medium text-highlighted mb-2">
          Fullstack Software Developer
        </p>
        <p class="text-base">
          Results-driven Fullstack Developer with over 5 years of experience specializing in the TALL and VILT stacks. Proven track record in architecting scalable ERP systems, high-traffic e-commerce platforms, and microservices.
        </p>
      </template>

      <template #links>
        <UButton
          to="https://github.com/hannanmiah"
          target="_blank"
          icon="i-simple-icons-github"
          label="GitHub"
          size="xl"
          color="neutral"
          variant="subtle"
        />
        <UButton
          to="https://linkedin.com/in/hannanmiah"
          target="_blank"
          icon="i-simple-icons-linkedin"
          label="LinkedIn"
          size="xl"
          color="neutral"
          variant="subtle"
        />
        <UButton
          to="mailto:hannanhridoy@gmail.com"
          icon="i-lucide-mail"
          label="Email"
          size="xl"
          color="neutral"
          variant="subtle"
        />
        <UButton
          to="/hannan_cv_4_apr_2026_latest.pdf"
          icon="i-lucide-download"
          label="Download CV"
          size="xl"
          color="neutral"
          variant="subtle"
          target="_blank"
          download
        />
        <UButton
          to="#contact"
          icon="i-lucide-file-text"
          label="Contact Me"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
        />
      </template>
    </UPageHero>

    <!-- About -->
    <UPageSection
      id="about"
      title="About Me"
      description="A brief overview of who I am and what I do."
    >
      <div class="max-w-3xl mx-auto">
        <UCard>
          <p class="text-base leading-relaxed text-muted">
            Results-driven Fullstack Developer with over 5 years of experience specializing in the TALL and VILT stacks (Laravel, Vue.js, Inertia, Tailwind). Proven track record in architecting scalable ERP systems, high-traffic e-commerce platforms, and microservices. Expert in Dockerized environments and CI/CD workflows, with a passion for writing clean, testable code and leading cross-functional teams.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <span class="flex items-center gap-1.5">
              <UIcon
                name="i-lucide-map-pin"
                class="w-4 h-4"
              />
              Uttara, Dhaka, Bangladesh
            </span>
            <span class="flex items-center gap-1.5">
              <UIcon
                name="i-lucide-briefcase"
                class="w-4 h-4"
              />
              5+ Years Experience
            </span>
            <span class="flex items-center gap-1.5">
              <UIcon
                name="i-lucide-graduation-cap"
                class="w-4 h-4"
              />
              B.Sc. in EEE
            </span>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- Skills -->
    <UPageSection
      id="skills"
      title="Technical Skills"
      description="Technologies and tools I work with on a daily basis."
      :features="skills.map(s => ({
        icon: s.icon,
        title: s.title,
        description: s.items.join(' · ')
      }))"
    />

    <!-- Experience -->
    <UPageSection
      id="experience"
      title="Work Experience"
      description="My professional journey building software solutions."
    >
      <div class="space-y-6 max-w-3xl mx-auto">
        <UCard
          v-for="(job, index) in experience"
          :key="index"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <h3 class="text-lg font-semibold text-highlighted">
                {{ job.role }}
              </h3>
              <p class="text-primary font-medium">
                {{ job.company }}
              </p>
            </div>
            <div class="text-sm text-muted text-right shrink-0">
              <p>{{ job.period }}</p>
              <p>{{ job.location }}</p>
            </div>
          </div>
          <ul class="space-y-1.5">
            <li
              v-for="(item, i) in job.description"
              :key="i"
              class="flex items-start gap-2 text-sm text-muted"
            >
              <UIcon
                name="i-lucide-chevron-right"
                class="w-4 h-4 mt-0.5 text-primary shrink-0"
              />
              {{ item }}
            </li>
          </ul>
        </UCard>
      </div>
    </UPageSection>

    <!-- Projects -->
    <UPageSection
      id="projects"
      title="Projects"
      description="A selection of projects I've built and contributed to."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <component
          :is="project.link ? 'a' : 'div'"
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link || undefined"
          :target="project.link ? '_blank' : undefined"
          :rel="project.link ? 'noopener noreferrer' : undefined"
          class="block"
        >
          <UCard>
            <img
              v-if="project.image"
              :src="project.image"
              :alt="`${project.title} thumbnail`"
              class="w-full aspect-video object-cover rounded-lg mb-4 border border-default"
            >
            <div
              v-else
              class="w-full aspect-video rounded-lg mb-4 border border-default bg-elevated/50 flex flex-col items-center justify-center gap-2 text-muted"
            >
              <UIcon
                name="i-lucide-image"
                class="w-6 h-6"
              />
              <p class="text-xs">
                No thumbnail for {{ project.title }} yet
              </p>
            </div>
            <h3 class="text-lg font-semibold text-highlighted mb-2">
              {{ project.title }}
            </h3>
            <p class="text-sm text-muted mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="(tag, i) in project.tags"
                :key="i"
                :label="tag"
                color="neutral"
                variant="subtle"
                size="sm"
              />
            </div>
          </UCard>
        </component>
      </div>
    </UPageSection>

    <!-- Education & Awards -->
    <UPageSection
      id="education"
      title="Education & Awards"
      description="Academic background and achievements."
    >
      <div class="max-w-3xl mx-auto space-y-6">
        <UCard>
          <h3 class="text-lg font-semibold text-highlighted mb-1">
            B.Sc. in Electrical and Electronic Engineering
          </h3>
          <p class="text-primary font-medium mb-1">
            Bangabandhu Sheikh Mujibur Rahman Science and Technology University
          </p>
          <p class="text-sm text-muted">
            Gopalganj &middot; 2016–2023
          </p>
        </UCard>

        <UCard>
          <h3 class="text-lg font-semibold text-highlighted mb-4">
            Awards & Certifications
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(award, index) in awards"
              :key="index"
              class="flex items-start gap-2 text-sm text-muted"
            >
              <UIcon
                name="i-lucide-award"
                class="w-4 h-4 mt-0.5 text-primary shrink-0"
              />
              {{ award }}
            </li>
          </ul>
        </UCard>
      </div>
    </UPageSection>

    <!-- Contact -->
    <UPageSection>
      <UPageCTA
        id="contact"
        title="Get In Touch"
        description="Interested in working together? Feel free to reach out."
        variant="subtle"
        :links="[{
          label: 'hannanhridoy@gmail.com',
          to: 'mailto:hannanhridoy@gmail.com',
          icon: 'i-lucide-mail',
          color: 'neutral'
        }, {
          label: '+880 1787 378887',
          to: 'tel:+8801787378887',
          icon: 'i-lucide-phone',
          color: 'neutral',
          variant: 'outline'
        }]"
      >
        <div class="flex items-center gap-4 mt-4">
          <UButton
            to="/hannan_cv_4_apr_2026_latest.pdf"
            target="_blank"
            icon="i-lucide-download"
            label="Download CV"
            color="neutral"
            variant="ghost"
            download
          />
          <UButton
            to="https://github.com/hannanmiah"
            target="_blank"
            icon="i-simple-icons-github"
            label="GitHub"
            color="neutral"
            variant="ghost"
          />
          <UButton
            to="https://linkedin.com/in/hannanmiah"
            target="_blank"
            icon="i-simple-icons-linkedin"
            label="LinkedIn"
            color="neutral"
            variant="ghost"
          />
          <div class="flex items-center gap-1.5 text-sm text-muted">
            <UIcon
              name="i-lucide-map-pin"
              class="w-4 h-4"
            />
            Uttara, Dhaka, Bangladesh
          </div>
        </div>
      </UPageCTA>
    </UPageSection>
  </div>
</template>
