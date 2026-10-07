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
    role: 'FullStack Laravel Developer',
    company: 'Cube Limited',
    period: '01 Feb 2026 – Present',
    location: '',
    description: [
      'Fullstack web application development using Laravel'
    ]
  },
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
    title: 'StudyHuge',
    description: 'Social learning platform connecting students and educators through feeds, communities, and shared content. Combines structured courses, multimedia lessons, progress tracking, and online exams with access to scholarships and career opportunities. Built with Laravel and Livewire.',
    tags: ['Laravel', 'Livewire', 'Social Learning', 'Education'],
    link: 'https://studyhuge.com',
    image: '/projects/studyhuge.jpg'
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
</script>

<template>
  <div>
    <section class="hero section-shell">
      <div class="hero-copy">
        <span class="eyebrow"><span class="status-dot" /> Available for new opportunities</span>
        <h1>Thoughtful code.<br>Extraordinary<br><em>possibilities.</em></h1>
        <p class="hero-description">
          I'm Hannan, a fullstack developer turning complex ideas into simple, powerful digital experiences.
        </p>
        <div class="button-row">
          <a
            href="#projects"
            class="button button-primary"
          >Explore my work <UIcon name="i-lucide-arrow-up-right" /></a>
          <a
            href="/hannan_cv_4_apr_2026_latest.pdf"
            download
            class="button button-secondary"
          >Download CV <UIcon name="i-lucide-download" /></a>
        </div>
        <div class="hero-note">
          <span>Based in Dhaka, Bangladesh</span><span>Building for the world ↗</span>
        </div>
      </div>
      <div class="hero-art">
        <PortfolioEffect variant="mesh" />
        <div class="art-grid" />
        <span class="art-coordinate">23.8103° N / 90.4125° E</span>
        <div class="orbit orbit-one" /><div class="orbit orbit-two" />
        <div class="art-center">
          <span class="art-symbol">✳</span><span>IDEAS INTO IMPACT</span>
        </div>
        <div class="art-caption">
          <span>Creative thinking.<br>Engineered to last.</span><UIcon name="i-lucide-arrow-down-right" />
        </div>
        <div class="floating-label">
          <UIcon name="i-lucide-code-xml" /> Laravel × Vue × Nuxt
        </div>
      </div>
    </section>

    <div class="stats-strip section-shell">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="stat"
      >
        <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
      </div>
    </div>

    <section
      id="about"
      class="section-shell section-space about-layout"
    >
      <div class="portrait">
        <img
          src="/photo.jpg"
          alt="Hannan Miah"
          loading="lazy"
          width="640"
          height="640"
        ><span class="portrait-label">THE HUMAN BEHIND THE CODE</span>
      </div>
      <div>
        <span class="eyebrow">01 / A little about me</span>
        <h2>Curiosity drives me.<br><em>Craft defines me.</em></h2>
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
        <div><span class="eyebrow">02 / Selected work</span><h2>Built with purpose.<br><em>Made for people.</em></h2></div><p>A selection of platforms, products,<br>and problems I've helped solve.</p>
      </div>
      <div class="project-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card"
          :class="{ 'project-featured': index === 0 }"
        >
          <a
            v-if="project.link"
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
            <UIcon name="i-lucide-code-xml" /><span>CRAFTED WITH CARE</span>
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span>{{ String(index + 1).padStart(2, '0') }} / {{ project.tags[0] }}</span><span>DEVELOPMENT</span>
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
    </section>

    <section
      id="expertise"
      class="section-shell section-space"
    >
      <div class="expertise-panel">
        <PortfolioEffect variant="aurora" /><div class="panel-content">
          <span class="eyebrow">03 / My toolkit</span><h2>From the first pixel<br>to the <em>last endpoint.</em></h2><div class="skills-grid">
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
        >{{ skill.name }} <strong>{{ skill.level }}%</strong></span>
      </div>
    </section>

    <section
      id="experience"
      class="section-shell section-space"
    >
      <div class="section-heading">
        <div><span class="eyebrow">04 / The journey</span><h2>Experience that<br><em>makes a difference.</em></h2></div><p>Good work comes from great teams.<br>Here's where I've made my mark.</p>
      </div>
      <article
        v-for="(job, index) in experience"
        :key="job.company"
        class="experience-row"
      >
        <div class="experience-date">
          <span class="eyebrow">0{{ index + 1 }}</span><span>{{ job.period }}</span><span>{{ job.location }}</span>
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
        <span class="eyebrow">05 / Foundations</span><h2>Never stop<br><em>being curious.</em></h2><div class="education-card">
          <UIcon name="i-lucide-graduation-cap" /><span class="eyebrow">2016 — 2023</span><h3>B.Sc. in Electrical and Electronic Engineering</h3><p>Bangabandhu Sheikh Mujibur Rahman Science and Technology University</p><span>Gopalganj, Bangladesh</span>
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
          <span class="eyebrow"><span class="status-dot" /> Open to great collaborations</span><h2>Have something<br><em>in mind?</em></h2><p>Let's turn your next big idea into something real.</p><a
            href="mailto:hannanhridoy@gmail.com"
            class="button button-primary"
          >Let's talk <UIcon name="i-lucide-arrow-up-right" /></a><a
            class="contact-email"
            href="mailto:hannanhridoy@gmail.com"
          >hannanhridoy@gmail.com</a>
        </div><span
          class="contact-star"
          aria-hidden="true"
        >✳</span>
      </div>
    </section>
  </div>
</template>
