import { ref } from 'vue';

const lang = ref(localStorage.getItem('lang') || 'es');

const messages = {
    es: {
        nav: {
            home: 'Inicio',
            skills: 'Habilidades',
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto'
        },
        hero: {
            tag: 'DESARROLLADOR WEB',
            greeting: 'Hola, soy',
            description: 'Desarrollo interfaces modernas y funcionales.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            about: 'About me',
            contact: 'Contact'
        },
        hero: {
            tag: 'WEB DEVELOPER',
            greeting: 'Hi, I am',
            description: 'I build modern and functional web interfaces.'
        }
    }
};

export function useLang() {
    const t = (path) => {
        return path.split('.').reduce((obj, key) => obj[key], messages[lang.value]);
    };

    const toggleLang = () => {
        lang.value = lang.value === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', lang.value);
    };

    return { lang, t, toggleLang };
}
