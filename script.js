// ========================================
// BRUTALIST TECH NOIR - INTERACTIVE SCRIPTS
// ========================================

// Matrix-style Canvas Background
function initMatrixBackground() {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00f0ff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Scroll-triggered Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize matrix background
    initMatrixBackground();

    // Animate service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.setAttribute('data-animate', '');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate feature blocks
    const featureBlocks = document.querySelectorAll('.feature-block');
    featureBlocks.forEach((block, index) => {
        block.setAttribute('data-animate', '');
        block.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(block);
    });

    // Animate metric items
    const metricItems = document.querySelectorAll('.metric-item');
    metricItems.forEach((item, index) => {
        item.setAttribute('data-animate', '');
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.querySelector('.btn-text').textContent;

        // Animate button
        submitBtn.querySelector('.btn-text').textContent = 'Processing...';
        submitBtn.style.opacity = '0.6';
        submitBtn.style.pointerEvents = 'none';

        // Simulate submission
        setTimeout(() => {
            submitBtn.querySelector('.btn-text').textContent = 'Message Sent!';

            setTimeout(() => {
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.style.pointerEvents = 'auto';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Parallax Effect for Hero Grid
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGrid = document.querySelector('.hero-grid-bg');

    if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Dynamic Cursor Effect (Optional Enhancement)
const cursor = {
    x: 0,
    y: 0
};

document.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

// Glitch Effect on Service Numbers (on hover)
document.querySelectorAll('.service-number').forEach(number => {
    number.addEventListener('mouseenter', function() {
        const original = this.textContent;
        let iterations = 0;

        const interval = setInterval(() => {
            this.textContent = original
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return original[index];
                    }
                    return Math.floor(Math.random() * 10);
                })
                .join('');

            if (iterations >= original.length) {
                clearInterval(interval);
            }

            iterations += 1/3;
        }, 30);
    });
});

// Tech Stack Item Pulse Effect
document.querySelectorAll('.stack-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add typing effect to hero subtitle (on page load)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    element.style.opacity = '1';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect after animations
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        setTimeout(() => {
            // typeWriter(subtitle, text, 30);
        }, 1500);
    }
});

// Console Easter Egg
console.log('%c[NEURAL SYSTEMS]', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
console.log('%cSystem Status: ONLINE', 'color: #00ff00; font-size: 14px;');
console.log('%cInterested in working with us? Contact: engineering@neural.ai', 'color: #f0f0f0; font-size: 12px;');
