<template>
  <header :class="{ scrolled: isScrolled }">
    <nav>
      <a href="#home">Inicio</a>
      <a href="#hero">Acerca de mi</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Proyectos</a>
      <a href="#academy">Formacion</a>
      <a href="#contact">Contacto</a>
      <a href="https://github.com/zZhantii"><img src="/public/img/icons8-github-64.webp" alt="GitHubIcon"></a>

      
      <!-- <button class="lang-toggle" @click="toggleLang" :class="lang">
        <span class="lang-track">
          <span class="lang-thumb"></span>

          <span class="lang-option">ES</span>
          <span class="lang-option">EN</span>
        </span>
      </button> -->
    </nav>
    

  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// import { useLang } from '../composables/appLang';

// const { t, toggleLang, lang } = useLang();


</script>


<style scoped>
header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);

  border-radius: 999px;
  border: solid 1px black;
  padding: 14px 32px;

  transition:
    padding 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

header.scrolled {
  top: 20px;
  transform: translateX(-50%);
  padding: 10px 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .08);
}

nav {
  display: flex;
  gap: 28px;
}

nav a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: black;
  display: flex;
  align-items: center;

  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 0;
  height: 1px;
  background: black;
  transition: width .3s ease;
}

nav a:hover::after {
  width: 100%;
}

img {
  height: 40px;
  width: 40px;
}

</style>


