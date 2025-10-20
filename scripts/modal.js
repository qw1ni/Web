/**
 * Универсальная система модальных окон
 */
class ModalManager {
    constructor() {
        this.modals = new Map();
        this.activeModal = null;
        this.init();
    }
    
    init() {
        // Создаем контейнер для модальных окон
        this.container = document.createElement('div');
        this.container.className = 'modal-container';
        this.container.style.display = 'none';
        document.body.appendChild(this.container);
        
        // Обработчик закрытия по клику на фон
        this.container.addEventListener('click', (e) => {
            if (e.target === this.container) {
                this.close();
            }
        });
        
        // Обработчик закрытия по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close();
            }
        });
    }
    
    createModal(id, options = {}) {
        const modal = {
            id,
            element: null,
            options: {
                closable: true,
                backdrop: true,
                size: 'medium', // small, medium, large, fullscreen
                animation: 'fade', // fade, slide, scale
                ...options
            }
        };
        
        this.modals.set(id, modal);
        return modal;
    }
    
    show(id, content, options = {}) {
        let modal = this.modals.get(id);
        
        if (!modal) {
            modal = this.createModal(id, options);
        }
        
        // Закрываем текущее модальное окно
        if (this.activeModal) {
            this.close();
        }
        
        // Создаем элемент модального окна
        modal.element = this.createModalElement(id, content, modal.options);
        
        // Добавляем в контейнер
        this.container.innerHTML = '';
        this.container.appendChild(modal.element);
        
        // Показываем
        this.container.style.display = 'flex';
        this.activeModal = modal;
        
        // Блокируем скролл
        document.body.classList.add('modal-open');
        
        // Анимация появления
        requestAnimationFrame(() => {
            modal.element.classList.add('show');
        });
        
        return modal;
    }
    
    createModalElement(id, content, options) {
        const modal = document.createElement('div');
        modal.className = `modal ${options.animation}`;
        modal.setAttribute('data-modal-id', id);
        
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        
        const dialog = document.createElement('div');
        dialog.className = `modal-dialog modal-${options.size}`;
        
        const header = document.createElement('div');
        header.className = 'modal-header';
        
        const title = document.createElement('h3');
        title.className = 'modal-title';
        title.textContent = options.title || 'Modal';
        
        if (options.closable) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.innerHTML = '×';
            closeBtn.setAttribute('aria-label', 'Close modal');
            closeBtn.addEventListener('click', () => this.close());
            header.appendChild(closeBtn);
        }
        
        header.appendChild(title);
        
        const body = document.createElement('div');
        body.className = 'modal-body';
        
        if (typeof content === 'string') {
            body.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            body.appendChild(content);
        } else if (typeof content === 'function') {
            const result = content();
            if (typeof result === 'string') {
                body.innerHTML = result;
            } else if (result instanceof HTMLElement) {
                body.appendChild(result);
            }
        }
        
        const footer = document.createElement('div');
        footer.className = 'modal-footer';
        
        if (options.buttons) {
            options.buttons.forEach(button => {
                const btn = document.createElement('button');
                btn.className = `btn ${button.class || 'btn-secondary'}`;
                btn.textContent = button.text;
                btn.addEventListener('click', button.handler);
                footer.appendChild(btn);
            });
        }
        
        dialog.appendChild(header);
        dialog.appendChild(body);
        if (footer.children.length > 0) {
            dialog.appendChild(footer);
        }
        
        modal.appendChild(backdrop);
        modal.appendChild(dialog);
        
        return modal;
    }
    
    close() {
        if (!this.activeModal) return;
        
        const modal = this.activeModal.element;
        if (modal) {
            modal.classList.remove('show');
            
            setTimeout(() => {
                this.container.style.display = 'none';
                this.container.innerHTML = '';
                this.activeModal = null;
                document.body.classList.remove('modal-open');
            }, 300);
        }
    }
    
    // Специальные методы для разных типов модальных окон
    
    showProductQuickView(product) {
        const content = this.createProductQuickViewContent(product);
        return this.show('product-quick-view', content, {
            title: 'Quick View',
            size: 'large',
            closable: true
        });
    }
    
    createProductQuickViewContent(product) {
        const div = document.createElement('div');
        div.className = 'product-quick-view';
        div.innerHTML = `
            <div class="product-quick-view-content">
                <div class="product-quick-view-image">
                    <img src="${product.image || './images/Product.svg'}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-quick-view-info">
                    <div class="product-brand">${product.brand || 'Nike'}</div>
                    <h2 class="product-name">${product.name}</h2>
                    <div class="product-rating">
                        <div class="rating-stars">★★★★★</div>
                        <span class="rating-value">(4.8)</span>
                    </div>
                    <div class="product-price">
                        <span class="price-current">$${product.price}</span>
                        ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
                    </div>
                    <div class="product-description">
                        <p>${product.description || 'Premium quality sneakers with modern design and comfort.'}</p>
                    </div>
                    <div class="product-options">
                        <div class="size-options">
                            <label>Size:</label>
                            <div class="size-buttons">
                                <button class="size-btn active">8</button>
                                <button class="size-btn">8.5</button>
                                <button class="size-btn">9</button>
                                <button class="size-btn">9.5</button>
                                <button class="size-btn">10</button>
                                <button class="size-btn">10.5</button>
                                <button class="size-btn">11</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Обработчики для кнопок размера
        div.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                div.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Обработчик добавления в корзину
        const addToCartBtn = div.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                if (window.SneakerStoreCart && window.SneakerStoreCart.addItem) {
                    window.SneakerStoreCart.addItem(product.id, 1);
                    this.showNotification('Product added to cart!', 'success');
                    this.close();
                }
            });
        }
        
        return div;
    }
    
    showConfirmation(message, options = {}) {
        const content = `
            <div class="confirmation-content">
                <div class="confirmation-icon">⚠️</div>
                <p class="confirmation-message">${message}</p>
            </div>
        `;
        
        return this.show('confirmation', content, {
            title: options.title || 'Confirmation',
            size: 'small',
            closable: true,
            buttons: [
                {
                    text: options.cancelText || 'Cancel',
                    class: 'btn-secondary',
                    handler: () => {
                        this.close();
                        if (options.onCancel) options.onCancel();
                    }
                },
                {
                    text: options.confirmText || 'Confirm',
                    class: 'btn-primary',
                    handler: () => {
                        this.close();
                        if (options.onConfirm) options.onConfirm();
                    }
                }
            ]
        });
    }
    
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">×</button>
            </div>
        `;
        
        // Добавляем в body
        document.body.appendChild(notification);
        
        // Анимация появления
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Обработчик закрытия
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });
        
        // Автоматическое закрытие
        if (duration > 0) {
            setTimeout(() => {
                this.hideNotification(notification);
            }, duration);
        }
        
        return notification;
    }
    
    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Создаем глобальный экземпляр
window.ModalManager = new ModalManager();
