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
    
    console.log('TLM Racing Portfolio - JavaScript modules loaded successfully');
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
    smoothScroll,
    initAnimations
};
