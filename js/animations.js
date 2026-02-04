
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];

function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    stars = [];
    
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        
        star.y -= star.speed;
        
        
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });
    
    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animateStars();


const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');


if (window.matchMedia("(min-width: 768px)").matches) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        
        cursorDot.style.transform = `translate(${posX - 8}px, ${posY - 8}px)`;

        
        cursorOutline.animate({
            transform: `translate(${posX - 16}px, ${posY - 16}px)`
        }, { duration: 500, fill: "forwards" });
    });
    
    const clickables = document.querySelectorAll('a, button');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform += " scale(1.5)";
            cursorOutline.style.borderColor = "#8b5cf6"; 
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = cursorOutline.style.transform.replace(" scale(1.5)", "");
            cursorOutline.style.borderColor = "#3b82f6"; 
        });
    });
}