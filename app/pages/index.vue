<script setup>
const showAllProjects = ref(false)

const stats = [
  { value: '5+', label: 'Years Exp.', icon: 'i-lucide-briefcase-business' },
  { value: '10+', label: 'Projects', icon: 'i-lucide-folder-open' },
  { value: '1', label: 'National Award', icon: 'i-lucide-award' },
  { value: '3', label: 'Certificates', icon: 'i-lucide-badge-check' }
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
  { name: 'Laravel / PHP' },
  { name: 'Vue.js / Nuxt.js' },
  { name: 'Tailwind CSS' },
  { name: 'Docker / DevOps' },
  { name: 'MySQL / PostgreSQL' },
  { name: 'Go' }
]

const experience = [
  {
    role: 'Fullstack Developer',
    company: 'Cube Limited',
    period: '01 Feb 2026 – Present',
    location: 'Shomvuganj, Mymensingh',
    description: [
      'Serving as a Full-Stack Laravel Developer and Product Lead',
      'Architecting and delivering web applications across school management, EdTech, and news portal domains'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Amarsolution',
    period: '02/2025 – 02/2026',
    location: 'Uttara, Dhaka',
    description: [
      'Worked as a Laravel backend developer on various projects',
      'Contributed significantly to AmarSolution ERP, including its Laravel API backend and microservices architecture'
    ]
  },
  {
    role: 'Senior Laravel Developer',
    company: 'Curlware Digital Agency',
    period: '04/2024 – 01/2025',
    location: 'Shyamloy, Dhaka',
    description: [
      'Led the backend team and managed multiple projects as Project Manager'
    ]
  },
  {
    role: 'Laravel Developer',
    company: 'Boost Education Service',
    period: '06/2022 – 12/2022',
    location: 'Remote',
    description: [
      'Led a team to develop and manage a CRM system for student consultancy, built with Laravel WebSocket',
      'Managed cloud deployments and contributed to parallel projects'
    ]
  }
]

const projects = [
  {
    title: 'Study Huge',
    description: 'Social and education platform connecting students and teachers through communities, courses, and online exams. Team Lead and Product Manager: developed the Laravel API backend, deployed with Docker, and coordinated frontend and mobile teams. Built with Livewire, Alpine.js, Laravel, Sanctum, and Reverb.',
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'Sanctum', 'Reverb'],
    link: 'https://studyhuge.com',
    image: '/projects/studyhuge.jpg'
  },
  {
    title: 'Dazzle.com.bd',
    description: 'E-commerce platform in Bangladesh. Backend Team Lead and Project Manager: developed the Laravel API backend, deployed with Docker, and coordinated frontend and mobile teams.',
    tags: ['Laravel', 'Docker', 'E-commerce'],
    link: 'https://dazzle.com.bd',
    image: '/projects/dazzle.png'
  },
  {
    title: 'Crime Talash 24',
    description: 'Bangladeshi news portal. Team Lead and System Architect, built with Laravel, Livewire, and Alpine.js.',
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'News Portal'],
    link: 'https://crimetalash24.com',
    image: '/projects/crime-talash-24.jpg'
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
    description: 'CRM platform for student consultancy, built with Laravel, Vue.js, Tailwind CSS, MySQL, and Laravel WebSocket.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    link: 'https://bhe.theleadlibrary.com',
    image: '/projects/lead_library.png'
  },
  {
    title: 'YourHouseTV',
    description: 'Streaming platform built with Laravel, Reverb (WebSockets), and Inertia.js (Vue.js).',
    tags: ['Laravel', 'Reverb', 'Inertia'],
    link: 'https://yourhousetv.com',
    image: '/projects/yourhousetv.png'
  },
  {
    title: 'Techdiary Blog',
    description: 'Open-source tech blogging platform. Contributed using Laravel and Nuxt.js.',
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
</script>

<template>
  <div>
    <section class="hero section-shell">
      <div class="hero-copy">
        <span class="availability"><span class="status-dot" /> Open to opportunities</span>
        <h1>Software that<br>works for people.</h1>
        <p class="hero-description">
          I'm Hannan Miah, a fullstack developer building the web applications behind better learning, smoother businesses, and connected communities.
        </p>
        <div class="button-row">
          <a
            href="#projects"
            class="button button-primary"
          >View selected work <UIcon name="i-lucide-arrow-down-right" /></a>
          <a
            href="/hannan_cv_16_10_2026.pdf"
            download
            class="button button-secondary"
          >Download CV <UIcon name="i-lucide-download" /></a>
        </div>
        <div class="hero-current">
          <span class="current-icon"><UIcon name="i-lucide-briefcase-business" /></span><div><strong>Fullstack Developer · Cube Limited</strong><span>Laravel development & product leadership</span></div>
        </div>
      </div>
      <div class="hero-profile">
        <div class="profile-atmosphere">
          <PortfolioEffect variant="mesh" />
        </div>
        <img
          src="/hannan-portrait-1024.jpg"
          srcset="/hannan-portrait-512.jpg 512w, /hannan-portrait-1024.jpg 1024w"
          sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 900px) 43vw, 440px"
          alt="Hannan Miah"
          width="1024"
          height="1024"
          fetchpriority="high"
        >
        <div class="profile-caption">
          <div><strong>Hannan Miah</strong><span>Fullstack Software Developer</span></div><a
            href="https://github.com/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hannan Miah on GitHub"
          ><UIcon name="i-simple-icons-github" /></a>
        </div>
        <span class="profile-location"><UIcon name="i-lucide-map-pin" /> Dhaka, Bangladesh</span>
      </div>
    </section>

    <div class="technology-strip section-shell">
      <span>From interface to infrastructure</span><div><span>Laravel</span><span>Livewire</span><span>Vue.js</span><span>Nuxt.js</span><span>Docker</span></div>
    </div>

    <section
      id="about"
      class="section-shell section-space about-layout"
    >
      <aside class="about-summary">
        <span class="section-kicker">A practical approach</span><h3>Built around the<br> whole picture.</h3><p>I connect product thinking with the details of implementation, from the first conversation to deployment.</p><div class="stats-strip">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat"
          >
            <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
          </div>
        </div>
      </aside>
      <div>
        <span class="eyebrow">About me</span>
        <h2>Curious by nature.<br>Practical by design.</h2>
        <p class="body-copy">
          I bridge the gap between complex engineering and human-centric design. With over five years working across the TALL and VILT stacks, I build ERP systems, e-commerce platforms, and microservices that stand up to real-world demands.
        </p>
        <p class="body-copy">
          Clean architecture. Thoughtful details. A commitment to making every experience feel effortless.
        </p>
        <div class="tag-row">
          <span
            v-for="item in aboutHighlights"
            :key="item.label"
            class="tag"
          >{{ item.label }}</span>
        </div>
        <a
          href="#contact"
          class="text-link"
        >Let's build something meaningful <UIcon name="i-lucide-arrow-up-right" /></a>
      </div>
    </section>

    <section
      id="projects"
      class="section-shell section-space"
    >
      <div class="section-heading">
        <div><span class="eyebrow">Selected work</span><h2>Real products.<br>Real responsibilities.</h2></div><p>From education platforms to business tools,<br>here are some of the systems I've worked on.</p>
      </div>
      <div
        id="portfolio-projects"
        class="project-grid"
      >
        <article
          v-for="(project, index) in (showAllProjects ? projects : projects.slice(0, 4))"
          :key="project.title"
          class="project-card"
          :class="{ 'project-featured': index === 0 || index === 3 }"
        >
          <a
            v-if="project.link && project.image"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-image"
            :aria-label="'Visit ' + project.title"
          ><img
            :src="project.image"
            :alt="project.title + ' website preview'"
            loading="lazy"
            width="960"
            height="600"
          ><span class="project-arrow"><UIcon name="i-lucide-arrow-up-right" /></span></a>
          <div
            v-else
            class="project-placeholder"
          >
            <UIcon :name="project.title === 'Crime Talash 24' ? 'i-lucide-newspaper' : 'i-lucide-code-xml'" /><span>{{ project.title }}</span>
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span>{{ project.tags[0] }} development</span><span>{{ project.link ? 'Live project' : 'Project work' }}</span>
            </div><h3>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ project.title }}</a><template v-else>
                {{ project.title }}
              </template>
            </h3><p>{{ project.description }}</p><div class="tag-row">
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
          class="button button-secondary"
          :aria-expanded="showAllProjects"
          aria-controls="portfolio-projects"
          @click="showAllProjects = !showAllProjects"
        >
          {{ showAllProjects ? 'Show selected work' : `Explore all ${projects.length} projects` }} <UIcon :name="showAllProjects ? 'i-lucide-minus' : 'i-lucide-plus'" />
        </button><a
          href="https://github.com/hannanmiah"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
        >More on GitHub <UIcon name="i-lucide-arrow-up-right" /></a>
      </div>
    </section>

    <section
      id="expertise"
      class="section-shell section-space"
    >
      <div class="expertise-panel">
        <div class="panel-content">
          <span class="eyebrow">Technical expertise</span><h2>One connected stack.<br>From frontend to deployment.</h2><div class="skills-grid">
            <div
              v-for="skill in skills"
              :key="skill.title"
              class="skill-card"
            >
              <UIcon :name="skill.icon" /><h3>{{ skill.title }}</h3><p>{{ skill.items.join(' · ') }}</p>
            </div>
          </div><div class="expertise-footer">
            <span>Architecture. Performance. Reliability.</span><span>Always learning, always building ↗</span>
          </div>
        </div>
      </div>
      <div class="proficiency-row">
        <span
          v-for="skill in technicalSkills"
          :key="skill.name"
        >{{ skill.name }}</span>
      </div>
    </section>

    <section
      id="experience"
      class="section-shell section-space"
    >
      <div class="section-heading">
        <div><span class="eyebrow">Experience</span><h2>Teams I've helped.<br>Systems I've shipped.</h2></div><p>Good work comes from great teams.<br>Here's where I've made my mark.</p>
      </div>
      <article
        v-for="job in experience"
        :key="job.company"
        class="experience-row"
      >
        <div class="experience-date">
          <span>{{ job.period }}</span><span>{{ job.location }}</span>
        </div><div>
          <h3>{{ job.role }}</h3><span class="company">{{ job.company }}</span><ul>
            <li
              v-for="item in job.description"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div><UIcon
          name="i-lucide-arrow-up-right"
          class="experience-arrow"
        />
      </article>
    </section>

    <section
      id="education"
      class="section-shell section-space education-layout"
    >
      <div>
        <span class="eyebrow">Education & recognition</span><h2>A foundation<br>for lifelong learning.</h2><div class="education-card">
          <UIcon name="i-lucide-graduation-cap" /><span class="eyebrow">Jan 2016 — Dec 2023</span><h3>B.Sc. in Electrical and Electronic Engineering</h3><p>Bangabandhu Sheikh Mujibur Rahman Science and Technology University</p><span>Gopalganj, Bangladesh</span>
        </div>
      </div>
      <div class="awards-list">
        <span class="eyebrow">Recognition & milestones</span><div
          v-for="award in awards"
          :key="award"
        >
          <UIcon name="i-lucide-award" /><p>{{ award }}</p>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="section-shell section-space"
    >
      <div class="contact-panel">
        <PortfolioEffect variant="swirl" /><div class="panel-content">
          <span class="eyebrow"><span class="status-dot" /> Open to collaboration</span><h2>Let's build your<br>next chapter.</h2><p>Have a product to build or a team to grow? I would love to hear about it.</p><a
            href="mailto:hannanhridoy@gmail.com"
            class="button button-primary"
          >Let's talk <UIcon name="i-lucide-arrow-up-right" /></a><a
            class="contact-email"
            href="mailto:hannanhridoy@gmail.com"
          >hannanhridoy@gmail.com</a>
        </div><div class="contact-links">
          <a
            href="https://github.com/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub <UIcon name="i-lucide-arrow-up-right" /></a><a
            href="https://linkedin.com/in/hannanmiah"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn <UIcon name="i-lucide-arrow-up-right" /></a>
        </div>
      </div>
    </section>
  </div>
</template>
