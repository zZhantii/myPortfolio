<script setup>
import { ref, computed, inject } from 'vue'

const lang = inject('lang')
const activeIdx = ref(null)

const t = computed(() => ({
    es: {
        label: 'Proyectos',
        heading: 'Trabajo\nseleccionado',
        github: 'Ver código',
        viewAll: 'Ver todos en GitHub',
    },
    en: {
        label: 'Projects',
        heading: 'Selected\nwork',
        github: 'View code',
        viewAll: 'View all on GitHub',
    }
}[lang.value]))

const projects = [
    {
        id: 'eco-share',
        num: '01',
        title: 'ECO-SHARE',
        year: '2024',
        description: {
            es: 'Plataforma de movilidad sostenible con Vue 3 y Laravel. Publica y reserva trayectos, divide gastos de combustible automáticamente y visualiza rutas en tiempo real con Google Maps API.',
            en: 'Sustainable mobility platform with Vue 3 and Laravel. Publish and book rides, split fuel costs automatically, and visualize routes in real time with Google Maps API.',
        },
        img: '/img/img_main_ECO-SHARE.webp',
        github: 'https://github.com/zZhantii/ECO-SHARE',
        stack: ['Vue 3', 'Laravel 10', 'MySQL', 'Bootstrap', 'Google Maps API'],
        color: '#4ade80',
    },
    {
        id: 'cereals',
        num: '02',
        title: 'Cereals Odyssey',
        year: '2024',
        description: {
            es: 'E-commerce en PHP con personalización de productos en tiempo real, filtros dinámicos, carrito, autenticación, sistema de pedidos y panel administrativo.',
            en: 'PHP e-commerce with real-time product customization, dynamic filters, cart, authentication, order system and admin panel.',
        },
        img: '/img/img_main_cereals_odyssey.webp',
        github: 'https://github.com/zZhantii/CerealsOdyssey',
        stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        color: '#f59e0b',
    },
    {
        id: 'bearcam',
        num: '03',
        title: 'BearCam',
        year: '2024',
        description: {
            es: 'Sistema de videovigilancia con cámaras ESP32, detección de movimiento e integración backend en Flask. Captura de imágenes remota y visualización en tiempo real.',
            en: 'Surveillance system with ESP32 cameras, motion detection and Flask backend. Remote image capture and real-time visualization.',
        },
        img: '/img/img_main_bearcam.webp',
        github: 'https://github.com/zZhantii/BearCam',
        stack: ['Python 3', 'Flask', 'MySQL', 'ESP32', 'HTTP/REST'],
        color: '#60a5fa',
    },
]
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="projects-wrap">

            <div class="projects-header reveal">
                <span class="section-label">{{ t.label }}</span>
                <h2 class="section-heading">
                    Trabajo <em>seleccionado</em>
                </h2>
            </div>

            <div class="projects-list">
                <article class="project-row reveal" v-for="(p, i) in projects" :key="p.id"
                    :class="[`reveal-delay-${i + 1}`, { expanded: activeIdx === i }]" @mouseenter="activeIdx = i"
                    @mouseleave="activeIdx = null">
                    <!-- Number + title row -->
                    <div class="project-header">
                        <span class="project-num">{{ p.num }}</span>
                        <div class="project-meta">
                            <h3 class="project-title">{{ p.title }}</h3>
                            <div class="project-stack-inline">
                                <span v-for="tech in p.stack.slice(0, 3)" :key="tech">{{ tech }}</span>
                                <span v-if="p.stack.length > 3">+{{ p.stack.length - 3 }}</span>
                            </div>
                        </div>
                        <span class="project-year">{{ p.year }}</span>
                        <a :href="p.github" target="_blank" class="project-github" @click.stop>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.76c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                            <span>{{ t.github }}</span>
                            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </div>

                    <!-- Expanded content -->
                    <Transition name="slide">
                        <div class="project-expanded" v-if="activeIdx === i">
                            <div class="expanded-inner">
                                <div class="project-img-wrap">
                                    <img :src="p.img" :alt="p.title" class="project-img" />
                                    <div class="img-overlay" :style="{ background: p.color + '22' }" />
                                </div>
                                <div class="project-info">
                                    <p class="project-desc">{{ p.description[lang] }}</p>
                                    <div class="project-tags">
                                        <span v-for="tech in p.stack" :key="tech" class="tag"
                                            :style="{ borderColor: p.color + '44', color: p.color }">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                </article>
            </div>

            <div class="projects-footer reveal">
                <a href="https://github.com/zZhantii" target="_blank" class="view-all-btn">
                    {{ t.viewAll }}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>
            </div>

        </div>
    </section>
</template>

<style scoped>
.projects-section {
    padding: 120px 40px;
    background: var(--bg);
}

.projects-wrap {
    max-width: 1100px;
    margin: 0 auto;
}

.projects-header {
    margin-bottom: 64px;
}

/* Project rows */
.projects-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--border);
}

.project-row {
    border-bottom: 1px solid var(--border);
    cursor: default;
    transition: background 0.3s ease;
}

.project-row:hover {
    background: var(--accent-glow);
}

.project-header {
    display: grid;
    grid-template-columns: 64px 1fr auto auto;
    align-items: center;
    gap: 24px;
    padding: 28px 0;
}

.project-num {
    font-family: var(--font-display);
    font-size: 0.8rem;
    color: var(--text-muted);
    letter-spacing: 0.1em;
}

.project-meta {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.project-title {
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    font-weight: 300;
    color: var(--text);
    transition: color 0.2s ease;
}

.project-row:hover .project-title {
    color: var(--accent);
}

.project-stack-inline {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.project-stack-inline span {
    font-size: 0.68rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
}

.project-stack-inline span:not(:last-child)::after {
    content: '·';
    margin-left: 6px;
}

.project-year {
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.1em;
}

.project-github {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 18px;
    border: 1px solid var(--border);
    border-radius: 30px;
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    transition: all 0.25s ease;
    white-space: nowrap;
}

.project-github:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.project-github svg {
    width: 15px;
    height: 15px;
}

.project-github .arrow {
    width: 12px;
    height: 12px;
}

/* Expanded */
.project-expanded {
    overflow: hidden;
}

.expanded-inner {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    padding: 0 0 32px 88px;
}

.project-img-wrap {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
}

.project-img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
    transition: transform 0.5s var(--ease);
}

.project-img-wrap:hover .project-img {
    transform: scale(1.03);
}

.img-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.project-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.7;
    font-weight: 300;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    font-size: 0.7rem;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid;
    font-weight: 500;
    letter-spacing: 0.03em;
}

/* Footer */
.projects-footer {
    margin-top: 48px;
    display: flex;
    justify-content: flex-end;
}

.view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s ease;
}

.view-all-btn svg {
    width: 16px;
    height: 16px;
}

.view-all-btn:hover {
    color: var(--accent);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s var(--ease);
    max-height: 400px;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    max-height: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .projects-section {
        padding: 80px 24px;
    }

    .project-header {
        grid-template-columns: 40px 1fr auto;
        gap: 12px;
    }

    .project-year {
        display: none;
    }

    .expanded-inner {
        grid-template-columns: 1fr;
        padding-left: 0;
        gap: 20px;
    }

    .project-github span {
        display: none;
    }
}
</style>