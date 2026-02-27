<template>
    <section id="hero" class="hero reveal">
        <div class="hero-container">

            <!-- Imagen -->
            <div class="hero-image">
                <img src="/img/santiago.webp" alt="Foto de Santiago" />
            </div>

            <!-- Contenido -->
            <div class="hero-content">
                <span class="hero-tag">DESARROLLADOR WEB</span>

                <h1>
                    Hola, soy <br />
                    <strong>Santiago Lozada</strong>
                </h1>

                <p>
                    Estudiante de Ingeniería Informática y desarrollador web full-stack especializado en Vue y Laravel.

                    Diseño y desarrollo aplicaciones web modernas, escalables y bien estructuradas, combinando backend
                    sólido con interfaces limpias y funcionales.
                </p>

                <div class="hero-actions">
                    <a href="#contact" class="primary">
                        Contáctame
                    </a>
                    <a href="/cv/santiago_lozada_benitez.pdf" download class="secondary">
                        Descargar CV
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: #f2f2f2;
}

.hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
}

/* Imagen */
.hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image img {
    width: 100%;
    max-width: 320px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 12px;
    background: #bdbdbd;
}

/* Contenido */
.hero-content {
    background: #d3d3d3;
    padding: 48px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.hero-tag {
    font-size: 0.8rem;
    letter-spacing: 2px;
    font-weight: 500;
    opacity: 0.7;
}

.hero-content h1 {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1.2;
}

.hero-content strong {
    font-weight: 700;
}

.hero-content p {
    max-width: 520px;
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.85;
}

/* Botones */
.hero-actions {
    display: flex;
    gap: 16px;
    margin-top: 10px;
}

.hero-actions a {
    padding: 10px 26px;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
}

.primary {
    background: #111;
    color: #fff;
    border: none;
}

.primary:hover {
    background: #000;
}

.secondary {
    background: transparent;
    border: 1px solid #111;
    color: #111;
}

.secondary:hover {
    background: #111;
    color: #fff;
}

@media (max-width: 1024px) {

    .hero-container {
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        padding: 0 30px;
    }

    .hero-content {
        padding: 36px;
    }

    .hero-content h1 {
        font-size: 2.2rem;
    }

    .hero-content p {
        font-size: 0.95rem;
    }

    .hero-actions a {
        padding: 5px 2px;
        font-size: 0.9rem;
    }

    .hero-image img {
        max-width: 260px;
    }
}

@media (max-width: 768px) {

    .hero {
        padding: 120px 0 60px;
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
        padding: 0 24px;
    }

    .hero-content {
        padding: 32px;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        max-width: 100%;
    }

    .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero-image img {
        max-width: 220px;
    }

    .hero-actions a {
        padding: 10px 30px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {

    .hero {
        padding: 140px 0 60px;
    }

    .hero-container {
        padding: 0 18px;
        gap: 30px;
    }

    .hero-content {
        padding: 24px;
        border-radius: 12px;
    }

    .hero-tag {
        font-size: 0.7rem;
        letter-spacing: 1.5px;
    }

    .hero-content h1 {
        font-size: 1.7rem;
        line-height: 1.3;
    }

    .hero-content p {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .hero-actions {
        flex-direction: column;
        gap: 12px;
    }

    .hero-actions a {
        padding: 10px 30px;
        font-size: 0.9rem;
    }

    .hero-image img {
        max-width: 180px;
    }

}
</style>
