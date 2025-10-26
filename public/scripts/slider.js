/**
 * Универсальный слайдер-карусель
 */
class ProductSlider {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.options = {
            autoplay: true,
            autoplayDelay: 5000,
            showDots: true,
            showArrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ],
            ...options
        };
        
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.slides = [];
        this.autoplayTimer = null;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.slides = Array.from(this.container.querySelectorAll('.slider-slide'));
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides === 0) return;
        
        this.createSlider();
        this.bindEvents();
        
        if (this.options.autoplay) {
            this.startAutoplay();
        }
    }
    
    createSlider() {
        // Создаем обертку слайдера
        this.sliderWrapper = document.createElement('div');
        this.sliderWrapper.className = 'slider-wrapper';
        
        // Создаем контейнер слайдов
        this.slidesContainer = document.createElement('div');
        this.slidesContainer.className = 'slider-container';
        
        // Перемещаем слайды в контейнер
        this.slides.forEach(slide => {
            this.slidesContainer.appendChild(slide);
        });
        
        this.sliderWrapper.appendChild(this.slidesContainer);
        
        // Создаем навигацию
        if (this.options.showArrows) {
            this.createArrows();
        }
        
        if (this.options.showDots) {
            this.createDots();
        }
        
        // Заменяем содержимое контейнера
        this.container.innerHTML = '';
        this.container.appendChild(this.sliderWrapper);
        
        // Обновляем слайды
        this.slides = Array.from(this.slidesContainer.querySelectorAll('.slider-slide'));
        this.updateSlider();
    }
    
    createArrows() {
        this.prevArrow = document.createElement('button');
        this.prevArrow.className = 'slider-arrow slider-arrow-prev';
        this.prevArrow.innerHTML = '❮';
        this.prevArrow.setAttribute('aria-label', 'Previous slide');
        
        this.nextArrow = document.createElement('button');
        this.nextArrow.className = 'slider-arrow slider-arrow-next';
        this.nextArrow.innerHTML = '❯';
        this.nextArrow.setAttribute('aria-label', 'Next slide');
        
        this.sliderWrapper.appendChild(this.prevArrow);
        this.sliderWrapper.appendChild(this.nextArrow);
    }
    
    createDots() {
        this.dotsContainer = document.createElement('div');
        this.dotsContainer.className = 'slider-dots';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.setAttribute('data-slide', i);
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            this.dotsContainer.appendChild(dot);
        }
        
        this.sliderWrapper.appendChild(this.dotsContainer);
    }
    
    bindEvents() {
        if (this.prevArrow) {
            this.prevArrow.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextArrow) {
            this.nextArrow.addEventListener('click', () => this.nextSlide());
        }
        
        if (this.dotsContainer) {
            this.dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('slider-dot')) {
                    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                    this.goToSlide(slideIndex);
                }
            });
        }
        
        // Пауза при наведении
        this.sliderWrapper.addEventListener('mouseenter', () => this.stopAutoplay());
        this.sliderWrapper.addEventListener('mouseleave', () => {
            if (this.options.autoplay) this.startAutoplay();
        });
        
        // Свайп для мобильных устройств
        this.addSwipeSupport();
    }
    
    addSwipeSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.sliderWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.sliderWrapper.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Проверяем, что это горизонтальный свайп
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
    
    nextSlide() {
        if (this.isTransitioning) return;
        
        if (this.options.infinite) {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        } else {
            this.currentSlide = Math.min(this.currentSlide + 1, this.totalSlides - 1);
        }
        
        this.updateSlider();
    }
    
    prevSlide() {
        if (this.isTransitioning) return;
        
        if (this.options.infinite) {
            this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        } else {
            this.currentSlide = Math.max(this.currentSlide - 1, 0);
        }
        
        this.updateSlider();
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        
        this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
        this.updateSlider();
    }
    
    updateSlider() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Обновляем позицию слайдов
        const translateX = -this.currentSlide * (100 / this.options.slidesToShow);
        this.slidesContainer.style.transform = `translateX(${translateX}%)`;
        
        // Обновляем активную точку
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        }
        
        // Обновляем состояние стрелок
        if (this.prevArrow && this.nextArrow) {
            if (!this.options.infinite) {
                this.prevArrow.disabled = this.currentSlide === 0;
                this.nextArrow.disabled = this.currentSlide === this.totalSlides - 1;
            }
        }
        
        // Сбрасываем флаг перехода
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayTimer = setInterval(() => {
            this.nextSlide();
        }, this.options.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    
    destroy() {
        this.stopAutoplay();
        if (this.sliderWrapper && this.sliderWrapper.parentNode) {
            this.sliderWrapper.parentNode.removeChild(this.sliderWrapper);
        }
    }
}

// Экспорт для использования
window.ProductSlider = ProductSlider;
