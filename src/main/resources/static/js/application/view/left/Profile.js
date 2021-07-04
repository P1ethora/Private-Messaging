class Profile {

    #profile;
    #nameUser;

    constructor() {
        this.#profile = createNewElement('div','profile');
        this.#nameUser = createNewElement('div','chat-with');

        this.#profile.appendChild(this.#nameUser);
    }

    getProfile() {
        return this.#profile;
    }

    getNameUser() {
        return this.#nameUser;
    }

    setNameUser(name) {
        this.#nameUser.innerText = name;
    }

}