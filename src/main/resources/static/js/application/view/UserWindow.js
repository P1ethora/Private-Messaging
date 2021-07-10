class UserWindow {

    #idContact;

    #userWindow;
    #userInfo;
    #photoInfo;
    #imgUser;
    #about;
    #name;
    #status;
    #aboutInfo;

    #userButtons;
    #buttonAdd;
    #buttonSendMsg;

    #numberPhone;
    #textFieldPhone;
    #number;

    #userDescription;
    #textFieldDescription;
    #textDescription;

    constructor(mainContainer, rightPanel, requests) {
        this.#userWindow = createNewElement('div', 'another-user');

        this.#userInfo = createNewElement('div', 'user-info');
        this.#photoInfo = createNewElement('div', 'photo-info');

        this.#imgUser = createImgCirclePhoto();
        this.#about = createNewElement('div', 'about');
        this.#name = createNewElement('div', 'name');
        this.#status = createNewElement('div', 'status');

        this.#userButtons = createNewElement('div', 'user-buttons');
        this.#buttonAdd = createNewElement('button');
        this.setTextButtonAdd('Add contact')
        this.#buttonSendMsg = createNewElement('button');
        this.setTextButtonSendMsg('message')

        this.#userButtons.appendChild(this.#buttonAdd);
        this.#userButtons.appendChild(this.#buttonSendMsg);

        this.#about.appendChild(this.#name);
        this.#about.appendChild(this.#status);
        this.#about.appendChild(this.#userButtons);

        this.#photoInfo.appendChild(this.#imgUser);
        this.#photoInfo.appendChild(this.#about);

        this.#aboutInfo = createNewElement('div', 'about-info');

        this.#numberPhone = createNewElement('div', 'number-phone');
        this.#textFieldPhone = document.createElement('span');
        this.setTextFieldPhone('Mobile:');
        this.#number = createNewElement('span', 'number');

        this.#numberPhone.appendChild(this.#textFieldPhone);
        this.#numberPhone.appendChild(this.#number);

        this.#userDescription = createNewElement('div', 'user-description');
        this.#textFieldDescription = createNewElement('span');
        this.setTextFieldDescription('About:');
        this.#textDescription = createNewElement('div', 'text');

        this.#userDescription.appendChild(this.#textFieldDescription);
        this.#userDescription.appendChild(this.#textDescription);

        this.#aboutInfo.appendChild(this.#numberPhone)
        this.#aboutInfo.appendChild(this.#userDescription)

        this.#userInfo.appendChild(this.#photoInfo);
        this.#userInfo.appendChild(this.#aboutInfo);

        this.#userWindow.appendChild(this.#userInfo);


        this.#userWindow.addEventListener('click', e => {
            if (e.target === this.#userWindow) {
                this.#userWindow.style.display = 'none';
            }
        });

        this.#buttonSendMsg.onclick = e => {
            rightPanel.openChat(this.#idContact);
        };

        this.#buttonAdd.onclick = e => {
            requests.addToContact(this.#idContact);
        };
    }

    view() {
        return this.#userWindow;
    }

    setId(id) {
        this.#idContact = id;
    }

    setName(name) {
        this.#name.innerText = name;
    }

    setStatus(status) {
        this.#status.innerText = status;
    }

    setTextButtonAdd(text) {
        this.#buttonAdd.innerText = text;
    }

    setTextButtonSendMsg(text) {
        this.#buttonSendMsg.innerText = text;
    }

    setTextFieldPhone(text) {
        this.#textFieldPhone.innerText = text;
    }

    setTextFieldDescription(text) {
        this.#textFieldDescription.innerText = text;
    }

    setTextPhone(text) {
        this.#number.innerText = text;
    }

    setTextDescription(text) {
        this.#textDescription.innerText = text;
    }

    setPhoto(url) {

    }

}