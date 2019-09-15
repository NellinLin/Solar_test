console.log('hello, my friend :)');

const application = document.getElementById('application');

function createSignup() {
    application.innerHTML = '';

    document.body.className = 'background';

    const titleSolar = document.createElement('div');
    titleSolar.className = 'signupTitleSolar';
    titleSolar.textContent = 'Добро пожаловать на пинтерест (нет)';

    const underTitleSolar = document.createElement('div');
    underTitleSolar.className = 'signupUnderTitle';
    underTitleSolar.textContent = 'На самом деле мы не пинтерест, а кое-что покруче!';

    const form = document.createElement('form');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.style = 'left: 100px;top: 452px;';
    emailInput.className = 'blockinput';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Пароль';
    passwordInput.style = 'left: 100px;top: 510px;';
    passwordInput.className = 'blockinput';

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageInput.placeholder = 'Возраст';
    ageInput.style = 'left: 100px;top: 566px;';
    ageInput.className = 'blockinput';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Зарегистрироваться';
    submitBtn.className = 'buttonSignup';

    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(ageInput);
    form.appendChild(submitBtn);
    
    const contentText = document.createElement('div');
    contentText.textContent = 'Уже зарегистрировались?';
    contentText.className = 'underbutton';

    const loginBtn = document.createElement('a');
    loginBtn.href = '/login';
    loginBtn.textContent = 'Войти';
    loginBtn.dataset.section = 'login';
    loginBtn.className = 'aUnblock';

    contentText.appendChild(loginBtn);

    application.appendChild(titleSolar);
    application.appendChild(underTitleSolar);
    application.appendChild(form);
    application.appendChild(contentText);
    //contextText.appendChild(loginBtn);
};

function createLogin() {
    application.innerHTML = '';

    document.body.className = 'backgroundLogin';

    const form = document.createElement('form');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Емайл';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Пароль';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Авторизироваться!';

    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(submitBtn);
    
    const contentText = document.createElement('div');
    contentText.textContent = 'Ещё не зарегистрировались?';

    const signupBtn = document.createElement('a');
    signupBtn.href = '/signup';
    signupBtn.textContent = 'Регистрация';
    signupBtn.dataset.section = 'signup';
    
    application.appendChild(form);
    application.appendChild(contentText);
    application.appendChild(signupBtn);
};

const functions = {
    signup: createSignup,
    login: createLogin,
};

application.addEventListener('click', function (evt) {
    const {target} = evt;

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault();
        functions[target.dataset.section]();
    }
});

createSignup();

// const menuItem1 = document.createElement('a');
// menuItem1.textContent = 'Регистрация';
// menuItem1.href = '/signup';
// application.appendChild(menuItem1);