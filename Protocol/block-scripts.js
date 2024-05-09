function GetLoginForm(){
    return `<div class="log-window" id="loginForm">
                <div class="front-log-card form-card" id ="front-log-card">
                    <div class="close-button"><i class="fa-solid fa-xmark" id="removeLoginForm"></i></div>
                    <div class="log-content">
                        <h1>Добро пожаловать!</h1>
                        <p>Введите логин</p>
                        <div class="login-input">
                            <input type="login" required placeholder = "Логин">
                        </div>
                        <p>Введите пароль</p>
                        <div class="password-input">
                            <input type="password" required placeholder="Пароль">
                        </div>
                        <div class="enter-button">Войти</div>
                        <p>Если вы не зарегистрированны вы можете <a id="flip-button" onclick="FlipLoginForm()">Зарегистрироваться</a></p>
                    </div>
                </div>
                <div class="back-reg-card form-card" id="back-reg-card">
                    <div class="close-button"><i class="fa-solid fa-xmark" id="removeLoginForm"></i></div>
                    <div class="reg-content">
                        <h1>Рады пополнению!</h1>
                        <p>Введите логин</p>
                        <div class="login-input">
                            <input type="login" required placeholder = "Логин">
                        </div>
                        <p>Введите Email</p>
                        <div class="email-input">
                            <input type="email" required placeholder="Email">
                        </div>
                        <p>Введите пароль</p>
                        <div class="password-input">
                            <input type="password" required placeholder="Пароль">
                        </div>
                        <div class="enter-button" >Зарегистрироваться</div>
                        <p>Если вы зарегистрированны вы можете <a id="flip-button" onclick="FlipLoginForm()">Войти</a></p>
                    </div>
                </div>
            </div>`;
}
function GetGameDewContent(){
    return `<div class="button-content">
                <div class="discusssions">
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере GameDewa...</p>
                        </div>
                    </div>
                </div>
            </div>`;
}
function GetWebDewContent(){
    return `<div class="button-content">
                <div class="discusssions">
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере Web-разработки...</p>
                        </div>
                    </div>

                </div>
            </div>`;
}
function GetMobDevContent(){
    return `<div class="button-content">
                <div class="discusssions">
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                    <div class="discussion">
                        <div class="autor">
                            <div class="avatar">
                                <img src="img/ava.png">
                            </div>
                            <div class="nickname">
                                <p>Decter1o</p>
                            </div>
                        </div>
                        <div class="disc-theme">
                            <h1>Помощь новичку.</h1>
                            <p>Всем привет. Я только начинающий разработчик в сфере мобильной разработки...</p>
                        </div>
                    </div>
                </div>
            </div>`;
}
function GetDefaultContent(){
    return `<div class="hello-community">
                <h2>Добро пожаловать в Сообщество Backend Developer Roadmap!</h2>
                <p>Присоединяйтесь к нашему динамичному сообществу бэкенд-разработчиков, где вы можете делиться знаниями, задавать вопросы, искать вдохновение и находить решения вместе с единомышленниками. В нашем сообществе вы найдете ресурсы, мероприятия и поддержку для своего профессионального роста в области разработки на бэкенде.</p>
                <h2>Что нас объединяет:</h2>
                <ol>
                    <li>Обучение и Обмен Знаниями: Присоединяйтесь к обсуждениям, делись своим опытом и узнавайте новое от опытных коллег. Наше сообщество предлагает множество платформ для обучения, включая онлайн-курсы, вебинары и мастер-классы.</li>
                    <li>Совместные Проекты и Интерактивные Задачи: Участвуйте в совместных проектах, чтобы применить свои знания на практике, а также решайте интересные задачи вместе с другими участниками сообщества.</li>
                    <li>Мероприятия и Встречи: Присоединяйтесь к нашим мероприятиям и встречам, чтобы общаться в реальном времени с профессионалами отрасли, делиться идеями и находить новых друзей и коллег.</li>
                    <li>Поддержка и Мотивация: Мы поддерживаем друг друга на каждом этапе профессионального роста. Наше сообщество стремится к тому, чтобы каждый участник чувствовал себя вдохновленным и мотивированным достигать новых высот.</li>
                </ol>
                <p>Присоединяйтесь прямо сейчас! Не упустите возможность быть частью активного и дружелюбного сообщества бэкенд-разработчиков. Присоединяйтесь сейчас, чтобы получить доступ к эксклюзивным ресурсам, обучающим материалам и возможностям для профессионального роста.</p>
                <p>Следите за последними обновлениями и анонсами мероприятий в наших социальных сетях и форумах.</p>
            </div>`;
}