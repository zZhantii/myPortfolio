import { onMounted } from 'vue'

export function useScrollReveal() {
    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach((el) => observer.observe(el))

        // Re-observe after potential dynamic content
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        }, 500)
    })
}