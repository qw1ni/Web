/**
 * API утилиты для работы с JSON Server
 */

// Базовый URL API
const API_BASE_URL = 'http://localhost:3000';

/**
 * Класс для работы с API
 */
class ApiClient {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Базовый метод для выполнения HTTP запросов
   * @param {string} endpoint - Эндпоинт API
   * @param {Object} options - Опции запроса
   * @returns {Promise<Object>} - Ответ API
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data,
        status: response.status,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        status: error.status || 500,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * GET запрос
   * @param {string} endpoint - Эндпоинт
   * @param {Object} params - Параметры запроса
   * @returns {Promise<Object>} - Ответ API
   */
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  /**
   * POST запрос
   * @param {string} endpoint - Эндпоинт
   * @param {Object} data - Данные для отправки
   * @returns {Promise<Object>} - Ответ API
   */
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT запрос
   * @param {string} endpoint - Эндпоинт
   * @param {Object} data - Данные для отправки
   * @returns {Promise<Object>} - Ответ API
   */
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * PATCH запрос
   * @param {string} endpoint - Эндпоинт
   * @param {Object} data - Данные для отправки
   * @returns {Promise<Object>} - Ответ API
   */
  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE запрос
   * @param {string} endpoint - Эндпоинт
   * @returns {Promise<Object>} - Ответ API
   */
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

/**
 * API для работы с пользователями
 */
class UsersAPI {
  constructor(apiClient) {
    this.api = apiClient;
  }

  /**
   * Получить всех пользователей
   * @param {Object} filters - Фильтры
   * @returns {Promise<Object>} - Список пользователей
   */
  async getUsers(filters = {}) {
    return this.api.get('/users', filters);
  }

  /**
   * Получить пользователя по ID
   * @param {number} id - ID пользователя
   * @returns {Promise<Object>} - Пользователь
   */
  async getUserById(id) {
    return this.api.get(`/users/${id}`);
  }

  /**
   * Получить пользователя по email
   * @param {string} email - Email пользователя
   * @returns {Promise<Object>} - Пользователь
   */
  async getUserByEmail(email) {
    return this.api.get('/users', { email });
  }

  /**
   * Создать нового пользователя
   * @param {Object} userData - Данные пользователя
   * @returns {Promise<Object>} - Созданный пользователь
   */
  async createUser(userData) {
    return this.api.post('/users', userData);
  }

  /**
   * Обновить пользователя
   * @param {number} id - ID пользователя
   * @param {Object} userData - Новые данные пользователя
   * @returns {Promise<Object>} - Обновленный пользователь
   */
  async updateUser(id, userData) {
    return this.api.put(`/users/${id}`, userData);
  }

  /**
   * Удалить пользователя
   * @param {number} id - ID пользователя
   * @returns {Promise<Object>} - Результат удаления
   */
  async deleteUser(id) {
    return this.api.delete(`/users/${id}`);
  }
}

/**
 * API для работы с товарами
 */
class ProductsAPI {
  constructor(apiClient) {
    this.api = apiClient;
  }

  /**
   * Получить все товары
   * @param {Object} filters - Фильтры и параметры
   * @returns {Promise<Object>} - Список товаров
   */
  async getProducts(filters = {}) {
    return this.api.get('/products', filters);
  }

  /**
   * Получить товар по ID
   * @param {number} id - ID товара
   * @returns {Promise<Object>} - Товар
   */
  async getProductById(id) {
    return this.api.get(`/products/${id}`);
  }

  /**
   * Поиск товаров
   * @param {string} query - Поисковый запрос
   * @param {Object} filters - Дополнительные фильтры
   * @returns {Promise<Object>} - Найденные товары
   */
  async searchProducts(query, filters = {}) {
    const searchParams = {
      q: query,
      ...filters
    };
    return this.api.get('/products', searchParams);
  }

  /**
   * Получить товары по категории
   * @param {string} category - Категория товаров
   * @param {Object} filters - Дополнительные фильтры
   * @returns {Promise<Object>} - Товары категории
   */
  async getProductsByCategory(category, filters = {}) {
    return this.api.get('/products', { category, ...filters });
  }

  /**
   * Получить товары по бренду
   * @param {string} brand - Бренд товаров
   * @param {Object} filters - Дополнительные фильтры
   * @returns {Promise<Object>} - Товары бренда
   */
  async getProductsByBrand(brand, filters = {}) {
    return this.api.get('/products', { brand, ...filters });
  }

  /**
   * Создать новый товар
   * @param {Object} productData - Данные товара
   * @returns {Promise<Object>} - Созданный товар
   */
  async createProduct(productData) {
    return this.api.post('/products', productData);
  }

  /**
   * Обновить товар
   * @param {number} id - ID товара
   * @param {Object} productData - Новые данные товара
   * @returns {Promise<Object>} - Обновленный товар
   */
  async updateProduct(id, productData) {
    return this.api.put(`/products/${id}`, productData);
  }

  /**
   * Удалить товар
   * @param {number} id - ID товара
   * @returns {Promise<Object>} - Результат удаления
   */
  async deleteProduct(id) {
    return this.api.delete(`/products/${id}`);
  }
}

/**
 * API для работы с корзинами
 */
class CartsAPI {
  constructor(apiClient) {
    this.api = apiClient;
  }

  /**
   * Получить корзину пользователя
   * @param {number} userId - ID пользователя
   * @returns {Promise<Object>} - Корзина пользователя
   */
  async getCartByUserId(userId) {
    return this.api.get('/carts', { userId });
  }

  /**
   * Получить корзину по ID
   * @param {number} id - ID корзины
   * @returns {Promise<Object>} - Корзина
   */
  async getCartById(id) {
    return this.api.get(`/carts/${id}`);
  }

  /**
   * Создать новую корзину
   * @param {Object} cartData - Данные корзины
   * @returns {Promise<Object>} - Созданная корзина
   */
  async createCart(cartData) {
    return this.api.post('/carts', cartData);
  }

  /**
   * Обновить корзину
   * @param {number} id - ID корзины
   * @param {Object} cartData - Новые данные корзины
   * @returns {Promise<Object>} - Обновленная корзина
   */
  async updateCart(id, cartData) {
    return this.api.put(`/carts/${id}`, cartData);
  }

  /**
   * Добавить товар в корзину
   * @param {number} cartId - ID корзины
   * @param {Object} item - Товар для добавления
   * @returns {Promise<Object>} - Обновленная корзина
   */
  async addToCart(cartId, item) {
    const cartResponse = await this.getCartById(cartId);
    if (!cartResponse.success) return cartResponse;

    const cart = cartResponse.data;
    const existingItemIndex = cart.items.findIndex(
      i => i.productId === item.productId && i.size === item.size && i.color === item.color
    );

    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += item.quantity;
    } else {
      cart.items.push(item);
    }

    // Пересчитываем общую стоимость
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cart.updatedAt = new Date().toISOString();

    return this.updateCart(cartId, cart);
  }

  /**
   * Удалить товар из корзины
   * @param {number} cartId - ID корзины
   * @param {number} productId - ID товара
   * @param {string} size - Размер товара
   * @param {string} color - Цвет товара
   * @returns {Promise<Object>} - Обновленная корзина
   */
  async removeFromCart(cartId, productId, size, color) {
    const cartResponse = await this.getCartById(cartId);
    if (!cartResponse.success) return cartResponse;

    const cart = cartResponse.data;
    cart.items = cart.items.filter(
      item => !(item.productId === productId && item.size === size && item.color === color)
    );

    // Пересчитываем общую стоимость
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cart.updatedAt = new Date().toISOString();

    return this.updateCart(cartId, cart);
  }

  /**
   * Очистить корзину
   * @param {number} cartId - ID корзины
   * @returns {Promise<Object>} - Очищенная корзина
   */
  async clearCart(cartId) {
    return this.updateCart(cartId, {
      items: [],
      total: 0,
      updatedAt: new Date().toISOString()
    });
  }

  /**
   * Удалить корзину
   * @param {number} id - ID корзины
   * @returns {Promise<Object>} - Результат удаления
   */
  async deleteCart(id) {
    return this.api.delete(`/carts/${id}`);
  }
}

/**
 * API для работы с избранным
 */
class WishlistsAPI {
  constructor(apiClient) {
    this.api = apiClient;
  }

  /**
   * Получить избранное пользователя
   * @param {number} userId - ID пользователя
   * @returns {Promise<Object>} - Избранное пользователя
   */
  async getWishlistByUserId(userId) {
    return this.api.get('/wishlists', { userId });
  }

  /**
   * Получить избранное по ID
   * @param {number} id - ID избранного
   * @returns {Promise<Object>} - Избранное
   */
  async getWishlistById(id) {
    return this.api.get(`/wishlists/${id}`);
  }

  /**
   * Создать новое избранное
   * @param {Object} wishlistData - Данные избранного
   * @returns {Promise<Object>} - Созданное избранное
   */
  async createWishlist(wishlistData) {
    return this.api.post('/wishlists', wishlistData);
  }

  /**
   * Обновить избранное
   * @param {number} id - ID избранного
   * @param {Object} wishlistData - Новые данные избранного
   * @returns {Promise<Object>} - Обновленное избранное
   */
  async updateWishlist(id, wishlistData) {
    return this.api.put(`/wishlists/${id}`, wishlistData);
  }

  /**
   * Добавить товар в избранное
   * @param {number} wishlistId - ID избранного
   * @param {Object} item - Товар для добавления
   * @returns {Promise<Object>} - Обновленное избранное
   */
  async addToWishlist(wishlistId, item) {
    const wishlistResponse = await this.getWishlistById(wishlistId);
    if (!wishlistResponse.success) return wishlistResponse;

    const wishlist = wishlistResponse.data;
    const existingItemIndex = wishlist.items.findIndex(
      i => i.productId === item.productId && i.size === item.size && i.color === item.color
    );

    if (existingItemIndex < 0) {
      wishlist.items.push({
        ...item,
        addedAt: new Date().toISOString()
      });
      wishlist.updatedAt = new Date().toISOString();
    }

    return this.updateWishlist(wishlistId, wishlist);
  }

  /**
   * Удалить товар из избранного
   * @param {number} wishlistId - ID избранного
   * @param {number} productId - ID товара
   * @param {string} size - Размер товара
   * @param {string} color - Цвет товара
   * @returns {Promise<Object>} - Обновленное избранное
   */
  async removeFromWishlist(wishlistId, productId, size, color) {
    const wishlistResponse = await this.getWishlistById(wishlistId);
    if (!wishlistResponse.success) return wishlistResponse;

    const wishlist = wishlistResponse.data;
    wishlist.items = wishlist.items.filter(
      item => !(item.productId === productId && item.size === size && item.color === color)
    );
    wishlist.updatedAt = new Date().toISOString();

    return this.updateWishlist(wishlistId, wishlist);
  }

  /**
   * Очистить избранное
   * @param {number} wishlistId - ID избранного
   * @returns {Promise<Object>} - Очищенное избранное
   */
  async clearWishlist(wishlistId) {
    return this.updateWishlist(wishlistId, {
      items: [],
      updatedAt: new Date().toISOString()
    });
  }

  /**
   * Удалить избранное
   * @param {number} id - ID избранного
   * @returns {Promise<Object>} - Результат удаления
   */
  async deleteWishlist(id) {
    return this.api.delete(`/wishlists/${id}`);
  }
}

// Создаем экземпляр API клиента
const apiClient = new ApiClient();

// Создаем экземпляры API для каждой сущности
const usersAPI = new UsersAPI(apiClient);
const productsAPI = new ProductsAPI(apiClient);
const cartsAPI = new CartsAPI(apiClient);
const wishlistsAPI = new WishlistsAPI(apiClient);

// Экспортируем API для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ApiClient,
    UsersAPI,
    ProductsAPI,
    CartsAPI,
    WishlistsAPI,
    apiClient,
    usersAPI,
    productsAPI,
    cartsAPI,
    wishlistsAPI
  };
} else {
  // Для использования в браузере
  window.SneakerStoreAPI = {
    ApiClient,
    UsersAPI,
    ProductsAPI,
    CartsAPI,
    WishlistsAPI,
    apiClient,
    usersAPI,
    productsAPI,
    cartsAPI,
    wishlistsAPI
  };
}
