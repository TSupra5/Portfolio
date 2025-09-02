/*
 * Contact Form Component
 * Handles form validation and submission
 */

/**
 * Initialize contact form functionality
 */
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (!contactForm) return;
    
    setupFormValidation(contactForm);
    setupFormSubmission(contactForm);
}

/**
 * Setup form validation
 * @param {HTMLFormElement} form - Contact form element
 */
function setupFormValidation(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

/**
 * Validate individual form field
 * @param {Event} e - Blur event
 */
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(e);
    
    if (!value) {
        showFieldError(field, 'Ce champ est obligatoire');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Veuillez entrer une adresse email valide');
        return false;
    }
    
    return true;
}

/**
 * Clear field error styling
 * @param {Event} e - Input event
 */
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

/**
 * Show field error
 * @param {HTMLElement} field - Input field
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;
    
    field.parentNode.appendChild(errorMsg);
}

/**
 * Setup form submission handling
 * @param {HTMLFormElement} form - Contact form element
 */
function setupFormSubmission(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = getFormData(form);
        
        if (!validateForm(form)) {
            return;
        }
        
        submitForm(form, formData);
    });
}

/**
 * Get form data
 * @param {HTMLFormElement} form - Contact form element
 * @returns {Object} Form data object
 */
function getFormData(form) {
    const inputs = form.querySelectorAll('input, textarea');
    const data = {};
    
    inputs.forEach(input => {
        if (input.name || input.placeholder) {
            const key = input.name || input.placeholder.toLowerCase().replace(/[^a-z]/g, '');
            data[key] = input.value.trim();
        }
    });
    
    return data;
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - Contact form element
 * @returns {boolean} Validation result
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Ce champ est obligatoire');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value.trim())) {
            showFieldError(field, 'Veuillez entrer une adresse email valide');
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Submit form
 * @param {HTMLFormElement} form - Contact form element
 * @param {Object} formData - Form data object
 */
function submitForm(form, formData) {
    const submitBtn = form.querySelector('.cta-button');
    const originalText = submitBtn.textContent;
    
    // Update button state
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        showSuccessMessage();
        form.reset();
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }, 1500);
}

/**
 * Show success message
 */
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'Message envoyé avec succès ! Nous vous recontacterons rapidement.';
    
    const form = document.querySelector('.contact-form');
    form.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Validation result
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Add form styles
 */
function addFormStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error,
        .form-group textarea.error {
            border-color: #ff4757;
            box-shadow: 0 0 0 2px rgba(255, 71, 87, 0.2);
        }
        
        .error-message {
            display: block;
            color: #ff4757;
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
        
        .success-message {
            background: rgba(46, 204, 113, 0.1);
            border: 1px solid #2ecc71;
            color: #2ecc71;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

// Initialize styles when module loads
addFormStyles();
