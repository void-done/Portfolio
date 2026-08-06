// Add this to your js/main.js file

// ========================================
// 3D TILT EFFECT FOR CARDS
// ========================================

const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    const inner = card.querySelector('.tilt-card-inner');
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });
  
  card.addEventListener('mouseleave', () => {
    const inner = card.querySelector('.tilt-card-inner');
    if (inner) {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  });
});

// ========================================
// PARTICLE BACKGROUND
// ========================================

function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function init() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    // Connect particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  init();
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Initialize particles
initParticles();

// ========================================
// SCROLL PROGRESS BAR
// ========================================

function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

initScrollProgress();

// ========================================
// RIPPLE EFFECT FOR BUTTONS
// ========================================

const rippleButtons = document.querySelectorAll('.ripple');

rippleButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.transition = 'width 0.6s, height 0.6s';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.style.width = '300px';
      ripple.style.height = '300px';
    }, 0);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ========================================
// ENHANCED TEXT REVEAL ON SCROLL
// ========================================

const textRevealElements = document.querySelectorAll('.text-reveal');

const textRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

textRevealElements.forEach(el => {
  textRevealObserver.observe(el);
});

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================

const magneticButtons = document.querySelectorAll('.magnetic-button');

magneticButtons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)';
  });
});

// ========================================
// CURSOR TRAIL EFFECT (Optional)
// ========================================

function initCursorTrail() {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  
  const dots = [];
  const dotCount = 20;
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.width = (8 - i * 0.3) + 'px';
    dot.style.height = (8 - i * 0.3) + 'px';
    dot.style.borderRadius = '50%';
    dot.style.background = 'rgba(34, 211, 238, 0.3)';
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = '9999';
    dot.style.transition = 'transform 0.1s';
    document.body.appendChild(dot);
    dots.push({ element: dot, x: 0, y: 0 });
  }
  
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateTrail() {
    let x = mouseX;
    let y = mouseY;
    
    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || dots[0];
      
      dot.x = x;
      dot.y = y;
      
      dot.element.style.left = x + 'px';
      dot.element.style.top = y + 'px';
      
      x += (nextDot.x - x) * 0.5;
      y += (nextDot.y - y) * 0.5;
    });
    
    requestAnimationFrame(animateTrail);
  }
  
  animateTrail();
}

// Uncomment to enable cursor trail
initCursorTrail();