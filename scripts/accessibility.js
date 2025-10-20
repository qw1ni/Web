/**
 * Simple Accessibility Manager
 * Clean implementation for accessibility features
 */

// Accessibility settings
let accessibilitySettings = {
    fontSize: 'medium',
    colorScheme: 'default',
    highContrast: false,
    hideImages: false,
    disableAnimations: false
};

// Font sizes
const fontSizes = {
    'small': 'font-size-small',
    'medium': 'font-size-medium',
    'large': 'font-size-large',
    'extra-large': 'font-size-extra-large'
};

// Color schemes
const colorSchemes = {
    'default': '',
    'black-white': 'color-scheme-black-white',
    'black-green': 'color-scheme-black-green',
    'white-black': 'color-scheme-white-black',
    'beige-brown': 'color-scheme-beige-brown',
    'blue-darkblue': 'color-scheme-blue-darkblue'
};

// Initialize accessibility system
function initAccessibility() {
    console.log('Initializing accessibility system...');
    
    // Load settings
    loadAccessibilitySettings();
    
    // Create toggle button
    createAccessibilityButton();
    
    // Create control panel
    createAccessibilityPanel();
    
    // Apply settings
    applyAccessibilitySettings();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    console.log('Accessibility system initialized');
}

// Load accessibility settings
function loadAccessibilitySettings() {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
        try {
            accessibilitySettings = { ...accessibilitySettings, ...JSON.parse(saved) };
        } catch (error) {
            console.error('Error loading accessibility settings:', error);
        }
    }
    console.log('Loaded accessibility settings:', accessibilitySettings);
}

// Save accessibility settings
function saveAccessibilitySettings() {
    localStorage.setItem('accessibility-settings', JSON.stringify(accessibilitySettings));
    console.log('Saved accessibility settings:', accessibilitySettings);
}

// Create accessibility toggle button
function createAccessibilityButton() {
    // Remove existing button if any
    const existingButton = document.querySelector('.accessibility-toggle');
    if (existingButton) {
        existingButton.remove();
    }
    
    const button = document.createElement('button');
    button.className = 'accessibility-toggle';
    button.innerHTML = '♿';
    button.title = 'Настройки доступности';
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', toggleAccessibilityPanel);
    document.body.appendChild(button);
    
    console.log('Accessibility button created');
}

// Create accessibility control panel
function createAccessibilityPanel() {
    // Remove existing panel if any
    const existingPanel = document.querySelector('.accessibility-panel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    const panel = document.createElement('div');
    panel.className = 'accessibility-panel';
    panel.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        width: 300px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9998;
        display: none;
        font-family: Arial, sans-serif;
        color: #333;
    `;
    
    panel.innerHTML = `
        <h3 style="margin: 0 0 15px 0; font-size: 16px;">Настройки доступности</h3>
        
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Размер шрифта:</label>
            <select id="font-size" style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 4px;">
                <option value="small">A- (Маленький)</option>
                <option value="medium">A (Обычный)</option>
                <option value="large">A+ (Большой)</option>
                <option value="extra-large">A++ (Очень большой)</option>
            </select>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Цветовая схема:</label>
            <select id="color-scheme" style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 4px;">
                <option value="default">По умолчанию</option>
                <option value="black-white">Черный/Белый</option>
                <option value="black-green">Черный/Зеленый</option>
                <option value="white-black">Белый/Черный</option>
                <option value="beige-brown">Бежевый/Коричневый</option>
                <option value="blue-darkblue">Синий/Темно-синий</option>
            </select>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="high-contrast" style="margin-right: 8px;">
                Высокий контраст
            </label>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="hide-images" style="margin-right: 8px;">
                Скрыть изображения
            </label>
        </div>
        
        <div style="margin-bottom: 15px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="disable-animations" style="margin-right: 8px;">
                Отключить анимации
            </label>
        </div>
        
        <button onclick="resetAccessibilitySettings()" style="width: 100%; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Сбросить настройки
        </button>
    `;
    
    document.body.appendChild(panel);
    
    // Setup event listeners
    setupAccessibilityEventListeners(panel);
    
    console.log('Accessibility panel created');
}

// Setup accessibility event listeners
function setupAccessibilityEventListeners(panel) {
    // Font size
    const fontSizeSelect = panel.querySelector('#font-size');
    fontSizeSelect.addEventListener('change', function() {
        accessibilitySettings.fontSize = this.value;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
    });
    
    // Color scheme
    const colorSchemeSelect = panel.querySelector('#color-scheme');
    colorSchemeSelect.addEventListener('change', function() {
        accessibilitySettings.colorScheme = this.value;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
    });
    
    // High contrast
    const highContrastCheckbox = panel.querySelector('#high-contrast');
    highContrastCheckbox.addEventListener('change', function() {
        accessibilitySettings.highContrast = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
    });
    
    // Hide images
    const hideImagesCheckbox = panel.querySelector('#hide-images');
    hideImagesCheckbox.addEventListener('change', function() {
        accessibilitySettings.hideImages = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
    });
    
    // Disable animations
    const disableAnimationsCheckbox = panel.querySelector('#disable-animations');
    disableAnimationsCheckbox.addEventListener('change', function() {
        accessibilitySettings.disableAnimations = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
    });
}

// Toggle accessibility panel
function toggleAccessibilityPanel() {
    const panel = document.querySelector('.accessibility-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

// Apply accessibility settings
function applyAccessibilitySettings() {
    const body = document.body;
    
    // Remove all accessibility classes
    Object.values(fontSizes).forEach(cls => body.classList.remove(cls));
    Object.values(colorSchemes).forEach(cls => body.classList.remove(cls));
    body.classList.remove('high-contrast', 'hide-images', 'disable-animations');
    
    // Apply font size
    if (fontSizes[accessibilitySettings.fontSize]) {
        body.classList.add(fontSizes[accessibilitySettings.fontSize]);
    }
    
    // Apply color scheme
    if (colorSchemes[accessibilitySettings.colorScheme]) {
        body.classList.add(colorSchemes[accessibilitySettings.colorScheme]);
    }
    
    // Apply high contrast
    if (accessibilitySettings.highContrast) {
        body.classList.add('high-contrast');
    }
    
    // Apply hide images
    if (accessibilitySettings.hideImages) {
        body.classList.add('hide-images');
    }
    
    // Apply disable animations
    if (accessibilitySettings.disableAnimations) {
        body.classList.add('disable-animations');
    }
    
    console.log('Applied accessibility settings:', accessibilitySettings);
}

// Reset accessibility settings
function resetAccessibilitySettings() {
    accessibilitySettings = {
        fontSize: 'medium',
        colorScheme: 'default',
        highContrast: false,
        hideImages: false,
        disableAnimations: false
    };
    
    // Update panel values
    const panel = document.querySelector('.accessibility-panel');
    if (panel) {
        panel.querySelector('#font-size').value = 'medium';
        panel.querySelector('#color-scheme').value = 'default';
        panel.querySelector('#high-contrast').checked = false;
        panel.querySelector('#hide-images').checked = false;
        panel.querySelector('#disable-animations').checked = false;
    }
    
    applyAccessibilitySettings();
    saveAccessibilitySettings();
    
    showNotification('Настройки доступности сброшены', 'success');
    console.log('Accessibility settings reset');
}

// Setup keyboard navigation
function setupKeyboardNavigation() {
    // Close panel on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const panel = document.querySelector('.accessibility-panel');
            if (panel && panel.style.display !== 'none') {
                panel.style.display = 'none';
            }
        }
    });
    
    console.log('Keyboard navigation setup complete');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
    initAccessibility();
}

// Make functions globally available
window.resetAccessibilitySettings = resetAccessibilitySettings;