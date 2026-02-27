<template>
    <section id="projects" class="cards-section">
        <h2>Proyectos</h2>

        <div class="carousel-wrapper">

            <button class="nav-arrow left" @click="prev" :disabled="currentIndex === 0">
                ←
            </button>

            <div class="carousel-viewport">
                <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }">

                    <article v-for="(project, index) in projects" :key="index" class="card">

                        <div class="card-inner">

                            <div class="card-image">
                                <img :src="project.img" :alt="project.title" />
                                <div class="overlay">
                                    <h3>{{ project.title }}</h3>
                                </div>
                            </div>

                            <div class="card-content">

                                <p class="description">
                                    {{ project.description }}
                                </p>

                                <!-- STACK -->
                                <div class="stack">
                                    <span v-for="(tech, i) in project.stack" :key="i" class="badge">
                                        {{ tech }}
                                    </span>
                                </div>

                                <div class="card-actions">
                                    <!-- <button class="primary">
                                        Ver proyecto
                                    </button> -->

                                    <a :href="project.github" target="_blank" class="github-btn">
                                        <svg viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 
                                            9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2
                                            -.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6
                                            1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09
                                            2.94.83.09-.65.35-1.09.63-1.34-2.22-.25
                                            -4.55-1.11-4.55-4.95 0-1.09.39-1.98
                                            1.03-2.68-.1-.25-.45-1.27.1-2.65
                                            0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112
                                            6.8c.85.004 1.7.115 2.5.337
                                            1.9-1.29 2.74-1.02 2.74-1.02
                                            .55 1.38.2 2.4.1 2.65
                                            .64.7 1.02 1.59 1.02 2.68
                                            0 3.85-2.34 4.7-4.57 4.95
                                            .36.31.67.92.67 1.86v2.76
                                            c0 .27.16.58.67.48A10.01
                                            10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </article>

                </div>
            </div>

            <button class="nav-arrow right" @click="next" :disabled="currentIndex >= maxIndex">
                →
            </button>

        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)

const projects = [
    {
        title: 'Portfolio',
        description: '',
        img: '/img/main_portfolio.webp',
        github: 'https://github.com/zZhantii/myPortfolio',
        stack: [
            'Vue 3'
        ]
    },
    {
        title: 'ECO-SHARE',
        description: 'Plataforma web de movilidad sostenible desarrollada con arquitectura MVC utilizando Vue 3 y Laravel. Permite publicar y reservar trayectos, dividir automáticamente gastos de combustible, gestionar valoraciones y visualizar rutas en tiempo real mediante integración con Google Maps API. Incluye panel de administración, roles y sistema de autenticación seguro.',
        img: '/img/img_main_ECO-SHARE.webp',
        github: 'https://github.com/zZhantii/ECO-SHARE',
        stack: [
            'Vue 3',
            'Laravel 10',
            'MySQL',
            'Bootstrap',
            'Google Maps API',
            'Eloquent ORM'
        ]
    },
    {
        title: 'Cereals Odyssey',
        description: 'Aplicación web e-commerce desarrollada en PHP con gestión avanzada de base de datos. Permite personalizar productos en tiempo real, aplicar filtros dinámicos, gestionar carrito, autenticación de usuarios, sistema de pedidos y panel administrativo. Enfoque en experiencia de usuario, optimización de código y arquitectura escalable.',
        img: '/img/img_main_cereals_odyssey.webp',
        github: 'https://github.com/zZhantii/CerealsOdyssey',
        stack: [
            'PHP',
            'MySQL',
            'Bootstrap',
            'HTML5',
            'CSS3',
            'JavaScript'
        ]
    },
    {
        title: 'BearCam',
        description: 'Sistema híbrido de videovigilancia basado en cámaras ESP32 con detección de movimiento e integración backend en Flask. Permite capturar imágenes bajo demanda, almacenamiento en servidor, visualización en tiempo real y gestión remota mediante plataforma web. Arquitectura cliente-servidor con comunicación Wi-Fi y peticiones HTTP.',
        img: '/img/img_main_bearcam.webp',
        github: 'https://github.com/zZhantii/BearCam',
        stack: [
            'Python 3',
            'Flask 3',
            'MySQL',
            'ESP32',
            'ESP-IDF',
            'Bootstrap',
            'HTTP / REST'
        ]
    }
];



const visibleCards = ref(3)

const updateVisibleCards = () => {
    if (window.innerWidth <= 768) {
        visibleCards.value = 1
    } else if (window.innerWidth <= 1024) {
        visibleCards.value = 2
    } else {
        visibleCards.value = 3
    }
}

onMounted(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleCards)
})

const maxIndex = computed(() =>
    projects.length - visibleCards.value
)

const next = () => {
    if (currentIndex.value < maxIndex.value) {
        currentIndex.value++
    }
}

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}
</script>

<style scoped>
.cards-section {
    padding: 120px 0;
    background: #ffffff;
    text-align: center;
}

.carousel-wrapper {
    position: relative;
    max-width: 1200px;
    margin: 60px auto 0;
    display: flex;
    align-items: center;
}

.carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.carousel-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(.65, .05, .36, 1);
}

/* CARD */

.card {
    flex: 0 0 calc(100% / 3);
    padding: 0 18px;
    box-sizing: border-box;
    display: flex;
}

.card-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    overflow: hidden;
    background: #f5f5f5;
}

/* Imagen fija */

.card-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

/* Contenido flexible */

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 24px;
}

/* Limitar descripción para uniformidad */

.description {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.85;
}

/* STACK */

.stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
}

.badge {
    font-size: 0.75rem;
    padding: 6px 10px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.06);
    font-weight: 500;
    transition: 0.2s ease;
}

.badge:hover {
    background: #111;
    color: white;
}

/* ACTIONS */

.card-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 22px;
}

.primary {
    padding: 8px 18px;
    border-radius: 8px;
    border: none;
    background: #111;
    color: white;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.3s ease;
}

.primary:hover {
    background: #000;
    transform: translateY(-2px);
}

.github-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #111;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
    color: #111;
}

.github-btn svg {
    width: 18px;
    height: 18px;
}

.github-btn:hover {
    background: #111;
    color: white;
}

/* FLECHAS */

.nav-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #111;
    color: #fff;
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s ease;
}

.nav-arrow:hover {
    transform: scale(1.1);
}

.nav-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.left {
    margin-right: 20px;
}

.right {
    margin-left: 20px;
}

@media (max-width: 1024px) {

    .card {
        flex: 0 0 50%;
    }

    .carousel-wrapper {
        max-width: 900px;
    }

    .nav-arrow {
        width: 38px;
        height: 38px;
    }
}

@media (max-width: 768px) {

    .cards-section {
        padding: 100px 0;
    }

    .carousel-wrapper {
        max-width: 95%;
    }

    .card {
        flex: 0 0 100%;
        padding: 0 10px;
    }

    .card-image img {
        height: 200px;
    }

    .card-content {
        padding: 20px;
    }

    .nav-arrow {
        position: absolute;
        top: auto;
        bottom: -60px;
    }

    .left {
        left: 35%;
    }

    .right {
        right: 35%;
    }
}

@media (max-width: 480px) {

    .card-image img {
        height: 180px;
    }

    .description {
        -webkit-line-clamp: 4;
        font-size: 0.9rem;
    }

    .stack {
        gap: 6px;
    }

    .badge {
        font-size: 0.7rem;
        padding: 5px 8px;
    }
}
</style>