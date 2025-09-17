/*
 * Main JavaScript Entry Point
 * Imports and initializes all modules
 */

// Import utilities
import { smoothScroll } from './utils/scroll.js';
import { initAnimations } from './utils/animations.js';

// Import components
import { initNavigation } from './components/navigation.js';
import { initMobileNavDots } from './components/mobile-nav-dots.js';
import { initContactForm } from './components/contact-form.js';
import { initCounters } from './components/counters.js';
import { initModals } from './components/modal.js';
import { initChampionshipCarousels } from './components/carousel.js';

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core utilities
    smoothScroll();
    initAnimations();
    
    // Initialize components
    initNavigation();
    initMobileNavDots();
    initContactForm();
    initCounters();
    initModals();
    initChampionshipCarousels();
    
    console.log('TLM Racing Portfolio - JavaScript modules loaded successfully');

            // Device-adaptive Contact span (phone number)
            const contactSpan = document.getElementById('main-contact-link');
            if (contactSpan) {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                const phoneNumber = '+33789532017';
                if (isMobile) {
                    contactSpan.addEventListener('click', function() {
                        window.location.href = 'tel:' + phoneNumber;
                    });
                } else {
                    contactSpan.addEventListener('click', function() {
                        // Copy to clipboard
                        navigator.clipboard.writeText(phoneNumber);
                        // Show tooltip/alert
                        contactSpan.title = 'Numéro copié !';
                        setTimeout(() => { contactSpan.title = ''; }, 1500);
                    });
                }
            }
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Export for legacy compatibility
window.TLMRacing = {
    initNavigation,
    initMobileNavDots,
    initContactForm,
    initCounters,
    initModals,
    smoothScroll,
    initAnimations
};
