<template>
    <section id="academy" class="timeline-section">
        <div class="timeline-container">

            <h2 class="section-title">Formación</h2>

            <div class="timeline">

                <!-- ITEM -->
                <div class="timeline-item completed">
                    <div class="timeline-marker"></div>

                    <div class="timeline-card">
                        <span class="timeline-year">2023</span>

                        <div class="timeline-block">
                            <h3>Bachillerato Tecnológico</h3>
                            <p class="institution">IES Joan Oró · Martorell</p>
                            <p>Bases de lógica, algoritmia y resolución de problemas.</p>
                        </div>

                        <div class="timeline-block">
                            <h3>Socorrismo en instalaciones acuáticas</h3>
                            <p class="institution">Cruz Roja · Barcelona</p>
                            <p>Formación en rescate, prevención y primeros auxilios.</p>
                        </div>
                    </div>
                </div>

                <!-- ITEM -->
                <div class="timeline-item completed">
                    <div class="timeline-marker"></div>

                    <div class="timeline-card">
                        <span class="timeline-year">2025</span>

                        <div class="timeline-block">
                            <h3>FP Grado Superior DAW</h3>
                            <p class="institution">IES Bernat el Ferrer · Molins de Rei</p>
                            <p>Desarrollo web moderno con proyectos reales.</p>
                        </div>

                        <div class="timeline-block">
                            <h3>Prácticas Profesionales</h3>
                            <p class="institution">ROHU Innovations · La Palma de Cervelló</p>
                            <p>Desarrollo frontend y optimización de interfaces.</p>
                        </div>
                    </div>
                </div>

                <!-- ITEM ACTUAL -->
                <div class="timeline-item current">
                    <div class="timeline-marker"></div>

                    <div class="timeline-card">
                        <span class="timeline-year">En curso</span>

                        <div class="timeline-block">
                            <h3>Ingeniería Informática</h3>
                            <p class="institution">Universidad de Lleida · Igualada</p>
                            <p>Arquitectura de sistemas, estructuras de datos y desarrollo avanzado.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.timeline-section {
    padding: 140px 0;
    background: #f9f9f9;
}

.timeline-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 40px;
}

.section-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 80px;
    text-align: center;
}

/* TIMELINE BASE */

.timeline {
    position: relative;
    padding-left: 40px;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    width: 2px;
    height: 100%;
    background: rgba(0, 0, 0, 0.08);
}

/* ITEM */

.timeline-item {
    position: relative;
    margin-bottom: 80px;
}

/* MARKER */

.timeline-marker {
    position: absolute;
    left: 4px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #111;
    transition: 0.3s ease;
}

.timeline-item.current .timeline-marker {
    background: white;
    border: 2px solid #111;
}

/* CARD */

.timeline-card {
    background: #ffffff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: 0.3s ease;
}

.timeline-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
}

/* YEAR */

.timeline-year {
    display: inline-block;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 20px;
}

/* CONTENT */

.timeline-block+.timeline-block {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.timeline-block h3 {
    font-size: 1.2rem;
    margin-bottom: 6px;
    font-weight: 600;
}

.institution {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: 8px;
}

.timeline-block p {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.8;
}

/* RESPONSIVE */

@media (max-width: 768px) {
    .timeline {
        padding-left: 30px;
    }

    .timeline-card {
        padding: 24px;
    }
}
</style>