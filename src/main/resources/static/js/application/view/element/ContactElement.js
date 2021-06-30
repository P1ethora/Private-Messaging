class  ContactElement {

    #ability
    #contactElement;
    #about;
    #img;
    #name;
    #status
    #id;

    constructor(id, img, name, ability) {

        this.#ability = ability
        this.#contactElement = createNewElement('div', 'user-element');
        this.#contactElement.setAttribute('data-id', id);
        this.#about = createNewElement('div', 'about');
        this.#id = id;
        this.#img = createImgCirclePhoto();
        this.#name = createNewElement('div', 'name')
        this.#name.innerText = name;
        this.#status = createNewElement('div', 'status');
        this.#about.appendChild(this.#name);
        this.#about.appendChild(this.#status);

        this.changeStatus('Offline')

        this.#contactElement.onclick = e => {
            this.#ability.openUserWindow(this.#contactElement);
        };

        this.#contactElement.appendChild(this.#img);
        this.#contactElement.appendChild(this.#about);
    }

    getContactElement() {
        return this.#contactElement;
    }

    changeStatus(status) {
        this.#status = status;
    }




}