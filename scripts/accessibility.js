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
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Открыть настройки доступности');
    button.style.cssText = `
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        width: 50px !important;
        height: 50px !important;
        background: #007bff !important;
        color: white !important;
        border: 2px solid white !important;
        border-radius: 50% !important;
        font-size: 24px !important;
        cursor: pointer !important;
        z-index: 999999 !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
        transition: all 0.3s ease !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
    `;
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#0056b3 !important';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#007bff !important';
    });
    
    button.addEventListener('click', toggleAccessibilityPanel);
    document.body.appendChild(button);
    
    console.log('✅ Accessibility button created and added to body');
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
        position: fixed !important;
        top: 80px !important;
        right: 20px !important;
        width: 320px !important;
        max-width: calc(100vw - 40px) !important;
        background: white !important;
        border: 2px solid #007bff !important;
        border-radius: 12px !important;
        padding: 24px !important;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4) !important;
        z-index: 999998 !important;
        display: none !important;
        font-family: Arial, sans-serif !important;
        color: #333 !important;
        box-sizing: border-box !important;
        max-height: calc(100vh - 100px) !important;
        overflow-y: auto !important;
    `;
    
    panel.innerHTML = `
        <h3 style="margin: 0 0 20px 0 !important; font-size: 18px !important; color: #007bff !important; font-weight: bold !important;">♿ Настройки доступности</h3>
        
        <div style="margin-bottom: 18px !important;">
            <label style="display: block !important; margin-bottom: 8px !important; font-weight: bold !important; color: #333 !important; font-size: 14px !important;">🌐 Язык / Language:</label>
            <select id="language-select" style="width: 100% !important; padding: 10px !important; border: 2px solid #007bff !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; cursor: pointer !important;">
                <option value="en">English (EN)</option>
                <option value="ru">Русский (RU)</option>
            </select>
        </div>
        
        <div style="margin-bottom: 18px !important;">
            <label style="display: block !important; margin-bottom: 8px !important; font-weight: bold !important; color: #333 !important; font-size: 14px !important;">📝 Размер шрифта:</label>
            <select id="font-size" style="width: 100% !important; padding: 10px !important; border: 2px solid #007bff !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; cursor: pointer !important;">
                <option value="small">A- (Маленький)</option>
                <option value="medium">A (Обычный)</option>
                <option value="large">A+ (Большой)</option>
                <option value="extra-large">A++ (Очень большой)</option>
            </select>
        </div>
        
        <div style="margin-bottom: 18px !important;">
            <label style="display: block !important; margin-bottom: 8px !important; font-weight: bold !important; color: #333 !important; font-size: 14px !important;">🎨 Цветовая схема:</label>
            <select id="color-scheme" style="width: 100% !important; padding: 10px !important; border: 2px solid #007bff !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; cursor: pointer !important;">
                <option value="default">По умолчанию</option>
                <option value="black-white">Черный/Белый</option>
                <option value="black-green">Черный/Зеленый</option>
                <option value="white-black">Белый/Черный</option>
                <option value="beige-brown">Бежевый/Коричневый</option>
                <option value="blue-darkblue">Синий/Темно-синий</option>
            </select>
        </div>
        
        <div style="margin-bottom: 15px !important; padding: 10px !important; background: #f8f9fa !important; border-radius: 6px !important;">
            <label style="display: flex !important; align-items: center !important; cursor: pointer !important; font-size: 14px !important; color: #333 !important;">
                <input type="checkbox" id="high-contrast" style="margin-right: 10px !important; width: 18px !important; height: 18px !important; cursor: pointer !important;">
                <span>🔆 Высокий контраст</span>
            </label>
        </div>
        
        <div style="margin-bottom: 15px !important; padding: 10px !important; background: #f8f9fa !important; border-radius: 6px !important;">
            <label style="display: flex !important; align-items: center !important; cursor: pointer !important; font-size: 14px !important; color: #333 !important;">
                <input type="checkbox" id="hide-images" style="margin-right: 10px !important; width: 18px !important; height: 18px !important; cursor: pointer !important;">
                <span>🖼️ Скрыть изображения</span>
            </label>
        </div>
        
        <div style="margin-bottom: 20px !important; padding: 10px !important; background: #f8f9fa !important; border-radius: 6px !important;">
            <label style="display: flex !important; align-items: center !important; cursor: pointer !important; font-size: 14px !important; color: #333 !important;">
                <input type="checkbox" id="disable-animations" style="margin-right: 10px !important; width: 18px !important; height: 18px !important; cursor: pointer !important;">
                <span>⏸️ Отключить анимации</span>
            </label>
        </div>
        
        <button onclick="resetAccessibilitySettings()" style="width: 100% !important; padding: 12px !important; background: #dc3545 !important; color: white !important; border: none !important; border-radius: 6px !important; cursor: pointer !important; font-size: 14px !important; font-weight: bold !important; transition: background 0.2s !important;" onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">
            🔄 Сбросить настройки
        </button>
    `;
    
    document.body.appendChild(panel);
    
    // Setup event listeners
    setupAccessibilityEventListeners(panel);
    
    console.log('✅ Accessibility panel created and added to body');
}

// Setup accessibility event listeners
function setupAccessibilityEventListeners(panel) {
    // Language selector
    const languageSelect = panel.querySelector('#language-select');
    console.log('Language select element:', languageSelect);
    console.log('window.I18n:', window.I18n);
    
    if (languageSelect) {
        // Set current language
        const currentLang = localStorage.getItem('language') || 'en';
        languageSelect.value = currentLang;
        console.log('Set language select to:', currentLang);
        
        languageSelect.addEventListener('change', function() {
            const newLang = this.value;
            console.log('Language select changed to:', newLang);
            
            // Store language
            localStorage.setItem('language', newLang);
            
            // Update i18n if available
            if (window.I18n && window.I18n.manager) {
                window.I18n.manager.currentLanguage = newLang;
                window.I18n.manager.setStoredLanguage(newLang);
                window.I18n.manager.translatePage();
            } else {
                console.warn('I18n manager not available, will translate on next page load');
                // If i18n not ready yet, reload page to apply language
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
            
            // Dispatch custom event for other scripts
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: newLang }
            }));
            
            const langName = newLang === 'en' ? 'English' : 'Русский';
            showNotification(`Язык изменен / Language changed: ${langName}`, 'success');
            console.log('🌐 Language changed to:', newLang);
        });
    } else {
        console.error('Language select element not found!');
    }
    
    // Font size
    const fontSizeSelect = panel.querySelector('#font-size');
    fontSizeSelect.value = accessibilitySettings.fontSize; // Restore saved value
    fontSizeSelect.addEventListener('change', function() {
        accessibilitySettings.fontSize = this.value;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
        showNotification('Размер шрифта изменен', 'success');
    });
    
    // Color scheme
    const colorSchemeSelect = panel.querySelector('#color-scheme');
    colorSchemeSelect.value = accessibilitySettings.colorScheme; // Restore saved value
    colorSchemeSelect.addEventListener('change', function() {
        accessibilitySettings.colorScheme = this.value;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
        showNotification('Цветовая схема изменена', 'success');
    });
    
    // High contrast
    const highContrastCheckbox = panel.querySelector('#high-contrast');
    highContrastCheckbox.checked = accessibilitySettings.highContrast; // Restore saved value
    highContrastCheckbox.addEventListener('change', function() {
        accessibilitySettings.highContrast = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
        showNotification(this.checked ? 'Высокий контраст включен' : 'Высокий контраст выключен', 'success');
    });
    
    // Hide images
    const hideImagesCheckbox = panel.querySelector('#hide-images');
    hideImagesCheckbox.checked = accessibilitySettings.hideImages; // Restore saved value
    hideImagesCheckbox.addEventListener('change', function() {
        accessibilitySettings.hideImages = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
        showNotification(this.checked ? 'Изображения скрыты' : 'Изображения показаны', 'success');
    });
    
    // Disable animations
    const disableAnimationsCheckbox = panel.querySelector('#disable-animations');
    disableAnimationsCheckbox.checked = accessibilitySettings.disableAnimations; // Restore saved value
    disableAnimationsCheckbox.addEventListener('change', function() {
        accessibilitySettings.disableAnimations = this.checked;
        applyAccessibilitySettings();
        saveAccessibilitySettings();
        showNotification(this.checked ? 'Анимации отключены' : 'Анимации включены', 'success');
    });
}

// Toggle accessibility panel
function toggleAccessibilityPanel() {
    const panel = document.querySelector('.accessibility-panel');
    if (panel) {
        const isHidden = panel.style.display === 'none' || panel.style.display === '';
        panel.style.display = isHidden ? 'block !important' : 'none !important';
        panel.style.setProperty('display', isHidden ? 'block' : 'none', 'important');
        console.log(`Panel ${isHidden ? 'opened' : 'closed'}`);
    } else {
        console.error('Accessibility panel not found!');
    }
}

// Apply accessibility settings
function applyAccessibilitySettings() {
    const body = document.body;
    
    // Remove all accessibility classes (filter out empty strings)
    Object.values(fontSizes).forEach(cls => {
        if (cls) body.classList.remove(cls);
    });
    Object.values(colorSchemes).forEach(cls => {
        if (cls) body.classList.remove(cls);
    });
    body.classList.remove('high-contrast', 'hide-images', 'disable-animations');
    
    // Apply font size
    const fontSizeClass = fontSizes[accessibilitySettings.fontSize];
    if (fontSizeClass) {
        body.classList.add(fontSizeClass);
    }
    
    // Apply color scheme (skip if empty string)
    const colorSchemeClass = colorSchemes[accessibilitySettings.colorScheme];
    if (colorSchemeClass) {
        body.classList.add(colorSchemeClass);
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
    
    console.log('✅ Applied accessibility settings:', accessibilitySettings);
    console.log('Body classes:', body.className);
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
        const languageSelect = panel.querySelector('#language-select');
        if (languageSelect) {
            languageSelect.value = 'en';
            if (window.I18n && window.I18n.manager) {
                window.I18n.manager.currentLanguage = 'en';
                window.I18n.manager.setStoredLanguage('en');
                window.I18n.manager.translatePage();
            }
        }
        
        panel.querySelector('#font-size').value = 'medium';
        panel.querySelector('#color-scheme').value = 'default';
        panel.querySelector('#high-contrast').checked = false;
        panel.querySelector('#hide-images').checked = false;
        panel.querySelector('#disable-animations').checked = false;
    }
    
    applyAccessibilitySettings();
    saveAccessibilitySettings();
    
    showNotification('Настройки сброшены / Settings reset', 'success');
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
console.log('🚀 Accessibility script loaded, document.readyState:', document.readyState);

if (document.readyState === 'loading') {
    console.log('⏳ Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✅ DOMContentLoaded fired, initializing accessibility...');
        initAccessibility();
    });
} else {
    console.log('✅ DOM already loaded, initializing accessibility immediately...');
    initAccessibility();
}

// Make functions globally available
window.resetAccessibilitySettings = resetAccessibilitySettings;
window.toggleAccessibilityPanel = toggleAccessibilityPanel;

console.log('✅ Accessibility functions exposed to window');