<template>
    <section id="habilidades" class="skills-section">
        <div class="skills-container">

            <h2 class="section-title">Habilidades</h2>

            <div class="main-skills">
                <div class="skill-card" v-for="skill in mainSkills" :key="skill.name">
                    <img :src="skill.logo" :alt="skill.name">
                    <h3>{{ skill.name }}</h3>
                </div>
            </div>

            <div class="more-wrapper">
                <button @click="toggleMore" class="toggle-btn">
                    {{ showMore ? 'Mostrar menos' : 'Ver más' }}
                </button>
            </div>

            <transition name="fade">
                <div v-if="showMore" class="extra-skills">
                    <span v-for="tech in extraSkills" :key="tech">
                        {{ tech }}
                    </span>
                </div>
            </transition>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const showMore = ref(false)

const toggleMore = () => {
    showMore.value = !showMore.value
}

const mainSkills = [
    { name: 'Vue', logo: '/logo/vue.svg' },
    { name: 'Laravel', logo: '/logo/laravel.svg' },
    { name: 'MySQL', logo: '/logo/mysql.svg' }
]

const extraSkills = [
    'JavaScript',
    'PHP',
    'Python',
    'Java',
    'C#',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'MongoDB',
    'Git',
    'Docker'
]
</script>

<style scoped>
.skills-section {
    padding: 120px 0;
    background: #ffffff;
    text-align: center;
}

.skills-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
}

.section-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 60px;
}

/* MAIN SKILLS */

.main-skills {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
}

.skill-card {
    background: #f5f5f5;
    padding: 40px;
    border-radius: 16px;
    width: 220px;
    transition: 0.3s ease;
}

.skill-card img {
    height: 60px;
    margin-bottom: 20px;
}

.skill-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
}

.skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* BOTÓN */

.more-wrapper {
    margin-top: 50px;
}

.toggle-btn {
    padding: 10px 28px;
    border: 1px solid #111;
    background: transparent;
    cursor: pointer;
    transition: 0.3s ease;
    color: black;
}

.toggle-btn:hover {
    background: #111;
    color: white;
}

/* EXTRA SKILLS */

.extra-skills {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
}

.extra-skills span {
    padding: 8px 16px;
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.06);
    border-radius: 20px;
}

/* ANIMACIÓN */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */

@media (max-width: 768px) {
    .main-skills {
        gap: 30px;
    }
}
</style>