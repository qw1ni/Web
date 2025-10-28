/**
 * i18n - Internationalization System
 * Simple and lightweight localization for the website
 */

// Translation dictionaries
const translations = {
    en: {
        // Header navigation
        'nav.catalog': 'Catalog',
        'nav.new-arrival': 'New Arrival',
        'nav.men': 'Men',
        'nav.women': 'Women',
        'nav.kids': 'Kids',
        
        // Hero section
        'hero.title.essence': 'THE ESSENCE',
        'hero.title.handcrafted': 'HANDCRAFTED',
        'hero.title.footwear': 'OF FOOTWEAR.',
        'hero.text': 'In terms of footwear, we are the first in Canada to have opened not simple "shops" but real company outlets that offer the same service as the artisan shops of yesteryear: this to make you go without fail every time you want to buy a pair of handmade genuine leather shoes. Without fear of making mistakes and with the certainty that you will be able to wear them comfortably from the beginning. Are you also curious to find out why hundreds of people choose us every day?',
        'hero.button.more': 'Find Out More',
        'hero.button.catalog': 'Go to Catalog',
        
        // Best Sellers section
        'sellers.title': 'Best Sellers',
        
        // Catalog section
        'catalog.quick-view': 'Quick View',
        'catalog.button': 'Lets Discover More',
        
        // Explore section
        'explore.title': 'WE PROVIDE MODERN SHOES',
        'explore.text': 'Design for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with absolute comfort.',
        'explore.button': 'Explore More',
        
        // Gallery section
        'gallery.title': 'BEST SHOES FOR THE BEST PEOPLE',
        'gallery.text': 'Design for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with absolute comfort.',
        'gallery.button': 'Explore More',
        
        // Visionaries section
        'visionaries.title': 'WE ARE',
        'visionaries.title.accent': 'VISIONARIES',
        'visionaries.text.main': 'Exploring The Boundaries Of Footwear With Expert Design Knowledge And Manufacture In Mind.',
        'visionaries.text.creative': 'INSIGHTFUL CREATIVE DIRECTION :',
        'visionaries.text.creative.desc': 'Uniting Consumer Insights with progressive manufacturing methods, we create comprehensive plans to outpace your competition.',
        'visionaries.text.design': 'PURPOSEFUL DESIGN :',
        'visionaries.text.design.desc': 'We create products that captivate consumers and elevate brands. applying a refined sense of beauty and style, our designs are alluring.',
        'visionaries.text.innovation': 'RELENTLESS INNOVATION :',
        'visionaries.text.innovation.desc': 'We live to challenge the boundaries of convention and take advantage of every breakthrough opportunity big or small. we\'ll help you define the cutting-edge of your business.',
        'visionaries.button': 'Customization Available',
        
        // Stores Map section
        'stores.title': 'Our Stores',
        'stores.subtitle': 'Visit one of our stores in Moscow',
        
        // Join Us section
        'joinus.title': 'JOIN OUR NIKECLUB & GET 15% OFF',
        'joinus.text': 'Sign up for free. Join the community, Never pay for shipping.',
        'joinus.button': 'Join Us',
        
        // Footer
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    
    ru: {
        // Header navigation
        'nav.catalog': 'Каталог',
        'nav.new-arrival': 'Новинки',
        'nav.men': 'Мужчинам',
        'nav.women': 'Женщинам',
        'nav.kids': 'Детям',
        
        // Hero section
        'hero.title.essence': 'СУТЬ',
        'hero.title.handcrafted': 'РУЧНОЙ РАБОТЫ',
        'hero.title.footwear': 'ОБУВИ.',
        'hero.text': 'Что касается обуви, мы первые в Канаде открыли не просто "магазины", а настоящие фирменные торговые точки, которые предлагают тот же сервис, что и ремесленные мастерские прошлого: это для того, чтобы вы без проблем каждый раз, когда хотите купить пару кожаной обуви ручной работы. Без страха совершить ошибку и с уверенностью, что сможете носить их с комфортом с самого начала. Вам также интересно узнать, почему сотни людей выбирают нас каждый день?',
        'hero.button.more': 'Узнать больше',
        'hero.button.catalog': 'Перейти в каталог',
        
        // Best Sellers section
        'sellers.title': 'Лидеры продаж',
        
        // Catalog section
        'catalog.quick-view': 'Быстрый просмотр',
        'catalog.button': 'Откройте больше',
        
        // Explore section
        'explore.title': 'МЫ ПРЕДОСТАВЛЯЕМ СОВРЕМЕННУЮ ОБУВЬ',
        'explore.text': 'Дизайн для вашего образа жизни. Atoms прекрасны в своей простоте, поддерживая ваши ноги с абсолютным комфортом.',
        'explore.button': 'Узнать больше',
        
        // Gallery section
        'gallery.title': 'ЛУЧШАЯ ОБУВЬ ДЛЯ ЛУЧШИХ ЛЮДЕЙ',
        'gallery.text': 'Дизайн для вашего образа жизни. Atoms прекрасны в своей простоте, поддерживая ваши ноги с абсолютным комфортом.',
        'gallery.button': 'Узнать больше',
        
        // Visionaries section
        'visionaries.title': 'МЫ',
        'visionaries.title.accent': 'ВИЗИОНЕРЫ',
        'visionaries.text.main': 'Исследуем границы обувной индустрии с экспертными знаниями дизайна и производства.',
        'visionaries.text.creative': 'ПРОНИЦАТЕЛЬНОЕ ТВОРЧЕСКОЕ НАПРАВЛЕНИЕ :',
        'visionaries.text.creative.desc': 'Объединяя потребительские инсайты с прогрессивными методами производства, мы создаем комплексные планы, чтобы опережать ваших конкурентов.',
        'visionaries.text.design': 'ЦЕЛЕНАПРАВЛЕННЫЙ ДИЗАЙН :',
        'visionaries.text.design.desc': 'Мы создаем продукты, которые очаровывают потребителей и возвышают бренды. Применяя утонченное чувство красоты и стиля, наши дизайны привлекательны.',
        'visionaries.text.innovation': 'НЕУСТАННЫЕ ИННОВАЦИИ :',
        'visionaries.text.innovation.desc': 'Мы живем, чтобы бросать вызов границам условностей и использовать каждую прорывную возможность, большую или малую. Мы поможем вам определить передовой край вашего бизнеса.',
        'visionaries.button': 'Доступна кастомизация',
        
        // Stores Map section
        'stores.title': 'Наши магазины',
        'stores.subtitle': 'Посетите один из наших магазинов в Москве',
        
        // Join Us section
        'joinus.title': 'ПРИСОЕДИНЯЙТЕСЬ К NIKECLUB И ПОЛУЧИТЕ СКИДКУ 15%',
        'joinus.text': 'Зарегистрируйтесь бесплатно. Присоединяйтесь к сообществу. Никогда не платите за доставку.',
        'joinus.button': 'Присоединиться',
        
        // Footer
        'footer.about': 'О нас',
        'footer.contact': 'Контакты',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.terms': 'Условия использования'
    }
};

// i18n Manager Class
class I18nManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage();
        this.init();
    }
    
    // Get stored language or default to 'en'
    getStoredLanguage() {
        return localStorage.getItem('language') || 'en';
    }
    
    // Store language preference
    setStoredLanguage(lang) {
        localStorage.setItem('language', lang);
    }
    
    // Initialize i18n system
    init() {
        console.log('🌐 Initializing i18n system, current language:', this.currentLanguage);
        this.updateLanguageButton();
        this.translatePage();
        this.setupLanguageToggle();
    }
    
    // Update language button text
    updateLanguageButton() {
        const langButton = document.getElementById('current-lang');
        if (langButton) {
            langButton.textContent = this.currentLanguage.toUpperCase();
        }
    }
    
    // Setup language toggle button
    setupLanguageToggle() {
        const toggleButton = document.getElementById('language-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    // Toggle between languages
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
        this.setStoredLanguage(this.currentLanguage);
        this.updateLanguageButton();
        this.translatePage();
        
        // Dispatch custom event for other scripts
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
        
        console.log('🌐 Language changed to:', this.currentLanguage);
    }
    
    // Translate entire page
    translatePage() {
        // Translate elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation) {
                // Check if element has data-i18n-html attribute (for HTML content)
                if (element.hasAttribute('data-i18n-html')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Translate placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.translate(key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Translate alt attributes
        const altElements = document.querySelectorAll('[data-i18n-alt]');
        altElements.forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = this.translate(key);
            
            if (translation) {
                element.alt = translation;
            }
        });
        
        // Translate title attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.translate(key);
            
            if (translation) {
                element.title = translation;
            }
        });
        
        console.log(`✅ Page translated to ${this.currentLanguage}`);
    }
    
    // Get translation for a key
    translate(key) {
        const langDict = translations[this.currentLanguage];
        return langDict && langDict[key] ? langDict[key] : key;
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize i18n when DOM is ready
let i18nManager;

function initI18n() {
    // Wait for partials to load (header, footer)
    setTimeout(() => {
        i18nManager = new I18nManager();
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export for global use
window.I18n = {
    manager: i18nManager,
    translate: (key) => i18nManager ? i18nManager.translate(key) : key,
    getCurrentLanguage: () => i18nManager ? i18nManager.getCurrentLanguage() : 'en'
};

console.log('✅ i18n system loaded');

