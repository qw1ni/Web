/**
 * Простой слайдер для Best Sellers
 */
class SimpleSlider {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.options = {
            autoplay: true,
            autoplayDelay: 4000,
            showDots: true,
            showArrows: true,
            infinite: true,
            slidesToShow: 4,
            ...options
        };
        
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.slides = [];
        this.autoplayTimer = null;
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.error('Slider container not found');
            return;
        }
        
        this.slides = Array.from(this.container.querySelectorAll('.slider-slide'));
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides === 0) {
            console.error('No slides found');
            return;
        }
        
        console.log(`Initializing slider with ${this.totalSlides} slides`);
        
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
    }
    
    nextSlide() {
        if (this.options.infinite) {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.updateSlider();
            
            // Если дошли до конца, плавно переходим к началу
            if (this.currentSlide === 0) {
                setTimeout(() => {
                    this.slidesContainer.style.transition = 'none';
                    this.slidesContainer.style.transform = 'translateX(0%)';
                    setTimeout(() => {
                        this.slidesContainer.style.transition = 'transform 0.3s ease-in-out';
                    }, 50);
                }, 300);
            }
        } else {
            this.currentSlide = Math.min(this.currentSlide + 1, this.totalSlides - 1);
            this.updateSlider();
        }
    }
    
    prevSlide() {
        if (this.options.infinite) {
            this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
            this.updateSlider();
            
            // Если дошли до начала, плавно переходим к концу
            if (this.currentSlide === this.totalSlides - 1) {
                setTimeout(() => {
                    this.slidesContainer.style.transition = 'none';
                    this.slidesContainer.style.transform = `translateX(-${(this.totalSlides - 1) * (100 / this.options.slidesToShow)}%)`;
                    setTimeout(() => {
                        this.slidesContainer.style.transition = 'transform 0.3s ease-in-out';
                    }, 50);
                }, 300);
            }
        } else {
            this.currentSlide = Math.max(this.currentSlide - 1, 0);
            this.updateSlider();
        }
    }
    
    goToSlide(index) {
        this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
        this.updateSlider();
    }
    
    updateSlider() {
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
window.SimpleSlider = SimpleSlider;
