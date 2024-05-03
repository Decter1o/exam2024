$(document).ready(function(){

    $('body').on('click', '#showLoginForm', function() {
        $('body').append(GetLoginForm());
    });

    $('body').on('click', '#removeLoginForm', function() {
        $('#loginForm').remove();
    });
    
});

function toggleCSS() {
    var link = document.getElementById('themeCSS');
    var currentStyle = localStorage.getItem('currentStyle');
    
    if (currentStyle === 'light-theme-2.css') {
        link.setAttribute('href', 'dark_style.css');
        localStorage.setItem('currentStyle', 'dark_style.css');
    } else {
        link.setAttribute('href', 'light-theme-2.css');
        localStorage.setItem('currentStyle', 'light-theme-2.css');
    }

    // Отправляем событие в хранилище, чтобы уведомить другие страницы об изменении темы
    localStorage.setItem('themeChanged', 'true');
}

function setInitialStyle() {
    var link = document.getElementById('themeCSS');
    var currentStyle = localStorage.getItem('currentStyle');
    
    if (currentStyle) {
        link.setAttribute('href', currentStyle);
    }
}

// Устанавливаем начальный стиль при загрузке страницы
setInitialStyle();

// Добавляем обработчик события на кнопку для переключения темы
document.getElementById('switch-theme-button').addEventListener('click', toggleCSS);

// Слушаем события хранилища
window.addEventListener('storage', function(event) {
    if (event.key === 'themeChanged') {
        // Если событие о изменении темы, обновляем стиль
        setInitialStyle();
    }
});

function FlipLoginForm(){
    var frontelement = document.getElementById("front-log-card");
    var backelement = document.getElementById("back-reg-card");
    frontelement.classList.toggle("flip-front-card");
    backelement.classList.toggle("flip-back-card");
}

function GetAccordion(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

// Добавляем обработчик события на кнопку входа
document.addEventListener('click', function(event) {
    // Проверяем, было ли нажатие на кнопку входа
    if (event.target && event.target.matches('#loginForm .front-log-card .enter-button')) {
        // Вызываем функцию входа
        login();
    }
});
 
 // Функция для регистрации
 function register() {
    var loginInput = document.querySelector('#loginForm .back-reg-card .login-input input');
    var emailInput = document.querySelector('#loginForm .back-reg-card .email-input input');
    var passwordInput = document.querySelector('#loginForm .back-reg-card .password-input input');

    // Получаем значения полей ввода
    var login = loginInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    // Пример валидации: проверяем, что поля не пустые
    if (login === '' || email === '' || password === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    // Дополнительная валидация, например, можно проверить корректность email
    if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }

    // Дополнительная валидация, например, можно проверить сложность пароля
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов');
        return;
    }

    // Дополнительная валидация, например, можно отправить данные на сервер для проверки
    // Тут вы можете добавить ваш код для отправки данных на сервер или выполнения других действий
}

// Обработчик события на родительском элементе, используя делегирование
document.addEventListener('click', function(event) {
    // Проверяем, было ли нажатие на кнопку регистрации
    if (event.target && event.target.matches('#loginForm .back-reg-card .enter-button')) {
        // Вызываем функцию регистрации
        register();
    }
});

// Вспомогательная функция для проверки корректности email
function isValidEmail(email) {
    // Простейшая проверка, можно использовать более сложные методы
    return /\S+@\S+\.\S+/.test(email);
}

function login() {
    // Получаем значения полей ввода
    var login = document.querySelector('#loginForm .front-log-card .login-input input').value;
    var password = document.querySelector('#loginForm .front-log-card .password-input input').value;

    // Пример валидации: проверяем, что поля не пустые
    if (login.trim() === '' || password.trim() === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }
}

window.onload = function() {
    let sliderLine = document.querySelector('.slider-line');
    let images = document.querySelectorAll('.slider-image');
    let imageWidth = images[0].clientWidth;
    let currentImage = 0;

    function nextImage() {
        currentImage++;
        if (currentImage >= images.length) {
            currentImage = 0;
        }
        sliderLine.style.transform = `translateX(${-currentImage * imageWidth}px)`;
    }

    setInterval(nextImage, 4000);}


