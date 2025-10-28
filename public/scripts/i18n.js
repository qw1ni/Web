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
        'nav.profile': 'Profile',
        'nav.cart': 'Cart',
        'nav.orders': 'Orders',
        'nav.wishlist': 'Wishlist',
        'nav.logout': 'Logout',
        'nav.menu': 'Menu',
        'nav.closeMenu': 'Close menu',
        
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
        
        // Footer offers
        'offers.freeDelivery.title': 'Free Delivery',
        'offers.freeDelivery.subtitle': 'From $29.99',
        'offers.withdrawal.title': 'Free Withdrawal 1h',
        'offers.withdrawal.subtitle': 'In Store',
        'offers.secure.title': '100% Secure Payment',
        'offers.secure.subtitle': 'At Your Service',
        'offers.returns.title': 'Returns & Exchanges',
        'offers.returns.subtitle': 'Offered 365 Days',
        
        // Footer form
        'footer.form.title': 'Let\'s Stay In Touch',
        'footer.form.placeholder': 'Enter Email...',
        'buttons.subscribe': 'Subscribe',
        
        // Footer navigation
        'footer.shop': 'SHOP',
        'footer.mens': 'Mens',
        'footer.womens': 'Womens',
        'footer.newArrival': 'New Arrival',
        'footer.contact': 'CONTACT US',
        'footer.findStore': 'Find a Store',
        'footer.contactUs': 'Contact Us',
        'footer.terms': 'Terms & Conditions',
        'footer.services': 'OUR SERVICES',
        'footer.customize': 'Customize your products',
        'footer.giftCard': 'Gift Card',
        'footer.maintainRepair': 'Maintain & Repair',
        'footer.enterprise': 'OUR ENTERPRISE',
        'footer.who': 'Who are we?',
        'footer.press': 'Press and news',
        'footer.alliances': 'Our alliances',
        'footer.help': 'NEED HELP ?',
        'footer.myAccount': 'My Account',
        'footer.shipping': 'Shipping',
        'footer.returns': 'Return & Exchanges',
        'footer.faqs': 'FAQs',
        'footer.rewards': 'Rewards',
        'footer.loyalty': 'Loyalty program',
        'footer.howToChoose': 'How to choose your product?',
        'footer.trends': 'Sports Trends',
        'footer.rights': '2022 Nike, Inc. All Rights Reserved <span class="special--symbol"><img src="./images/Copyright.svg" alt="Copyright" loading="lazy"></span>'
    },
    
    ru: {
        // Header navigation
        'nav.catalog': 'Каталог',
        'nav.new-arrival': 'Новинки',
        'nav.men': 'Мужчинам',
        'nav.women': 'Женщинам',
        'nav.kids': 'Детям',
        'nav.profile': 'Профиль',
        'nav.cart': 'Корзина',
        'nav.orders': 'Заказы',
        'nav.wishlist': 'Избранное',
        'nav.logout': 'Выйти',
        'nav.menu': 'Меню',
        'nav.closeMenu': 'Закрыть меню',
        
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
        'explore.title': 'МЫ ПРЕДОСТАВЛЯЕМ СОВРЕМЕННУЮ<br> ОБУВЬ',
        'explore.text': 'Дизайн для вашего образа жизни. Atoms прекрасны в их<br> простоте, поддерживая ваши ноги с абсолютным комфортом.',
        'explore.button': 'Узнать больше',
        
        // Gallery section
        'gallery.title': 'ЛУЧШАЯ ОБУВЬ ДЛЯ<br> ЛУЧШИХ ЛЮДЕЙ',
        'gallery.text': 'Дизайн для вашего образа жизни. Atoms прекрасны в<br> их простоте, поддерживая ваши ноги с абсолютным комфортом.',
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
        
        // Footer offers
        'offers.freeDelivery.title': 'Бесплатная доставка',
        'offers.freeDelivery.subtitle': 'От $29.99',
        'offers.withdrawal.title': 'Бесплатный самовывоз за 1ч',
        'offers.withdrawal.subtitle': 'В магазине',
        'offers.secure.title': '100% Безопасная оплата',
        'offers.secure.subtitle': 'К вашим услугам',
        'offers.returns.title': 'Возврат и обмен',
        'offers.returns.subtitle': 'В течение 365 дней',
        
        // Footer form
        'footer.form.title': 'Давайте оставаться на связи',
        'footer.form.placeholder': 'Введите email...',
        'buttons.subscribe': 'Подписаться',
        
        // Footer navigation
        'footer.shop': 'МАГАЗИН',
        'footer.mens': 'Мужское',
        'footer.womens': 'Женское',
        'footer.newArrival': 'Новинки',
        'footer.contact': 'СВЯЖИТЕСЬ С НАМИ',
        'footer.findStore': 'Найти магазин',
        'footer.contactUs': 'Связаться с нами',
        'footer.terms': 'Условия использования',
        'footer.services': 'НАШИ УСЛУГИ',
        'footer.customize': 'Настройте свои продукты',
        'footer.giftCard': 'Подарочная карта',
        'footer.maintainRepair': 'Обслуживание и ремонт',
        'footer.enterprise': 'НАШЕ ПРЕДПРИЯТИЕ',
        'footer.who': 'Кто мы?',
        'footer.press': 'Пресса и новости',
        'footer.alliances': 'Наши союзники',
        'footer.help': 'НУЖНА ПОМОЩЬ ?',
        'footer.myAccount': 'Мой аккаунт',
        'footer.shipping': 'Доставка',
        'footer.returns': 'Возврат и обмен',
        'footer.faqs': 'Частые вопросы',
        'footer.rewards': 'Награды',
        'footer.loyalty': 'Программа лояльности',
        'footer.howToChoose': 'Как выбрать свой продукт?',
        'footer.trends': 'Спортивные тренды',
        'footer.rights': '2022 Nike, Inc. Все права защищены <span class="special--symbol"><img src="./images/Copyright.svg" alt="Copyright" loading="lazy"></span>'
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
    i18nManager = new I18nManager();
    console.log('✅ i18n initialized');
}

// Wait for partials to load before initializing i18n
document.addEventListener('partialsLoaded', () => {
    console.log('📦 Partials loaded, initializing i18n...');
    // Small delay to ensure DOM is fully updated
    setTimeout(initI18n, 50);
});

// Fallback: if partials event doesn't fire, initialize after DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initI18n, 200);
    });
} else {
    setTimeout(initI18n, 200);
}

// Export for global use
window.I18n = {
    manager: i18nManager,
    translate: (key) => i18nManager ? i18nManager.translate(key) : key,
    getCurrentLanguage: () => i18nManager ? i18nManager.getCurrentLanguage() : 'en'
};

console.log('✅ i18n system loaded');

