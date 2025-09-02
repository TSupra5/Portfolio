/*
 * Animation Utilities
 * General animation and visual effects
 */

/**
 * Initialize animations
 */
export function initAnimations() {
    setupIntersectionObserver();
    initLoadAnimations();
    initHoverEffects();
}

/**
 * Setup intersection observer for scroll animations
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.team-stats, .palmares-grid, .championships-grid, .experience-grid, .partners-grid'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Initialize loading animations
 */
function initLoadAnimations() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements on load
        const heroElements = document.querySelectorAll('.hero-subtitle, .hero-title, .hero-description, .cta-button');
        
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
            }, index * 200);
        });
    });
}

/**
 * Initialize hover effects
 */
function initHoverEffects() {
    const cards = document.querySelectorAll('.championship-card, .experience-card, .stat-item, .palmares-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Fade in animation
 * @param {HTMLElement} element - Element to animate
 * @param {number} duration - Animation duration in ms
 */
export function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    element.style.transition = `opacity ${duration}ms ease`;
    
    setTimeout(() => {
        element.style.opacity = '1';
    }, 10);
}

/**
 * Fade out animation
 * @param {HTMLElement} element - Element to animate
 * @param {number} duration - Animation duration in ms
 */
export function fadeOut(element, duration = 300) {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}

/**
 * Slide down animation
 * @param {HTMLElement} element - Element to animate
 * @param {number} duration - Animation duration in ms
 */
export function slideDown(element, duration = 300) {
    element.style.height = '0';
    element.style.overflow = 'hidden';
    element.style.display = 'block';
    element.style.transition = `height ${duration}ms ease`;
    
    const targetHeight = element.scrollHeight + 'px';
    
    setTimeout(() => {
        element.style.height = targetHeight;
    }, 10);
    
    setTimeout(() => {
        element.style.height = 'auto';
        element.style.overflow = 'visible';
    }, duration);
}

/**
 * Slide up animation
 * @param {HTMLElement} element - Element to animate
 * @param {number} duration - Animation duration in ms
 */
export function slideUp(element, duration = 300) {
    element.style.height = element.scrollHeight + 'px';
    element.style.overflow = 'hidden';
    element.style.transition = `height ${duration}ms ease`;
    
    setTimeout(() => {
        element.style.height = '0';
    }, 10);
    
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}

/**
 * Add animation styles
 */
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        /* Loading states */
        .loading {
            position: relative;
            overflow: hidden;
        }
        
        .loading::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize styles when module loads
addAnimationStyles();
