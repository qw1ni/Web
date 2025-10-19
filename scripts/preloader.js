/**
 * Моковый прелоадер для Sneaker Store
 */

class Preloader {
  constructor(options = {}) {
    this.options = {
      minLoadingTime: 500, // Минимальное время загрузки в мс
      maxLoadingTime: 1500, // Максимальное время загрузки в мс
      showProgress: false,   // Показывать прогресс-бар
      animationType: 'fade', // Тип анимации: 'fade', 'slide', 'scale'
      ...options
    };
    
    this.isLoading = false;
    this.progress = 0;
    this.loadingSteps = [
      'Загрузка...'
    ];
    this.currentStep = 0;
    
    this.createPreloaderElement();
  }

  /**
   * Создает HTML элемент прелоадера
   */
  createPreloaderElement() {
    // Проверяем, есть ли уже прелоадер
    let existingPreloader = document.getElementById('preloader');
    if (existingPreloader) {
      existingPreloader.remove();
    }
    
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.className = 'preloader';
    
    preloader.innerHTML = `
      <div class="preloader-content">
        <div class="preloader-logo">
          <img src="images/Logo.svg" alt="Sneaker Store" class="logo-image">
        </div>
        <div class="preloader-spinner">
          <div class="spinner"></div>
        </div>
        <div class="preloader-text">
          <div class="loading-text">Загрузка...</div>
          <div class="loading-step">${this.loadingSteps[0]}</div>
        </div>
        ${this.options.showProgress ? `
          <div class="preloader-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 0%"></div>
            </div>
            <div class="progress-text">0%</div>
          </div>
        ` : ''}
      </div>
    `;
    
    // Добавляем стили
    this.addStyles();
    
    // Добавляем в DOM
    document.body.appendChild(preloader);
    this.element = preloader;
  }

  /**
   * Добавляет CSS стили для прелоадера
   */
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
      }

      .preloader.fade-out {
        opacity: 0;
        pointer-events: none;
      }

      .preloader-content {
        text-align: center;
        color: #333;
        max-width: 400px;
        padding: 20px;
      }

      .preloader-logo {
        margin-bottom: 30px;
        animation: logoFloat 2s ease-in-out infinite;
      }

      .logo-image {
        width: 100px;
        height: 100px;
        filter: brightness(0) invert(1) drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));
      }

      @keyframes logoFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .preloader-spinner {
        display: none;
      }

      .spinner {
        display: none;
      }

      .preloader-text {
        display: none;
      }

      .loading-text {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        animation: pulse 1.5s ease-in-out infinite;
      }

      .loading-step {
        font-size: 16px;
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }

      .preloader-progress {
        width: 100%;
        margin-top: 20px;
      }

      .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 10px;
      }

      .progress-fill {
        height: 100%;
        background: white;
        border-radius: 2px;
        transition: width 0.3s ease;
        position: relative;
      }

      .progress-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        animation: shimmer 1.5s infinite;
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      .progress-text {
        font-size: 14px;
        font-weight: bold;
      }

      /* Анимации появления */
      .preloader-content {
        animation: slideInUp 0.6s ease-out;
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Адаптивность */
      @media (max-width: 768px) {
        .preloader-content {
          max-width: 300px;
          padding: 15px;
        }
        
        .logo-image {
          width: 60px;
          height: 60px;
        }
        
        .loading-text {
          font-size: 20px;
        }
        
        .loading-step {
          font-size: 14px;
        }
      }
      
      /* Скрываем все лишние элементы - оставляем только логотип */
      .preloader-spinner,
      .preloader-text,
      .loading-text,
      .loading-step,
      .preloader-progress {
        display: none !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Запускает прелоадер
   * @param {Function} onComplete - Callback при завершении загрузки
   */
  async start(onComplete) {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.progress = 0;
    this.currentStep = 0;
    
    // Показываем прелоадер
    this.element.style.display = 'flex';
    this.element.classList.remove('fade-out');
    
    // Обновляем прогресс
    this.updateProgress();
    
    // Симулируем загрузку
    const loadingTime = this.getRandomLoadingTime();
    const stepTime = loadingTime / this.loadingSteps.length;
    
    for (let i = 0; i < this.loadingSteps.length; i++) {
      await this.delay(stepTime);
      this.currentStep = i + 1;
      this.progress = Math.round((this.currentStep / this.loadingSteps.length) * 100);
      this.updateProgress();
    }
    
    // Дополнительная задержка для завершения
    await this.delay(500);
    
    // Завершаем загрузку
    this.complete(onComplete);
  }

  /**
   * Завершает прелоадер
   * @param {Function} onComplete - Callback при завершении
   */
  complete(onComplete) {
    this.isLoading = false;
    this.progress = 100;
    this.updateProgress();
    
    // Анимация исчезновения
    setTimeout(() => {
      this.element.classList.add('fade-out');
      
      setTimeout(() => {
        this.element.style.display = 'none';
        if (onComplete) onComplete();
      }, 500);
    }, 300);
  }

  /**
   * Останавливает прелоадер немедленно
   */
  async stop() {
    console.log('Preloader stop() called, isLoading:', this.isLoading);
    
    if (!this.isLoading) {
      console.log('Preloader not loading, hiding immediately');
      this.element.classList.add('fade-out');
      this.element.style.display = 'none';
      return;
    }
    
    this.isLoading = false;
    this.progress = 100;
    this.updateProgress();
    
    console.log('Adding fade-out class to preloader');
    // Немедленно скрываем прелоадер
    this.element.classList.add('fade-out');
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Setting preloader display to none');
        this.element.style.display = 'none';
        resolve();
      }, 500);
    });
  }

  /**
   * Обновляет прогресс и текст загрузки
   */
  updateProgress() {
    const progressFill = this.element.querySelector('.progress-fill');
    const progressText = this.element.querySelector('.progress-text');
    const loadingStep = this.element.querySelector('.loading-step');
    
    if (progressFill) {
      progressFill.style.width = `${this.progress}%`;
    }
    
    if (progressText) {
      progressText.textContent = `${this.progress}%`;
    }
    
    if (loadingStep && this.currentStep < this.loadingSteps.length) {
      loadingStep.textContent = this.loadingSteps[this.currentStep];
    }
  }

  /**
   * Получает случайное время загрузки
   * @returns {number} - Время в миллисекундах
   */
  getRandomLoadingTime() {
    return Math.random() * (this.options.maxLoadingTime - this.options.minLoadingTime) + this.options.minLoadingTime;
  }

  /**
   * Задержка выполнения
   * @param {number} ms - Время задержки в миллисекундах
   * @returns {Promise} - Promise с задержкой
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Показывает прелоадер с кастомным сообщением
   * @param {string} message - Сообщение для отображения
   * @param {number} duration - Длительность показа в мс
   */
  async showMessage(message, duration = 2000) {
    this.element.style.display = 'flex';
    this.element.classList.remove('fade-out');
    
    const loadingStep = this.element.querySelector('.loading-step');
    if (loadingStep) {
      loadingStep.textContent = message;
    }
    
    await this.delay(duration);
    
    this.element.classList.add('fade-out');
    setTimeout(() => {
      this.element.style.display = 'none';
    }, 500);
  }

  /**
   * Удаляет прелоадер из DOM
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

// Создаем глобальный экземпляр прелоадера
const preloader = new Preloader({
  minLoadingTime: 1500,
  maxLoadingTime: 2500,
  showProgress: true,
  animationType: 'fade'
});

// Экспортируем для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Preloader, preloader };
} else {
  // Для использования в браузере
  window.SneakerStorePreloader = { Preloader, preloader };
}
