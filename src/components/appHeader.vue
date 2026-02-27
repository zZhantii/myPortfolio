<template>
  <header :class="{ scrolled: isScrolled }">

    <div class="nav-container">

      <!-- <div class="logo">
        <a href="#home">ZS</a>
      </div> -->

      <nav :class="{ open: menuOpen }">
        <a href="#hero" @click="closeMenu">Sobre mí</a>
        <a href="#skills" @click="closeMenu">Habilidades</a>
        <a href="#projects" @click="closeMenu">Proyectos</a>
        <a href="#academy" @click="closeMenu">Formación</a>
        <a href="#contact" @click="closeMenu">Contacto</a>

        <a href="https://github.com/zZhantii" target="_blank" class="github">
          GitHub
        </a>
      </nav>

      <button class="burger" :class="{ active: menuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
  if (menuOpen.value) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};




</script>

<style scoped>
header {
position: fixed;
top: 25px;
left: 50%;
transform: translateX(-50%);
z-index: 1000;

width: auto;
padding: 14px 36px;

background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(14px);
border-radius: 50px;
border: 1px solid rgba(0,0,0,0.08);

transition: all .35s ease;
}

/* Scroll state */

header.scrolled {
top: 15px;
padding: 10px 28px;
background: rgba(255,255,255,0.95);
box-shadow: 0 8px 30px rgba(0,0,0,.08);
}

/* Layout */

.nav-container {
display: flex;
align-items: center;
justify-content: space-between;
gap: 40px;
}

/* Logo */

.logo a {
font-weight: 700;
font-size: 1.1rem;
text-decoration: none;
color: black;
letter-spacing: 1px;
}

/* Nav desktop */

nav {
display: flex;
align-items: center;
gap: 28px;
}

nav a {
text-decoration: none;
font-size: 0.95rem;
color: black;
position: relative;
transition: .25s ease;
}

nav a::after {
content: "";
position: absolute;
bottom: -4px;
left: 0;
width: 0;
height: 1px;
background: black;
transition: .3s ease;
}

nav a:hover::after {
width: 100%;
}

.github {
padding: 6px 14px;
border-radius: 20px;
border: 1px solid black;
font-size: 0.85rem;
}

.github:hover {
background: black;
color: white;
}

/* Burger */

.burger {
display: none;
flex-direction: column;
gap: 5px;
background: none;
border: none;
cursor: pointer;
}

.burger span {
width: 22px;
height: 2px;
background: black;
transition: .3s ease;
}

/* Burger animation */

.burger.active span:nth-child(1) {
transform: rotate(45deg) translateY(7px);
}

.burger.active span:nth-child(2) {
opacity: 0;
}

.burger.active span:nth-child(3) {
transform: rotate(-45deg) translateY(-7px);
}

/* ===================== */
/* MOBILE */
/* ===================== */

@media (max-width: 768px) {

header {
width: 92%;
top: 15px;
padding: 12px 20px;
border-radius: 30px;
}

.burger {
display: flex;
}

nav {
position: absolute;
top: 70px;
left: 0;
width: 100%;
flex-direction: column;
gap: 24px;
padding: 30px 0;

background: rgba(255,255,255,0.98);
backdrop-filter: blur(18px);
border-radius: 20px;

opacity: 0;
transform: translateY(-15px);
pointer-events: none;
transition: .35s ease;
}

nav.open {
opacity: 1;
transform: translateY(0);
pointer-events: all;
}

nav a {
font-size: 1.1rem;
}

.github {
border-radius: 25px;
}
}
</style>


