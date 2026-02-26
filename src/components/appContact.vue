<template>
    <section id="contact" class="contact-section">
        <div class="contact-container">

            <h2>Contacto</h2>
            <p>
                Si te interesa mi perfil o quieres hablar sobre un proyecto,
                puedes contactarme aquí.
            </p>

            <div class="contact-list">
                <div class="contact-item">
                    <span>Email</span>
                    <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMTtfzFMlxGlZRFLSQvntKwjGgKsbJPVWRjVxPxmxTMshhSPTdwMxSTsdLZDHGCstDXfhhQ">
                        santiagoolozadab@gmail.com
                    </a>
                </div>

                <div class="contact-item">
                    <span>GitHub</span>
                    <a href="https://github.com/zZhantii">
                        github.com/zZhantii
                    </a>
                </div>

                <div class="contact-item">
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/santiago-lozada-551783331/" target="_blank">
                       linkedin.com/in/santiago-lozada-551783331
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 120px 0;
    background: #111;
    color: #fff;
}

.contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
}

.contact-container h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 16px;
}

.contact-container p {
    max-width: 500px;
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 50px;
}

/* Contact list */
.contact-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.contact-item span {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 2px;
    opacity: 0.5;
    margin-bottom: 6px;
}

.contact-item a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    position: relative;
}

.contact-item a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: white;
    transition: width .3s ease;
}

.contact-item a:hover::after {
    width: 100%;
}
</style>
