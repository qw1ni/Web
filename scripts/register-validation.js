/**
 * Валидация формы регистрации
 */

// TOP-100 популярных паролей 2023 года
const COMMON_PASSWORDS = [
    'password', '123456', '123456789', 'qwerty', 'abc123', 'password123',
    'admin', 'letmein', 'welcome', 'monkey', '1234567890', 'password1',
    'qwerty123', 'dragon', 'master', 'hello', 'freedom', 'whatever',
    'qazwsx', 'trustno1', 'jordan', 'jennifer', 'zxcvbnm', 'asdfgh',
    'hunter', 'buster', 'soccer', 'harley', 'batman', 'andrew',
    'tigger', 'sunshine', 'iloveyou', '2000', 'charlie', 'robert',
    'thomas', 'hockey', 'ranger', 'daniel', 'starwars', 'klaster',
    '112233', 'george', 'computer', 'michelle', 'jessica', 'pepper',
    '1234', '12345', '1234567', '12345678', '123456789', '1234567890',
    'qwerty', 'qwertyui', 'qwertyuiop', 'asdfgh', 'asdfghjkl', 'asdfghjkl;',
    'zxcvbn', 'zxcvbnm', 'zxcvbnm,', 'password', 'password1', 'password12',
    'password123', 'password1234', 'password12345', 'admin', 'administrator',
    'root', 'toor', 'pass', 'test', 'guest', 'user', 'demo', 'sample',
    'welcome', 'login', 'qwerty', 'abc123', '123abc', 'letmein', 'monkey',
    'dragon', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1'
];

class RegisterValidator {
    constructor() {
        this.generationAttempts = 0;
        this.maxAttempts = 5;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateInitialNickname();
        this.setupPasswordMethodToggle();
    }

    setupEventListeners() {
        // Валидация в реальном времени
        const inputs = document.querySelectorAll('#register-form input, #register-form select');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validateField(input));
            input.addEventListener('blur', () => this.validateField(input));
        });

        // Генерация никнейма
        document.getElementById('generate-nickname').addEventListener('click', () => this.generateNickname());

        // Копирование пароля
        document.getElementById('copy-password').addEventListener('click', () => this.copyPassword());

        // Переключение способа задания пароля
        document.querySelectorAll('input[name="password-method"]').forEach(radio => {
            radio.addEventListener('change', () => this.togglePasswordMethod());
        });

        // Отправка формы
        document.getElementById('register-form').addEventListener('submit', (e) => this.handleSubmit(e));
    }

    generateInitialNickname() {
        this.generateNickname();
    }

    generateNickname() {
        if (this.generationAttempts >= this.maxAttempts) {
            this.enableManualNicknameInput();
            return;
        }

        const firstname = document.getElementById('register-firstname').value || 'User';
        const lastname = document.getElementById('register-lastname').value || 'User';
        
        const adjectives = ['Cool', 'Smart', 'Fast', 'Bright', 'Strong', 'Wise', 'Bold', 'Swift'];
        const numbers = Math.floor(Math.random() * 9999) + 1;
        
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const nickname = `${adjective}${firstname}${lastname}${numbers}`.toLowerCase();
        
        document.getElementById('register-nickname').value = nickname;
        this.generationAttempts++;
        document.getElementById('generation-attempts').textContent = this.generationAttempts;
        
        if (this.generationAttempts >= this.maxAttempts) {
            document.getElementById('generate-nickname').disabled = true;
            this.enableManualNicknameInput();
        }
    }

    enableManualNicknameInput() {
        const nicknameInput = document.getElementById('register-nickname');
        nicknameInput.readOnly = false;
        nicknameInput.placeholder = 'Enter username manually';
        document.getElementById('generate-nickname').textContent = 'Manual Entry';
        document.getElementById('nickname-info').textContent = 'Maximum attempts reached. Enter username manually.';
    }

    copyPassword() {
        const passwordField = document.getElementById('generated-password');
        passwordField.select();
        document.execCommand('copy');
        
        const button = document.getElementById('copy-password');
        const originalText = button.textContent;
        button.textContent = 'Скопировано!';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#27ae60';
        }, 2000);
    }

    setupPasswordMethodToggle() {
        this.togglePasswordMethod();
    }

    togglePasswordMethod() {
        const method = document.querySelector('input[name="password-method"]:checked').value;
        const manualGroup = document.getElementById('manual-password-group');
        const manualConfirmGroup = document.getElementById('manual-password-confirm-group');
        const autoGroup = document.getElementById('auto-password-group');

        if (method === 'manual') {
            manualGroup.style.display = 'block';
            manualConfirmGroup.style.display = 'block';
            autoGroup.style.display = 'none';
        } else {
            manualGroup.style.display = 'none';
            manualConfirmGroup.style.display = 'none';
            autoGroup.style.display = 'block';
            this.generatePassword();
        }
    }

    generatePassword() {
        const length = 12;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let password = '';
        
        // Гарантируем наличие всех требуемых символов
        password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]; // Заглавная буква
        password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]; // Строчная буква
        password += '0123456789'[Math.floor(Math.random() * 10)]; // Цифра
        password += '!@#$%^&*'[Math.floor(Math.random() * 8)]; // Специальный символ
        
        // Заполняем остальные символы
        for (let i = 4; i < length; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }
        
        // Перемешиваем символы
        password = password.split('').sort(() => Math.random() - 0.5).join('');
        
        document.getElementById('generated-password').value = password;
    }

    validateField(field) {
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'lastname':
            case 'firstname':
                isValid = this.validateName(field.value);
                errorMessage = isValid ? '' : 'Field is required';
                break;
            case 'nickname':
                isValid = field.value.trim().length >= 3;
                errorMessage = isValid ? '' : 'Username must be at least 3 characters';
                break;
            case 'phone':
                isValid = this.validatePhone(field.value);
                errorMessage = isValid ? '' : 'Enter valid Belarus phone number (+375)';
                break;
            case 'email':
                isValid = this.validateEmail(field.value);
                errorMessage = isValid ? '' : 'Enter valid email';
                break;
            case 'birthdate':
                isValid = this.validateBirthdate(field.value);
                errorMessage = isValid ? '' : 'You must be at least 16 years old';
                break;
            case 'password':
                isValid = this.validatePassword(field.value);
                errorMessage = isValid ? '' : 'Password does not meet requirements';
                break;
            case 'confirm-password':
                const password = document.getElementById('register-password').value;
                isValid = field.value === password;
                errorMessage = isValid ? '' : 'Passwords do not match';
                break;
        }

        this.showFieldError(fieldName, errorMessage);
        this.updateFieldStyle(field, isValid);
        
        // Обновляем требования к паролю только для поля пароля
        if (fieldName === 'password') {
            this.updatePasswordRequirements();
        }
        
        this.updateSubmitButton();

        return isValid;
    }

    validateName(name) {
        return name.trim().length >= 2;
    }

    validatePhone(phone) {
        const phoneRegex = /^\+375\s?\(?(29|25|44|33)\)?\s?\d{3}-?\d{2}-?\d{2}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateBirthdate(birthdate) {
        if (!birthdate) return false;
        
        const birth = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            return age - 1 >= 16;
        }
        
        return age >= 16;
    }

    validatePassword(password) {
        if (!password) return false;
        
        const hasLength = password.length >= 8 && password.length <= 20;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        const isNotCommon = !COMMON_PASSWORDS.includes(password.toLowerCase());
        
        return hasLength && hasUppercase && hasLowercase && hasNumber && hasSpecial && isNotCommon;
    }

    updatePasswordRequirements() {
        const password = document.getElementById('register-password').value;
        
        const requirements = {
            'req-length': password.length >= 8 && password.length <= 20,
            'req-uppercase': /[A-Z]/.test(password),
            'req-lowercase': /[a-z]/.test(password),
            'req-number': /\d/.test(password),
            'req-special': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            'req-common': !COMMON_PASSWORDS.includes(password.toLowerCase())
        };

        Object.keys(requirements).forEach(reqId => {
            const element = document.getElementById(reqId);
            if (element) {
                element.classList.remove('valid', 'invalid');
                if (password) {
                    element.classList.add(requirements[reqId] ? 'valid' : 'invalid');
                }
            }
        });
    }

    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.toggle('show', !!message);
        }
    }

    updateFieldStyle(field, isValid) {
        field.classList.remove('error', 'valid');
        if (field.value) {
            field.classList.add(isValid ? 'valid' : 'error');
        }
    }

    // Отдельный метод для проверки полей без обновления UI
    isFieldValid(field) {
        const fieldName = field.name;
        let isValid = false;
        
        switch (fieldName) {
            case 'lastname':
            case 'firstname':
            case 'middlename':
                isValid = this.validateName(field.value);
                break;
            case 'nickname':
                isValid = field.value.trim().length >= 3;
                break;
            case 'phone':
                isValid = this.validatePhone(field.value);
                break;
            case 'email':
                isValid = this.validateEmail(field.value);
                break;
            case 'birthdate':
                isValid = this.validateBirthdate(field.value);
                break;
            case 'password':
                isValid = this.validatePassword(field.value);
                break;
            case 'confirm-password':
                const password = document.getElementById('register-password').value;
                isValid = field.value === password;
                break;
        }
        
        return isValid;
    }

    updateSubmitButton() {
        const requiredFields = [
            'lastname', 'firstname', 'phone', 'email', 'birthdate', 'nickname'
        ];
        
        const passwordMethod = document.querySelector('input[name="password-method"]:checked').value;
        let allValid = true;
        
        // Проверяем обязательные поля
        requiredFields.forEach(fieldName => {
            const field = document.querySelector(`[name="${fieldName}"]`);
            if (field && !this.isFieldValid(field)) {
                allValid = false;
            }
        });
        
        // Проверяем пароль
        if (passwordMethod === 'manual') {
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            if (!this.validatePassword(password) || password !== confirmPassword) {
                allValid = false;
            }
        }
        
        // Проверяем соглашение
        const terms = document.getElementById('register-terms').checked;
        if (!terms) {
            allValid = false;
        }
        
        document.getElementById('register-submit').disabled = !allValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (document.getElementById('register-submit').disabled) {
            return;
        }
        
        // Собираем данные формы
        const formData = new FormData(document.getElementById('register-form'));
        const userData = {
            firstName: formData.get('firstname'),
            lastName: formData.get('lastname'),
            middleName: formData.get('middlename') || '',
            nickname: formData.get('nickname'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            birthdate: formData.get('birthdate'),
            password: formData.get('password') || document.getElementById('generated-password').value,
            terms: formData.get('terms'),
            role: 'customer', // По умолчанию обычный пользователь
            isAdmin: false,
            address: {
                street: '',
                city: '',
                state: '',
                zipCode: '',
                country: 'Belarus'
            },
            createdAt: new Date().toISOString(),
            lastLogin: null
        };
        
        console.log('User registration data:', userData);
        
        try {
            // Отправляем данные на сервер
            console.log('Sending data to server...');
            const result = await this.submitToServer(userData);
            console.log('Server response:', result);
            
            if (result.success) {
                this.showMessage('Registration successful! You can now sign in.', 'success');
                // Очищаем форму
                document.getElementById('register-form').reset();
                // Перенаправляем на страницу входа через 2 секунды
                setTimeout(() => {
                    window.location.href = './login.html';
                }, 2000);
            } else {
                this.showMessage(`Registration failed: ${result.error}`, 'error');
            }
        } catch (error) {
            console.error('Registration error:', error);
            this.showMessage('Registration failed. Please try again.', 'error');
        }
    }

    async submitToServer(userData) {
        try {
            console.log('Checking for existing user with email:', userData.email);
            // Сначала проверяем, существует ли пользователь с таким email
            const existingUsersResponse = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(userData.email)}`);
            console.log('Existing users response status:', existingUsersResponse.status);
            
            if (existingUsersResponse.ok) {
                const existingUsers = await existingUsersResponse.json();
                console.log('Existing users found:', existingUsers.length);
                if (existingUsers.length > 0) {
                    return {
                        success: false,
                        error: 'User with this email already exists'
                    };
                }
            }

            console.log('Creating new user with data:', JSON.stringify(userData, null, 2));
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                let errorData;
                try {
                    errorData = JSON.parse(errorText);
                } catch (e) {
                    errorData = { message: errorText };
                }
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Successfully created user:', data);
            return {
                success: true,
                data: data
            };
        } catch (error) {
            console.error('Error in submitToServer:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    showMessage(message, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = message;
        messageDiv.className = `auth__message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new RegisterValidator();
});
