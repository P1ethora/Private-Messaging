class Registration {

    #containerReg;
    #loginBox;
    #titleLogin;
    #firstName;
    #lastName;
    #mobile;
    #password;
    #repeatPassword;

    #buttons;
    #btnRegistration;
    #btnCancel;

    constructor(requests, application) {
        this.#containerReg = createNewElement('div', 'container-reg');
        this.#loginBox = createNewElement('div', 'login-box');
        this.#titleLogin = createNewElement('div','title-login');

        this.#firstName = createNewElement('input');
        this.#firstName.type = 'text';
        this.#lastName = createNewElement('input');
        this.#lastName.type = 'text';
        this.#mobile = createNewElement('input');
        this.#mobile.type = 'text';
        this.#password = createNewElement('input');
        this.#password.type = 'password';
        this.#repeatPassword = createNewElement('input');
        this.#repeatPassword.type = 'password';

        this.#buttons = createNewElement('div','login-buttons');
        this.#btnRegistration = createNewElement('button');
        this.#btnCancel = createNewElement('button');
        this.#buttons.appendChild(this.#btnRegistration);
        this.#buttons.appendChild(this.#btnCancel);

        this.setPlaceholderFirstName('first name');
        this.setPlaceholderLastName('last name');
        this.setPlaceholderMobile('mobile');
        this.setPlaceholderPassword('password');
        this.setPlaceholderRepeat('repeat password');
        this.setTitle('Registration');
        this.setNameBtnReg('Registration');
        this.setNameBtnCancel('Cancel');

        this.#loginBox.appendChild(this.#titleLogin);
        this.#loginBox.appendChild(this.#firstName);
        this.#loginBox.appendChild(this.#lastName);
        this.#loginBox.appendChild(this.#mobile);
        this.#loginBox.appendChild(this.#password);
        this.#loginBox.appendChild(this.#repeatPassword);
        this.#loginBox.appendChild(this.#buttons);

        this.#containerReg.appendChild(this.#loginBox);

        this.#btnRegistration.onclick = e => {
            requests.registrationUser(this.getFirstNameValue(), this.getLastNameValue(), this.getMobileValue(),
                this.getPasswordValue(), this.getRepeatValue());
            application.openLogin();
        };

        this.#btnCancel.onclick = e=>{
            application.openLogin();
        };
    }

    view() {
        return this.#containerReg;
    }

    setPlaceholderFirstName(text) {
        this.#firstName.placeholder = text;
    }

    setPlaceholderLastName(text) {
        this.#lastName.placeholder = text;
    }

    setPlaceholderMobile(text) {
        this.#mobile.placeholder = text;
    }

    setPlaceholderPassword(text) {
        this.#password.placeholder = text;
    }

    setPlaceholderRepeat(text) {
        this.#repeatPassword.placeholder = text;
    }

    setTitle(text) {
        return this.#titleLogin.innerText = text;
    }

    getFirstNameValue() {
        return this.#firstName.value;
    }

    getLastNameValue() {
        return this.#lastName.value;
    }

    getMobileValue() {
        return this.#mobile.value;
    }

    getPasswordValue() {
        return this.#password.value;
    }

    getRepeatValue() {
        return this.#repeatPassword.value;
    }

    setNameBtnReg(text) {
        this.#btnRegistration.innerText = text;
    }

    setNameBtnCancel(text) {
        this.#btnCancel.innerText = text;
    }

}