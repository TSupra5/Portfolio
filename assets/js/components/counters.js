/*
 * Counter Animation Component
 * Handles animated counting for statistics
 */

/**
 * Initialize counter animations
 */
export function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (!counters.length) return;
    
    setupIntersectionObserver(counters);
}

/**
 * Setup intersection observer for counters
 * @param {NodeList} counters - Counter elements
 */
function setupIntersectionObserver(counters) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Animate a single counter
 * @param {HTMLElement} counter - Counter element to animate
 */
function animateCounter(counter) {
    const target = parseInt(counter.textContent.replace(/\D/g, ''));
    const suffix = counter.textContent.replace(/\d/g, '');
    
    if (isNaN(target)) return;
    
    let count = 0;
    const increment = target / 60; // 60 frames for ~1 second at 60fps
    const duration = 1500; // 1.5 seconds
    const frameTime = duration / 60;
    
    const timer = setInterval(() => {
        count += increment;
        
        if (count >= target) {
            counter.textContent = target + suffix;
            clearInterval(timer);
            counter.classList.add('counter-complete');
        } else {
            counter.textContent = Math.floor(count) + suffix;
        }
    }, frameTime);
    
    // Add animation class for CSS effects
    counter.classList.add('counter-animating');
}

/**
 * Add counter animation styles
 */
function addCounterStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .counter-animating {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
        
        .counter-complete {
            transform: scale(1);
            color: var(--color-accent-primary);
        }
        
        @keyframes counterPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .stat-number {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize styles when module loads
addCounterStyles();
