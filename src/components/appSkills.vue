<script setup>
import { ref, computed, inject } from 'vue'

const lang = inject('lang')
const showMore = ref(false)

const t = computed(() => ({
    es: {
        label: 'Habilidades',
        heading: 'Mi stack\ntécnico',
        headingEm: 'técnico',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas',
        moreBtn: 'Ver todas las tecnologías',
        lessBtn: 'Mostrar menos',
    },
    en: {
        label: 'Skills',
        heading: 'My tech\nstack',
        headingEm: 'stack',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        moreBtn: 'View all technologies',
        lessBtn: 'Show less',
    }
}[lang.value]))

const skills = [
    { name: 'Vue 3', level: 90, logo: '/logo/vue.svg', cat: 'frontend' },
    { name: 'Laravel', level: 85, logo: '/logo/laravel.svg', cat: 'backend' },
    { name: 'MySQL', level: 80, logo: '/logo/mysql.svg', cat: 'backend' },
    { name: 'JavaScript', level: 85, cat: 'frontend' },
    { name: 'PHP', level: 80, cat: 'backend' },
    { name: 'Python', level: 70, cat: 'backend' },
    { name: 'HTML5', level: 95, cat: 'frontend' },
    { name: 'CSS3', level: 90, cat: 'frontend' },
    { name: 'Bootstrap', level: 85, cat: 'frontend' },
    { name: 'Java', level: 65, cat: 'backend' },
    { name: 'C#', level: 60, cat: 'backend' },
    { name: 'Docker', level: 65, cat: 'tools' },
    { name: 'Git', level: 85, cat: 'tools' },
    { name: 'MongoDB', level: 60, cat: 'backend' },
]

const mainSkills = skills.filter(s => s.logo)
const extraSkills = computed(() => skills.filter(s => !s.logo))
</script>

<template>
    <section id="skills" class="skills-section reveal">
        <div class="skills-wrap">

            <div class="skills-header">
                <span class="section-label">{{ t.label }}</span>
                <h2 class="section-heading">
                    Mi stack <em>técnico</em>
                </h2>
            </div>

            <!-- Main skill cards -->
            <div class="main-grid">
                <div class="skill-card reveal" v-for="(skill, i) in mainSkills" :key="skill.name"
                    :class="`reveal-delay-${(i % 3) + 1}`">
                    <div class="skill-top">
                        <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="skill-logo" />
                        <span v-else class="skill-initial">{{ skill.name[0] }}</span>
                        <span class="skill-pct">{{ skill.level }}%</span>
                    </div>
                    <h3 class="skill-name">{{ skill.name }}</h3>
                    <div class="skill-bar-track">
                        <div class="skill-bar-fill" :style="{ width: skill.level + '%' }" />
                    </div>
                    <span class="skill-cat-label">{{ skill.cat }}</span>
                </div>
            </div>

            <!-- Toggle extra skills -->
            <div class="more-section">
                <button class="toggle-btn" @click="showMore = !showMore">
                    <span>{{ showMore ? t.lessBtn : t.moreBtn }}</span>
                    <span class="toggle-icon" :class="{ rotated: showMore }">↓</span>
                </button>

                <Transition name="expand">
                    <div v-if="showMore" class="extra-grid">
                        <span class="extra-tag" v-for="skill in extraSkills" :key="skill.name">
                            {{ skill.name }}
                            <span class="tag-level">{{ skill.level }}%</span>
                        </span>
                    </div>
                </Transition>
            </div>

        </div>
    </section>
</template>

<style scoped>
.skills-section {
    padding: 120px 40px;
    background: var(--bg2);
    position: relative;
}

.skills-wrap {
    max-width: 1100px;
    margin: 0 auto;
}

.skills-header {
    margin-bottom: 64px;
}

/* Main grid */
.main-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 28px;
    position: relative;
    transition: all 0.3s var(--ease);
    overflow: hidden;
}

.skill-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-glow);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.skill-card:hover {
    border-color: rgba(200, 184, 154, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15);
}

.skill-card:hover::before {
    opacity: 1;
}

.skill-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    position: relative;
}

.skill-logo {
    width: 44px;
    height: 44px;
    object-fit: contain;
    filter: var(--logo-filter, none);
}

.skill-initial {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--accent-glow);
    color: var(--accent);
    font-size: 1.2rem;
    font-family: var(--font-display);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

.skill-pct {
    font-size: 0.7rem;
    color: var(--accent);
    font-weight: 500;
    letter-spacing: 0.05em;
}

.skill-name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 14px;
    position: relative;
}

.skill-bar-track {
    height: 2px;
    background: var(--border);
    border-radius: 1px;
    overflow: hidden;
    margin-bottom: 12px;
    position: relative;
}

.skill-bar-fill {
    height: 100%;
    background: linear-gradient(to right, var(--accent), rgba(200, 184, 154, 0.5));
    border-radius: 1px;
    transform-origin: left;
    animation: bar-in 1.2s var(--ease) both;
}

@keyframes bar-in {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}

.skill-cat-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
    position: relative;
}

/* Extra */
.more-section {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 0.82rem;
    font-family: var(--font-body);
    cursor: pointer;
    border-radius: 30px;
    letter-spacing: 0.05em;
    transition: all 0.25s ease;
}

.toggle-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.toggle-icon {
    display: inline-block;
    transition: transform 0.3s ease;
}

.toggle-icon.rotated {
    transform: rotate(180deg);
}

.extra-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 700px;
}

.extra-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--text);
    transition: border-color 0.2s ease;
}

.extra-tag:hover {
    border-color: var(--accent);
}

.tag-level {
    font-size: 0.65rem;
    color: var(--accent);
    font-weight: 500;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
    transition: all 0.5s var(--ease);
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@media (max-width: 900px) {
    .main-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .skills-section {
        padding: 80px 24px;
    }

    .main-grid {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    .skill-card {
        padding: 20px;
    }
}
</style>