class Menu {

    #menu;

    #userList;
    #searchResult;

    constructor(mainContainer) {

        this.#menu = createNewElement('div', 'left-box-menu');

        this.#userList = new UserList();
        this.#searchResult = new SearchResult(mainContainer);
        this.openUserList();
    }

    view() {
        return this.#menu;
    }

    getSearchResult(){
        return this.#searchResult;
    }

    getUserList() {
        return this.#userList;
    }

    openUserList() {
        this.#menu.innerHTML = '';
        this.#menu.appendChild(this.#userList.view());
    }

    openSearchResult() {
        this.#menu.innerHTML = '';
        this.#menu.appendChild(this.#searchResult.view());
    }

    resetSearchResult() {
        this.#searchResult.getResultBox().innerHTML = '';
    }

}