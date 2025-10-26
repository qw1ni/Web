# Sneaker Store API Documentation

## Обзор

JSON Server API для магазина кроссовок с поддержкой пользователей, товаров, корзин и избранного.

**Базовый URL:** `http://localhost:3000`

## Модели данных

### User (Пользователь)
```json
{
  "id": 1,
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1-555-0123",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "isAdmin": false,
  "createdAt": "2024-01-15T10:30:00Z",
  "lastLogin": "2024-01-20T14:22:00Z"
}
```

### Product (Товар)
```json
{
  "id": 1,
  "name": "Air Jordan 1 Retro High OG",
  "brand": "Jordan",
  "model": "Air Jordan 1",
  "price": 170,
  "originalPrice": 200,
  "discount": 15,
  "category": "Basketball",
  "gender": "Unisex",
  "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "colors": ["Black/White", "Red/White", "Blue/White"],
  "description": "Описание товара...",
  "images": ["jordan1-black.jpg", "jordan1-red.jpg"],
  "inStock": true,
  "stockQuantity": 25,
  "rating": 4.8,
  "reviewsCount": 1247,
  "tags": ["basketball", "retro", "classic"],
  "releaseDate": "2024-01-15",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

### Cart (Корзина)
```json
{
  "id": 1,
  "userId": 1,
  "items": [
    {
      "productId": 1,
      "quantity": 1,
      "size": "9",
      "color": "Black/White",
      "price": 170
    }
  ],
  "total": 170,
  "createdAt": "2024-01-20T14:22:00Z",
  "updatedAt": "2024-01-20T14:22:00Z"
}
```

### Wishlist (Избранное)
```json
{
  "id": 1,
  "userId": 1,
  "items": [
    {
      "productId": 5,
      "size": "9",
      "color": "Black/White",
      "addedAt": "2024-01-19T10:30:00Z"
    }
  ],
  "createdAt": "2024-01-15T16:30:00Z",
  "updatedAt": "2024-01-19T10:30:00Z"
}
```

## Эндпоинты

### Пользователи

#### GET /users
Получить всех пользователей
- **Параметры запроса:**
  - `_page` - номер страницы
  - `_limit` - количество элементов на странице
  - `_sort` - поле для сортировки
  - `_order` - порядок сортировки (asc/desc)
  - `email` - фильтр по email
  - `isAdmin` - фильтр по роли администратора

**Пример:**
```bash
GET /users?_page=1&_limit=10&_sort=createdAt&_order=desc
```

#### GET /users/:id
Получить пользователя по ID

**Пример:**
```bash
GET /users/1
```

#### POST /users
Создать нового пользователя

**Тело запроса:**
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "+1-555-0124"
}
```

#### PUT /users/:id
Обновить пользователя

#### DELETE /users/:id
Удалить пользователя

### Товары

#### GET /products
Получить все товары
- **Параметры запроса:**
  - `_page` - номер страницы
  - `_limit` - количество элементов на странице
  - `_sort` - поле для сортировки
  - `_order` - порядок сортировки (asc/desc)
  - `brand` - фильтр по бренду
  - `category` - фильтр по категории
  - `gender` - фильтр по полу
  - `inStock` - фильтр по наличию
  - `price_gte` - минимальная цена
  - `price_lte` - максимальная цена
  - `rating_gte` - минимальный рейтинг
  - `q` - поиск по названию и описанию

**Примеры:**
```bash
# Получить все товары Nike
GET /products?brand=Nike

# Поиск товаров по цене
GET /products?price_gte=100&price_lte=200

# Поиск по тексту
GET /products?q=jordan

# Сортировка по цене
GET /products?_sort=price&_order=asc
```

#### GET /products/:id
Получить товар по ID

#### POST /products
Создать новый товар

#### PUT /products/:id
Обновить товар

#### DELETE /products/:id
Удалить товар

### Корзины

#### GET /carts
Получить все корзины
- **Параметры запроса:**
  - `userId` - фильтр по пользователю

**Пример:**
```bash
GET /carts?userId=1
```

#### GET /carts/:id
Получить корзину по ID

#### POST /carts
Создать новую корзину

**Тело запроса:**
```json
{
  "userId": 1,
  "items": [],
  "total": 0
}
```

#### PUT /carts/:id
Обновить корзину

#### DELETE /carts/:id
Удалить корзину

### Избранное

#### GET /wishlists
Получить все списки избранного
- **Параметры запроса:**
  - `userId` - фильтр по пользователю

**Пример:**
```bash
GET /wishlists?userId=1
```

#### GET /wishlists/:id
Получить избранное по ID

#### POST /wishlists
Создать новый список избранного

**Тело запроса:**
```json
{
  "userId": 1,
  "items": []
}
```

#### PUT /wishlists/:id
Обновить избранное

#### DELETE /wishlists/:id
Удалить избранное

## Специальные эндпоинты JSON Server

### Поиск
```bash
# Полнотекстовый поиск
GET /products?q=jordan

# Поиск по нескольким полям
GET /products?name_like=jordan&brand=Nike
```

### Фильтрация
```bash
# Фильтр по диапазону цен
GET /products?price_gte=100&price_lte=200

# Фильтр по массиву значений
GET /products?brand=Nike&brand=Adidas

# Фильтр по вложенным свойствам
GET /users?address.city=New York
```

### Пагинация
```bash
# Первая страница, 10 элементов
GET /products?_page=1&_limit=10

# Вторая страница, 20 элементов
GET /products?_page=2&_limit=20
```

### Сортировка
```bash
# Сортировка по цене (по возрастанию)
GET /products?_sort=price&_order=asc

# Сортировка по рейтингу (по убыванию)
GET /products?_sort=rating&_order=desc

# Множественная сортировка
GET /products?_sort=brand,price&_order=asc,desc
```

### Операторы
- `_gte` - больше или равно
- `_lte` - меньше или равно
- `_ne` - не равно
- `_like` - содержит (для строк)
- `_q` - полнотекстовый поиск

## Примеры использования

### Получение товаров с фильтрацией
```javascript
// Получить все товары Nike в категории Basketball
fetch('/products?brand=Nike&category=Basketball')

// Получить товары в диапазоне цен 100-200
fetch('/products?price_gte=100&price_lte=200')

// Поиск товаров по названию
fetch('/products?q=air jordan')
```

### Работа с корзиной
```javascript
// Получить корзину пользователя
fetch('/carts?userId=1')

// Добавить товар в корзину
fetch('/carts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    items: [...existingItems, newItem],
    total: newTotal
  })
})
```

### Аутентификация (базовая)
```javascript
// Поиск пользователя по email
fetch('/users?email=user@example.com')

// Проверка пароля (в реальном приложении пароль должен быть хеширован)
const user = await fetch('/users?email=user@example.com&password=password123')
```

## Запуск сервера

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run start:dev

# Запуск в продакшене
npm run start:prod

# Обычный запуск
npm start
```

## Особенности

1. **Автоматическая генерация ID** - JSON Server автоматически генерирует уникальные ID
2. **Валидация данных** - JSON Server проверяет корректность JSON
3. **CORS** - По умолчанию включен CORS для всех доменов
4. **Задержка** - В режиме разработки добавлена задержка 1 секунда для имитации реального API
5. **Горячая перезагрузка** - Автоматическое обновление при изменении db.json

## Ограничения

1. **Нет реальной аутентификации** - Только базовая проверка данных
2. **Нет валидации бизнес-логики** - Только проверка JSON структуры
3. **Нет персистентности** - Данные сбрасываются при перезапуске (кроме db.json)
4. **Нет реальной безопасности** - Только для разработки и тестирования
