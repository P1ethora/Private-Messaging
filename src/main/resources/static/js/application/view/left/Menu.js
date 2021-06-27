class Menu {

    #activeElement;

    constructor() {

        this.#activeElement = new UserList();
    }

    getActiveElement() {
        return this.#activeElement;
    }

    setActiveElement(activeElement) {
this.#activeElement = activeElement;
    }

}