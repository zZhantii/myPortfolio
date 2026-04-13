<script setup>
import { inject, computed, onMounted, ref } from 'vue'

const lang = inject('lang')
const mounted = ref(false)

onMounted(() => {
    setTimeout(() => mounted.value = true, 100)
})

const t = computed(() => ({
    es: {
        tag: 'Desarrollador Web Full-Stack',
        greeting: 'Hola, soy',
        name: 'Santiago\nLozada',
        description: 'Estudiante de Ingeniería Informática y desarrollador full-stack especializado en Vue y Laravel. Construyo aplicaciones web modernas, escalables y con atención al detalle.',
        cta: 'Hablemos',
        cv: 'Descargar CV',
        available: 'Disponible para proyectos',
    },
    en: {
        tag: 'Full-Stack Web Developer',
        greeting: "Hi, I'm",
        name: 'Santiago\nLozada',
        description: 'Computer Engineering student and full-stack developer specialized in Vue and Laravel. I build modern, scalable web applications with great attention to detail.',
        cta: "Let's talk",
        cv: 'Download CV',
        available: 'Available for projects',
    }
}[lang.value]))
</script>

<template>
    <section id="hero" class="hero">

        <!-- Background grid decoration -->
        <div class="grid-bg" aria-hidden="true">
            <div class="grid-line" v-for="i in 6" :key="i" />
        </div>

        <!-- Floating orbs -->
        <div class="orb orb-1" aria-hidden="true" />
        <div class="orb orb-2" aria-hidden="true" />

        <div class="hero-inner" :class="{ visible: mounted }">

            <!-- Left column -->
            <div class="hero-text">
                <div class="available-badge">
                    <span class="dot" />
                    {{ t.available }}
                </div>

                <p class="greeting">{{ t.greeting }}</p>

                <h1 class="hero-name">
                    <span class="name-line" v-for="(line, i) in t.name.split('\n')" :key="i"
                        :style="{ transitionDelay: `${0.1 + i * 0.1}s` }">
                        {{ line }}
                    </span>
                </h1>

                <span class="hero-tag">{{ t.tag }}</span>

                <p class="hero-desc">{{ t.description }}</p>

                <div class="hero-actions">
                    <a href="#contact" class="btn-primary">{{ t.cta }}</a>
                    <a href="/cv/santiago_lozada_benitez.pdf" download class="btn-ghost">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 15V3M12 15l-4-4M12 15l4-4M3 21h18" />
                        </svg>
                        {{ t.cv }}
                    </a>
                </div>

                <div class="hero-socials">
                    <a href="https://github.com/zZhantii" target="_blank" class="social-link">GitHub ↗</a>
                    <a href="https://www.linkedin.com/in/santiago-lozada-551783331/" target="_blank"
                        class="social-link">LinkedIn ↗</a>
                </div>
            </div>

            <!-- Right column: photo + stats -->
            <div class="hero-visual">
                <div class="photo-frame">
                    <div class="photo-border" />
                    <img src="/img/santiago.webp" alt="Santiago Lozada" class="photo" />
                    <div class="photo-badge">
                        <span class="badge-num">3+</span>
                        <span class="badge-text">años de experiencia</span>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-num">3</span>
                        <span class="stat-label">Proyectos</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-num">10+</span>
                        <span class="stat-label">Tecnologías</span>
                    </div>
                    <div class="stat-card full">
                        <span class="stat-num">∞</span>
                        <span class="stat-label">Curiosidad</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- Scroll indicator -->
        <div class="scroll-hint" aria-hidden="true">
            <div class="scroll-line" />
        </div>

    </section>
</template>

<style scoped>
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 120px 40px 80px;
    background: var(--bg);
}

/* Grid background */
.grid-bg {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-around;
    pointer-events: none;
}

.grid-line {
    width: 1px;
    height: 100%;
    background: var(--border);
    opacity: 0.5;
}

/* Orbs */
.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
}

.orb-1 {
    width: 400px;
    height: 400px;
    background: var(--accent-glow);
    top: -100px;
    right: -100px;
    opacity: 0.6;
}

.orb-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-glow);
    bottom: 0;
    left: -50px;
    opacity: 0.4;
}

/* Main layout */
.hero-inner {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

/* Text */
.hero-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.available-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: var(--text-muted);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 20px;
    width: fit-content;
    letter-spacing: 0.05em;
    font-weight: 400;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}

.hero-inner.visible .available-badge {
    opacity: 1;
    transform: translateY(0);
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
    animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }
}

.greeting {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 300;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s var(--ease) 0.1s, transform 0.7s var(--ease) 0.1s;
}

.hero-inner.visible .greeting {
    opacity: 1;
    transform: translateY(0);
}

.hero-name {
    font-family: var(--font-display);
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--text);
    display: flex;
    flex-direction: column;
}

.name-line {
    display: block;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
}

.hero-inner.visible .name-line {
    opacity: 1;
    transform: translateY(0);
}

.hero-name .name-line:last-child {
    font-style: italic;
    color: var(--accent);
}

.hero-tag {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.7s var(--ease) 0.3s;
}

.hero-inner.visible .hero-tag {
    opacity: 1;
}

.hero-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 460px;
    font-weight: 300;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s var(--ease) 0.35s, transform 0.7s var(--ease) 0.35s;
}

.hero-inner.visible .hero-desc {
    opacity: 1;
    transform: translateY(0);
}

.hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s var(--ease) 0.45s, transform 0.7s var(--ease) 0.45s;
}

.hero-inner.visible .hero-actions {
    opacity: 1;
    transform: translateY(0);
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    background: var(--accent);
    color: var(--bg);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    border-radius: 40px;
    letter-spacing: 0.03em;
    transition: all 0.3s var(--ease);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px var(--accent-glow);
}

.btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: transparent;
    color: var(--text);
    text-decoration: none;
    font-size: 0.85rem;
    border: 1px solid var(--border);
    border-radius: 40px;
    letter-spacing: 0.03em;
    transition: all 0.3s ease;
}

.btn-ghost svg {
    width: 14px;
    height: 14px;
}

.btn-ghost:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.hero-socials {
    display: flex;
    gap: 20px;
    opacity: 0;
    transition: opacity 0.7s var(--ease) 0.55s;
}

.hero-inner.visible .hero-socials {
    opacity: 1;
}

.social-link {
    font-size: 0.78rem;
    color: var(--text-muted);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
}

.social-link:hover {
    color: var(--accent);
}

/* Visual column */
.hero-visual {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
    opacity: 0;
    transform: translateX(30px);
    transition: opacity 0.9s var(--ease) 0.2s, transform 0.9s var(--ease) 0.2s;
}

.hero-inner.visible .hero-visual {
    opacity: 1;
    transform: translateX(0);
}

.photo-frame {
    position: relative;
    width: 100%;
    max-width: 380px;
}

.photo-border {
    position: absolute;
    inset: -8px;
    border: 1px solid var(--border);
    border-radius: 20px;
    pointer-events: none;
}

.photo {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 14px;
    display: block;
    filter: grayscale(20%);
    transition: filter 0.4s ease;
}

.photo:hover {
    filter: grayscale(0%);
}

.photo-badge {
    position: absolute;
    bottom: -16px;
    left: -16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
}

.badge-num {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--accent);
    line-height: 1;
}

.badge-text {
    font-size: 0.65rem;
    color: var(--text-muted);
    margin-top: 2px;
    white-space: nowrap;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
    max-width: 380px;
    margin-top: 12px;
}

.stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-card.full {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

.stat-num {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 400;
    color: var(--text);
    line-height: 1;
}

.stat-label {
    font-size: 0.72rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
}

/* Scroll hint */
.scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, transparent, var(--accent));
    animation: scroll-anim 2s ease-in-out infinite;
}

@keyframes scroll-anim {
    0% {
        transform: scaleY(0);
        transform-origin: top;
    }

    50% {
        transform: scaleY(1);
        transform-origin: top;
    }

    51% {
        transform-origin: bottom;
    }

    100% {
        transform: scaleY(0);
        transform-origin: bottom;
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .hero-inner {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }

    .hero-visual {
        align-items: center;
    }

    .hero-desc {
        max-width: 100%;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-socials {
        justify-content: center;
    }

    .available-badge {
        margin: 0 auto;
    }

    .photo-frame {
        max-width: 300px;
    }

    .stats-grid {
        max-width: 300px;
    }
}

@media (max-width: 600px) {
    .hero {
        padding: 100px 24px 80px;
    }

    .hero-name {
        font-size: 3rem;
    }

    .photo-badge {
        left: 0;
    }
}
</style>