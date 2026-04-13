<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isDark = inject('isDark')
const lang = inject('lang')
const toggleDark = inject('toggleDark')
const toggleLang = inject('toggleLang')

const isScrolled = ref(false)
const menuOpen = ref(false)

const t = {
  es: { about: 'Sobre mí', skills: 'Skills', projects: 'Proyectos', timeline: 'Formación', contact: 'Contacto' },
  en: { about: 'About', skills: 'Skills', projects: 'Projects', timeline: 'Education', contact: 'Contact' }
}

const nav = (key) => t[lang.value][key]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (menuOpen.value) menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <nav class="nav-inner">

      <a href="#hero" class="logo">SL</a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><a href="#hero" @click="menuOpen = false">{{ nav('about') }}</a></li>
        <li><a href="#skills" @click="menuOpen = false">{{ nav('skills') }}</a></li>
        <li><a href="#projects" @click="menuOpen = false">{{ nav('projects') }}</a></li>
        <li><a href="#timeline" @click="menuOpen = false">{{ nav('timeline') }}</a></li>
        <li><a href="#contact" @click="menuOpen = false">{{ nav('contact') }}</a></li>
      </ul>

      <div class="nav-controls">
        <!-- Lang toggle -->
        <button class="ctrl-btn lang-btn" @click="toggleLang"
          :title="lang === 'es' ? 'Switch to English' : 'Cambiar a Español'">
          <span class="lang-flag">{{ lang === 'es' ? 'EN' : 'ES' }}</span>
        </button>

        <!-- Dark/Light toggle -->
        <button class="ctrl-btn theme-btn" @click="toggleDark" :title="isDark ? 'Modo claro' : 'Modo oscuro'">
          <span class="icon" v-if="isDark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </span>
          <span class="icon" v-else>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </span>
        </button>

        <!-- GitHub -->
        <a href="https://github.com/zZhantii" target="_blank" class="ctrl-btn github-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.76c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>

        <!-- Burger -->
        <button class="burger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
      </div>

    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: min(900px, 90vw);
  padding: 12px 24px;
  background: var(--nav-bg);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border);
  border-radius: 60px;
  transition: all 0.4s var(--ease);
}

.header.scrolled {
  top: 12px;
  padding: 10px 22px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 6px;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 400;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
}

.nav-links a:hover {
  color: var(--text);
  background: var(--border);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.ctrl-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  text-decoration: none;
  font-family: var(--font-body);
}

.ctrl-btn:hover {
  color: var(--text);
  border-color: var(--accent);
  background: var(--accent-glow);
}

.ctrl-btn svg {
  width: 15px;
  height: 15px;
}

.lang-btn .lang-flag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: auto;
  height: auto;
}

.burger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--text);
  transition: 0.3s ease;
}

.burger.active span:nth-child(1) {
  transform: rotate(45deg) translateY(5.5px);
}

.burger.active span:nth-child(2) {
  opacity: 0;
}

.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-5.5px);
}

/* Mobile */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    width: 100%;
    flex-direction: column;
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 20px;
    gap: 4px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 1rem;
    padding: 10px 16px;
  }

  .header {
    width: 92vw;
  }

  .burger {
    display: flex;
  }
}

@media (max-width: 900px) and (min-width: 769px) {
  .nav-links a {
    font-size: 0.8rem;
    padding: 5px 8px;
  }
}
</style>