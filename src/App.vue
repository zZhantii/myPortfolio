<script setup>
import { ref, provide } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppSkills from './components/AppSkills.vue'
import AppProjects from './components/AppProjects.vue'
import AppTimeline from './components/AppTimeline.vue'
import AppContact from './components/AppContact.vue'
import AppFooter from './components/AppFooter.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()

const isDark = ref(true)
const lang = ref('es')

const toggleDark = () => { isDark.value = !isDark.value }
const toggleLang = () => { lang.value = lang.value === 'es' ? 'en' : 'es' }

provide('isDark', isDark)
provide('lang', lang)
provide('toggleDark', toggleDark)
provide('toggleLang', toggleLang)
</script>

<template>
    <div :class="['app', isDark ? 'dark' : 'light']">
        <AppHeader />
        <main>
            <AppHero />
            <AppSkills />
            <AppProjects />
            <AppTimeline />
            <AppContact />
        </main>
        <AppFooter />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --font-display: 'Fraunces', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

/* DARK */
.dark {
    --bg: #0a0a0a;
    --bg2: #111111;
    --bg3: #181818;
    --surface: #1c1c1c;
    --border: rgba(255, 255, 255, 0.07);
    --text: #f0ede8;
    --text-muted: rgba(240, 237, 232, 0.45);
    --accent: #c8b89a;
    --accent-glow: rgba(200, 184, 154, 0.15);
    --nav-bg: rgba(10, 10, 10, 0.85);
}

/* LIGHT */
.light {
    --bg: #f8f5f0;
    --bg2: #f0ece4;
    --bg3: #ebe5db;
    --surface: #ffffff;
    --border: rgba(0, 0, 0, 0.08);
    --text: #1a1713;
    --text-muted: rgba(26, 23, 19, 0.5);
    --accent: #8b6c42;
    --accent-glow: rgba(139, 108, 66, 0.12);
    --nav-bg: rgba(248, 245, 240, 0.9);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    transition: background 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
}

.app {
    min-height: 100vh;
    width: 100%;
}

/* Scroll reveal */
.reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-delay-1 {
    transition-delay: 0.1s;
}

.reveal-delay-2 {
    transition-delay: 0.2s;
}

.reveal-delay-3 {
    transition-delay: 0.3s;
}

.reveal-delay-4 {
    transition-delay: 0.4s;
}

/* Section shared styles */
.section-label {
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 500;
    display: block;
    margin-bottom: 16px;
}

.section-heading {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 300;
    color: var(--text);
    line-height: 1.1;
}

.section-heading em {
    font-style: italic;
    color: var(--accent);
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 2px;
}

/* Selection */
::selection {
    background: var(--accent);
    color: var(--bg);
}

/* Noise texture overlay */
.app::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>