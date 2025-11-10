/**
 * Система аутентификации для Sneaker Store
 */

class AuthManager {
  constructor() {
    this.currentUser = null;
    this.sessionKey = 'sneaker_store_session';
    this.roles = {
      CUSTOMER: 'customer',
      MANAGER: 'manager', 
      ADMIN: 'admin'
    };
    
    // Инициализация при создании
    this.init();
  }

  /**
   * Инициализация системы аутентификации
   */
  init() {
    // Восстанавливаем сессию из localStorage
    this.restoreSession();
    
    // Обновляем UI в зависимости от статуса авторизации
    this.updateUI();
    
    // Добавляем обработчики событий
    this.setupEventListeners();
  }

  /**
   * Простое хеширование пароля (для демо, в продакшене используйте bcrypt)
   * @param {string} password - Пароль
   * @returns {string} - Хеш пароля
   */
  hashPassword(password) {
    let hash = 0;
    if (password.length === 0) return hash.toString();
    
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return Math.abs(hash).toString(16);
  }

  /**
   * Валидация email
   * @param {string} email - Email для проверки
   * @returns {boolean} - Валидный ли email
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Валидация пароля
   * @param {string} password - Пароль для проверки
   * @returns {Object} - Результат валидации
   */
  validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Пароль должен содержать минимум 8 символов');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Пароль должен содержать минимум одну заглавную букву');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Пароль должен содержать минимум одну строчную букву');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Пароль должен содержать минимум одну цифру');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Пароль должен содержать минимум один специальный символ');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * Валидация имени
   * @param {string} name - Имя для проверки
   * @returns {Object} - Результат валидации
   */
  validateName(name) {
    const errors = [];
    
    if (name.length < 2) {
      errors.push('Имя должно содержать минимум 2 символа');
    }
    
    if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
      errors.push('Имя может содержать только буквы и пробелы');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * Регистрация нового пользователя
   * @param {Object} userData - Данные пользователя
   * @returns {Promise<Object>} - Результат регистрации
   */
  async register(userData) {
    try {
      const { name, email, password, confirmPassword, terms } = userData;
      
      // Валидация данных
      const validation = this.validateRegistrationData(userData);
      if (!validation.isValid) {
        return {
          success: false,
          errors: validation.errors
        };
      }
      
      // Проверяем, не существует ли уже пользователь с таким email
      const existingUser = await this.checkUserExists(email);
      if (existingUser) {
        return {
          success: false,
          errors: ['Пользователь с таким email уже существует']
        };
      }
      
      // Создаем нового пользователя
      const newUser = {
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || '',
        email: email.toLowerCase(),
        password: this.hashPassword(password),
        phone: '',
        address: {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        },
        isAdmin: false,
        role: this.roles.CUSTOMER,
        createdAt: new Date().toISOString(),
        lastLogin: null
      };
      
      // Отправляем запрос на создание пользователя
      const apiClient = new SneakerStoreAPI.ApiClient();
      const response = await apiClient.post('/users', newUser);
      
      if (response.success) {
        // Автоматически входим в систему после регистрации
        await this.login(email, password);
        
        return {
          success: true,
          message: 'Регистрация прошла успешно!',
          user: response.data
        };
      } else {
        return {
          success: false,
          errors: ['Ошибка создания пользователя']
        };
      }
      
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      return {
        success: false,
        errors: ['Произошла ошибка при регистрации']
      };
    }
  }

  /**
   * Вход в систему
   * @param {string} email - Email пользователя
   * @param {string} password - Пароль
   * @param {boolean} remember - Запомнить пользователя
   * @returns {Promise<Object>} - Результат входа
   */
  async login(email, password, remember = false) {
    try {
      // Валидация входных данных
      if (!this.validateEmail(email)) {
        return {
          success: false,
          errors: ['Неверный формат email']
        };
      }
      
      if (!password || password.length < 1) {
        return {
          success: false,
          errors: ['Введите пароль']
        };
      }
      
      // Ищем пользователя по email
      const apiClient = new SneakerStoreAPI.ApiClient();
      const response = await apiClient.get('/users', { email: email.toLowerCase() });
      
      if (!response.success || !response.data || response.data.length === 0) {
        return {
          success: false,
          errors: ['Пользователь не найден']
        };
      }
      
      const user = response.data[0];
      const hashedPassword = this.hashPassword(password);
      
      // Проверяем пароль (сначала хеш, потом обычный пароль для совместимости)
      if (user.password !== hashedPassword && user.password !== password) {
        console.log('Password check failed:');
        console.log('User password in DB:', user.password);
        console.log('Hashed password:', hashedPassword);
        console.log('Plain password:', password);
        return {
          success: false,
          errors: ['Неверный пароль']
        };
      }
      
      // Обновляем время последнего входа
      const updatedUser = {
        ...user,
        lastLogin: new Date().toISOString()
      };
      
      await apiClient.put(`/users/${user.id}`, updatedUser);
      
      // Сохраняем сессию
      console.log('Setting current user:', updatedUser);
      this.currentUser = updatedUser;
      console.log('Calling saveSession with remember:', remember);
      this.saveSession(remember);
      
      // Обновляем UI
      this.updateUI();
      
      return {
        success: true,
        message: 'Вход выполнен успешно!',
        user: updatedUser
      };
      
    } catch (error) {
      console.error('Ошибка входа:', error);
      return {
        success: false,
        errors: ['Произошла ошибка при входе в систему']
      };
    }
  }

  /**
   * Выход из системы
   */
  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.sessionKey);
    sessionStorage.removeItem(this.sessionKey);
    
    // Обновляем UI
    this.updateUI();
    
    // Перенаправляем на главную страницу
    if (window.location.pathname.includes('admin') || 
        window.location.pathname.includes('manager')) {
      window.location.href = '/index.html';
    }
  }

  /**
   * Проверка, авторизован ли пользователь
   * @returns {boolean} - Авторизован ли пользователь
   */
  isAuthenticated() {
    return this.currentUser !== null;
  }

  /**
   * Получение текущего пользователя
   * @returns {Object|null} - Текущий пользователь
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Проверка роли пользователя
   * @param {string} role - Роль для проверки
   * @returns {boolean} - Есть ли у пользователя данная роль
   */
  hasRole(role) {
    if (!this.currentUser) return false;
    return this.currentUser.role === role || this.currentUser.isAdmin;
  }

  /**
   * Проверка, является ли пользователь администратором
   * @returns {boolean} - Администратор ли пользователь
   */
  isAdmin() {
    return this.currentUser && (this.currentUser.isAdmin || this.currentUser.role === this.roles.ADMIN);
  }

  /**
   * Проверка, является ли пользователь менеджером
   * @returns {boolean} - Менеджер ли пользователь
   */
  isManager() {
    return this.currentUser && (this.currentUser.role === this.roles.MANAGER || this.isAdmin());
  }

  /**
   * Сохранение сессии
   * @param {boolean} remember - Запомнить пользователя
   */
  saveSession(remember = false) {
    console.log('Saving session, remember:', remember);
    console.log('Current user:', this.currentUser);
    
    const sessionData = {
      user: this.currentUser,
      timestamp: Date.now()
    };
    
    console.log('Session data to save:', sessionData);
    
    if (remember) {
      localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
      console.log('Session saved to localStorage');
    } else {
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
      console.log('Session saved to sessionStorage');
    }
  }

  /**
   * Восстановление сессии
   */
  restoreSession() {
    console.log('Restoring session...');
    console.log('Session key:', this.sessionKey);
    
    let sessionData = null;
    
    // Сначала проверяем sessionStorage
    const sessionStorageData = sessionStorage.getItem(this.sessionKey);
    console.log('SessionStorage data:', sessionStorageData);
    if (sessionStorageData) {
      sessionData = JSON.parse(sessionStorageData);
    }
    
    // Если нет в sessionStorage, проверяем localStorage
    if (!sessionData) {
      const localStorageData = localStorage.getItem(this.sessionKey);
      console.log('LocalStorage data:', localStorageData);
      if (localStorageData) {
        sessionData = JSON.parse(localStorageData);
      }
    }
    
    console.log('Parsed session data:', sessionData);
    
    if (sessionData && sessionData.user) {
      // Проверяем, не истекла ли сессия (24 часа)
      const sessionAge = Date.now() - sessionData.timestamp;
      const maxAge = 24 * 60 * 60 * 1000; // 24 часа
      
      console.log('Session age:', sessionAge, 'ms');
      console.log('Max age:', maxAge, 'ms');
      
      if (sessionAge < maxAge) {
        this.currentUser = sessionData.user;
        console.log('Session restored successfully, current user:', this.currentUser);
      } else {
        console.log('Session expired, logging out');
        // Сессия истекла, очищаем
        this.logout();
      }
    } else {
      console.log('No session data found');
    }
  }

  /**
   * Валидация данных регистрации
   * @param {Object} userData - Данные пользователя
   * @returns {Object} - Результат валидации
   */
  validateRegistrationData(userData) {
    const { name, email, password, confirmPassword, terms } = userData;
    const errors = [];
    
    // Валидация имени
    const nameValidation = this.validateName(name);
    if (!nameValidation.isValid) {
      errors.push(...nameValidation.errors);
    }
    
    // Валидация email
    if (!this.validateEmail(email)) {
      errors.push('Неверный формат email');
    }
    
    // Валидация пароля
    const passwordValidation = this.validatePassword(password);
    if (!passwordValidation.isValid) {
      errors.push(...passwordValidation.errors);
    }
    
    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      errors.push('Пароли не совпадают');
    }
    
    // Проверка согласия с условиями
    if (!terms) {
      errors.push('Необходимо согласиться с условиями использования');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * Проверка существования пользователя
   * @param {string} email - Email для проверки
   * @returns {Promise<boolean>} - Существует ли пользователь
   */
  async checkUserExists(email) {
    try {
      const apiClient = new SneakerStoreAPI.ApiClient();
      const response = await apiClient.get('/users', { email: email.toLowerCase() });
      return response.success && response.data && response.data.length > 0;
    } catch (error) {
      console.error('Ошибка проверки пользователя:', error);
      return false;
    }
  }

  /**
   * Настройка обработчиков событий
   */
  setupEventListeners() {
    // Обработчик для форм входа и регистрации
    document.addEventListener('DOMContentLoaded', () => {
      this.setupLoginForm();
      this.setupRegisterForm();
    });
  }

  /**
   * Настройка формы входа
   */
  setupLoginForm() {
    const loginForm = document.querySelector('#login-form, form[data-auth="login"]');
    if (!loginForm) return;

    if (loginForm.dataset.authHandler === 'custom') {
      console.log('Login form uses custom handler, skipping AuthManager binding');
      return;
    }

    if (loginForm.dataset.authHandler === 'authManager') {
      return;
    }

    loginForm.dataset.authHandler = 'authManager';

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('input[name="email"]').value;
      const password = loginForm.querySelector('input[name="password"]').value;
      const remember = loginForm.querySelector('input[name="remember"]').checked ?? false;

      const result = await this.login(email, password, remember);

      if (result.success) {
        this.showMessage('Вход выполнен успешно!', 'success');
        const redirectUrl = this.getRedirectUrl(result.user);
        window.location.assign(redirectUrl);
      } else {
        this.showMessage(result.errors.join(', '), 'error');
      }
    });
  }

  getRedirectUrl(user) {
    return new URL('./index.html', window.location.href).toString();
  }

  /**
   * Настройка формы регистрации
   */
  setupRegisterForm() {
    const registerForm = document.querySelector('#register-form, .auth__form');
    if (!registerForm) return;
    
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = registerForm.querySelector('input[name="name"]');
      const emailInput = registerForm.querySelector('input[name="email"]');
      const passwordInput = registerForm.querySelector('input[name="password"]');
      const confirmPasswordInput = registerForm.querySelector('input[name="confirmPassword"]');
      const termsInput = registerForm.querySelector('input[name="terms"]');
      
      if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput || !termsInput) {
        console.log('Register form elements not found, skipping registration setup');
        return;
      }
      
      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const terms = termsInput.checked;
      
      const userData = { name, email, password, confirmPassword, terms };
      const result = await this.register(userData);
      
      if (result.success) {
        this.showMessage('Регистрация прошла успешно!', 'success');
        setTimeout(() => {
          window.location.href = '/index.html';
        }, 1500);
      } else {
        this.showMessage(result.errors.join(', '), 'error');
      }
    });
  }

  /**
   * Обновление UI в зависимости от статуса авторизации
   */
  updateUI() {
    // Обновляем навигацию
    this.updateNavigation();
    
    // Обновляем контент в зависимости от роли
    this.updateRoleBasedContent();
    
    // Обновляем кнопки входа/выхода
    this.updateAuthButtons();
  }

  /**
   * Обновление навигации
   */
  updateNavigation() {
    const nav = document.querySelector('.header__nav, nav');
    if (!nav) return;
    
    // Добавляем/удаляем элементы навигации в зависимости от роли
    this.updateNavItems(nav);
  }

  /**
   * Обновление элементов навигации
   * @param {Element} nav - Элемент навигации
   */
  updateNavItems(nav) {
    // Удаляем существующие элементы роли
    const existingRoleItems = nav.querySelectorAll('.nav-role-item');
    existingRoleItems.forEach(item => item.remove());
    
    if (this.isAuthenticated()) {
      const user = this.getCurrentUser();
      
      // Добавляем элементы для авторизованных пользователей
      if (this.isAdmin()) {
        this.addNavItem(nav, 'Admin Panel', '/admin.html', 'nav-role-item');
      }
      
      if (this.isManager() || this.isAdmin()) {
        this.addNavItem(nav, 'Manager Panel', '/manager.html', 'nav-role-item');
      }
      
      // Добавляем профиль пользователя
      this.addNavItem(nav, `Profile (${user.firstName})`, '/profile.html', 'nav-role-item');
    }
  }

  /**
   * Добавление элемента навигации
   * @param {Element} nav - Элемент навигации
   * @param {string} text - Текст ссылки
   * @param {string} href - URL ссылки
   * @param {string} className - CSS класс
   */
  addNavItem(nav, text, href, className) {
    const li = document.createElement('li');
    li.className = className;
    
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.className = 'nav-link';
    
    li.appendChild(a);
    nav.appendChild(li);
  }

  /**
   * Обновление контента в зависимости от роли
   */
  updateRoleBasedContent() {
    // Скрываем/показываем элементы в зависимости от роли
    const adminElements = document.querySelectorAll('.admin-only');
    const managerElements = document.querySelectorAll('.manager-only');
    const customerElements = document.querySelectorAll('.customer-only');
    
    adminElements.forEach(el => {
      el.style.display = this.isAdmin() ? 'block' : 'none';
    });
    
    managerElements.forEach(el => {
      el.style.display = this.isManager() ? 'block' : 'none';
    });
    
    customerElements.forEach(el => {
      el.style.display = this.isAuthenticated() ? 'block' : 'none';
    });
  }

  /**
   * Обновление кнопок входа/выхода
   */
  updateAuthButtons() {
    const authButtons = document.querySelectorAll('.auth-button, .login-button, .logout-button');
    
    authButtons.forEach(button => {
      if (this.isAuthenticated()) {
        if (button.classList.contains('login-button')) {
          button.style.display = 'none';
        }
        if (button.classList.contains('logout-button')) {
          button.style.display = 'inline-block';
          button.onclick = () => this.logout();
        }
      } else {
        if (button.classList.contains('login-button')) {
          button.style.display = 'inline-block';
        }
        if (button.classList.contains('logout-button')) {
          button.style.display = 'none';
        }
      }
    });
  }

  /**
   * Показ сообщения пользователю
   * @param {string} message - Сообщение
   * @param {string} type - Тип сообщения (success, error, info)
   */
  showMessage(message, type = 'info') {
    // Используем прелоадер для показа сообщений
    if (window.SneakerStorePreloader && window.SneakerStorePreloader.preloader) {
      window.SneakerStorePreloader.preloader.showMessage(message, 3000);
    } else {
      // Fallback - обычный alert
      alert(message);
    }
  }
}

// Создаем глобальный экземпляр менеджера аутентификации
const authManager = new AuthManager();

// Экспортируем для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuthManager, authManager };
} else {
  // Для использования в браузере
  console.log('Exporting SneakerStoreAuth to window...');
  console.log('AuthManager:', typeof AuthManager);
  console.log('authManager:', typeof authManager);
  console.log('authManager.login:', typeof authManager.login);
  
  window.SneakerStoreAuth = { 
    AuthManager, 
    authManager: authManager,
    login: (email, password, remember) => authManager.login(email, password, remember),
    logout: () => authManager.logout(),
    isAuthenticated: () => authManager.isAuthenticated(),
    getCurrentUser: () => authManager.getCurrentUser(),
    isAdmin: () => authManager.isAdmin(),
    isManager: () => authManager.isManager()
  };
  
  console.log('SneakerStoreAuth exported:', window.SneakerStoreAuth);
  console.log('SneakerStoreAuth.authManager:', window.SneakerStoreAuth.authManager);
  console.log('SneakerStoreAuth.authManager.login:', typeof window.SneakerStoreAuth.authManager.login);
}
