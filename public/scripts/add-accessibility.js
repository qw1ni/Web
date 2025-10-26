/**
 * Script to add accessibility features to all pages
 * This script should be included on every page
 */

(function() {
    'use strict';
    
    // Add accessibility script to all pages if not already present
    function addAccessibilityScript() {
        if (!document.querySelector('script[src*="accessibility.js"]')) {
            const script = document.createElement('script');
            script.src = './scripts/accessibility.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }
    
    // Add ARIA attributes to common elements
    function addARIAttributes() {
        // Add role to main content
        const main = document.querySelector('main') || document.querySelector('.content');
        if (main && !main.id) {
            main.id = 'main-content';
            main.setAttribute('role', 'main');
        }
        
        // Add ARIA labels to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (!section.getAttribute('aria-label') && !section.getAttribute('aria-labelledby')) {
                const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
                if (heading) {
                    section.setAttribute('aria-labelledby', heading.id || `heading-${index}`);
                    if (!heading.id) {
                        heading.id = `heading-${index}`;
                    }
                } else {
                    section.setAttribute('aria-label', `Секция ${index + 1}`);
                }
            }
        });
        
        // Add alt text to images without it
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            img.setAttribute('alt', 'Изображение');
        });
        
        // Add ARIA labels to buttons
        const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
        buttons.forEach(button => {
            if (!button.textContent.trim()) {
                button.setAttribute('aria-label', 'Кнопка');
            }
        });
        
        // Add ARIA labels to links
        const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
        links.forEach(link => {
            if (!link.textContent.trim() && !link.querySelector('img')) {
                link.setAttribute('aria-label', 'Ссылка');
            }
        });
        
        // Add form labels
        const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
        inputs.forEach(input => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (!label && !input.getAttribute('placeholder')) {
                input.setAttribute('aria-label', 'Поле ввода');
            }
        });
    }
    
    // Add keyboard navigation support
    function addKeyboardNavigation() {
        // Skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Перейти к основному содержимому';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Focus management
        document.addEventListener('keydown', function(e) {
            // Tab navigation enhancement
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        // Remove keyboard navigation class on mouse use
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Add semantic HTML improvements
    function improveSemantics() {
        // Convert divs to proper semantic elements where appropriate
        const productCards = document.querySelectorAll('.catalog__item, .product-card');
        productCards.forEach(card => {
            if (!card.getAttribute('role')) {
                card.setAttribute('role', 'article');
            }
        });
        
        // Add landmark roles
        const header = document.querySelector('header');
        if (header) {
            header.setAttribute('role', 'banner');
        }
        
        const footer = document.querySelector('footer');
        if (footer) {
            footer.setAttribute('role', 'contentinfo');
        }
        
        const nav = document.querySelector('nav');
        if (nav) {
            nav.setAttribute('role', 'navigation');
        }
    }
    
    // Initialize accessibility features
    function init() {
        addAccessibilityScript();
        addARIAttributes();
        addKeyboardNavigation();
        improveSemantics();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
