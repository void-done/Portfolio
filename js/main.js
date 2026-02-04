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


const cards = document.querySelectorAll('.magic-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `radial-gradient(800px circle at ${x}px ${y}px, rgba(255,255,255,0.06), #0F0F0F 40%)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = '#0F0F0F';
    });
});


const velocityText = document.getElementById('velocity-text');

if (velocityText) {
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        velocityText.style.transform = `translateX(${-scrollPosition * 0.2}px)`;
    });
}

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('translate-y-24', 'opacity-0');
    } else {
        backToTopBtn.classList.add('translate-y-24', 'opacity-0');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});