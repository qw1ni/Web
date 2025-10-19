// scripts/partials.js

(function() {
    'use strict';

    // Функция для загрузки частичных файлов
    async function loadPartials() {
        const partialElements = document.querySelectorAll('[data-include]');
        
        for (const element of partialElements) {
            const partialName = element.getAttribute('data-include');
            
            // Сразу используем fallback для быстрой загрузки
            loadFallback(element, partialName);
        }
    }

    // Fallback для частичных файлов
    function loadFallback(element, partialName) {
        const fallbacks = {
            header: `
                <header class="header">
                    <div class="header__container container">

                        <nav class="header__menu-text">
                            <button class="header__burger-button">
                                <span class="visually-hidden" type="button">Open Menu</span>
                                <span class="burger-button-line"></span>
                                <span class="burger-button-line"></span>
                                <span class="burger-button-line"></span>
                            </button>
                            <ul class="header__menu-text-list">
                                <li class="header__menu-item">
                                    <a href="./catalog.html" class="header__menu-link">Catalog</a>
                                </li>
                                <li class="header__menu-item">
                                    <a href="./new-arrivals.html" class="header__menu-link">New
                                        Arrival</a>
                                </li>
                                <li class="header__menu-item">
                                    <a href="./men.html" class="header__menu-link">Men</a>
                                </li>
                                <li class="header__menu-item">
                                    <a href="./women.html" class="header__menu-link">Women</a>
                                </li>
                                <li class="header__menu-item">
                                    <a href="./kids.html" class="header__menu-link">Kids</a>
                                </li>
                            </ul>
                        </nav>

                        <a href="./index.html" class="header__logo">
                            <img src="./images/Logo.svg" alt="Nike" loading="lazy" width="80" height="31">
                        </a>

                        <nav class="header__menu-icons">
                            <ul class="header__menu-icons-list">
                                <li class="header__menu-icons-item">
                                    <a href="./search.html" class="header__menu-icons-link">
                                        <img src="./images/Search.svg" alt="Search" loading="lazy">
                                    </a>
                                </li>
                                <li class="header__menu-icons-item">
                                    <div class="auth-buttons">
                                        <a href="./login.html" class="header__menu-icons-link login-button" id="login-btn">
                                            <img src="./images/Account.svg" alt="Account" loading="lazy">
                                        </a>
                                        <div class="user-menu logout-button" id="user-menu" style="display: none;">
                                            <div class="user-info">
                                                <span id="user-name">User</span>
                                                <div class="user-dropdown">
                                                    <a href="./profile.html">Profile</a>
                                                    <a href="./cart.html">Cart</a>
                                                    <a href="./orders.html">Orders</a>
                                                    <a href="./wishlist.html">Wishlist</a>
                                                    <button onclick="logout()">Logout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="header__menu-icons-item">
                                    <a href="./cart.html" class="header__menu-icons-link cart-link">
                                        <img src="./images/Shop.svg" alt="Shop" loading="lazy">
                                        <span class="cart-count" style="display: none;">0</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="header__backdrop" aria-hidden="true"></div>
                        <aside class="header__mobile" aria-hidden="true" aria-labelledby="mobileMenuTitle">
                            <div class="header__mobile-inner">
                                <div class="header__mobile-header">
                                    <span id="mobileMenuTitle" class="header__mobile-title">Menu</span>
                                    <button class="header__mobile-close" type="button" aria-label="Close menu">
                                        <span class="burger-button-line"></span>
                                        <span class="burger-button-line"></span>
                                    </button>
                                </div>
                                <nav class="header__mobile-nav"></nav>
                            </div>
                        </aside>    </div>
                </header>
            `,
            footer: `
                <footer class="footer">
                    <div class="footer__container container">
                        <div class="footer__offers">
                            <ul class="footer__offers-list">
                                <li class="footer__offers-item">
                                    <img src="./images/Truck.svg" alt="Delivery" loading="lazy">
                                    <div class="item__text">
                                        <p class="item__text-upper">Free Delivery</p>
                                        <p class="item__text-lower">From $29.99</p>
                                    </div>
                                </li>
                                <li class="footer__offers-item">
                                    <img src="./images/Stopwatch.svg" alt="Stopwatch" loading="lazy">
                                    <div class="item__text">
                                        <p class="item__text-upper">Free Withdrawal 1h</p>
                                        <p class="item__text-lower">In Store</p>
                                    </div>
                                </li>
                                <li class="footer__offers-item">
                                    <img src="./images/Security.svg" alt="Shield" loading="lazy">
                                    <div class="item__text">
                                        <p class="item__text-upper">100% Secure Payment</p>
                                        <p class="item__text-lower">At Your Service</p>
                                    </div>
                                </li>
                                <li class="footer__offers-item">
                                    <img src="./images/Corp.svg" alt="Corp" loading="lazy">
                                    <div class="item__text">
                                        <p class="item__text-upper">Returns & Exchanges</p>
                                        <p class="item__text-lower">Offered 365 Days</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="footer__main">
                            <div class="footer__main-form">
                                <div class="main-form__title">
                                    <p>Let's Stay In Touch</p>
                                </div>
                                <form class="main-form__form">
                                    <input class="form__input" type="email" placeholder="Enter Email..." title="Subscribe" />
                                    <button class="form__button" type="submit">Subscribe</button>
                                </form>
                                <div class="main__image">
                                    <img src="./images/LogoAlternate.svg" alt="Nike Logo" loading="lazy">
                                </div>
                            </div>

                            <div class="footer__main-links">
                                <div class="footer__list-once">
                                    <div class="footer__list-container">
                                        <p class="footer__list-once-title">SHOP</p>
                                        <ul class="main__list">
                                            <li>
                                                <a href="./men.html" class="main__list-item">Mens</a>
                                            </li>
                                            <li>
                                                <a href="./women.html" class="main__list-item">Womens</a>
                                            </li>
                                            <li>
                                                <a href="./new-arrivals.html" class="main__list-item">New Arrival</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="footer__list-container">
                                        <p class="footer__list-once-title">CONTACT US</p>
                                        <ul class="main__list">
                                            <li>
                                                <a href="./stores.html" class="main__list-item">Find a Store</a>
                                            </li>
                                            <li>
                                                <a href="./contact.html" class="main__list-item">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="./terms.html" class="main__list-item">Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="footer__list-once">
                                    <div class="footer__list-container">
                                        <p class="footer__list-once-title">OUR SERVICES</p>
                                        <ul class="main__list">
                                            <li>
                                                <a href="./customize.html" class="main__list-item">Customize your products</a>
                                            </li>
                                            <li>
                                                <a href="./gift-card.html" class="main__list-item">Gift Card</a>
                                            </li>
                                            <li>
                                                <a href="./repair.html" class="main__list-item">Maintain & Repair</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="footer__list-container">
                                        <p class="footer__list-once-title">OUR ENTERPRISE</p>
                                        <ul class="main__list">
                                            <li>
                                                <a href="./about.html" class="main__list-item">Who are we?</a>
                                            </li>
                                            <li>
                                                <a href="./press.html" class="main__list-item">Press and news</a>
                                            </li>
                                            <li>
                                                <a href="./alliances.html" class="main__list-item">Our alliances</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="footer__list-solo">
                                    <div class="footer__list-container">
                                        <p class="footer__list-once-title">NEED HELP ?</p>
                                        <ul class="main__list">
                                            <li>
                                                <a href="./account.html" class="main__list-item">My Account</a>
                                            </li>
                                            <li>
                                                <a href="./shipping.html" class="main__list-item">Shipping</a>
                                            </li>
                                            <li>
                                                <a href="./returns.html" class="main__list-item">Return & Exchanges</a>
                                            </li>
                                            <li>
                                                <a href="./faqs.html" class="main__list-item">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="./rewards.html" class="main__list-item">Rewards</a>
                                            </li>
                                            <li>
                                                <a href="./loyalty.html" class="main__list-item">Loyalty program</a>
                                            </li>
                                            <li>
                                                <a href="./guides.html" class="main__list-item">How to choose your product?</a>
                                            </li>
                                            <li>
                                                <a href="./trends.html" class="main__list-item">Sports Trends</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer__copyright">
                            <div class="footer__copyright-text">
                                2022 Nike, Inc. All Rights Reserved <span class="special--symbol"><img src="./images/Copyright.svg" alt="Copyright" loading="lazy"></span>
                            </div>
                            <div class="footer__copyright-soc1als">
                                <ul class="soc1als-list">
                                    <li>
                                        <a href="/">
                                            <img src="./images/Youtube.svg" alt="Youtube" loading="lazy">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <img src="./images/Facebook.svg" alt="Facebook" loading="lazy">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <img src="./images/Twitter.svg" alt="Twitter" loading="lazy">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <img src="./images/Instagram.svg" alt="Instagram" loading="lazy">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            `
        };

        if (fallbacks[partialName]) {
            element.outerHTML = fallbacks[partialName];
        } else {
            console.warn(`Fallback не найден для: ${partialName}`);
        }
    }

    // Инициализация при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPartials);
    } else {
        // DOM уже загружен, выполняем немедленно
        loadPartials();
    }

    // Экспортируем функцию для ручного вызова
    window.loadPartials = loadPartials;
})();
