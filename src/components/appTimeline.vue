<script setup>
import { computed, inject } from 'vue'

const lang = inject('lang')

const t = computed(() => ({
    es: {
        label: 'Formación',
        heading: 'Mi camino\nformativo',
        current: 'En curso',
        items: [
            {
                year: 'En curso',
                current: true,
                entries: [
                    { title: 'Ingeniería Informática', org: 'Universidad de Lleida · Igualada', desc: 'Arquitectura de sistemas, estructuras de datos y desarrollo avanzado.' }
                ]
            },
            {
                year: '2025',
                entries: [
                    { title: 'FP Grado Superior DAW', org: 'IES Bernat el Ferrer · Molins de Rei', desc: 'Desarrollo web moderno con proyectos reales end-to-end.' },
                    { title: 'Prácticas Profesionales', org: 'ROHU Innovations · La Palma de Cervelló', desc: 'Desarrollo frontend y optimización de interfaces de usuario.' }
                ]
            },
            {
                year: '2023',
                entries: [
                    { title: 'Bachillerato Tecnológico', org: 'IES Joan Oró · Martorell', desc: 'Fundamentos de lógica, algoritmia y resolución de problemas técnicos.' },
                    { title: 'Socorrismo Acuático', org: 'Cruz Roja · Barcelona', desc: 'Formación certificada en rescate acuático, prevención y primeros auxilios.' }
                ]
            }
        ]
    },
    en: {
        label: 'Education',
        heading: 'My learning\njourney',
        current: 'Ongoing',
        items: [
            {
                year: 'Ongoing',
                current: true,
                entries: [
                    { title: 'Computer Engineering', org: 'University of Lleida · Igualada', desc: 'Systems architecture, data structures and advanced development.' }
                ]
            },
            {
                year: '2025',
                entries: [
                    { title: 'Higher Vocational DAW', org: 'IES Bernat el Ferrer · Molins de Rei', desc: 'Modern web development with real end-to-end projects.' },
                    { title: 'Professional Internship', org: 'ROHU Innovations · La Palma de Cervelló', desc: 'Frontend development and user interface optimization.' }
                ]
            },
            {
                year: '2023',
                entries: [
                    { title: 'Technology Baccalaureate', org: 'IES Joan Oró · Martorell', desc: 'Fundamentals of logic, algorithms and technical problem solving.' },
                    { title: 'Aquatic Lifeguard', org: 'Red Cross · Barcelona', desc: 'Certified training in aquatic rescue, prevention and first aid.' }
                ]
            }
        ]
    }
}[lang.value]))
</script>

<template>
    <section id="timeline" class="timeline-section">
        <div class="timeline-wrap">

            <div class="timeline-header reveal">
                <span class="section-label">{{ t.label }}</span>
                <h2 class="section-heading">
                    Mi camino <em>formativo</em>
                </h2>
            </div>

            <div class="timeline">

                <!-- Vertical line -->
                <div class="t-line" aria-hidden="true" />

                <div class="t-item reveal" v-for="(item, i) in t.items" :key="i"
                    :class="[`reveal-delay-${i + 1}`, { 'is-current': item.current }]">
                    <div class="t-year">
                        <span :class="['year-badge', { current: item.current }]">
                            {{ item.year }}
                        </span>
                    </div>

                    <div class="t-dot" :class="{ current: item.current }" />

                    <div class="t-content">
                        <div class="t-entry" v-for="(entry, j) in item.entries" :key="j"
                            :class="{ 'has-divider': j > 0 }">
                            <h3 class="entry-title">{{ entry.title }}</h3>
                            <p class="entry-org">{{ entry.org }}</p>
                            <p class="entry-desc">{{ entry.desc }}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.timeline-section {
    padding: 120px 40px;
    background: var(--bg2);
}

.timeline-wrap {
    max-width: 900px;
    margin: 0 auto;
}

.timeline-header {
    margin-bottom: 80px;
}

/* Timeline layout */
.timeline {
    position: relative;
}

.t-line {
    position: absolute;
    left: 140px;
    top: 0;
    width: 1px;
    height: 100%;
    background: var(--border);
}

.t-item {
    display: grid;
    grid-template-columns: 140px 16px 1fr;
    gap: 0 32px;
    margin-bottom: 60px;
    align-items: start;
}

.t-year {
    display: flex;
    justify-content: flex-end;
    padding-top: 4px;
}

.year-badge {
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 400;
    white-space: nowrap;
}

.year-badge.current {
    color: var(--accent);
}

.t-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
    margin-top: 6px;
    flex-shrink: 0;
    position: relative;
    transition: background 0.2s ease;
}

.t-dot.current {
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-glow);
}

.t-content {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s var(--ease);
}

.t-content:hover {
    border-color: rgba(200, 184, 154, 0.2);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
}

.t-entry {}

.t-entry.has-divider {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
}

.entry-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 4px;
}

.entry-org {
    font-size: 0.78rem;
    color: var(--accent);
    margin-bottom: 8px;
    letter-spacing: 0.02em;
}

.entry-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.6;
    font-weight: 300;
}

/* Responsive */
@media (max-width: 640px) {
    .timeline-section {
        padding: 80px 24px;
    }

    .t-line {
        left: 80px;
    }

    .t-item {
        grid-template-columns: 80px 12px 1fr;
        gap: 0 16px;
    }

    .year-badge {
        font-size: 0.62rem;
    }

    .t-content {
        padding: 20px;
    }
}
</style>