<template>
    <section id="home" class="carousel-wrapper">
        <div class="carousel">
            <div v-for="(slide, index) in slides" :key="index" class="slide"
                :class="{ active: currentIndex === index }">
                <img :src="slide.image" :alt="slide.title" />
                <div class="content">
                    <h2>{{ slide.title }}</h2>
                    <p>{{ slide.description }}</p>
                    <div>
                        <a :href="slide.github" target="_blank" rel="noopener noreferrer" class="cta-button">
                            {{ slide.buttonText }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Controles -->
            <button class="nav prev" @click="prevSlide">‹</button>
            <button class="nav next" @click="nextSlide">›</button>

            <!-- Indicadores -->
            <div class="dots">
                <span v-for="(_, index) in slides" :key="index" :class="{ active: currentIndex === index }"
                    @click="goToSlide(index)" />
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentIndex = ref(0);
const intervalTime = 5000; 
let intervalId = null;

const slides = [
    {
        image: '/img/img_main_ECO-SHARE.webp',
        title: 'ECO-SHARE',
        description: 'Plataforma colaborativa de movilidad sostenible con integración de mapas y cálculo automático de costes.',
        buttonText: 'Descubrir proyecto',
        github: 'https://github.com/zZhantii/ECO-SHARE'
    },
    {
        image: '/img/img_main_cereals_odyssey.webp',
        title: 'Cereals Odyssey',
        description: 'Aplicación web interactiva con enfoque gamificado y arquitectura escalable.',
        buttonText: 'Descubrir proyecto',
        github: 'https://github.com/zZhantii/CerealsOdyssey'
    }
];

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
    resetAutoplay();
};

const prevSlide = () => {
    currentIndex.value =
        (currentIndex.value - 1 + slides.length) % slides.length;
    resetAutoplay();
};

const goToSlide = (index) => {
    currentIndex.value = index;
    resetAutoplay();
};

/* ▶ Autoplay */
const startAutoplay = () => {
    intervalId = setInterval(nextSlide, intervalTime);
};

const stopAutoplay = () => {
    clearInterval(intervalId);
};

const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
};

onMounted(startAutoplay);
onUnmounted(stopAutoplay);
</script>


<style scoped>
.carousel-wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel {
    position: relative;
    width: 75vw;
    /* 👉 tres tercios visuales */
    height: 70vh;
    overflow: hidden;
    border-radius: 16px;
}

.slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity .5s ease;
}

.slide.active {
    opacity: 1;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(.4);
}

.content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    gap: 16px;
}

.content h2 {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
}

.content p {
    font-size: 1.1rem;
    opacity: .8;
}

.cta-button {
    padding: 10px 32px;
    border: 1px solid white;
    background: transparent;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: .3s;
    font-weight: 500;
    display: inline-block;
}

.cta-button:hover {
    background: white;
    color: black;
}

/* Navegación */
.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
}

.nav:hover {
    opacity: 1;
}

.nav:focus {
    outline: none;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

/* Dots */
.dots {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
}

.dots span {
    width: 8px;
    height: 8px;
    background: white;
    opacity: .4;
    border-radius: 50%;
    cursor: pointer;
}

.dots span.active {
    opacity: 1;
    width: 24px;
    border-radius: 4px;
}


</style>