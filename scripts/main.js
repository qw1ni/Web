(function () {
    try { document.documentElement.classList.add('js'); } catch (e) { } var dict = {
        en: {
            nav: { newArrival: 'New Arrival', men: 'Men', women: 'Women', kids: 'Kids' },
            buttons: { findOutMore: 'Find Out More', discoverMore: 'Lets Discover More', exploreMore: 'Explore More', customization: 'Customization Available', joinUs: 'Join Us', subscribe: 'Subscribe' },
            offers: {
                freeDelivery: { title: 'Free Delivery', subtitle: 'From .99' },
                withdrawal: { title: 'Free Withdrawal 1h', subtitle: 'In Store' },
                secure: { title: '100% Secure Payment', subtitle: 'At Your Service' },
                returns: { title: 'Returns & Exchanges', subtitle: 'Offered 365 Days' }
            },
            footer: {
                form: { title: 'Let\'s Stay In Touch', placeholder: 'Enter Email...' },
                rights: '2022 Nike, Inc. All Rights Reserved <span class="special--symbol"><img src="./images/Copyright.svg" alt="Copyright" loading="lazy"></span>',
                shop: 'SHOP', mens: 'Mens', womens: 'Womens', newArrival: 'New Arrival',
                contact: 'CONTACT US', findStore: 'Find a Store', contactUs: 'Contact Us', terms: 'Terms & Conditions',
                services: 'OUR SERVICES', customize: 'Customize your products', giftCard: 'Gift Card', maintainRepair: 'Maintain & Repair',
                enterprise: 'OUR ENTERPRISE', who: 'Who are we?', press: 'Press and news', alliances: 'Our alliances',
                help: 'NEED HELP ?', myAccount: 'My Account', shipping: 'Shipping', returns: 'Return & Exchanges',
                faqs: 'FAQs', rewards: 'Rewards', loyalty: 'Loyalty program', howToChoose: 'How to choose your product?', trends: 'Sports Trends'
            }
        }
    }; var fallbackPartials = {
        header: [
            '<header class="header reveal">',
            '    <div class="header__container container">',
            '',
            '        <nav class="header__menu-text">',
            '            <button class="header__burger-button">',
            '                <span class="visually-hidden" type="button">Open Menu</span>',
            '                <span class="burger-button-line"></span>',
            '                <span class="burger-button-line"></span>',
            '                <span class="burger-button-line"></span>',
            '            </button>',
            '            <ul class="header__menu-text-list">',
            '                <li class="header__menu-item">',
            '                    <a href="./new-arrivals.html" class="header__menu-link">New',
            '                        Arrival</a>',
            '                </li>',
            '                <li class="header__menu-item">',
            '                    <a href="./men.html" class="header__menu-link">Men</a>',
            '                </li>',
            '                <li class="header__menu-item">',
            '                    <a href="./women.html" class="header__menu-link">Women</a>',
            '                </li>',
            '                <li class="header__menu-item">',
            '                    <a href="./kids.html" class="header__menu-link">Kids</a>',
            '                </li>',
            '            </ul>',
            '        </nav>',
            '',
            '        <a href="./index.html" class="header__logo">',
            '            <img src="./images/Logo.svg" alt="Nike" loading="lazy" width="80" height="31">',
            '        </a>',
            '',
            '        <nav class="header__menu-icons">',
            '            <ul class="header__menu-icons-list">',
            '                <li class="header__menu-icons-item">',
            '                    <a href="./search.html" class="header__menu-icons-link">',
            '                        <img src="./images/Search.svg" alt="Search" loading="lazy">',
            '                    </a>',
            '                </li>',
            '                <li class="header__menu-icons-item">',
            '                    <a href="./login.html" class="header__menu-icons-link">',
            '                        <img src="./images/Account.svg" alt="Account" loading="lazy">',
            '                    </a>',
            '                </li>',
            '                <li class="header__menu-icons-item">',
            '                    <a href="./cart.html" class="header__menu-icons-link">',
            '                        <img src="./images/Shop.svg" alt="Shop" loading="lazy">',
            '                    </a>',
            '                </li>',
            '            </ul>',
            '        </nav>',
            '    </div>',
            '</header>'
        ].join('\n'),
        footer: [
            '<footer class="footer reveal">',
            '    <div class="footer__container container">',
            '        <div class="footer__offers">',
            '            <ul class="footer__offers-list">',
            '                <li class="footer__offers-item">',
            '                    <img src="./images/Truck.svg" alt="Delivery" loading="lazy">',
            '                    <div class="item__text">',
            '                        <p class="item__text-upper" data-i18n="offers.freeDelivery.title">Free Delivery</p>',
            '                        <p class="item__text-lower" data-i18n="offers.freeDelivery.subtitle">From $29.99</p>',
            '                    </div>',
            '                </li>',
            '                <li class="footer__offers-item">',
            '                    <img src="./images/Stopwatch.svg" alt="Stopwatch" loading="lazy">',
            '                    <div class="item__text">',
            '                        <p class="item__text-upper" data-i18n="offers.withdrawal.title">Free Withdrawal 1h</p>',
            '                        <p class="item__text-lower" data-i18n="offers.withdrawal.subtitle">In Store</p>',
            '                    </div>',
            '                </li>',
            '                <li class="footer__offers-item">',
            '                    <img src="./images/Security.svg" alt="Shield" loading="lazy">',
            '                    <div class="item__text">',
            '                        <p class="item__text-upper" data-i18n="offers.secure.title">100% Secure Payment</p>',
            '                        <p class="item__text-lower" data-i18n="offers.secure.subtitle">At Your Service</p>',
            '                    </div>',
            '                </li>',
            '                <li class="footer__offers-item">',
            '                    <img src="./images/Corp.svg" alt="Corp" loading="lazy">',
            '                    <div class="item__text">',
            '                        <p class="item__text-upper" data-i18n="offers.returns.title">Returns & Exchanges</p>',
            '                        <p class="item__text-lower" data-i18n="offers.returns.subtitle">Offered 365 Days</p>',
            '                    </div>',
            '                </li>',
            '            </ul>',
            '        </div>',
            '',
            '        <div class="footer__main">',
            '            <div class="footer__main-form">',
            '                <div class="main-form__title">',
            '                    <p data-i18n="footer.form.title">Let\'s Stay In Touch</p>',
            '                </div>',
            '                <form class="main-form__form">',
            '                    <input class="form__input" type="email" placeholder="Enter Email..." title="Subscribe"',
            '                        data-i18n-attr="placeholder" data-i18n="footer.form.placeholder" />',
            '                    <button class="form__button" type="submit" data-i18n="buttons.subscribe">Subscribe</button>',
            '                </form>',
            '                <div class="main__image">',
            '                    <img src="./images/LogoAlternate.svg" alt="Nike Logo" loading="lazy">',
            '                </div>',
            '            </div>',
            '',
            '            <div class="footer__main-links">',
            '                <div class="footer__list-once">',
            '                    <div class="footer__list-container">',
            '                        <p class="footer__list-once-title" data-i18n="footer.shop">SHOP</p>',
            '                        <ul class="main__list">',
            '                            <li>',
            '                                <a href="./men.html" class="main__list-item" data-i18n="footer.mens">Mens</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./women.html" class="main__list-item" data-i18n="footer.womens">Womens</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./new-arrivals.html" class="main__list-item"',
            '                                    data-i18n="footer.newArrival">New Arrival</a>',
            '                            </li>',
            '                        </ul>',
            '                    </div>',
            '',
            '                    <div class="footer__list-container">',
            '                        <p class="footer__list-once-title" data-i18n="footer.contact">CONTACT US</p>',
            '                        <ul class="main__list">',
            '                            <li>',
            '                                <a href="./stores.html" class="main__list-item" data-i18n="footer.findStore">Find a',
            '                                    Store</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./contact.html" class="main__list-item"',
            '                                    data-i18n="footer.contactUs">Contact Us</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./terms.html" class="main__list-item" data-i18n="footer.terms">Terms &',
            '                                    Conditions</a>',
            '                            </li>',
            '                        </ul>',
            '                    </div>',
            '                </div>',
            '',
            '                <div class="footer__list-once">',
            '                    <div class="footer__list-container">',
            '                        <p class="footer__list-once-title" data-i18n="footer.services">OUR SERVICES</p>',
            '                        <ul class="main__list">',
            '                            <li>',
            '                                <a href="./customize.html" class="main__list-item" data-i18n="footer.customize">Customize',
            '                                    your products</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./gift-card.html" class="main__list-item" data-i18n="footer.giftCard">Gift',
            '                                    Card</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./repair.html" class="main__list-item" data-i18n="footer.maintainRepair">Maintain',
            '                                    & Repair</a>',
            '                            </li>',
            '                        </ul>',
            '                    </div>',
            '',
            '                    <div class="footer__list-container">',
            '                        <p class="footer__list-once-title" data-i18n="footer.enterprise">OUR ENTERPRISE</p>',
            '                        <ul class="main__list">',
            '                            <li>',
            '                                <a href="./about.html" class="main__list-item" data-i18n="footer.who">Who are',
            '                                    we?</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./press.html" class="main__list-item" data-i18n="footer.press">Press and',
            '                                    news</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./alliances.html" class="main__list-item"',
            '                                    data-i18n="footer.alliances">Our alliances</a>',
            '                            </li>',
            '                        </ul>',
            '                    </div>',
            '                </div>',
            '',
            '                <div class="footer__list-solo">',
            '                    <div class="footer__list-container">',
            '                        <p class="footer__list-once-title" data-i18n="footer.help">NEED HELP ?</p>',
            '                        <ul class="main__list">',
            '                            <li>',
            '                                <a href="./account.html" class="main__list-item" data-i18n="footer.myAccount">My',
            '                                    Account</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./shipping.html" class="main__list-item"',
            '                                    data-i18n="footer.shipping">Shipping</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./returns.html" class="main__list-item" data-i18n="footer.returns">Return &',
            '                                    Exchanges</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./faqs.html" class="main__list-item" data-i18n="footer.faqs">FAQs</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./rewards.html" class="main__list-item"',
            '                                    data-i18n="footer.rewards">Rewards</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./loyalty.html" class="main__list-item" data-i18n="footer.loyalty">Loyalty',
            '                                    program</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./guides.html" class="main__list-item" data-i18n="footer.howToChoose">How',
            '                                    to choose your product?</a>',
            '                            </li>',
            '                            <li>',
            '                                <a href="./trends.html" class="main__list-item" data-i18n="footer.trends">Sports',
            '                                    Trends</a>',
            '                            </li>',
            '                        </ul>',
            '                    </div>',
            '                </div>',
            '            </div>',
            '        </div>',
            '',
            '        <div class="footer__copyright">',
            '            <div class="footer__copyright-text" data-i18n="footer.rights">',
            '                2022 Nike, Inc. All Rights Reserved <span class="special--symbol"><img src="./images/Copyright.svg"',
            '                        alt="Copyright" loading="lazy"></span>',
            '            </div>',
            '            <div class="footer__copyright-soc1als">',
            '                <ul class="soc1als-list">',
            '                    <li>',
            '                        <a href="/">',
            '                            <img src="./images/Youtube.svg" alt="Youtube" loading="lazy">',
            '                        </a>',
            '                    </li>',
            '                    <li>',
            '                        <a href="/">',
            '                            <img src="./images/Facebook.svg" alt="Facebook" loading="lazy">',
            '                        </a>',
            '                    </li>',
            '                    <li>',
            '                        <a href="/">',
            '                            <img src="./images/Twitter.svg" alt="Twitter" loading="lazy">',
            '                        </a>',
            '                    </li>',
            '                    <li>',
            '                        <a href="/">',
            '                            <img src="./images/Instagram.svg" alt="Instagram" loading="lazy">',
            '                        </a>',
            '                    </li>',
            '                </ul>',
            '            </div>',
            '        </div>',
            '    </div>',
            '</footer>'
        ].join('\n')
    };

    function loadPartials() {
        var placeholders = Array.prototype.slice.call(document.querySelectorAll('[data-include]'));
        if (!placeholders.length) return Promise.resolve();

        var groups = placeholders.reduce(function (acc, el) {
            var name = el.getAttribute('data-include');
            if (!name) return acc;
            (acc[name] = acc[name] || []).push(el);
            return acc;
        }, {});

        var names = Object.keys(groups);
        if (!names.length) return Promise.resolve();

        function injectFallback(name) {
            var fallback = fallbackPartials[name];
            if (!fallback) return;
            var targets = groups[name] || [];
            targets.forEach(function (placeholder) {
                placeholder.outerHTML = fallback;
            });
        }

        if (typeof fetch !== 'function' || location.protocol === 'file:') {
            if (location.protocol === 'file:') {
                console.warn('Running from file:// protocol; using embedded header/footer markup.');
            }
            names.forEach(injectFallback);
            return Promise.resolve();
        }

        return Promise.all(names.map(function (name) {
            var url = './partials/' + name + '.html';
            return fetch(url).then(function (res) {
                if (!res.ok) throw new Error('Failed to load partial: ' + url);
                return res.text();
            }).then(function (html) {
                groups[name].forEach(function (placeholder) {
                    placeholder.outerHTML = html;
                });
            }).catch(function (err) {
                console.warn(err);
                console.warn('Falling back to embedded partial for "' + name + '".');
                injectFallback(name);
            });
        }));
    }

    function initSite() {
        var headerEl = document.querySelector('.header');
        var burger = document.querySelector('.header__burger-button');
        var drawer = document.querySelector('.header__mobile');
        var backdrop = document.querySelector('.header__backdrop');
        var closeBtn = document.querySelector('.header__mobile-close');
        var mobileNav = document.querySelector('.header__mobile-nav');
        var textList = document.querySelector('.header__menu-text-list');
        var iconList = document.querySelector('.header__menu-icons-list');

        if (!drawer && headerEl) {
            try {
                var bp = document.createElement('div');
                bp.className = 'header__backdrop';
                bp.setAttribute('aria-hidden', 'true');
                headerEl.appendChild(bp);
                backdrop = bp;

                var aside = document.createElement('aside');
                aside.className = 'header__mobile';
                aside.setAttribute('aria-hidden', 'true');
                aside.setAttribute('aria-labelledby', 'mobileMenuTitle');
                var inner = document.createElement('div'); inner.className = 'header__mobile-inner';
                var mh = document.createElement('div'); mh.className = 'header__mobile-header';
                var title = document.createElement('span'); title.id = 'mobileMenuTitle'; title.className = 'header__mobile-title'; title.textContent = 'Menu';
                var close = document.createElement('button'); close.className = 'header__mobile-close'; close.type = 'button'; close.setAttribute('aria-label', 'Close menu');
                var l1 = document.createElement('span'); l1.className = 'burger-button-line';
                var l2 = document.createElement('span'); l2.className = 'burger-button-line';
                close.appendChild(l1); close.appendChild(l2);
                mh.appendChild(title); mh.appendChild(close);
                var mnav = document.createElement('nav'); mnav.className = 'header__mobile-nav';
                inner.appendChild(mh); inner.appendChild(mnav);
                aside.appendChild(inner);
                headerEl.appendChild(aside);
                drawer = aside; closeBtn = close; mobileNav = mnav;
            } catch (e) { /* noop */ }
        }

        if (mobileNav && textList && iconList && !mobileNav.hasChildNodes()) {
            try {
                mobileNav.appendChild(textList.cloneNode(true));
                mobileNav.appendChild(iconList.cloneNode(true));
            } catch (e) { /* noop */ }
        }

        function setMenuOpen(open) {
            var headerNow = document.querySelector('.header');
            var burgerNow = document.querySelector('.header__burger-button');
            var drawerNow = document.querySelector('.header__mobile');
            var backdropNow = document.querySelector('.header__backdrop');
            if (!headerNow) return;
            headerNow.classList.toggle('is-open', open);
            if (drawerNow) drawerNow.setAttribute('aria-hidden', open ? 'false' : 'true');
            if (backdropNow) backdropNow.setAttribute('aria-hidden', open ? 'false' : 'true');
            if (burgerNow) { burgerNow.setAttribute('aria-expanded', open ? 'true' : 'false'); try { burgerNow.classList.toggle('is-open', open); } catch (e) { } }
            try { document.body.classList.toggle('no-scroll', open); document.body.classList.toggle('menu-open', open); } catch (e) { }
        }

        // Delegated click handlers
        document.addEventListener('click', function (e) {
            if (e.target.closest('.header__burger-button')) {
                var isOpen = document.body.classList.contains('menu-open') || (document.querySelector('.header') && document.querySelector('.header').classList.contains('is-open'));
                setMenuOpen(!isOpen);
            }
            if (e.target.closest('.header__mobile-close') || e.target.closest('.header__backdrop')) {
                setMenuOpen(false);
            }
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenuOpen(false); });
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });






        var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        var links = document.querySelectorAll('.header__menu-link');
        links.forEach(function (a) {
            var href = (a.getAttribute('href') || '').replace('./', '').toLowerCase();
            if (href === path) { a.classList.add('is-active'); a.setAttribute('aria-current', 'page'); }
        });
    }

    function start() {
        loadPartials().catch(function (err) { console.error(err); }).then(function () { initSite(); });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();


















