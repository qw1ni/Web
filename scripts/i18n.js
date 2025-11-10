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
        'catalog.page.title': '👟 Sneaker Catalog',
        'catalog.page.subtitle': 'Find the perfect pair for you',
        'catalog.filters.title': '🔍 Filters',
        'catalog.filters.search.placeholder': 'Search by name...',
        'catalog.filters.categories': 'Categories',
        'catalog.filters.brands': 'Brands',
        'catalog.filters.price': 'Price',
        'catalog.filters.minPrice': 'Min',
        'catalog.filters.maxPrice': 'Max',
        'catalog.filters.gender': 'Gender',
        'catalog.filters.sizes': 'Sizes',
        'catalog.filters.rating': 'Rating',
        'catalog.filters.rating4': '4+ stars',
        'catalog.filters.rating3': '3+ stars',
        'catalog.filters.availability': 'Availability',
        'catalog.filters.inStock': 'In stock',
        'catalog.filters.clear': 'Clear filters',
        'catalog.loading': 'Loading...',
        'catalog.loadingProducts': 'Loading products...',
        'catalog.admin.addProduct': '+ Add product',
        'catalog.admin.export': '📊 Export',
        'catalog.manager.inventory': '📦 Manage inventory',
        'catalog.manager.orders': '📋 Orders',
        'catalog.sort.label': 'Sort by:',
        'catalog.sort.nameAsc': 'Name A-Z',
        'catalog.sort.nameDesc': 'Name Z-A',
        'catalog.sort.priceAsc': 'Price: Low to High',
        'catalog.sort.priceDesc': 'Price: High to Low',
        'catalog.sort.ratingDesc': 'Top rated',
        'catalog.sort.newest': 'Newest first',
        'catalog.sort.oldest': 'Oldest first',
        'catalog.view.grid': 'Grid',
        'catalog.view.list': 'List',
        'catalog.addToCart': 'Add to cart',
        'catalog.results': 'Showing {start}-{end} of {count} products',
        'catalog.pagination.prev': '← Previous',
        'catalog.pagination.next': 'Next →',
        'catalog.noResults.title': 'No products found',
        'catalog.noResults.text': 'Try adjusting your filters',
        'catalog.error.title': 'Error',
        'catalog.messages.addedToCart': 'Product added to cart!',
        'catalog.messages.addToCartError': 'Error adding to cart: {reason}',
        'catalog.messages.addedToWishlist': 'Product added to wishlist!',
        'catalog.messages.loadError': 'Failed to load products',
        'catalog.messages.loadErrorWithReason': 'Failed to load products: {reason}',
        'catalog.messages.addProductComingSoon': 'Product creation is available in the admin panel.',
        'catalog.messages.editProduct': 'Product {id} editing is available in the admin panel.',
        'catalog.messages.deleteConfirm': 'Are you sure you want to delete this product?',
        'catalog.messages.productDeleted': 'Product {id} will be deleted.',
        'catalog.messages.manageInventory': 'Inventory management is available in the manager panel.',
        'catalog.messages.viewOrders': 'Order management is available in the manager panel.',
        'catalog.messages.updateStockPrompt': 'Enter the new stock quantity:',
        'catalog.messages.updateStockSuccess': 'Stock for product {id} updated to {stock}.',
        'catalog.csv.header.id': 'ID',
        'catalog.csv.header.name': 'Name',
        'catalog.csv.header.brand': 'Brand',
        'catalog.csv.header.category': 'Category',
        'catalog.csv.header.price': 'Price',
        'catalog.csv.header.stock': 'Stock',
        'catalog.csv.header.rating': 'Rating',
        'catalog.messages.productNotFound': 'Product not found',
        'catalog.messages.productLoadError': 'Error loading product',
        
        // New Arrivals page
        'new.title1': 'FRESHLY DROPPED',
        'new.title2': 'LATEST',
        'new.title3': 'COLLECTION',
        'new.lead': '<p>Brand-new colorways, cutting-edge materials, and limited editions you won’t want to miss.</p>',
        
        // Men page
        'men.title': '<p>PERFORMANCE FOR HIM</p>',
        'men.text': 'Engineered for speed, built for everyday comfort.',
        
        // Women page
        'women.title': '<p>ELEVATED STYLE FOR HER</p>',
        'women.text': 'From studio to street—lightweight, supportive, effortlessly chic.',
        
        // Kids page
        'kids.title': 'FOR GROWING CHAMPIONS',
        'kids.lead': '<p>PLAY. LEARN. MOVE.</p>',
        'kids.text': '<p>Durable uppers, easy-on straps, big smiles.</p>',

        // Auth pages
        'auth.login.title': 'Sign In',
        'auth.login.subtitle': 'Sign in to your Nike account to track orders, save favorites, and personalize your shopping experience.',
        'auth.login.emailLabel': 'Email',
        'auth.login.emailPlaceholder': 'you@example.com',
        'auth.login.passwordLabel': 'Password',
        'auth.login.passwordPlaceholder': 'Enter password',
        'auth.login.remember': 'Remember me',
        'auth.login.forgot': 'Forgot password?',
        'auth.login.submit': 'Sign In',
        'auth.login.noAccount': "Don't have an account?",
        'auth.login.create': 'Create Account',
        'auth.login.testTitle': 'Test Accounts:',
        'auth.login.testAdmin': '👨‍💼 Admin: mike.johnson@example.com / password123',
        'auth.login.testManager': '📊 Manager: sarah.wilson@example.com / password123',
        'auth.login.testCustomer': '🛍️ Customer: john.doe@example.com / password123',
        'auth.login.signingIn': 'Signing in...',
        'auth.login.userNotFound': 'User not found',
        'auth.login.invalidPassword': 'Invalid password',
        'auth.login.connectionError': 'Connection error. Please try again.',
        'auth.login.welcome': 'Welcome back, {name}!',
        'auth.login.failed': 'Login failed',
        'auth.login.failedWithReason': 'Login failed: {reason}',
        
        // Register page
        'auth.register.title': 'Create Account',
        'auth.register.subtitle': 'Join the Nike community to unlock exclusive drops, event invites, and personalised product picks.',
        'auth.register.lastname': 'Last Name',
        'auth.register.lastnamePlaceholder': 'Smith',
        'auth.register.firstname': 'First Name',
        'auth.register.firstnamePlaceholder': 'John',
        'auth.register.middlename': 'Middle Name',
        'auth.register.middlenamePlaceholder': 'Michael',
        'auth.register.nickname': 'Username',
        'auth.register.nicknamePlaceholder': 'Auto-generated username',
        'auth.register.generate': 'Generate',
        'auth.register.nicknameInfo': 'Generation attempts: <span id="generation-attempts"></span>/{max}',
        'auth.register.manualNicknamePlaceholder': 'Enter username manually',
        'auth.register.manualNicknameButton': 'Manual Entry',
        'auth.register.manualNicknameInfo': 'Maximum attempts reached. Enter username manually.',
        'auth.register.phone': 'Phone Number (Belarus)',
        'auth.register.phonePlaceholder': '+375 (29) 123-45-67',
        'auth.register.email': 'Email',
        'auth.register.emailPlaceholder': 'you@example.com',
        'auth.register.birthdate': 'Birth Date',
        'auth.register.passwordMethod': 'Password Method',
        'auth.register.passwordManual': 'Enter manually',
        'auth.register.passwordAuto': 'Generate automatically',
        'auth.register.password': 'Password',
        'auth.register.passwordPlaceholder': 'Enter password',
        'auth.register.reqLength': 'Minimum 8 characters, maximum 20',
        'auth.register.reqUppercase': 'One uppercase letter',
        'auth.register.reqLowercase': 'One lowercase letter',
        'auth.register.reqNumber': 'One number',
        'auth.register.reqSpecial': 'One special character',
        'auth.register.reqCommon': 'Not in TOP-100 common passwords',
        'auth.register.confirm': 'Confirm Password',
        'auth.register.confirmPlaceholder': 'Repeat password',
        'auth.register.generatedPassword': 'Generated Password',
        'auth.register.copyPassword': 'Copy',
        'auth.register.terms': 'I have read and agree to the <a href="#" class="auth__link">User Agreement</a> *',
        'auth.register.submit': 'Create Account',
        'auth.register.hasAccount': 'Already have an account?',
        'auth.register.loginLink': 'Sign in',
        'auth.register.passwordMismatch': 'Passwords do not match',
        'auth.register.acceptTermsError': 'Please accept Terms & Conditions',
        'auth.register.passwordShort': 'Password must be at least 6 characters',
        'auth.register.creatingAccount': 'Creating account...',
        'auth.register.emailExistsError': 'User with this email already exists',
        'auth.register.accountCreated': 'Account created successfully! Redirecting to login...',
        'auth.register.creationError': 'Error creating account. Please try again.',
        'auth.register.connectionError': 'Connection error. Please try again.',
        'auth.register.errorFieldRequired': 'Field is required',
        'auth.register.errorUsernameShort': 'Username must be at least 3 characters',
        'auth.register.errorPhone': 'Enter valid Belarus phone number (+375)',
        'auth.register.errorEmail': 'Enter valid email',
        'auth.register.errorAge': 'You must be at least 16 years old',
        'auth.register.errorPasswordRequirements': 'Password does not meet requirements',
        'auth.register.errorPasswordsMismatch': 'Passwords do not match',
        'auth.register.copied': 'Copied!',
        'auth.register.successSimple': 'Registration successful! You can now sign in.',
        'auth.register.failedWithReason': 'Registration failed: {reason}',
        'auth.register.failed': 'Registration failed. Please try again.',
        
        // Profile page
        'profile.title': '👤 User Profile',
        'profile.sections.info': '📋 Personal Information',
        'profile.loading.info': 'Loading information...',
        'profile.sections.stats': '📊 Statistics',
        'profile.loading.stats': 'Loading statistics...',
        'profile.sections.actions': '⚙️ Actions',
        'profile.buttons.edit': 'Edit profile',
        'profile.buttons.orders': 'My orders',
        'profile.buttons.wishlist': 'Wishlist',
        'profile.buttons.logout': 'Sign out',
        'profile.messages.loginRequired': 'Authentication required',
        'profile.messages.welcome': 'Welcome, {name}!',
        'profile.messages.role': 'Role: {role}',
        'profile.values.notProvided': 'Not provided',
        'profile.values.never': 'Never',
        'profile.labels.name': 'Name',
        'profile.labels.email': 'Email',
        'profile.labels.phone': 'Phone',
        'profile.labels.role': 'Role',
        'profile.labels.registered': 'Member since',
        'profile.labels.lastLogin': 'Last login',
        'profile.labels.address': 'Address',
        'profile.stats.orders': 'Total orders',
        'profile.stats.spent': 'Total spent',
        'profile.stats.wishlist': 'Wishlist items',
        'profile.stats.wishlistValue': '{count} items',
        'profile.stats.memberSince': 'Member since',
        'profile.stats.memberSinceValue': '{year}',
        'profile.errors.userInfo': 'Failed to load user information: {reason}',
        'profile.errors.userStats': 'Failed to load statistics: {reason}',
        'profile.errors.general': 'Failed to load profile data: {reason}',
        'profile.errors.apiUnavailable': 'The API client is unavailable.',
        'profile.alerts.editProfile': 'Profile editing is coming soon.',
        'profile.alerts.orders': 'Order history is coming soon.',
        'profile.alerts.wishlist': 'Wishlist view is coming soon.',
        'profile.roles.customer': 'Customer',
        'profile.roles.manager': 'Manager',
        'profile.roles.admin': 'Admin',
        'profile.roles.unknown': 'User',
        
        // Cart page
        'cart.page.title': '🛒 Shopping Cart',
        'cart.page.subtitle': 'Review your items before checkout',
        'cart.loading': 'Loading cart...',
        'cart.summary.title': 'Order summary',
        'cart.summary.items': 'Items:',
        'cart.summary.subtotal': 'Subtotal:',
        'cart.summary.shipping': 'Shipping:',
        'cart.summary.total': 'Total:',
        'cart.summary.itemsValue': '{count} items',
        'cart.summary.free': 'Free',
        'cart.buttons.checkout': 'Checkout',
        'cart.buttons.continue': 'Continue shopping',
        'cart.buttons.clear': 'Clear cart',
        'cart.empty.title': 'Your cart is empty',
        'cart.empty.text': 'Add items from the catalog to place an order.',
        'cart.empty.button': 'Browse catalog',
        'cart.item.size': 'Size: {value}',
        'cart.item.color': 'Color: {value}',
        'cart.item.remove': '🗑️ Remove',
        'cart.alerts.wishlistAdded': 'Item added to wishlist!',
        'cart.messages.quantityUpdated': 'Quantity updated',
        'cart.errors.quantityUpdate': 'Failed to update quantity',
        'cart.modal.removeQuestion': 'Remove item from cart?',
        'cart.modal.removeTitle': 'Remove item',
        'cart.modal.removeConfirm': 'Remove',
        'cart.modal.cancel': 'Cancel',
        'cart.messages.itemRemoved': 'Item removed from cart',
        'cart.errors.itemRemove': 'Failed to remove item',
        'cart.modal.clearQuestion': 'Clear the entire cart? This action cannot be undone.',
        'cart.modal.clearTitle': 'Clear cart',
        'cart.modal.clearConfirm': 'Clear',
        'cart.messages.cartCleared': 'Cart cleared',
        'cart.errors.cartClear': 'Failed to clear cart',
        'cart.messages.checkoutProcessing': 'Processing order...',
        'cart.alerts.empty': 'Your cart is empty',
        'cart.confirm.loginRequired': 'You need to sign in to place an order. Go to the login page?',
        'cart.errors.load': 'Failed to load cart: {reason}',
        'cart.errors.loadTitle': 'Error',
        'cart.errors.checkout': 'Failed to place order: {reason}',
        'cart.order.paymentMethod': 'Cash on delivery',
        'cart.receipt.title': 'Order placed!',
        'cart.receipt.orderNumber': 'Order number: #{id}',
        'cart.receipt.customerSection': 'Customer details',
        'cart.receipt.customer.phone': 'Phone',
        'cart.receipt.customer.address': 'Shipping address',
        'cart.receipt.itemsSection': 'Order items',
        'cart.receipt.table.product': 'Product',
        'cart.receipt.table.size': 'Size',
        'cart.receipt.table.quantity': 'Qty',
        'cart.receipt.table.price': 'Price',
        'cart.receipt.table.subtotal': 'Subtotal',
        'cart.receipt.summary.subtotal': 'Subtotal:',
        'cart.receipt.summary.tax': 'Tax (10%):',
        'cart.receipt.summary.shipping': 'Shipping:',
        'cart.receipt.summary.total': 'Total:',
        'cart.receipt.paymentMethod': 'Payment method:',
        'cart.receipt.status': 'Status:',
        'cart.receipt.statusValue': 'Processing',
        'cart.receipt.thankYou': 'Thank you for your purchase! We will send a confirmation to your email.',
        'cart.receipt.close': 'Close',
        'cart.receipt.continueShopping': 'Continue shopping',
 
        // My Orders page
        'orders.page.title': '📦 My Orders',
        'orders.page.subtitle': 'Your purchase history',
        'orders.filters.all': 'All orders',
        'orders.filters.pending': 'Pending',
        'orders.filters.processing': 'Processing',
        'orders.filters.shipped': 'Shipped',
        'orders.filters.delivered': 'Delivered',
        'orders.loading': 'Loading your orders...',
        'orders.alerts.authRequired': 'You must be signed in to view orders.',
        'orders.messages.history': 'Order history: {name}',
        'orders.errors.load': 'Failed to load orders: {reason}',
        'orders.errors.none': 'You do not have any orders yet.',
        'orders.empty.title': 'You do not have any orders yet',
        'orders.empty.text': 'Start shopping in our catalog!',
        'orders.empty.button': 'Browse catalog',
        'orders.orderNumber': 'Order #{id}',
        'orders.date': 'Placed on {date}',
        'orders.status.pending': 'Pending',
        'orders.status.processing': 'Processing',
        'orders.status.shipped': 'Shipped',
        'orders.status.delivered': 'Delivered',
        'orders.status.cancelled': 'Cancelled',
        'orders.items.title': 'Order items',
        'orders.item.details': '{brand} • Size: {size} • Color: {color} • Qty: {quantity}',
        'orders.summary.subtotal': 'Subtotal',
        'orders.summary.tax': 'Tax',
        'orders.summary.shipping': 'Shipping',
        'orders.summary.total': 'Total',
        'orders.buttons.details': 'View details',
        'orders.buttons.reorder': 'Reorder',
        'orders.modal.reorder': 'Add all items from order #{id} to your cart?',
        'orders.messages.reorderSuccess': 'Items added to your cart!',
        'orders.errors.reorderUnavailable': 'Cart is unavailable.',
        'orders.errors.reorderFailed': 'Failed to reorder items: {reason}',
        'orders.details.title': 'Order #{id}',
        'orders.details.status': 'Status: {status}',
        'orders.details.date': 'Date: {date}',
        'orders.details.recipient': 'Recipient:',
        'orders.details.contact': 'Email: {email}\nPhone: {phone}',
        'orders.details.address': 'Shipping address:',
        'orders.details.payment': 'Payment method: {method}',

        // Product details page
        'pd.name': '<p>Air Jordan 4 Retro Lightning</p>',
        'pd.price': '<p>$239.00</p>',
        'pd.desc': '<p>Premium materials, responsive cushioning, and unmistakable Jordan heritage.</p>',
        'pd.add': 'Add to Cart',
        'pd.features.title': '<p>KEY FEATURES</p>',
        'pd.features.list': '<ul><li>Zoom Air cushioning</li><li>Breathable mesh panels</li><li>Heel support frame</li></ul>',
        'pd.images.heroAlt': 'Sneaker graffiti illustration',
        'pd.images.featureAlt': 'Highlighted sneaker product',
        
        // Detailed product page
        'productDetail.breadcrumbs.label': 'Breadcrumb navigation',
        'productDetail.breadcrumbs.home': 'Home',
        'productDetail.breadcrumbs.catalog': 'Catalog',
        'productDetail.breadcrumbs.current': 'Product',
        'productDetail.loading': 'Loading product...',
        'productDetail.related.title': 'Related products',
        'productDetail.errors.pageLoad': 'Failed to load the page',
        'productDetail.errors.display': 'Failed to render the product: {reason}',
        'productDetail.errors.loadProduct': 'Failed to load the product: {reason}',
        'productDetail.errors.productNotFound': 'Product not found',
        'productDetail.errors.cartMissing': 'Cart is not initialized',
        'productDetail.errors.addToCart': 'Failed to add to cart: {reason}',
        'productDetail.messages.tempUnavailable': 'Product temporarily unavailable',
        'productDetail.messages.selectSize': 'Please choose a size',
        'productDetail.messages.addedToCart': 'Item added to cart!',
        'productDetail.rating.reviewsSuffix': 'reviews',
        'productDetail.options.size': 'Size',
        'productDetail.options.color': 'Color',
        'productDetail.actions.add': 'Add to cart',
        'productDetail.actions.outOfStock': 'Out of stock',
        'productDetail.features.quality': 'Premium quality',
        'productDetail.features.authentic': 'Authentic product',
        'productDetail.features.delivery': 'Fast delivery',
        'productDetail.features.warranty': 'Quality guarantee',
        'productDetail.specs.title': 'Specifications',
        'productDetail.specs.brand': 'Brand:',
        'productDetail.specs.model': 'Model:',
        'productDetail.specs.category': 'Category:',
        'productDetail.specs.gender': 'Gender:',
        'productDetail.specs.rating': 'Rating:',
        'productDetail.specs.ratingOf': 'out of 5',
        'productDetail.specs.reviews': 'Reviews:',
        'productDetail.specs.availability': 'Availability:',
        'productDetail.specs.inStock': 'In stock',
        'productDetail.specs.outOfStock': 'Out of stock',
        'productDetail.specs.stock': 'Stock:',
        'productDetail.specs.stockUnit': 'pcs.',
        'productDetail.specs.release': 'Release date:',
        'productDetail.specs.tags': 'Tags:',
        'productDetail.error.title': 'Error',
        
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
        'catalog.page.title': '👟 Каталог кроссовок',
        'catalog.page.subtitle': 'Найдите идеальную пару для себя',
        'catalog.filters.title': '🔍 Фильтры',
        'catalog.filters.search.placeholder': 'Поиск по названию...',
        'catalog.filters.categories': 'Категории',
        'catalog.filters.brands': 'Бренды',
        'catalog.filters.price': 'Цена',
        'catalog.filters.minPrice': 'Мин',
        'catalog.filters.maxPrice': 'Макс',
        'catalog.filters.gender': 'Пол',
        'catalog.filters.sizes': 'Размеры',
        'catalog.filters.rating': 'Рейтинг',
        'catalog.filters.rating4': '4+ звезд',
        'catalog.filters.rating3': '3+ звезд',
        'catalog.filters.availability': 'Наличие',
        'catalog.filters.inStock': 'В наличии',
        'catalog.filters.clear': 'Очистить фильтры',
        'catalog.loading': 'Загрузка...',
        'catalog.loadingProducts': 'Загрузка товаров...',
        'catalog.admin.addProduct': '+ Добавить товар',
        'catalog.admin.export': '📊 Экспорт',
        'catalog.manager.inventory': '📦 Управление складом',
        'catalog.manager.orders': '📋 Заказы',
        'catalog.sort.label': 'Сортировка:',
        'catalog.sort.nameAsc': 'Название А-Я',
        'catalog.sort.nameDesc': 'Название Я-А',
        'catalog.sort.priceAsc': 'Цена по возрастанию',
        'catalog.sort.priceDesc': 'Цена по убыванию',
        'catalog.sort.ratingDesc': 'По рейтингу',
        'catalog.sort.newest': 'Сначала новые',
        'catalog.sort.oldest': 'Сначала старые',
        'catalog.view.grid': 'Сетка',
        'catalog.view.list': 'Список',
        'catalog.addToCart': 'В корзину',
        'catalog.results': 'Показано {start}-{end} из {count} товаров',
        'catalog.pagination.prev': '← Назад',
        'catalog.pagination.next': 'Вперед →',
        'catalog.noResults.title': 'Товары не найдены',
        'catalog.noResults.text': 'Попробуйте изменить фильтры поиска',
        'catalog.error.title': 'Ошибка',
        'catalog.messages.addedToCart': 'Товар добавлен в корзину!',
        'catalog.messages.addToCartError': 'Ошибка добавления в корзину: {reason}',
        'catalog.messages.addedToWishlist': 'Товар добавлен в избранное!',
        'catalog.messages.loadError': 'Ошибка загрузки товаров',
        'catalog.messages.loadErrorWithReason': 'Ошибка загрузки товаров: {reason}',
        'catalog.messages.addProductComingSoon': 'Функция добавления товара доступна в админ-панели.',
        'catalog.messages.editProduct': 'Редактирование товара {id} будет реализовано в админ-панели.',
        'catalog.messages.deleteConfirm': 'Вы уверены, что хотите удалить этот товар?',
        'catalog.messages.productDeleted': 'Товар {id} будет удален.',
        'catalog.messages.manageInventory': 'Управление складом доступно в панели менеджера.',
        'catalog.messages.viewOrders': 'Просмотр заказов доступен в панели менеджера.',
        'catalog.messages.updateStockPrompt': 'Введите новое количество товара на складе:',
        'catalog.messages.updateStockSuccess': 'Остаток товара {id} обновлен до {stock}.',
        'catalog.csv.header.id': 'ID',
        'catalog.csv.header.name': 'Название',
        'catalog.csv.header.brand': 'Бренд',
        'catalog.csv.header.category': 'Категория',
        'catalog.csv.header.price': 'Цена',
        'catalog.csv.header.stock': 'Остаток',
        'catalog.csv.header.rating': 'Рейтинг',
        'catalog.messages.productNotFound': 'Товар не найден',
        'catalog.messages.productLoadError': 'Ошибка загрузки товара',
        
        // New Arrivals page
        'new.title1': 'СВЕЖИЕ ПОСТУПЛЕНИЯ',
        'new.title2': 'ПОСЛЕДНЯЯ',
        'new.title3': 'КОЛЛЕКЦИЯ',
        'new.lead': '<p>Совершенно новые расцветки, передовые материалы и лимитированные серии, которые нельзя пропустить.</p>',
        
        // Men page
        'men.title': '<p>СОЗДАНО ДЛЯ НЕГО</p>',
        'men.text': 'Разработано для скорости, создано для комфорта каждый день.',
        
        // Women page
        'women.title': '<p>СТИЛЬ ДЛЯ НЕЁ</p>',
        'women.text': 'От студии до улицы — лёгкость, поддержка и безупречный стиль.',
        
        // Kids page
        'kids.title': 'ДЛЯ РАСТУЩИХ ЧЕМПИОНОВ',
        'kids.lead': '<p>ИГРАЙ. УЧИСЬ. ДВИГАЙСЯ.</p>',
        'kids.text': '<p>Прочные материалы, удобные застёжки и счастливая улыбка.</p>',

        // Auth pages
        'auth.login.title': 'Войти',
        'auth.login.subtitle': 'Войдите в свой аккаунт Nike, чтобы отслеживать заказы, сохранять избранное и персонализировать покупки.',
        'auth.login.emailLabel': 'Эл. почта',
        'auth.login.emailPlaceholder': 'you@example.com',
        'auth.login.passwordLabel': 'Пароль',
        'auth.login.passwordPlaceholder': 'Введите пароль',
        'auth.login.remember': 'Запомнить меня',
        'auth.login.forgot': 'Забыли пароль?',
        'auth.login.submit': 'Войти',
        'auth.login.noAccount': 'Нет аккаунта?',
        'auth.login.create': 'Создать аккаунт',
        'auth.login.testTitle': 'Тестовые аккаунты:',
        'auth.login.testAdmin': '👨‍💼 Администратор: mike.johnson@example.com / password123',
        'auth.login.testManager': '📊 Менеджер: sarah.wilson@example.com / password123',
        'auth.login.testCustomer': '🛍️ Покупатель: john.doe@example.com / password123',
        'auth.login.signingIn': 'Выполняем вход...',
        'auth.login.userNotFound': 'Пользователь не найден',
        'auth.login.invalidPassword': 'Неверный пароль',
        'auth.login.connectionError': 'Ошибка соединения. Попробуйте ещё раз.',
        'auth.login.welcome': 'С возвращением, {name}!',
        'auth.login.failed': 'Не удалось войти',
        'auth.login.failedWithReason': 'Не удалось войти: {reason}',
        
        // Register page
        'auth.register.title': 'Создать аккаунт',
        'auth.register.subtitle': 'Присоединяйтесь к сообществу Nike, чтобы получать эксклюзивные релизы, приглашения на события и персональные подборки.',
        'auth.register.lastname': 'Фамилия',
        'auth.register.lastnamePlaceholder': 'Иванов',
        'auth.register.firstname': 'Имя',
        'auth.register.firstnamePlaceholder': 'Иван',
        'auth.register.middlename': 'Отчество',
        'auth.register.middlenamePlaceholder': 'Иванович',
        'auth.register.nickname': 'Имя пользователя',
        'auth.register.nicknamePlaceholder': 'Автогенерируемое имя пользователя',
        'auth.register.generate': 'Сгенерировать',
        'auth.register.nicknameInfo': 'Попытки генерации: <span id="generation-attempts"></span>/{max}',
        'auth.register.manualNicknamePlaceholder': 'Введите имя пользователя вручную',
        'auth.register.manualNicknameButton': 'Ввести вручную',
        'auth.register.manualNicknameInfo': 'Достигнут лимит попыток. Введите имя пользователя вручную.',
        'auth.register.phone': 'Номер телефона (Беларусь)',
        'auth.register.phonePlaceholder': '+375 (29) 123-45-67',
        'auth.register.email': 'Эл. почта',
        'auth.register.emailPlaceholder': 'you@example.com',
        'auth.register.birthdate': 'Дата рождения',
        'auth.register.passwordMethod': 'Способ создания пароля',
        'auth.register.passwordManual': 'Ввести вручную',
        'auth.register.passwordAuto': 'Сгенерировать автоматически',
        'auth.register.password': 'Пароль',
        'auth.register.passwordPlaceholder': 'Введите пароль',
        'auth.register.reqLength': 'Минимум 8 символов, максимум 20',
        'auth.register.reqUppercase': 'Одна заглавная буква',
        'auth.register.reqLowercase': 'Одна строчная буква',
        'auth.register.reqNumber': 'Одна цифра',
        'auth.register.reqSpecial': 'Один спецсимвол',
        'auth.register.reqCommon': 'Не входит в TOP-100 распространённых паролей',
        'auth.register.confirm': 'Подтвердите пароль',
        'auth.register.confirmPlaceholder': 'Повторите пароль',
        'auth.register.generatedPassword': 'Сгенерированный пароль',
        'auth.register.copyPassword': 'Копировать',
        'auth.register.terms': 'Я прочитал(-а) и согласен(-на) с <a href="#" class="auth__link">пользовательским соглашением</a> *',
        'auth.register.submit': 'Создать аккаунт',
        'auth.register.hasAccount': 'Уже есть аккаунт?',
        'auth.register.loginLink': 'Войти',
        'auth.register.passwordMismatch': 'Пароли не совпадают',
        'auth.register.acceptTermsError': 'Пожалуйста, примите условия использования',
        'auth.register.passwordShort': 'Пароль должен содержать не менее 6 символов',
        'auth.register.creatingAccount': 'Создаём аккаунт...',
        'auth.register.emailExistsError': 'Пользователь с таким email уже существует',
        'auth.register.accountCreated': 'Аккаунт успешно создан! Перенаправляем на страницу входа...',
        'auth.register.creationError': 'Не удалось создать аккаунт. Попробуйте ещё раз.',
        'auth.register.connectionError': 'Ошибка соединения. Попробуйте ещё раз.',
        'auth.register.errorFieldRequired': 'Поле обязательно',
        'auth.register.errorUsernameShort': 'Имя пользователя должно содержать минимум 3 символа',
        'auth.register.errorPhone': 'Введите корректный номер телефона Беларуси (+375)',
        'auth.register.errorEmail': 'Введите корректный email',
        'auth.register.errorAge': 'Вам должно быть не менее 16 лет',
        'auth.register.errorPasswordRequirements': 'Пароль не соответствует требованиям',
        'auth.register.errorPasswordsMismatch': 'Пароли не совпадают',
        'auth.register.copied': 'Скопировано!',
        'auth.register.successSimple': 'Регистрация прошла успешно! Теперь вы можете войти.',
        'auth.register.failedWithReason': 'Регистрация не выполнена: {reason}',
        'auth.register.failed': 'Не удалось зарегистрироваться. Попробуйте ещё раз.',
        
        // Profile page
        'profile.title': '👤 Профиль пользователя',
        'profile.sections.info': '📋 Личная информация',
        'profile.loading.info': 'Загрузка информации...',
        'profile.sections.stats': '📊 Статистика',
        'profile.loading.stats': 'Загрузка статистики...',
        'profile.sections.actions': '⚙️ Действия',
        'profile.buttons.edit': 'Редактировать профиль',
        'profile.buttons.orders': 'Мои заказы',
        'profile.buttons.wishlist': 'Избранное',
        'profile.buttons.logout': 'Выйти из системы',
        'profile.messages.loginRequired': 'Необходима авторизация',
        'profile.messages.welcome': 'Добро пожаловать, {name}!',
        'profile.messages.role': 'Роль: {role}',
        'profile.values.notProvided': 'Не указано',
        'profile.values.never': 'Никогда',
        'profile.labels.name': 'Имя',
        'profile.labels.email': 'Эл. почта',
        'profile.labels.phone': 'Телефон',
        'profile.labels.role': 'Роль',
        'profile.labels.registered': 'Дата регистрации',
        'profile.labels.lastLogin': 'Последний вход',
        'profile.labels.address': 'Адрес',
        'profile.stats.orders': 'Всего заказов',
        'profile.stats.spent': 'Потрачено',
        'profile.stats.wishlist': 'В избранном',
        'profile.stats.wishlistValue': '{count} товаров',
        'profile.stats.memberSince': 'Участник с',
        'profile.stats.memberSinceValue': '{year} года',
        'profile.errors.userInfo': 'Ошибка загрузки информации о пользователе: {reason}',
        'profile.errors.userStats': 'Ошибка загрузки статистики: {reason}',
        'profile.errors.general': 'Ошибка загрузки данных профиля: {reason}',
        'profile.errors.apiUnavailable': 'Клиент API недоступен.',
        'profile.alerts.editProfile': 'Редактирование профиля скоро появится.',
        'profile.alerts.orders': 'История заказов в разработке.',
        'profile.alerts.wishlist': 'Просмотр избранного в разработке.',
        'profile.roles.customer': 'Покупатель',
        'profile.roles.manager': 'Менеджер',
        'profile.roles.admin': 'Администратор',
        'profile.roles.unknown': 'Пользователь',
        
        // Страница корзины
        'cart.page.title': '🛒 Корзина покупок',
        'cart.page.subtitle': 'Проверьте товары перед оформлением заказа',
        'cart.loading': 'Загрузка корзины...',
        'cart.summary.title': 'Итого заказа',
        'cart.summary.items': 'Товары:',
        'cart.summary.subtotal': 'Сумма товаров:',
        'cart.summary.shipping': 'Доставка:',
        'cart.summary.total': 'Итого:',
        'cart.summary.itemsValue': '{count} шт.',
        'cart.summary.free': 'Бесплатно',
        'cart.buttons.checkout': 'Оформить заказ',
        'cart.buttons.continue': 'Продолжить покупки',
        'cart.buttons.clear': 'Очистить корзину',
        'cart.empty.title': 'Корзина пуста',
        'cart.empty.text': 'Добавьте товары из каталога, чтобы оформить заказ.',
        'cart.empty.button': 'Перейти в каталог',
        'cart.item.size': 'Размер: {value}',
        'cart.item.color': 'Цвет: {value}',
        'cart.item.remove': '🗑️ Удалить',
        'cart.alerts.wishlistAdded': 'Товар добавлен в избранное!',
        'cart.messages.quantityUpdated': 'Количество обновлено',
        'cart.errors.quantityUpdate': 'Ошибка обновления количества',
        'cart.modal.removeQuestion': 'Удалить товар из корзины?',
        'cart.modal.removeTitle': 'Подтверждение удаления',
        'cart.modal.removeConfirm': 'Удалить',
        'cart.modal.cancel': 'Отмена',
        'cart.messages.itemRemoved': 'Товар удален из корзины',
        'cart.errors.itemRemove': 'Ошибка удаления товара',
        'cart.modal.clearQuestion': 'Очистить всю корзину? Это действие нельзя отменить.',
        'cart.modal.clearTitle': 'Подтверждение очистки',
        'cart.modal.clearConfirm': 'Очистить',
        'cart.messages.cartCleared': 'Корзина очищена',
        'cart.errors.cartClear': 'Ошибка очистки корзины',
        'cart.messages.checkoutProcessing': 'Оформление заказа...',
        'cart.alerts.empty': 'Корзина пуста',
        'cart.confirm.loginRequired': 'Для оформления заказа необходимо войти в систему. Перейти на страницу входа?',
        'cart.errors.load': 'Ошибка загрузки корзины: {reason}',
        'cart.errors.loadTitle': 'Ошибка',
        'cart.errors.checkout': 'Ошибка при оформлении заказа: {reason}',
        'cart.order.paymentMethod': 'Оплата при получении',
        'cart.receipt.title': 'Заказ оформлен!',
        'cart.receipt.orderNumber': 'Номер заказа: #{id}',
        'cart.receipt.customerSection': 'Данные получателя',
        'cart.receipt.customer.phone': 'Телефон',
        'cart.receipt.customer.address': 'Адрес доставки',
        'cart.receipt.itemsSection': 'Состав заказа',
        'cart.receipt.table.product': 'Товар',
        'cart.receipt.table.size': 'Размер',
        'cart.receipt.table.quantity': 'Кол-во',
        'cart.receipt.table.price': 'Цена',
        'cart.receipt.table.subtotal': 'Сумма',
        'cart.receipt.summary.subtotal': 'Подытог:',
        'cart.receipt.summary.tax': 'Налог (10%):',
        'cart.receipt.summary.shipping': 'Доставка:',
        'cart.receipt.summary.total': 'Итого:',
        'cart.receipt.paymentMethod': 'Способ оплаты:',
        'cart.receipt.status': 'Статус:',
        'cart.receipt.statusValue': 'В обработке',
        'cart.receipt.thankYou': 'Спасибо за покупку! Мы отправим вам подтверждение на email.',
        'cart.receipt.close': 'Закрыть',
        'cart.receipt.continueShopping': 'Продолжить покупки',

        // Страница заказов
        'orders.page.title': '📦 Мои заказы',
        'orders.page.subtitle': 'История ваших покупок',
        'orders.filters.all': 'Все заказы',
        'orders.filters.pending': 'В обработке',
        'orders.filters.processing': 'Обрабатывается',
        'orders.filters.shipped': 'Отправлено',
        'orders.filters.delivered': 'Доставлено',
        'orders.loading': 'Загрузка заказов...',
        'orders.alerts.authRequired': 'Необходима авторизация для просмотра заказов.',
        'orders.messages.history': 'История покупок: {name}',
        'orders.errors.load': 'Ошибка при загрузке заказов: {reason}',
        'orders.errors.none': 'У вас пока нет заказов.',
        'orders.empty.title': 'У вас пока нет заказов',
        'orders.empty.text': 'Начните делать покупки в нашем каталоге!',
        'orders.empty.button': 'Перейти в каталог',
        'orders.orderNumber': 'Заказ #{id}',
        'orders.date': 'Оформлен {date}',
        'orders.status.pending': 'В обработке',
        'orders.status.processing': 'Обрабатывается',
        'orders.status.shipped': 'Отправлено',
        'orders.status.delivered': 'Доставлено',
        'orders.status.cancelled': 'Отменено',
        'orders.items.title': 'Состав заказа',
        'orders.item.details': '{brand} • Размер: {size} • Цвет: {color} • Кол-во: {quantity}',
        'orders.summary.subtotal': 'Подытог',
        'orders.summary.tax': 'Налог',
        'orders.summary.shipping': 'Доставка',
        'orders.summary.total': 'Итого',
        'orders.buttons.details': 'Детали заказа',
        'orders.buttons.reorder': 'Повторить заказ',
        'orders.modal.reorder': 'Добавить все товары из заказа #{id} в корзину?',
        'orders.messages.reorderSuccess': 'Товары добавлены в корзину!',
        'orders.errors.reorderUnavailable': 'Корзина недоступна.',
        'orders.errors.reorderFailed': 'Не удалось добавить товары в корзину: {reason}',
        'orders.details.title': 'Заказ #{id}',
        'orders.details.status': 'Статус: {status}',
        'orders.details.date': 'Дата: {date}',
        'orders.details.recipient': 'Получатель:',
        'orders.details.contact': 'Email: {email}\nТелефон: {phone}',
        'orders.details.address': 'Адрес доставки:',
        'orders.details.payment': 'Способ оплаты: {method}',

        // Страница товара
        'pd.name': '<p>Air Jordan 4 Retro Lightning</p>',
        'pd.price': '<p>$239.00</p>',
        'pd.desc': '<p>Премиальные материалы, отзывчивая амортизация и узнаваемое наследие Jordan.</p>',
        'pd.add': 'Добавить в корзину',
        'pd.features.title': '<p>КЛЮЧЕВЫЕ ОСОБЕННОСТИ</p>',
        'pd.features.list': '<ul><li>Амортизация Zoom Air</li><li>Дышащие сетчатые панели</li><li>Укреплённый задник</li></ul>',
        'pd.images.heroAlt': 'Иллюстрация кроссовок на граффити-фоне',
        'pd.images.featureAlt': 'Кроссовок крупным планом',
        
        // Страница товара (детальная)
        'productDetail.breadcrumbs.label': 'Навигационные хлебные крошки',
        'productDetail.breadcrumbs.home': 'Главная',
        'productDetail.breadcrumbs.catalog': 'Каталог',
        'productDetail.breadcrumbs.current': 'Товар',
        'productDetail.loading': 'Загрузка товара...',
        'productDetail.related.title': 'Похожие товары',
        'productDetail.errors.pageLoad': 'Ошибка загрузки страницы',
        'productDetail.errors.display': 'Ошибка отображения товара: {reason}',
        'productDetail.errors.loadProduct': 'Ошибка загрузки товара: {reason}',
        'productDetail.errors.productNotFound': 'Товар не найден',
        'productDetail.errors.cartMissing': 'Корзина не инициализирована',
        'productDetail.errors.addToCart': 'Ошибка добавления в корзину: {reason}',
        'productDetail.messages.tempUnavailable': 'Товар временно недоступен',
        'productDetail.messages.selectSize': 'Пожалуйста, выберите размер',
        'productDetail.messages.addedToCart': 'Товар добавлен в корзину!',
        'productDetail.rating.reviewsSuffix': 'отзывов',
        'productDetail.options.size': 'Размер',
        'productDetail.options.color': 'Цвет',
        'productDetail.actions.add': 'Добавить в корзину',
        'productDetail.actions.outOfStock': 'Нет в наличии',
        'productDetail.features.quality': 'Высокое качество',
        'productDetail.features.authentic': 'Оригинальная продукция',
        'productDetail.features.delivery': 'Быстрая доставка',
        'productDetail.features.warranty': 'Гарантия качества',
        'productDetail.specs.title': 'Характеристики',
        'productDetail.specs.brand': 'Бренд:',
        'productDetail.specs.model': 'Модель:',
        'productDetail.specs.category': 'Категория:',
        'productDetail.specs.gender': 'Пол:',
        'productDetail.specs.rating': 'Рейтинг:',
        'productDetail.specs.ratingOf': 'из 5',
        'productDetail.specs.reviews': 'Отзывы:',
        'productDetail.specs.availability': 'Наличие:',
        'productDetail.specs.inStock': 'В наличии',
        'productDetail.specs.outOfStock': 'Нет в наличии',
        'productDetail.specs.stock': 'Остаток:',
        'productDetail.specs.stockUnit': 'шт.',
        'productDetail.specs.release': 'Дата релиза:',
        'productDetail.specs.tags': 'Теги:',
        'productDetail.error.title': 'Ошибка',
        
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

