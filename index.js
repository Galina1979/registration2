const form = document.getElementById('form1');
const passwordInput = form.elements['password'];
const passwordError = document.getElementById('passwordError');
const submitButton = form.querySelector('[type="submit"]');

// Добавляем обработчик ввода пароля
passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    const requiredCharacters = ['-', '4', 'A'];

    // Проверка на наличие требуемых символов в пароле
    const containsRequiredCharacters = requiredCharacters.every(char => passwordValue.includes(char));

    if (passwordValue.length < 5 || !containsRequiredCharacters) {
        passwordInput.classList.add('invalid');
        passwordError.textContent = 'Password must be at least 3 characters long and contain "-", "4", and "A".';
        submitButton.disabled = true;
    } else {
        passwordInput.classList.remove('invalid');
        passwordError.textContent = '';
        submitButton.disabled = false;
    }
});

// Добавляем обработчик нажатия клавиш для разблокировки полей
document.addEventListener('keydown', (event) => {
    // Пример: Ctrl + Alt
    if (event.ctrlKey && event.altKey) {
        enableForm();
    }
});

function enableForm() {
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = false;
    }
}