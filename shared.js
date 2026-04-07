/* ============================================
   DOTMORE MEDIA — Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // --- Nav Scroll Effect ---
    const nav = document.querySelector('.site-nav');
    if (nav && nav.classList.contains('site-nav--dark')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        }, { passive: true });
    }

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.nav-hamburger');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (hamburger && menuOverlay) {
        hamburger.addEventListener('click', () => {
            const isOpen = menuOverlay.classList.contains('is-open');
            if (isOpen) {
                menuOverlay.classList.remove('is-open');
                hamburger.classList.remove('is-open');
                document.body.style.overflow = '';
            } else {
                menuOverlay.classList.add('is-open');
                hamburger.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking a link
        menuOverlay.querySelectorAll('.menu-overlay-link').forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.remove('is-open');
                hamburger.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuOverlay.classList.contains('is-open')) {
                menuOverlay.classList.remove('is-open');
                hamburger.classList.remove('is-open');
                document.body.style.overflow = '';
            }
        });
    }

    // --- GSAP Reveal Animations ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll('.gs-reveal').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }
});
