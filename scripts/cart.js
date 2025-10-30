// scripts/cart.js

(function() {
    const API_BASE_URL = 'http://localhost:3000';
    const CART_STORAGE_KEY_PREFIX = 'sneaker_store_cart_';

    class CartManager {
        constructor() {
            console.log('CartManager constructor called');
            
            // Проверяем протокол и домен
            console.log('Page protocol:', window.location.protocol);
            console.log('Page hostname:', window.location.hostname);
            console.log('Page port:', window.location.port);
            console.log('Page origin:', window.location.origin);
            
            // Проверяем, что API доступен
            if (typeof SneakerStoreAPI === 'undefined') {
                console.error('SneakerStoreAPI not loaded. Make sure api.js is loaded before cart.js');
                this.apiClient = null;
            } else {
                this.apiClient = new SneakerStoreAPI.ApiClient();
            }
            
            // Инициализируем пустую корзину
            this.cart = {
                items: [],
                total: 0,
                itemCount: 0,
                lastUpdated: new Date().toISOString()
            };
            this.listeners = [];
            this.currentUserId = null;
            
            console.log('CartManager initialized with empty cart');
        }
        
        // Получаем ключ для localStorage с учетом пользователя
        getStorageKey() {
            const userId = this.currentUserId || 'guest';
            return CART_STORAGE_KEY_PREFIX + userId;
        }

        // Загрузка корзины из localStorage
        loadCartFromStorage() {
            try {
                const storageKey = this.getStorageKey();
                console.log('Loading cart from localStorage with key:', storageKey);
                const stored = localStorage.getItem(storageKey);
                console.log('Raw stored data:', stored);
                
                if (stored) {
                    const cart = JSON.parse(stored);
                    console.log('Parsed cart from localStorage:', cart);
                    return cart;
                } else {
                    console.log('No cart found in localStorage, creating new empty cart');
                    return {
                        items: [],
                        total: 0,
                        itemCount: 0,
                        lastUpdated: new Date().toISOString()
                    };
                }
            } catch (error) {
                console.error('Ошибка загрузки корзины из localStorage:', error);
                return { items: [], total: 0, itemCount: 0, lastUpdated: new Date().toISOString() };
            }
        }

        // Сохранение корзины в localStorage
        saveCartToStorage() {
            try {
                const storageKey = this.getStorageKey();
                console.log('Saving cart to localStorage with key:', storageKey);
                localStorage.setItem(storageKey, JSON.stringify(this.cart));
                console.log('Cart saved to localStorage successfully');
            } catch (error) {
                console.error('Ошибка сохранения корзины в localStorage:', error);
            }
        }

        // Синхронизация с сервером
        async syncWithServer() {
            console.log('Syncing with server...');
            const authManager = window.SneakerStoreAuth?.authManager;
            if (!authManager || !authManager.isAuthenticated()) {
                console.log('User not authenticated, skipping sync');
                this.currentUserId = null;
                // Загружаем гостевую корзину
                this.cart = this.loadCartFromStorage();
                this.notifyListeners();
                return;
            }

            try {
                const user = authManager.getCurrentUser();
                console.log('User authenticated:', user);
                
                // Устанавливаем текущего пользователя
                const oldUserId = this.currentUserId;
                this.currentUserId = user.id;
                
                // Если сменился пользователь, загружаем его корзину из localStorage
                if (oldUserId !== this.currentUserId) {
                    console.log('User changed, loading cart for user:', this.currentUserId);
                    this.cart = this.loadCartFromStorage();
                }
                
                // Получаем корзину пользователя с сервера
                const response = await this.apiClient.get('/carts', { userId: user.id });
                console.log('Server cart response:', response);
                
                if (response.success && response.data.length > 0) {
                    const serverCart = response.data[0];
                    console.log('Server cart found:', serverCart);
                    // ЗАМЕНЯЕМ локальную корзину серверной (приоритет у сервера)
                    this.cart.items = serverCart.items || [];
                    this.cart.total = serverCart.total || 0;
                    this.cart.itemCount = serverCart.itemCount || serverCart.items?.length || 0;
                    this.cart.lastUpdated = new Date().toISOString();
                    this.saveCartToStorage();
                    this.notifyListeners();
                } else {
                    console.log('No server cart found, creating new one');
                    // Создаем новую пустую корзину на сервере
                    await this.createServerCart();
                }
            } catch (error) {
                console.error('Ошибка синхронизации корзины с сервером:', error);
            }
        }

        // Создание корзины на сервере
        async createServerCart() {
            const authManager = window.SneakerStoreAuth?.authManager;
            if (!authManager || !authManager.isAuthenticated()) return;

            try {
                const user = authManager.getCurrentUser();
                const cartData = {
                    userId: user.id,
                    items: [],
                    total: 0,
                    itemCount: 0,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };

                const response = await this.apiClient.post('/carts', cartData);
                if (response.success) {
                    console.log('Корзина создана на сервере');
                    // Обновляем локальную корзину
                    this.cart.items = [];
                    this.cart.total = 0;
                    this.cart.itemCount = 0;
                    this.cart.lastUpdated = new Date().toISOString();
                    this.saveCartToStorage();
                    this.notifyListeners();
                }
            } catch (error) {
                console.error('Ошибка создания корзины на сервере:', error);
            }
        }

        // Добавление товара в корзину
        async addItem(productId, size = 'Default', color = 'Default', quantity = 1) {
            try {
                console.log('Adding item to cart:', { productId, size, color, quantity });
                
                // Проверяем, что API клиент доступен
                if (!this.apiClient) {
                    console.error('API client not available');
                    return { success: false, error: 'API client not available' };
                }

                // Получаем информацию о товаре
                console.log('Fetching product:', productId);
                const productResponse = await this.apiClient.get(`/products/${productId}`);
                console.log('Product response:', productResponse);
                
                if (!productResponse.success || !productResponse.data) {
                    throw new Error('Товар не найден');
                }

                const product = productResponse.data;
                console.log('Product found:', product);
                
                // Проверяем наличие товара
                if (!product.inStock || product.stockQuantity < quantity) {
                    throw new Error('Товар недоступен в указанном количестве');
                }

                // Ищем существующий товар в корзине
                const existingItemIndex = this.cart.items.findIndex(item => 
                    item.productId === productId && 
                    item.size === size && 
                    item.color === color
                );

                if (existingItemIndex !== -1) {
                    // Увеличиваем количество существующего товара
                    this.cart.items[existingItemIndex].quantity += quantity;
                } else {
                    // Добавляем новый товар
                    const cartItem = {
                        id: Date.now() + Math.random(), // Временный ID
                        productId: productId,
                        product: {
                            id: product.id,
                            name: product.name,
                            brand: product.brand,
                            price: product.price,
                            image: `./images/catalogItem${(product.id % 6) + 1}.svg`,
                            inStock: product.inStock,
                            stockQuantity: product.stockQuantity
                        },
                        size: size,
                        color: color,
                        quantity: quantity,
                        price: product.price,
                        addedAt: new Date().toISOString()
                    };
                    
                    this.cart.items.push(cartItem);
                }

                this.calculateTotals();
                this.saveCartToStorage();
                this.notifyListeners();

                console.log('Cart after adding item:', this.cart);

                // Синхронизируем с сервером
                await this.syncCartWithServer();

                console.log('Item successfully added to cart');
                return { success: true, message: 'Товар добавлен в корзину' };
            } catch (error) {
                console.error('Ошибка добавления товара в корзину:', error);
                return { success: false, error: error.message };
            }
        }

        // Синхронизация корзины с сервером (обновление)
        async syncCartWithServer() {
            const authManager = window.SneakerStoreAuth?.authManager;
            if (!authManager || !authManager.isAuthenticated()) return;

            try {
                const user = authManager.getCurrentUser();
                const response = await this.apiClient.get('/carts', { userId: user.id });
                
                if (response.success && response.data.length > 0) {
                    const serverCart = response.data[0];
                    // Обновляем корзину на сервере
                    await this.apiClient.put(`/carts/${serverCart.id}`, {
                        ...serverCart,
                        items: this.cart.items,
                        total: this.cart.total,
                        itemCount: this.cart.itemCount,
                        updatedAt: new Date().toISOString()
                    });
                }
            } catch (error) {
                console.error('Ошибка синхронизации корзины с сервером:', error);
            }
        }

        // Удаление товара из корзины
        async removeItem(itemId) {
            try {
                // Преобразуем itemId в число, если это строка
                const numericItemId = typeof itemId === 'string' ? parseFloat(itemId) : itemId;
                const itemIndex = this.cart.items.findIndex(item => item.id === numericItemId);
                if (itemIndex === -1) {
                    throw new Error('Товар не найден в корзине');
                }

                this.cart.items.splice(itemIndex, 1);
                this.calculateTotals();
                this.saveCartToStorage();
                this.notifyListeners();

                // Синхронизируем с сервером
                await this.syncCartWithServer();

                return { success: true, message: 'Товар удален из корзины' };
            } catch (error) {
                console.error('Ошибка удаления товара из корзины:', error);
                return { success: false, error: error.message };
            }
        }

        // Обновление количества товара
        async updateQuantity(itemId, newQuantity) {
            try {
                console.log('updateQuantity called with:', { itemId, newQuantity, type: typeof itemId });
                console.log('Current cart items:', this.cart.items.map(item => ({ id: item.id, type: typeof item.id })));
                
                if (newQuantity < 1) {
                    return await this.removeItem(itemId);
                }

                // Преобразуем itemId в число, если это строка
                const numericItemId = typeof itemId === 'string' ? parseFloat(itemId) : itemId;
                console.log('Looking for item with ID:', numericItemId);

                const item = this.cart.items.find(item => item.id === numericItemId);
                if (!item) {
                    console.error('Item not found. Available items:', this.cart.items.map(item => item.id));
                    throw new Error('Товар не найден в корзине');
                }

                // Проверяем доступность товара
                if (item.product.stockQuantity < newQuantity) {
                    throw new Error(`Доступно только ${item.product.stockQuantity} шт.`);
                }

                item.quantity = newQuantity;
                this.calculateTotals();
                this.saveCartToStorage();
                this.notifyListeners();

                // Синхронизируем с сервером
                await this.syncCartWithServer();

                return { success: true, message: 'Количество обновлено' };
            } catch (error) {
                console.error('Ошибка обновления количества:', error);
                return { success: false, error: error.message };
            }
        }

        // Очистка корзины
        async clearCart() {
            try {
                this.cart = { items: [], total: 0, itemCount: 0, lastUpdated: new Date().toISOString() };
                this.saveCartToStorage();
                this.notifyListeners();

                // Синхронизируем с сервером
                await this.syncCartWithServer();

                return { success: true, message: 'Корзина очищена' };
            } catch (error) {
                console.error('Ошибка очистки корзины:', error);
                return { success: false, error: error.message };
            }
        }

        // Расчет итогов
        calculateTotals() {
            this.cart.itemCount = this.cart.items.reduce((total, item) => total + item.quantity, 0);
            this.cart.total = this.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
            this.cart.lastUpdated = new Date().toISOString();
        }

        // Получение корзины
        getCart() {
            return { ...this.cart };
        }

        // Получение количества товаров
        getItemCount() {
            return this.cart.itemCount;
        }

        // Получение общей суммы
        getTotal() {
            return this.cart.total;
        }

        // Проверка пустоты корзины
        isEmpty() {
            return this.cart.items.length === 0;
        }

        // Подписка на изменения корзины
        subscribe(callback) {
            this.listeners.push(callback);
            return () => {
                const index = this.listeners.indexOf(callback);
                if (index > -1) {
                    this.listeners.splice(index, 1);
                }
            };
        }

        // Уведомление слушателей
        notifyListeners() {
            this.listeners.forEach(callback => {
                try {
                    callback(this.getCart());
                } catch (error) {
                    console.error('Ошибка в callback корзины:', error);
                }
            });
        }

        // Анимация добавления товара
        animateAddToCart(element) {
            if (!element) return;

            // Создаем клон элемента для анимации
            const clone = element.cloneNode(true);
            clone.style.position = 'fixed';
            clone.style.zIndex = '9999';
            clone.style.pointerEvents = 'none';
            clone.style.transform = 'scale(1)';
            clone.style.transition = 'all 0.5s ease-out';
            
            document.body.appendChild(clone);

            // Получаем позицию корзины в хедере
            const cartIcon = document.querySelector('.header__menu-icons-item:last-child');
            const cartRect = cartIcon ? cartIcon.getBoundingClientRect() : { left: window.innerWidth - 100, top: 50 };

            // Анимируем к корзине
            setTimeout(() => {
                clone.style.transform = `scale(0.3) translate(${cartRect.left - element.getBoundingClientRect().left}px, ${cartRect.top - element.getBoundingClientRect().top}px)`;
                clone.style.opacity = '0.5';
            }, 50);

            // Удаляем элемент после анимации
            setTimeout(() => {
                if (clone.parentNode) {
                    clone.parentNode.removeChild(clone);
                }
            }, 550);
        }

        // Инициализация при загрузке страницы
        async init() {
            console.log('Cart init started, current cart:', this.cart);
            
            // Синхронизируем с сервером при загрузке
            await this.syncWithServer();
            
            console.log('Cart after sync:', this.cart);
            
            // Обновляем счетчики в UI
            this.updateCartUI();
            
            console.log('Cart init completed');
        }

        // Обновление UI корзины
        updateCartUI() {
            const cartCounters = document.querySelectorAll('.cart-count');
            const cartTotals = document.querySelectorAll('.cart-total');
            
            cartCounters.forEach(counter => {
                counter.textContent = this.getItemCount();
                counter.style.display = this.isEmpty() ? 'none' : 'inline';
            });

            cartTotals.forEach(total => {
                total.textContent = `$${this.getTotal().toFixed(2)}`;
            });
        }
    }

    // Создаем глобальный экземпляр менеджера корзины (синглтон)
    let cartManager = null;
    
    function getCartManager() {
        if (!cartManager) {
            console.log('Creating new CartManager instance');
            cartManager = new CartManager();
        } else {
            console.log('Using existing CartManager instance');
        }
        return cartManager;
    }
    
    // Экспортируем в глобальную область
    window.SneakerStoreCart = {
        get cartManager() { return getCartManager(); },
        
        // Удобные методы
        addItem: (productId, size, color, quantity) => getCartManager().addItem(productId, size, color, quantity),
        removeItem: (itemId) => getCartManager().removeItem(itemId),
        updateQuantity: (itemId, quantity) => getCartManager().updateQuantity(itemId, quantity),
        clearCart: () => getCartManager().clearCart(),
        getCart: () => getCartManager().getCart(),
        getItemCount: () => getCartManager().getItemCount(),
        getTotal: () => getCartManager().getTotal(),
        isEmpty: () => getCartManager().isEmpty(),
        subscribe: (callback) => getCartManager().subscribe(callback),
        init: () => getCartManager().init()
    };

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
        getCartManager().init();
    });

    // Отладка при уходе со страницы
    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, saving cart...');
    });

    // Отладка при загрузке страницы
    window.addEventListener('load', () => {
        console.log('Page loaded, cart initialized');
    });
})();
