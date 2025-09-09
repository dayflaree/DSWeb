// Dead Space Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Add interactive effects
    addInteractiveEffects();
    
    // Sound effects removed per user request
});

function initializeWebsite() {
    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWebsite);
        return;
    }
    
    // Add loading animation
    if (document.body) {
        document.body.style.opacity = '0';
        setTimeout(() => {
            if (document.body) {
                document.body.style.transition = 'opacity 0.5s ease-in-out';
                document.body.style.opacity = '1';
            }
        }, 100);
    }
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize panels
    initializePanels();
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Hover effects without sound
    });
}

function initializePanels() {
    const panels = document.querySelectorAll('.panel-container');
    
    panels.forEach((panel, index) => {
        // Stagger panel animations
        panel.style.animationDelay = `${index * 0.1}s`;
        
        // Add panel glow hover effects (no transform) with smooth transition
        panel.style.transition = 'box-shadow 0.3s ease';
        
        panel.addEventListener('mouseenter', () => {
            panel.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.2)';
        });
        
        panel.addEventListener('mouseleave', () => {
            panel.style.boxShadow = 'none';
        });
    });
}

function addInteractiveEffects() {
    // Add button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            createRippleEffect(e, button);
        });
    });
    
    // Add access item effects
    const accessItems = document.querySelectorAll('.access-item');
    accessItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Visual effects only, no sound
        });
    });
    
    // Add typing effect to main title
    addTypingEffect();
    
    // Add particle effects
    createParticleEffects();
}

function createRippleEffect(event, element) {
    if (!element || !event) {
        console.error('Invalid parameters for createRippleEffect');
        return;
    }
    
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    
    // Check if element has valid dimensions
    if (rect.width === 0 || rect.height === 0) {
        console.warn('Element has no dimensions, skipping ripple effect');
        return;
    }
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple && ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function addTypingEffect() {
    // Typing effect removed since main-title element was replaced with hero logo
    // The hero logo provides a better visual impact than animated text
    return;
}

function createParticleEffects() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    // Create floating particles with staggered timing
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createParticle(particleContainer);
        }, i * 200); // Stagger particle creation
    }
    
    // Continuously create new particles
    setInterval(() => {
        createParticle(particleContainer);
    }, 800);
    
    // Clean up particles when page is unloaded
    window.addEventListener('beforeunload', function() {
        if (particleContainer && particleContainer.parentNode) {
            particleContainer.parentNode.removeChild(particleContainer);
        }
    });
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random size variation for more natural look
    const size = Math.random() * 3 + 1; // 1-4px
    const duration = Math.random() * 8 + 12; // 12-20 seconds
    const startX = Math.random() * 100; // Random horizontal position
    const drift = (Math.random() - 0.5) * 200; // Random horizontal drift
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--ds-accent-cyan);
        border-radius: 50%;
        opacity: 0;
        box-shadow: 0 0 ${size * 2}px var(--ds-accent-cyan);
        left: ${startX}%;
        bottom: -10px;
        --drift: ${drift}px;
        animation: floatUp ${duration}s ease-out forwards;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
        if (particle && particle.parentNode) {
            particle.remove();
        }
    }, duration * 1000);
}

// Sound functions removed per user request

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        5% {
            opacity: 0.6;
        }
        15% {
            opacity: 0.8;
        }
        60% {
            opacity: 0.8;
        }
        75% {
            opacity: 0.6;
        }
        85% {
            opacity: 0.3;
        }
        95% {
            opacity: 0.1;
        }
        100% {
            transform: translateY(calc(-100vh - 50px)) translateX(var(--drift, 0px));
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add smooth scrolling for anchor links
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

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close any open modals or panels
    if (e.key === 'Escape') {
        // Add functionality for closing modals if needed
    }
    
    // Enter key on focused elements
    if (e.key === 'Enter') {
        const focused = document.activeElement;
        if (focused && focused.classList.contains('nav-link')) {
            focused.click();
        }
    }
});

// Add loading states for better UX
window.addEventListener('load', function() {
    // Remove any loading indicators
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Initialize any lazy-loaded content
    initializeLazyContent();
});

function initializeLazyContent() {
    // Intersection observer removed - no more fade-in animations on scroll
    // Panels will now appear immediately without animation effects
}

// CSS animation styles removed - no more fade-in effects on panels
