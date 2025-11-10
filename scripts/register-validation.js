/**
 * Registration form validation with localization support
 */

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

const REGISTER_FALLBACK_TRANSLATIONS = {
    'auth.register.nicknameInfo': 'Generation attempts: <span id="generation-attempts"></span>/{max}',
    'auth.register.manualNicknamePlaceholder': 'Enter username manually',
    'auth.register.manualNicknameButton': 'Manual Entry',
    'auth.register.manualNicknameInfo': 'Maximum attempts reached. Enter username manually.',
    'auth.register.nicknamePlaceholder': 'Auto-generated username',
    'auth.register.phone': 'Phone Number (Belarus)',
    'auth.register.errorFieldRequired': 'Field is required',
    'auth.register.errorUsernameShort': 'Username must be at least 3 characters',
    'auth.register.errorPhone': 'Enter valid Belarus phone number (+375)',
    'auth.register.errorEmail': 'Enter valid email',
    'auth.register.errorAge': 'You must be at least 16 years old',
    'auth.register.errorPasswordRequirements': 'Password does not meet requirements',
    'auth.register.errorPasswordsMismatch': 'Passwords do not match',
    'auth.register.passwordMismatch': 'Passwords do not match',
    'auth.register.acceptTermsError': 'Please accept Terms & Conditions',
    'auth.register.passwordShort': 'Password must be at least 6 characters',
    'auth.register.creatingAccount': 'Creating account...',
    'auth.register.emailExistsError': 'User with this email already exists',
    'auth.register.accountCreated': 'Account created successfully! Redirecting to login...',
    'auth.register.creationError': 'Error creating account. Please try again.',
    'auth.register.connectionError': 'Connection error. Please try again.',
    'auth.register.copied': 'Copied!',
    'auth.register.successSimple': 'Registration successful! You can now sign in.',
    'auth.register.failedWithReason': 'Registration failed: {reason}',
    'auth.register.failed': 'Registration failed. Please try again.',
    'auth.register.generate': 'Generate',
    'auth.register.copyPassword': 'Copy'
};

function translateRegister(key, replacements = {}) {
    const translateFn = window.I18n && typeof window.I18n.translate === 'function'
        ? window.I18n.translate
        : (k) => REGISTER_FALLBACK_TRANSLATIONS[k] || k;
    let result = translateFn(key);
    if (result === key && REGISTER_FALLBACK_TRANSLATIONS[key]) {
        result = REGISTER_FALLBACK_TRANSLATIONS[key];
    }
    Object.entries(replacements).forEach(([placeholder, value]) => {
        result = result.replace(`{${placeholder}}`, value);
    });
    return result;
}

class RegisterValidator {
    constructor() {
        this.generationAttempts = 0;
        this.maxAttempts = 5;
        this.manualMode = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateNickname();
        this.setupPasswordMethodToggle();
        this.updateNicknameInfo();
        document.addEventListener('languageChanged', () => this.refreshTranslations());
    }

    refreshTranslations() {
        this.updateNicknameInfo();
        const nicknameInput = document.getElementById('register-nickname');
        const generateButton = document.getElementById('generate-nickname');
        if (nicknameInput && generateButton) {
            if (this.manualMode) {
                nicknameInput.placeholder = translateRegister('auth.register.manualNicknamePlaceholder');
                generateButton.textContent = translateRegister('auth.register.manualNicknameButton');
            } else {
                nicknameInput.placeholder = translateRegister('auth.register.nicknamePlaceholder');
                generateButton.textContent = translateRegister('auth.register.generate');
            }
        }
        const copyButton = document.getElementById('copy-password');
        if (copyButton) {
            copyButton.textContent = translateRegister('auth.register.copyPassword');
        }
    }

    setupEventListeners() {
        const inputs = document.querySelectorAll('#register-form input, #register-form select');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validateField(input));
            input.addEventListener('blur', () => this.validateField(input));
        });

        document.getElementById('generate-nickname').addEventListener('click', () => this.generateNickname());
        document.getElementById('copy-password').addEventListener('click', () => this.copyPassword());
        document.querySelectorAll('input[name="password-method"]').forEach(radio => {
            radio.addEventListener('change', () => this.togglePasswordMethod());
        });
        document.getElementById('register-form').addEventListener('submit', (e) => this.handleSubmit(e));
    }

    updateNicknameInfo() {
        const info = document.getElementById('nickname-info');
        if (!info) return;
        if (this.manualMode) {
            info.textContent = translateRegister('auth.register.manualNicknameInfo');
            return;
        }
        info.innerHTML = translateRegister('auth.register.nicknameInfo', { max: this.maxAttempts });
        const attemptsSpan = document.getElementById('generation-attempts');
        if (attemptsSpan) {
            attemptsSpan.textContent = this.generationAttempts;
        }
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
        this.updateNicknameInfo();

        if (this.generationAttempts >= this.maxAttempts) {
            document.getElementById('generate-nickname').disabled = true;
            this.enableManualNicknameInput();
        }
    }

    enableManualNicknameInput() {
        const nicknameInput = document.getElementById('register-nickname');
        const generateButton = document.getElementById('generate-nickname');
        this.manualMode = true;
        nicknameInput.readOnly = false;
        nicknameInput.placeholder = translateRegister('auth.register.manualNicknamePlaceholder');
        generateButton.textContent = translateRegister('auth.register.manualNicknameButton');
        const info = document.getElementById('nickname-info');
        info.textContent = translateRegister('auth.register.manualNicknameInfo');
    }

    copyPassword() {
        const passwordField = document.getElementById('generated-password');
        passwordField.select();
        document.execCommand('copy');

        const button = document.getElementById('copy-password');
        const originalText = translateRegister('auth.register.copyPassword');
        button.textContent = translateRegister('auth.register.copied');
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

        password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
        password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
        password += '0123456789'[Math.floor(Math.random() * 10)];
        password += '!@#$%^&*'[Math.floor(Math.random() * 8)];

        for (let i = 4; i < length; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }

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
                errorMessage = isValid ? '' : translateRegister('auth.register.errorFieldRequired');
                break;
            case 'middlename':
                isValid = !field.value || this.validateName(field.value);
                errorMessage = isValid ? '' : translateRegister('auth.register.errorFieldRequired');
                break;
            case 'nickname':
                isValid = field.value.trim().length >= 3;
                errorMessage = isValid ? '' : translateRegister('auth.register.errorUsernameShort');
                break;
            case 'phone':
                isValid = this.validatePhone(field.value);
                errorMessage = isValid ? '' : translateRegister('auth.register.errorPhone');
                break;
            case 'email':
                isValid = this.validateEmail(field.value);
                errorMessage = isValid ? '' : translateRegister('auth.register.errorEmail');
                break;
            case 'birthdate':
                isValid = this.validateBirthdate(field.value);
                errorMessage = isValid ? '' : translateRegister('auth.register.errorAge');
                break;
            case 'password':
                isValid = this.validatePassword(field.value);
                errorMessage = isValid ? '' : translateRegister('auth.register.errorPasswordRequirements');
                break;
            case 'confirm-password':
                const password = document.getElementById('register-password').value;
                isValid = field.value === password;
                errorMessage = isValid ? '' : translateRegister('auth.register.errorPasswordsMismatch');
                break;
        }

        this.showFieldError(fieldName, errorMessage);
        this.updateFieldStyle(field, isValid);

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
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age -= 1;
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

    isFieldValid(field) {
        const fieldName = field.name;
        switch (fieldName) {
            case 'lastname':
            case 'firstname':
            case 'middlename':
                return this.validateName(field.value);
            case 'nickname':
                return field.value.trim().length >= 3;
            case 'phone':
                return this.validatePhone(field.value);
            case 'email':
                return this.validateEmail(field.value);
            case 'birthdate':
                return this.validateBirthdate(field.value);
            case 'password':
                return this.validatePassword(field.value);
            case 'confirm-password':
                return field.value === document.getElementById('register-password').value;
            default:
                return true;
        }
    }

    updateSubmitButton() {
        const requiredFields = ['lastname', 'firstname', 'phone', 'email', 'birthdate', 'nickname'];
        const passwordMethod = document.querySelector('input[name="password-method"]:checked').value;
        let allValid = true;

        requiredFields.forEach(fieldName => {
            const field = document.querySelector(`[name="${fieldName}"]`);
            if (field && !this.isFieldValid(field)) {
                allValid = false;
            }
        });

        if (passwordMethod === 'manual') {
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            if (!this.validatePassword(password) || password !== confirmPassword) {
                allValid = false;
            }
        }

        if (!document.getElementById('register-terms').checked) {
            allValid = false;
        }

        document.getElementById('register-submit').disabled = !allValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        const submitButton = document.getElementById('register-submit');
        if (submitButton.disabled) {
            return;
        }

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
            role: 'customer',
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

        this.showMessage(translateRegister('auth.register.creatingAccount'), 'info');

        try {
            const result = await this.submitToServer(userData);
            if (result.success) {
                this.showMessage(translateRegister('auth.register.successSimple'), 'success');
                document.getElementById('register-form').reset();
                this.generationAttempts = 0;
                this.manualMode = false;
                const generateButton = document.getElementById('generate-nickname');
                if (generateButton) {
                    generateButton.disabled = false;
                    generateButton.textContent = translateRegister('auth.register.generate');
                }
                const nicknameInput = document.getElementById('register-nickname');
                if (nicknameInput) {
                    nicknameInput.value = '';
                    nicknameInput.placeholder = translateRegister('auth.register.nicknamePlaceholder');
                }
                this.updateNicknameInfo();
                setTimeout(() => {
                    window.location.href = './login.html';
                }, 2000);
            } else {
                const errorMessage = result.error
                    ? translateRegister('auth.register.failedWithReason', { reason: result.error })
                    : translateRegister('auth.register.failed');
                this.showMessage(errorMessage, 'error');
            }
        } catch (error) {
            console.error('Registration error:', error);
            this.showMessage(translateRegister('auth.register.failedWithReason', { reason: error.message }), 'error');
        }
    }

    async submitToServer(userData) {
        try {
            const existingUsersResponse = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(userData.email)}`);
            if (existingUsersResponse.ok) {
                const existingUsers = await existingUsersResponse.json();
                if (existingUsers.length > 0) {
                    return {
                        success: false,
                        error: translateRegister('auth.register.emailExistsError')
                    };
                }
            }

            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                let errorData;
                try {
                    errorData = JSON.parse(errorText);
                } catch (e) {
                    errorData = { message: errorText };
                }
                throw new Error(errorData.message || translateRegister('auth.register.creationError'));
            }

            const data = await response.json();
            return { success: true, data };
        } catch (error) {
            console.error('Error in submitToServer:', error);
            return {
                success: false,
                error: error.message || translateRegister('auth.register.connectionError')
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

document.addEventListener('DOMContentLoaded', () => {
    new RegisterValidator();
});
