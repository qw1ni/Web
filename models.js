/**
 * Модели данных для Sneaker Store API
 */

/**
 * Модель пользователя
 * @typedef {Object} User
 * @property {number} id - Уникальный идентификатор пользователя
 * @property {string} email - Email пользователя (уникальный)
 * @property {string} password - Пароль пользователя (хешированный)
 * @property {string} firstName - Имя пользователя
 * @property {string} lastName - Фамилия пользователя
 * @property {string} phone - Номер телефона
 * @property {Object} address - Адрес пользователя
 * @property {string} address.street - Улица
 * @property {string} address.city - Город
 * @property {string} address.state - Штат/область
 * @property {string} address.zipCode - Почтовый индекс
 * @property {string} address.country - Страна
 * @property {boolean} isAdmin - Является ли пользователь администратором
 * @property {string} createdAt - Дата создания аккаунта (ISO 8601)
 * @property {string} lastLogin - Дата последнего входа (ISO 8601)
 */

/**
 * Модель товара
 * @typedef {Object} Product
 * @property {number} id - Уникальный идентификатор товара
 * @property {string} name - Название товара
 * @property {string} brand - Бренд (Nike, Adidas, Jordan, etc.)
 * @property {string} model - Модель товара
 * @property {number} price - Текущая цена
 * @property {number} originalPrice - Оригинальная цена
 * @property {number} discount - Процент скидки (0-100)
 * @property {string} category - Категория (Basketball, Lifestyle, Running, etc.)
 * @property {string} gender - Пол (Unisex, Men, Women, Kids)
 * @property {string[]} sizes - Доступные размеры
 * @property {string[]} colors - Доступные цвета
 * @property {string} description - Описание товара
 * @property {string[]} images - Массив путей к изображениям
 * @property {boolean} inStock - Есть ли товар в наличии
 * @property {number} stockQuantity - Количество на складе
 * @property {number} rating - Рейтинг товара (0-5)
 * @property {number} reviewsCount - Количество отзывов
 * @property {string[]} tags - Теги для поиска и фильтрации
 * @property {string} releaseDate - Дата релиза (YYYY-MM-DD)
 * @property {string} createdAt - Дата добавления в каталог (ISO 8601)
 */

/**
 * Модель элемента корзины
 * @typedef {Object} CartItem
 * @property {number} productId - ID товара
 * @property {number} quantity - Количество
 * @property {string} size - Выбранный размер
 * @property {string} color - Выбранный цвет
 * @property {number} price - Цена на момент добавления
 */

/**
 * Модель корзины
 * @typedef {Object} Cart
 * @property {number} id - Уникальный идентификатор корзины
 * @property {number} userId - ID пользователя-владельца корзины
 * @property {CartItem[]} items - Массив товаров в корзине
 * @property {number} total - Общая стоимость корзины
 * @property {string} createdAt - Дата создания корзины (ISO 8601)
 * @property {string} updatedAt - Дата последнего обновления (ISO 8601)
 */

/**
 * Модель элемента избранного
 * @typedef {Object} WishlistItem
 * @property {number} productId - ID товара
 * @property {string} size - Предпочитаемый размер
 * @property {string} color - Предпочитаемый цвет
 * @property {string} addedAt - Дата добавления в избранное (ISO 8601)
 */

/**
 * Модель избранного
 * @typedef {Object} Wishlist
 * @property {number} id - Уникальный идентификатор списка избранного
 * @property {number} userId - ID пользователя-владельца списка
 * @property {WishlistItem[]} items - Массив товаров в избранном
 * @property {string} createdAt - Дата создания списка (ISO 8601)
 * @property {string} updatedAt - Дата последнего обновления (ISO 8601)
 */

/**
 * Модель ответа API
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Успешность операции
 * @property {string} message - Сообщение о результате
 * @property {*} data - Данные ответа
 * @property {string} timestamp - Время ответа (ISO 8601)
 */

/**
 * Модель ошибки API
 * @typedef {Object} ApiError
 * @property {boolean} success - Всегда false
 * @property {string} message - Сообщение об ошибке
 * @property {string} error - Тип ошибки
 * @property {number} statusCode - HTTP статус код
 * @property {string} timestamp - Время ошибки (ISO 8601)
 */

/**
 * Модель фильтров для товаров
 * @typedef {Object} ProductFilters
 * @property {string[]} brands - Фильтр по брендам
 * @property {string[]} categories - Фильтр по категориям
 * @property {string[]} genders - Фильтр по полу
 * @property {number} minPrice - Минимальная цена
 * @property {number} maxPrice - Максимальная цена
 * @property {number} minRating - Минимальный рейтинг
 * @property {boolean} inStock - Только в наличии
 * @property {string[]} sizes - Фильтр по размерам
 * @property {string[]} colors - Фильтр по цветам
 * @property {string[]} tags - Фильтр по тегам
 */

/**
 * Модель пагинации
 * @typedef {Object} Pagination
 * @property {number} page - Текущая страница (начиная с 1)
 * @property {number} limit - Количество элементов на странице
 * @property {number} total - Общее количество элементов
 * @property {number} totalPages - Общее количество страниц
 * @property {boolean} hasNext - Есть ли следующая страница
 * @property {boolean} hasPrev - Есть ли предыдущая страница
 */

/**
 * Модель сортировки
 * @typedef {Object} SortOptions
 * @property {string} field - Поле для сортировки
 * @property {'asc'|'desc'} order - Направление сортировки
 */

// Экспорт типов для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    User: 'User',
    Product: 'Product',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Wishlist: 'Wishlist',
    WishlistItem: 'WishlistItem',
    ApiResponse: 'ApiResponse',
    ApiError: 'ApiError',
    ProductFilters: 'ProductFilters',
    Pagination: 'Pagination',
    SortOptions: 'SortOptions'
  };
}
