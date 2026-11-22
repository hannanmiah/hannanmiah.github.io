<script setup>
const showAllProjects = ref(false)
const activeCategory = ref('All')
const emailCopied = ref(false)

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '12', label: 'Shipped Projects' },
  { value: '1', label: 'National Award' },
  { value: '3', label: 'Certificates' }
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
    title: 'DevOps & Infrastructure',
    icon: 'i-lucide-cloud',
    items: ['Docker', 'Git', 'CI/CD', 'Nginx', 'Traefik', 'AWS']
  }
]

const coreStack = [
  'Laravel / PHP',
  'Vue.js / Nuxt.js',
  'Tailwind CSS',
  'Docker / DevOps',
  'MySQL / PostgreSQL',
  'Go (learning)'
]

const experience = [
  {
    role: 'Fullstack Developer & Product Lead',
    company: 'Cube Limited',
    period: 'Feb 2026 – Present',
    location: 'Shomvuganj, Mymensingh',
    current: true,
    description: [
      'Lead product planning and full-stack Laravel development across school management, EdTech, and news portal products',
      'Architect system backends, APIs, and Dockerized deployments while coordinating engineering delivery'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Amarsolution',
    period: 'Feb 2025 – Feb 2026',
    location: 'Uttara, Dhaka',
    current: false,
    description: [
      'Built core Laravel API services and microservices for AmarSolution ERP',
      'Maintained backend architecture across multiple client and internal web applications'
    ]
  },
  {
    role: 'Senior Laravel Developer',
    company: 'Curlware Digital Agency',
    period: 'Apr 2024 – Jan 2025',
    location: 'Shyamloy, Dhaka',
    current: false,
    description: [
      'Led the backend team and managed delivery across UK and local client projects as Project Manager'
    ]
  },
  {
    role: 'Laravel Developer',
    company: 'Boost Education Service',
    period: 'Jun 2022 – Dec 2022',
    location: 'Remote',
    current: false,
    description: [
      'Led a team to build and run a student consultancy CRM powered by Laravel WebSocket',
      'Managed cloud deployments and supported parallel product releases'
    ]
  }
]

const categories = ['All', 'EdTech', 'E-commerce', 'ERP & SaaS', 'Media & Web']

const projects = [
  {
    title: 'Study Huge',
    role: 'Team Lead & Product Manager',
    category: 'EdTech',
    description: 'Social learning site connecting students and teachers through communities, structured courses, multimedia lessons, and online exams. Developed the Laravel API backend, Docker setup, and real-time features with Livewire, Sanctum, and Reverb while coordinating frontend and mobile teams.',
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'Sanctum', 'Reverb'],
    link: 'https://studyhuge.com',
    image: '/projects/studyhuge.jpg'
  },
  {
    title: 'Dazzle.com.bd',
    role: 'Backend Team Lead & PM',
    category: 'E-commerce',
    description: 'High-traffic e-commerce store in Bangladesh. Designed the Laravel API backend, ran Docker deployments, and coordinated frontend and mobile engineering.',
    tags: ['Laravel', 'Docker', 'E-commerce'],
    link: 'https://dazzle.com.bd',
    image: '/projects/dazzle.png'
  },
  {
    title: 'Crime Talash 24',
    role: 'Team Lead & System Architect',
    category: 'Media & Web',
    description: 'Bangladeshi news portal architected for fast editorial publishing with Laravel, Livewire, and Alpine.js.',
    tags: ['Laravel', 'Livewire', 'Alpine.js'],
    link: 'https://crimetalash24.com',
    image: '/projects/crime-talash-24.jpg'
  },
  {
    title: 'AmarSolution ERP',
    role: 'Backend Developer',
    category: 'ERP & SaaS',
    description: 'Multi-module ERP system split into microservices, with Laravel APIs handling inventory, billing, and business workflows.',
    tags: ['Laravel', 'Microservices', 'ERP'],
    link: 'https://amarsolution.com',
    image: '/projects/amarsolution.jpg'
  },
  {
    title: 'Swapix Ecommerce',
    role: 'Fullstack Developer',
    category: 'E-commerce',
    description: 'UK online store with live order and inventory updates using Laravel, Nuxt, Inertia, and WebSockets.',
    tags: ['Laravel', 'Nuxt', 'WebSocket'],
    link: 'https://swapix.co.uk',
    image: '/projects/swapix.png'
  },
  {
    title: 'TechMax POS',
    role: 'Fullstack Developer',
    category: 'ERP & SaaS',
    description: 'Point-of-sale web application for UK retail stores, pairing a Laravel backend with an Inertia.js and Vue 3 interface.',
    tags: ['Laravel', 'Inertia', 'Vue 3'],
    link: 'https://pos.tech-max.co.uk',
    image: '/projects/techmax_pos.png'
  },
  {
    title: 'The Lead Library',
    role: 'Team Lead',
    category: 'ERP & SaaS',
    description: 'Student consultancy CRM for tracking applicants and real-time counselor updates with Laravel, Vue.js, Tailwind CSS, MySQL, and WebSockets.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    link: 'https://bhe.theleadlibrary.com',
    image: '/projects/lead_library.png'
  },
  {
    title: 'YourHouseTV',
    role: 'Fullstack Developer',
    category: 'Media & Web',
    description: 'Video streaming web app powered by Laravel, Reverb WebSockets, and an Inertia.js Vue interface.',
    tags: ['Laravel', 'Reverb', 'Inertia'],
    link: 'https://yourhousetv.com',
    image: '/projects/yourhousetv.png'
  },
  {
    title: 'Techdiary Blog',
    role: 'Open Source Contributor',
    category: 'Media & Web',
    description: 'Open-source developer blogging community where I contributed features across the Laravel API and Nuxt.js frontend.',
    tags: ['Laravel', 'Nuxt.js', 'Open Source'],
    link: 'https://techdiary.dev',
    image: '/projects/techdiary.png'
  },
  {
    title: 'Nazmul Villa',
    role: 'Fullstack Developer',
    category: 'Media & Web',
    description: 'Property rental and tenant management web app pairing a Laravel API backend with a Nuxt.js frontend.',
    tags: ['Laravel', 'Nuxt.js', 'API'],
    link: ''
  },
  {
    title: 'Padma Textile',
    role: 'Fullstack Developer',
    category: 'ERP & SaaS',
    description: 'Internal textile sample tracking system built with Laravel and Inertia.js for production teams.',
    tags: ['Laravel', 'Inertia.js'],
    link: ''
  },
  {
    title: 'University Hall Management',
    role: 'Fullstack Developer',
    category: 'EdTech',
    description: 'Campus residential hall administration portal built with Laravel, Livewire, Filament, and Tailwind CSS.',
    tags: ['Laravel', 'Livewire', 'Filament'],
    link: ''
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return showAllProjects.value ? projects : projects.slice(0, 4)
  }
  return projects.filter(project => project.category === activeCategory.value)
})

function categoryCount(category) {
  if (category === 'All') return projects.length
  return projects.filter(project => project.category === category).length
}

const recognition = [
  {
    type: 'National Award',
    title: '2nd Place — National Mobile App Development',
    detail: 'ICT Division Bangladesh (2019)'
  },
  {
    type: 'Certificate',
    title: 'Mobile Apps Development Training',
    detail: 'ICT Division Bangladesh'
  },
  {
    type: 'Leadership',
    title: 'ICT Olympiad Bangladesh',
    detail: 'University Team Lead'
  },
  {
    type: 'Certificate',
    title: 'Digital Marketing Training',
    detail: 'LEDP Project by Govt. of Bangladesh'
  }
]

const aboutHighlights = [
  { icon: 'i-lucide-code-xml', label: 'TALL & VILT Stacks' },
  { icon: 'i-lucide-box', label: 'Microservices & ERP' },
  { icon: 'i-lucide-container', label: 'Docker & CI/CD' }
]

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('hannanhridoy@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2200)
  } catch {
    window.location.href = 'mailto:hannanhridoy@gmail.com'
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero section-shell">
      <div class="hero-copy">
        <span class="availability">
          <span class="status-dot" />
          Open to opportunities
        </span>
        <h1>Fullstack systems,<br>from API to interface</h1>
        <p class="hero-description">
          I'm Hannan Miah, a software developer in Dhaka with 5+ years of experience designing Laravel backends, Vue and Nuxt interfaces, and Dockerized deployments.
        </p>
        <div class="button-row">
          <a
            href="#projects"
            class="button button-primary"
          >
            View selected work
            <UIcon name="i-lucide-arrow-down-right" />
          </a>
          <a
            href="/hannan_cv_16_10_2026.pdf"
            download
            class="button button-secondary"
          >
            Download CV
            <UIcon name="i-lucide-download" />
          </a>
        </div>
        <div class="hero-current">
          <span class="current-icon">
            <UIcon name="i-lucide-briefcase-business" />
          </span>
          <div>
            <strong>Fullstack Developer &amp; Product Lead · Cube Limited</strong>
            <span>Leading Laravel engineering &amp; product delivery</span>
          </div>
        </div>
      </div>

      <div class="hero-profile">
        <div class="profile-atmosphere">
          <PortfolioEffect variant="mesh" />
        </div>
        <div class="portrait-frame">
          <img
            src="/hannan-portrait-1024.jpg"
            srcset="/hannan-portrait-512.jpg 512w, /hannan-portrait-1024.jpg 1024w"
            sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 900px) 43vw, 440px"
            alt="Hannan Miah"
            width="1024"
            height="1024"
            fetchpriority="high"
          >
        </div>
        <div class="profile-caption">
          <div>
            <strong>Hannan Miah</strong>
            <span>Fullstack Software Developer</span>
          </div>
          <div class="profile-socials">
            <a
              href="https://github.com/hannanmiah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hannan Miah on GitHub"
            >
              <UIcon name="i-simple-icons-github" />
            </a>
            <a
              href="https://linkedin.com/in/hannanmiah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hannan Miah on LinkedIn"
            >
              <UIcon name="i-simple-icons-linkedin" />
            </a>
          </div>
        </div>
        <span class="profile-location">
          <UIcon name="i-lucide-map-pin" />
          Uttara, Dhaka, Bangladesh
        </span>
      </div>
    </section>

    <!-- Core stack strip -->
    <div class="technology-strip section-shell">
      <span class="mono-label">Core stack</span>
      <div>
        <span>Laravel</span>
        <span>Livewire</span>
        <span>Vue.js</span>
        <span>Nuxt.js</span>
        <span>Docker</span>
      </div>
    </div>

    <!-- About -->
    <section
      id="about"
      class="section-shell section-space about-layout"
    >
      <aside class="about-summary">
        <span class="section-kicker"><span class="mono-index">01</span> How I work</span>
        <h3>From first spec<br>to production</h3>
        <p>I own architecture, backend APIs, frontend interfaces, and Docker deployments end to end.</p>
        <div class="stats-strip">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat"
          >
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </aside>

      <div>
        <span class="eyebrow">About me</span>
        <h2>Five years shipping<br>production web apps</h2>
        <p class="body-copy">
          Across the TALL and VILT stacks, I've architected multi-module ERPs, high-traffic e-commerce stores, news portals, and EdTech tools used by real teams and students.
        </p>
        <p class="body-copy">
          I care about clear data models, maintainable APIs, fast interfaces, and container setups that stay predictable under load.
        </p>
        <div class="tag-row">
          <span
            v-for="item in aboutHighlights"
            :key="item.label"
            class="highlight-pill"
          >
            <UIcon :name="item.icon" />
            {{ item.label }}
          </span>
        </div>
        <a
          href="#contact"
          class="text-link"
        >
          Get in touch
          <UIcon name="i-lucide-arrow-up-right" />
        </a>
      </div>
    </section>

    <!-- Projects -->
    <section
      id="projects"
      class="section-shell section-space"
    >
      <div class="section-heading">
        <div>
          <span class="eyebrow"><span class="mono-index">02</span> Selected work</span>
          <h2>Work I've led<br>and shipped</h2>
        </div>
        <p>Systems I've architected, led, or contributed to across<br>education, retail, publishing, and internal operations.</p>
      </div>

      <div
        class="filter-bar"
        role="group"
        aria-label="Filter projects by category"
      >
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :aria-pressed="activeCategory === category"
          aria-controls="portfolio-projects"
          class="filter-pill"
          :class="{ 'is-active': activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
          <span class="filter-count">{{ categoryCount(category) }}</span>
        </button>
      </div>

      <div
        id="portfolio-projects"
        class="project-grid"
      >
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="project-card"
          :class="{ 'project-featured': activeCategory === 'All' && (index === 0 || index === 3) }"
        >
          <a
            v-if="project.link && project.image"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-image"
            :aria-label="'Visit ' + project.title"
          >
            <img
              :src="project.image"
              :alt="project.title + ' website preview'"
              loading="lazy"
              width="960"
              height="600"
            >
            <span class="project-arrow">
              <UIcon name="i-lucide-arrow-up-right" />
            </span>
          </a>
          <div
            v-else
            class="project-placeholder"
          >
            <UIcon name="i-lucide-code-xml" />
            <span>{{ project.title }}</span>
          </div>

          <div class="project-info">
            <div class="project-meta">
              <span class="project-role">{{ project.role }}</span>
              <span
                class="project-status"
                :class="{ 'is-live': Boolean(project.link) }"
              >
                <span class="status-pip" />
                {{ project.link ? 'Live' : 'Internal' }}
              </span>
            </div>

            <h3>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ project.title }}</a>
              <template v-else>
                {{ project.title }}
              </template>
            </h3>

            <p>{{ project.description }}</p>

            <div class="tag-row">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag"
              >{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="project-actions">
        <button
          v-if="activeCategory === 'All'"
          type="button"
          class="button button-secondary"
          :aria-expanded="showAllProjects"
          aria-controls="portfolio-projects"
          @click="showAllProjects = !showAllProjects"
        >
          {{ showAllProjects ? 'Show top 4 projects' : `Explore all ${projects.length} projects` }}
          <UIcon :name="showAllProjects ? 'i-lucide-minus' : 'i-lucide-plus'" />
        </button>
        <span
          v-else
          class="filter-summary"
        >
          Showing {{ filteredProjects.length }} {{ activeCategory }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }}
        </span>

        <a
          href="https://github.com/hannanmiah"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
        >
          More on GitHub
          <UIcon name="i-lucide-arrow-up-right" />
        </a>
      </div>
    </section>

    <!-- Expertise -->
    <section
      id="expertise"
      class="section-shell section-space"
    >
      <div class="expertise-panel">
        <div class="panel-content">
          <span class="eyebrow"><span class="mono-index">03</span> Technical expertise</span>
          <h2>Tools I use<br>in production</h2>

          <div class="skills-grid">
            <div
              v-for="skill in skills"
              :key="skill.title"
              class="skill-card"
            >
              <span class="skill-icon">
                <UIcon :name="skill.icon" />
              </span>
              <h3>{{ skill.title }}</h3>
              <div class="skill-tags">
                <span
                  v-for="item in skill.items"
                  :key="item"
                >{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="expertise-footer">
            <span>Core stack: Laravel · Vue · Nuxt · Docker</span>
            <span>Currently exploring Go</span>
          </div>
        </div>
      </div>

      <div class="proficiency-row">
        <span
          v-for="skill in coreStack"
          :key="skill"
        >{{ skill }}</span>
      </div>
    </section>

    <!-- Experience -->
    <section
      id="experience"
      class="section-shell section-space"
    >
      <div class="section-heading">
        <div>
          <span class="eyebrow"><span class="mono-index">04</span> Experience</span>
          <h2>Where I've<br>worked</h2>
        </div>
        <p>Engineering and team leadership roles across product<br>companies, digital agencies, and remote teams since 2022.</p>
      </div>

      <div class="experience-list">
        <article
          v-for="job in experience"
          :key="job.company"
          class="experience-row"
        >
          <div class="experience-date">
            <span class="date-range">
              <span
                v-if="job.current"
                class="status-dot"
              />
              {{ job.period }}
            </span>
            <span>{{ job.location }}</span>
          </div>
          <div>
            <h3>{{ job.role }}</h3>
            <span class="company">{{ job.company }}</span>
            <ul>
              <li
                v-for="item in job.description"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Education & Recognition -->
    <section
      id="education"
      class="section-shell section-space education-layout"
    >
      <div>
        <span class="eyebrow"><span class="mono-index">05</span> Education &amp; recognition</span>
        <h2>Degree &amp;<br>recognition</h2>
        <div class="education-card">
          <span class="skill-icon">
            <UIcon name="i-lucide-graduation-cap" />
          </span>
          <span class="mono-label">Jan 2016 — Dec 2023</span>
          <h3>B.Sc. in Electrical and Electronic Engineering</h3>
          <p>Bangabandhu Sheikh Mujibur Rahman Science and Technology University</p>
          <span>Gopalganj, Bangladesh</span>
        </div>
      </div>

      <div class="awards-list">
        <span class="eyebrow">Award &amp; certificates</span>
        <div
          v-for="item in recognition"
          :key="item.title"
          class="award-item"
        >
          <UIcon :name="item.type === 'National Award' ? 'i-lucide-trophy' : 'i-lucide-badge-check'" />
          <div>
            <span class="award-type">{{ item.type }}</span>
            <p class="award-title">
              {{ item.title }}
            </p>
            <span class="award-detail">{{ item.detail }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="section-shell section-space"
    >
      <div class="contact-panel">
        <PortfolioEffect variant="swirl" />
        <div class="panel-content">
          <span class="eyebrow">
            <span class="status-dot" />
            Open to collaboration
          </span>
          <h2>Let's work<br>together</h2>
          <p>Need a fullstack developer for a product, backend migration, or engineering team? Send me an email.</p>

          <div class="contact-actions">
            <a
              href="mailto:hannanhridoy@gmail.com"
              class="button button-primary"
            >
              Email me
              <UIcon name="i-lucide-arrow-up-right" />
            </a>
            <button
              type="button"
              class="button button-ghost-light"
              @click="copyEmail"
            >
              <UIcon :name="emailCopied ? 'i-lucide-check' : 'i-lucide-copy'" />
              {{ emailCopied ? 'Copied hannanhridoy@gmail.com' : 'hannanhridoy@gmail.com' }}
            </button>
          </div>
        </div>

        <div class="contact-links">
          <a
            href="https://github.com/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <UIcon name="i-lucide-arrow-up-right" />
          </a>
          <a
            href="https://linkedin.com/in/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <UIcon name="i-lucide-arrow-up-right" />
          </a>
          <a
            href="/hannan_cv_16_10_2026.pdf"
            download
          >
            Download CV
            <UIcon name="i-lucide-download" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
