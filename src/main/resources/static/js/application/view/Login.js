class Login {

    #containerLogin;
    #loginBox;
    #titleLogin;
    #inputPhone;
    #inputPassword;
    #loginButtons;

    #buttonLogIn;
    #buttonSignUp;

    constructor() {

        this.#containerLogin = createNewElement('div', 'container-login');

        this.#loginBox = createNewElement('div', 'login-box');

        this.#titleLogin = createNewElement('div', 'title-login');
        this.#titleLogin.innerText = 'Login';

        this.#inputPhone = createNewElement('input');
        this.#inputPhone.placeholder = 'mobile';

        this.#inputPassword = createNewElement('input');
        this.#inputPassword.type = 'password';
        this.#inputPassword.placeholder = 'password';

        this.#loginButtons = createNewElement('div', 'login-buttons');

        this.#buttonLogIn = createNewElement('button');
        this.#buttonLogIn.innerHTML = 'Log in';

        this.#buttonSignUp = createNewElement('button');
        this.#buttonSignUp.innerHTML = 'Sign up';

        let buttonSignUp = document.createElement('button');
        buttonSignUp.innerHTML = 'Sign up';

        this.#loginButtons.appendChild(this.#buttonLogIn);
        this.#loginButtons.appendChild(this.#buttonSignUp);

        this.#loginBox.appendChild(this.#titleLogin);
        this.#loginBox.appendChild(this.#inputPhone);
        this.#loginBox.appendChild(this.#inputPassword);
        this.#loginBox.appendChild(this.#loginButtons);

        this.#containerLogin.appendChild(this.#loginBox);
    }

    view() {
        return this.#containerLogin;
    }

    getValueInputPhone() {
        return this.#inputPhone.value;
    }

    getValueInputPassword() {
        return this.#inputPassword.value;
    }

    getButtonLogIn() {
        return this.#buttonLogIn;
    }

    getButtonSignUp() {
        return this.#buttonSignUp;
    }

}