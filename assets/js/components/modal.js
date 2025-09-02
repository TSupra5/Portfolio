/*
 * Modal Component
 * Handles championship modal display and interactions
 */

/**
 * Initialize modal functionality
 */
export function initModals() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalCloses = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.championship-modal');
    
    if (!modalOverlay || !modalTriggers.length) return;
    
    setupModalTriggers(modalTriggers, modalOverlay, modals);
    setupModalClosing(modalCloses, modalOverlay, modals);
    setupOverlayClosing(modalOverlay, modals);
    setupEscapeKeyClosing(modalOverlay, modals);
}

/**
 * Setup modal trigger buttons
 * @param {NodeList} triggers - Modal trigger buttons
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {NodeList} modals - All modal elements
 */
function setupModalTriggers(triggers, overlay, modals) {
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const modalId = this.getAttribute('data-modal');
            const targetModal = document.getElementById(`${modalId}-modal`);
            
            if (targetModal) {
                openModal(overlay, targetModal, modals);
            }
        });
    });
}

/**
 * Setup modal close buttons
 * @param {NodeList} closeButtons - Modal close buttons
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {NodeList} modals - All modal elements
 */
function setupModalClosing(closeButtons, overlay, modals) {
    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(overlay, modals);
        });
    });
}

/**
 * Setup overlay click to close
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {NodeList} modals - All modal elements
 */
function setupOverlayClosing(overlay, modals) {
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal(overlay, modals);
        }
    });
}

/**
 * Setup escape key to close modal
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {NodeList} modals - All modal elements
 */
function setupEscapeKeyClosing(overlay, modals) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal(overlay, modals);
        }
    });
}

/**
 * Open modal
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {HTMLElement} targetModal - Target modal to open
 * @param {NodeList} modals - All modal elements
 */
function openModal(overlay, targetModal, modals) {
    // Close any open modals first
    modals.forEach(modal => {
        modal.classList.remove('active');
        modal.style.display = 'none';
    });
    
    // Show overlay
    overlay.classList.add('active');
    
    // Show target modal with animation
    setTimeout(() => {
        targetModal.style.display = 'block';
        targetModal.classList.add('active');
    }, 50);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus on modal for accessibility
    targetModal.focus();
    
    // Trigger custom event
    const event = new CustomEvent('modalOpened', {
        detail: { modalId: targetModal.id }
    });
    document.dispatchEvent(event);
}

/**
 * Close modal
 * @param {HTMLElement} overlay - Modal overlay element
 * @param {NodeList} modals - All modal elements
 */
function closeModal(overlay, modals) {
    // Hide all modals
    modals.forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    // Hide overlay
    overlay.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Trigger custom event
    const event = new CustomEvent('modalClosed');
    document.dispatchEvent(event);
}

/**
 * Close all modals (utility function)
 */
export function closeAllModals() {
    const overlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.championship-modal');
    
    if (overlay && modals.length) {
        closeModal(overlay, modals);
    }
}

/**
 * Check if any modal is open
 * @returns {boolean} Whether a modal is open
 */
export function isModalOpen() {
    const overlay = document.querySelector('.modal-overlay');
    return overlay && overlay.classList.contains('active');
}

/**
 * Add modal animations on initialization
 */
function addModalAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay.active .championship-modal.active {
            animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .championship-modal {
            animation: modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes modalSlideOut {
            from {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            to {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations when module loads
addModalAnimations();
