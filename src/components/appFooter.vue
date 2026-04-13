<script setup>
import { computed, inject } from 'vue'

const lang = inject('lang')
const year = new Date().getFullYear()

const t = computed(() => ({
    es: { made: 'Diseñado y desarrollado por Santiago Lozada', rights: 'Todos los derechos reservados' },
    en: { made: 'Designed & developed by Santiago Lozada', rights: 'All rights reserved' }
}[lang.value]))
</script>

<template>
    <footer class="footer">
        <div class="footer-inner">
            <span class="footer-name">SL</span>
            <p class="footer-copy">{{ t.made }} · © {{ year }}</p>
            <div class="footer-links">
                <a href="https://github.com/zZhantii" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/santiago-lozada-551783331/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 32px 40px;
    border-top: 1px solid var(--border);
    background: var(--bg);
}

.footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.footer-name {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-muted);
}

.footer-copy {
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.03em;
}

.footer-links {
    display: flex;
    gap: 20px;
}

.footer-links a {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: var(--accent);
}

@media (max-width: 600px) {
    .footer-inner {
        flex-direction: column;
        text-align: center;
        gap: 12px;
    }
}
</style>