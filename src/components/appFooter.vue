<template>
    <footer class="footer">
        <div class="footer-container">

            <span class="name">
                Santiago Lozada Benitez · Desarrollador Web
            </span>

            <span class="copy">
                © {{ year }}
            </span>

            <div class="links">
                <a href="https://github.com/zZhantii" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/santiago-lozada-551783331/" target="_blank">LinkedIn</a>
            </div>

        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
    padding: 40px 0;
    background: #0f0f0f;
    color: #ffffff;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    font-size: 0.8rem;
    opacity: 0.7;
}

.links {
    display: flex;
    gap: 16px;
}

.links a {
    color: white;
    text-decoration: none;
    position: relative;
}

.links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: white;
    transition: width .3s ease;
}

.links a:hover::after {
    width: 100%;
}

/* Responsive */
@media (max-width: 700px) {
    .footer-container {
        flex-direction: column;
        text-align: center;
    }
}
</style>
