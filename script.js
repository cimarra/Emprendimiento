document.addEventListener('DOMContentLoaded', () => {

    // Inicializar iconos de Lucide
    lucide.createIcons();

    // ===== 1. Loader Animado =====
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500); // Dar un pequeño margen para que se vea la animación
    });


    // ===== 2. Header con fondo al hacer scroll =====
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // ===== 3. Animaciones con GSAP para el Hero Section =====
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    tl.from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6');
    tl.from('.cta-button', { opacity: 0, scale: 0.8, duration: 0.6 }, '-=0.5');


    // ===== 4. Animaciones al hacer scroll con ScrollReveal.js =====
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1500,
        delay: 200,
        easing: 'ease-in-out',
        reset: false // Las animaciones solo ocurren una vez
    });

    sr.reveal('.section-title');
    sr.reveal('.products-grid .product-card', { interval: 200 });
    sr.reveal('.benefits-image', { origin: 'left' });
    sr.reveal('.benefits-list li', { origin: 'right', interval: 150 });
    sr.reveal('.swiper', { origin: 'bottom' });


    // ===== 5. Carrusel de Testimonios con Swiper.js =====
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
    });

});