// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        document.body.classList.toggle('overflow-hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        });
    });
}

// Scroll Reveal Animation (ReactBits style)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up').forEach(el => {
    observer.observe(el);
});

// Advanced Glass Card Mouse Glow Effect
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Subtle radial gradient follow
        card.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.06), rgba(255, 255, 255, 0.03) 40%)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.03)';
    });
});

// Velocity Text Scroll Effect
const velocityText = document.getElementById('velocity-text');
if (velocityText) {
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        velocityText.style.transform = `translateX(${-scrollPosition * 0.15}px)`;
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        backToTopBtn.classList.remove('translate-y-24', 'opacity-0');
    } else {
        backToTopBtn.classList.add('translate-y-24', 'opacity-0');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});