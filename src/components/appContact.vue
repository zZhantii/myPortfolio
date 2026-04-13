<script setup>
import { computed, inject } from 'vue'

const lang = inject('lang')

const t = computed(() => ({
    es: {
        label: 'Contacto',
        heading: '¿Hablamos?',
        sub: 'Estoy abierto a nuevas oportunidades, proyectos freelance o simplemente charlar sobre tecnología.',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        copy: '¡Copiado!'
    },
    en: {
        label: 'Contact',
        heading: "Let's talk",
        sub: "I'm open to new opportunities, freelance projects or just chatting about tech.",
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        copy: 'Copied!'
    }
}[lang.value]))

const contacts = [
    {
        key: 'email',
        label: () => t.value.email,
        value: 'santiagoolozadab@gmail.com',
        href: 'mailto:santiagoolozadab@gmail.com',
    },
    {
        key: 'github',
        label: () => t.value.github,
        value: 'github.com/zZhantii',
        href: 'https://github.com/zZhantii',
    },
    {
        key: 'linkedin',
        label: () => t.value.linkedin,
        value: 'linkedin.com/in/santiago-lozada',
        href: 'https://www.linkedin.com/in/santiago-lozada-551783331/',
    },
]
</script>

<template>
    <section id="contact" class="contact-section">
        <!-- Background pattern -->
        <div class="contact-bg" aria-hidden="true">
            <div class="bg-circle" />
        </div>

        <div class="contact-wrap reveal">

            <div class="contact-left">
                <span class="section-label">{{ t.label }}</span>
                <h2 class="section-heading contact-heading">
                    {{ t.heading }}
                </h2>
                <p class="contact-sub">{{ t.sub }}</p>
            </div>

            <div class="contact-right">
                <div class="contact-list">
                    <a class="contact-item reveal" v-for="(c, i) in contacts" :key="c.key" :href="c.href"
                        target="_blank" :class="`reveal-delay-${i + 1}`">
                        <span class="contact-item-label">{{ c.label() }}</span>
                        <span class="contact-item-value">{{ c.value }}</span>
                        <span class="contact-item-arrow">↗</span>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 140px 40px;
    background: var(--bg3);
    position: relative;
    overflow: hidden;
}

.contact-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.bg-circle {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    bottom: -200px;
    right: -100px;
}

.contact-wrap {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    position: relative;
    z-index: 1;
}

.contact-heading {
    font-size: clamp(2.5rem, 5vw, 4.5rem) !important;
    line-height: 1 !important;
    margin-top: 16px;
}

.contact-sub {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-top: 20px;
    font-weight: 300;
    max-width: 380px;
}

/* Contact list */
.contact-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 8px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 16px;
    text-decoration: none;
    background: var(--surface);
    transition: all 0.3s var(--ease);
    group: true;
}

.contact-item:hover {
    border-color: var(--accent);
    background: var(--accent-glow);
    transform: translateX(6px);
}

.contact-item-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    min-width: 64px;
    font-weight: 500;
}

.contact-item-value {
    flex: 1;
    font-size: 0.9rem;
    color: var(--text);
    font-weight: 300;
}

.contact-item-arrow {
    color: var(--text-muted);
    font-size: 1.1rem;
    transition: transform 0.2s ease, color 0.2s ease;
}

.contact-item:hover .contact-item-arrow {
    color: var(--accent);
    transform: translate(2px, -2px);
}

@media (max-width: 768px) {
    .contact-section {
        padding: 80px 24px;
    }

    .contact-wrap {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    .contact-item-value {
        font-size: 0.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>