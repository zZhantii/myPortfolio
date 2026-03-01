<script setup>
import appHeader from './components/appHeader.vue'
import appCarousel from './components/appCarousel.vue'
import appHerosection from './components/appHerosection.vue'
import appSkills from './components/appSkills.vue'
import appCardprojects from './components/appCardprojects.vue'
import appTimeline from './components/appTimeline.vue'
import appContact from './components/appContact.vue'
import appFooter from './components/appFooter.vue'

import { useScrollReveal } from './composables/appScroll';
useScrollReveal();
</script>

<template>
    <appHeader />
    <main>
        <appHerosection />

        <!-- <appCarousel />       -->

        <appSkills />
    
        <appCardprojects/>
    
        <appTimeline />
    
        <appContact />
    </main>
    <appFooter />
</template>

<style scoped>
</style>
