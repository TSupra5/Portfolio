/*
 * Mobile Navigation Dots Component
 * Handles the mobile-only navigation dots functionality
 */

/**
 * Initialize mobile navigation dots
 */
export function initMobileNavDots() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navDots.length || !sections.length) return;
    
    initDotClickHandlers(navDots);
    initScrollTracking(navDots, sections);
}

/**
 * Initialize click handlers for navigation dots
 * @param {NodeList} navDots - Navigation dot elements
 */
function initDotClickHandlers(navDots) {
    navDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Track scroll position and update active dot
 * @param {NodeList} navDots - Navigation dot elements
 * @param {NodeList} sections - Section elements
 */
function initScrollTracking(navDots, sections) {
    function updateActiveDot() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update dots
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === currentSection) {
                dot.classList.add('active');
            }
        });
    }
    
    // Listen for scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveDot, 10);
    });
    
    // Initial call
    updateActiveDot();
}
