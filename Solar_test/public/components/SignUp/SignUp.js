export class SignUpComponent {
    constructor(parent = document.body) {
        this._parent = parent;
        this._form = null;
    }

    get form() {
        return document.querySelector('#inputdata')
    }

    render() {
        const paddingMenu = document.createElement('div');
        paddingMenu.className = 'paddingMenuCl ';
    
        const titleSolar = document.createElement('div');
        titleSolar.className = 'signupTitleSolar paddingMenuTitle';
        titleSolar.textContent = 'Добро пожаловать на пинтерест (нет)';
    
        const underTitleSolar = document.createElement('div');
        underTitleSolar.className = 'signupUnderTitle paddingMenuTitle';
        underTitleSolar.textContent = 'На самом деле мы не пинтерест, а кое-что покруче!';
    
        const form = document.createElement('form');
        form.id = 'inputdata';
    
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'email';
        emailInput.placeholder = 'Email';
        emailInput.style = 'top: 452px;';
        emailInput.className = 'blockinput';
    
        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.name = 'password';
        passwordInput.placeholder = 'Пароль';
        passwordInput.style = 'top: 510px;';
        passwordInput.className = 'blockinput';
    
        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.name = 'age';
        ageInput.placeholder = 'Возраст';
        ageInput.style = 'top: 566px;';
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
    
        paddingMenu.appendChild(form);
        paddingMenu.appendChild(contentText);
    
        this._parent.appendChild(paddingMenu);
        this._parent.appendChild(titleSolar);
        this._parent.appendChild(underTitleSolar);

        this._form = form;
    }
}